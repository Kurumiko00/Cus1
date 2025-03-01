import Link from 'next/link';
import Image from 'next/image';
import './globals.css';

export default function Home() {
  return (
    <main className="min-h-screen text-white">
      {/* Header */}
      {/* เพิ่ม Header ที่นี่ถ้าต้องการ */}

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <Image 
          src="/images/cat.jpg" 
          alt="Hero Background" 
          layout="fill" 
          objectFit="cover" 
          quality={80}
          className="z-0"
        />
       <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-yellow-400 to-red-500 text-transparent bg-clip-text animate-fade-in-down drop-shadow-glow">
            ยินดีต้อนรับสู่ CUSTODIAN
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-gray-300 animate-fade-in-up">
            ป้องกันภัยคุกคามไซเบอร์ด้วยเทคโนโลยีและบริการครบวงจร
          </p>
          <div className="mt-8">
            <Link 
              href="/components/Cat/" 
              className="relative inline-block bg-yellow-500 text-black px-6 py-3 rounded-full font-bold transition-transform transform hover:scale-110 hover:bg-yellow-400 shadow-lg animate-glow"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-600 opacity-50 rounded-full blur-md"></span>
              <span className="relative">ดูรายละเอียดของเรา</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Announcement Section */}
      <section className="py-12 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-yellow-500 border-b-4 border-yellow-500 inline-block pb-2">
              ประชาสัมพันธ์
            </h2>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="bg-black bg-opacity-50 p-6 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 hover:animate-wiggle">
              <h3 className="text-2xl font-bold mb-4">ข่าวสารล่าสุด</h3>
              <p className="text-lg">
                อัพเดตข่าวสารและกิจกรรมจากบริษัทอย่างต่อเนื่อง พร้อมข้อมูลที่เป็นประโยชน์สำหรับคุณ
              </p>
            </div>
            <div className="bg-black bg-opacity-50 p-6 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 hover:animate-wiggle">
              <h3 className="text-2xl font-bold mb-4">กิจกรรม</h3>
              <p className="text-lg">
                พบกับเวิร์กช็อปและสัมมนาด้านความปลอดภัยไซเบอร์จากผู้เชี่ยวชาญ
              </p>
            </div>
            <div className="bg-black bg-opacity-50 p-6 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 hover:animate-wiggle">
              <h3 className="text-2xl font-bold mb-4">ข้อเสนอพิเศษ</h3>
              <p className="text-lg">
                โปรโมชั่นและสิทธิพิเศษสำหรับลูกค้าทุกท่าน อย่าพลาดโอกาสดี ๆ ที่นี่
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Section */}
      <section className="py-12 container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <Image
              src="/images/nako.png"
              alt="Workshop Poster"
              width={600}
              height={600}
              className="rounded-lg shadow-2xl"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold text-yellow-500 mb-4">
              Workshop "Cybersecurity x Future Skills"
            </h2>
            <p className="text-xl mb-4">
              เรียนรู้การรับมือกับภัยคุกคามไซเบอร์ วิเคราะห์และวางแผนรับมือ พร้อมพัฒนาทักษะที่ตลาดแรงงานดิจิทัลต้องการ!
            </p>
            <ul className="text-lg space-y-2 mb-4">
              <li>🌟 <strong>15 มีนาคม 2568</strong></li>
              <li>⏰ 09:00 – 10:30 น.</li>
              <li>🏢 ห้อง 7-312, อาคาร 7, มหาวิทยาลัยเกษตรศาสตร์, วิทยาเขตเฉลิมพระเกียรติ, สกลนคร</li>
            </ul>
            <p className="text-lg mb-4">
              🔹 ไฮไลต์กิจกรรม: วิเคราะห์แนวโน้ม, ฝึกทักษะ Reskill/Upskill, และเวิร์กช็อปจาก Case Study จริง
            </p>
            <Link 
              href="/components/Contact" 
              className="inline-block bg-yellow-500 text-black px-6 py-3 rounded-full font-bold transition-transform transform hover:scale-110 hover:bg-yellow-400"
            >
              ติดต่อสอบถาม!
            </Link>
          </div>
        </div>
      </section>

 
    </main>
  );
}
