import './globals.css'
import React from 'react'

export const metadata = {
  title: 'Book Next App',
  description: 'รายการหนังสือ - ตัวอย่างส่งงาน'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body>
        <header className='site-header'>
          <div className='header-brand'>
            <div className='logo'>BK</div>
            <div>
              <div style={{fontWeight:700}}>Book Next App</div>
              <div className='small-muted'>ตัวอย่างส่งงาน - ปรับ UI</div>
            </div>
          </div>
          <nav>
            <a href="/">หน้าแรก</a>
          </nav>
        </header>
        <main className='container'>
          {children}
        </main>
        <footer style={{textAlign:'center', padding:'20px 0', color:'rgba(230,238,248,0.6)'}}>สร้างโดย: Student • ตัวอย่างสำหรับส่งงาน</footer>
      </body>
    </html>
  )
}
