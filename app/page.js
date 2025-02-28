import Link from 'next/link';
import Image from "next/image";

import './globals.css';

export default function Home() {
  return (
    <main>
      <section className="text-white body-font">
        {/* Hero Section */}
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl font-extrabold mb-4 font-medium text-yellow-500">
              บริษัท CUSTODIAN
              <br className="hidden lg:inline-block" />
            </h1>
            <p className="mb-8 leading-relaxed text-white text-xl font-bold">
              เราคือผู้เชี่ยวชาญในการป้องกันภัยคุกคามทางไซเบอร์แบบครบวงจร ด้วยเทคโนโลยีล้ำสมัยและบริการที่ครอบคลุม เช่น Firewall อัจฉริยะ, การเข้ารหัสข้อมูล (Encryption), และ การสำรองข้อมูล (Backup Management)
              <br />
              AI และ SOC 24/7 ปกป้องเครือข่ายและข้อมูลของคุณด้วยระบบตรวจจับภัยคุกคามอัจฉริยะที่ขับเคลื่อนด้วย AI พร้อมศูนย์เฝ้าระวังความปลอดภัย (SOC) ที่ให้บริการตลอด 24 ชั่วโมง
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded-full border-4 border-gray-500"
              alt="hero"
              src="/images/cat.jpg"
            />
          </div>
        </div>

        {/* Announcement Section */}
        <div className="w-full flex items-center justify-center bg-gray-800 py-1">
  <div className="p-6 text-center">
    <h1 className="text-white text-5xl font-bold text-yellow-500 mb-6 border-4 border-white-500 p-4 shadow-xl  rounded-full">
      ประชาสัมพันธ์
    </h1>
  </div>
</div>


        {/* Workshop Section */}
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-2xl text-2xl mb-4 font-medium text-white font-bold">
              ขอเชิญเข้าร่วม Workshop "Cybersecurity x Future Skills"
              <br />
              เรียนรู้การรับมือกับภัยคุกคามไซเบอร์ ฝึกปฏิบัติการวิเคราะห์และวางแผนรับมือ พร้อมพัฒนาทักษะสำคัญที่ตลาดแรงงานดิจิทัลต้องการ!
            </h1>
            <p className="mb-4 leading-relaxed text-white text-xl">
              🌟 <strong>วันเสาร์ที่ 15 มีนาคม 2568</strong>
              <br />
              ⏰ เวลา 09:00 – 10:30 น.
              <br />
              🏢 สถานที่: ห้อง 7-312 อาคาร 7 มหาวิทยาลัยเกษตรศาสตร์ วิทยาเขตเฉลิมพระเกียรติ จังหวัดสกลนคร
            </p>
            <p className="mb-4 leading-relaxed text-white text-xl">
              🔹 <strong>ไฮไลต์กิจกรรม:</strong>
              <br />
              ✅ เจาะลึกทักษะสำคัญด้านความปลอดภัยไซเบอร์
              <br />
              ✅ วิเคราะห์แนวโน้มตลาดแรงงานและการปรับตัวสู่ยุค AI
              <br />
              ✅ ฝึกทักษะ Reskill / Upskill เพื่อความพร้อมในการทำงาน
              <br />
              ✅ เวิร์กช็อปวิเคราะห์สถานการณ์ภัยคุกคามไซเบอร์จาก Case Study จริง
            </p>
            <p className="mb-4 leading-relaxed text-white text-xl">
              👉 ลงทะเบียนเข้าร่วมง่ายๆ เพียงสแกน QR Code บนโปสเตอร์
            </p>
            <p className="mb-4 leading-relaxed text-white text-xl">
              ✨ โอกาสดีๆ แบบนี้พลาดไม่ได้! มาเตรียมตัวสู่อนาคตดิจิทัลไปด้วยกัน 
              <br />
              #CyberSecurity #FutureSkills #Workshopฟรี #เรียนรู้ไปด้วยกัน
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
  className="object-cover object-center rounded-lg"  // ใช้ขอบโค้งขนาดใหญ่
  alt="Workshop Poster"
  src="/images/nako.png"
/>

          </div>
        </div>
      </section>
    </main>
  );
}
