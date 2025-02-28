import React from 'react';

function Page() {
  return (
    <div>
      
      <section className="text-white  body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded image-fixed-size"
              alt="hero"
              src="/images/pro1.png"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-1xl text-3xl mb-4 font-medium text-yellow-500 font-bold">
              Project: Advanced Cybersecurity for NVIDIA
              <br className="hidden lg:inline-block" />
            </h1>
            <p className="mb-8 leading-relaxed text-xl">
              เราได้พัฒนาโซลูชัน Cybersecurity ขั้นสูงเพื่อปกป้องโครงสร้างพื้นฐานด้านข้อมูลและระบบเครือข่ายของ NVIDIA จากภัยคุกคามทางไซเบอร์ระดับโลก โดยใช้เทคโนโลยี AI-Driven Threat Detection และ Zero Trust Architecture ทำให้สามารถตรวจจับและตอบสนองต่อการโจมตีที่ซับซ้อนได้แบบเรียลไทม์
            </p>
          </div>
        </div>

        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded image-fixed-size"
              alt="hero"
              src="/images/pro2.jpg"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-2xl text-3xl mb-4 font-medium text-yellow-500">
              Project: Next-Generation Cybersecurity for Global Bank
              <br className="hidden lg:inline-block" />
            </h1>
            <p className="mb-8 leading-relaxed text-xl">
              เราได้ออกแบบและพัฒนาโซลูชัน Cybersecurity ระดับสูงเพื่อปกป้องข้อมูลทางการเงินที่สำคัญของ Global Bank โดยใช้ Multi-Layered Defense System ที่รวมเทคโนโลยี AI Threat Analytics และ Real-Time Fraud Detection เพื่อยกระดับความปลอดภัยของธุรกรรมออนไลน์และระบบเครือข่ายทั้งหมด
            </p>
          </div>
        </div>

        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded image-fixed-size"
              alt="hero"
              src="/images/pro32.jpg"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-2xl text-3xl mb-4 font-medium text-yellow-500 font-bold">
              Project: Smart Cybersecurity for Baan Kham Noi
              <br className="hidden lg:inline-block" />
            </h1>
            <p className="mb-8 leading-relaxed text-xl">
              เราได้พัฒนาโซลูชัน Cybersecurity สำหรับโครงข่าย IoT และระบบอัจฉริยะของ บ้านขามน้อย โดยมุ่งเน้นการป้องกันความปลอดภัยสำหรับบ้านอัจฉริยะ (Smart Home) ด้วย AI-Powered Threat Monitoring และ Encrypted IoT Communication
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Page;
