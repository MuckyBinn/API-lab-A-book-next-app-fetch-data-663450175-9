"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Box, Container, Typography, List, ListItem, ListItemText, Divider } from "@mui/material";

export default function Home() {
  const [booksData, setBooksData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/api/books");
        if (!response.ok) throw new Error("Failed to fetch books");
        const data = await response.json();
        setBooksData(data.books || []);
      } catch (err: any) {
        setError(err.message || "Unknown error");
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <div className="card">
      <h1>รายการหนังสือ</h1>
      {isLoading && <div className="small-muted">กำลังโหลด...</div>}
      {error && <div style={{color:'salmon'}}>เกิดข้อผิดพลาด: {error}</div>}

      <div style={{marginTop:12}}>
        {booksData.map((book) => (
          <div className="list-item card" key={book.id} style={{marginBottom:10}}>
            <div style={{flex:1}}>
              <Link href={`/book/${book.id}`}><a style={{fontSize:18, fontWeight:600}}>{book.title}</a></Link>
              <div className="meta">ผู้แต่ง: {book.author}</div>
            </div>
            <div style={{marginLeft:12}}>
              <div className="small-muted">ปี: {book.year}</div>
            </div>
          </div>
        ))}
        {booksData.length === 0 && !isLoading && <div className="small-muted">ยังไม่มีหนังสือในระบบ</div>}
      </div>
    </div>
  );
}