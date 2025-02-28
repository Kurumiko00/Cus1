import React from 'react';

function Page() {
  const projects = [
    {
      title: "Project: Advanced Cybersecurity for NVIDIA",
      description: "เราได้พัฒนาโซลูชัน Cybersecurity ขั้นสูงเพื่อปกป้องโครงสร้างพื้นฐานด้านข้อมูลและระบบเครือข่ายของ NVIDIA จากภัยคุกคามทางไซเบอร์ระดับโลก โดยใช้เทคโนโลยี AI-Driven Threat Detection และ Zero Trust Architecture ทำให้สามารถตรวจจับและตอบสนองต่อการโจมตีที่ซับซ้อนได้แบบเรียลไทม์",
      imageSrc: "/images/pro1.png",
      altText: "NVIDIA Cybersecurity"
    },
    {
      title: "Project: Next-Generation Cybersecurity for Global Bank",
      description: "เราได้ออกแบบและพัฒนาโซลูชัน Cybersecurity ระดับสูงเพื่อปกป้องข้อมูลทางการเงินที่สำคัญของ Global Bank โดยใช้ Multi-Layered Defense System ที่รวมเทคโนโลยี AI Threat Analytics และ Real-Time Fraud Detection เพื่อยกระดับความปลอดภัยของธุรกรรมออนไลน์และระบบเครือข่ายทั้งหมด",
      imageSrc: "/images/pro2.jpg",
      altText: "Global Bank Cybersecurity"
    },
    {
      title: "Project: Smart Cybersecurity for Baan Kham Noi",
      description: "เราได้พัฒนาโซลูชัน Cybersecurity สำหรับโครงข่าย IoT และระบบอัจฉริยะของ บ้านขามน้อย โดยมุ่งเน้นการป้องกันความปลอดภัยสำหรับบ้านอัจฉริยะ (Smart Home) ด้วย AI-Powered Threat Monitoring และ Encrypted IoT Communication",
      imageSrc: "/images/pro32.jpg",
      altText: "Baan Kham Noi Smart Cybersecurity"
    }
  ];

  return (
    <div>
      <section className="bg-gray-900 text-white py-20 gradient-bg">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`container mx-auto flex flex-col md:flex-row items-center justify-between space-y-16 md:space-y-0 md:space-x-16 ${index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-700'} p-8 rounded-lg shadow-lg m-4`}
          >
            {/* Image */}
            <div className="md:w-1/2 flex justify-center">
              <img
                className="object-cover w-full h-full rounded-lg shadow-xl"
                alt={project.altText}
                src={project.imageSrc}
                style={{ aspectRatio: '16/9' }} // Maintain a consistent aspect ratio for all images
              />
            </div>

            {/* Text content */}
            <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
              <h1 className="text-3xl sm:text-2xl font-bold text-yellow-500 mb-6">{project.title}</h1>
              <p className="text-xl leading-relaxed mb-6">{project.description}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Page;
