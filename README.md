# Book Next App - Final (พร้อมส่ง)

โปรเจกต์ตัวอย่างสำหรับส่งงาน (ปรับ UI และมี mock API)  
โครงสร้างเรียบร้อย พร้อมคำอธิบายวิธีรัน และตัวอย่างภาพ (แทนที่ด้วยภาพจริงก่อนส่ง)

## สิ่งที่ปรับปรุง
- เพิ่ม API mock: `src/app/api/books/route.ts` และ `src/app/api/books/[id]/route.ts`
- ปรับ UI: หน้าแรกและหน้ารายละเอียด สวยงามและ responsive เบื้องต้น
- ปรับ global styles ใน `src/app/globals.css`
- เพิ่ม header และ footer ใน `src/app/layout.tsx`

## รันโปรเจกต์
```bash
npm install
npm run dev
# เปิด http://localhost:3000
```

## การอัพขึ้น GitHub (ตัวอย่าง)
```bash
git init
git add .
git commit -m "Finalized UI + mock API for submission"
git remote add origin https://github.com/<your-username>/<repo>.git
git branch -M main
git push -u origin main
```

## หมายเหตุ
- เมื่อรันแล้ว หน้าแรกจะดึงข้อมูลจาก `/api/books` ซึ่งเป็น mock data ภายในโปรเจกต์
- แทนที่ไฟล์ใน `public/screenshots/` ด้วยแคปหน้าจอจริงก่อนส่งงาน
