import React from 'react';

function Page() {
  return (
    <div>
      <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="lg:w-3/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded-full border-4 border-gray-500 transition-all hover:scale-105"
            alt="hero"
            src="/images/ku1.jpg"
          />

    <div className="text-center lg:w-2/3 w-full border-2 border-white-300 bg-white-50 p-6 rounded-lg m-5">
  <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-yellow-500 text-left">
    1. Malware หรือ Malicious software
  </h1>
  <p className="mb-8 leading-relaxed text-white text-left text-xl">
    เป็นโปรแกรมที่ถูกพัฒนาขึ้นมาเพื่อรบกวนหรือขโมยข้อมูลจากระบบคอมพิวเตอร์ เครือข่าย หรือ server โดยแฮกเกอร์มักล่อลวงเป้าหมายด้วยวิธีการต่างๆ แล้วฝังมัลแวร์ลงไปในอุปกรณ์ เปิดทางเข้าถึงข้อมูลหรือเข้าควบคุมระบบของเป้าหมายได้ การใช้ Malware โจมตีเป็นวิธีการหนึ่งที่แฮกเกอร์นิยมใช้ ซึ่ง malware มีหลายประเภทและมีคุณสมบัติต่างกัน ได้แก่
  </p>
  <p className="mb-8 leading-relaxed text-white text-left text-xl">
    • Viruses ( ไวรัส ) - เป็นโปรแกรมชนิดหนึ่งที่ทำงานเหมือน “เชื้อไวรัส” ที่ไปติดไฟล์อื่นๆ ในคอมพิวเตอร์คุณ “เชื้อไวรัส” นี้สามารถเพิ่มจำนวนตัวมันเองและทำให้อุปกรณ์ที่ติดเชื้อทำงานช้าลงหรือทำลายไฟล์ข้อมูล การแพร่กระจายเชื้อไวรัสไปยังอุปกรณ์อื่นๆ นั้นจำต้องอาศัยไฟล์พาหะ เช่น อีเมลที่แนบเอกสารหรือไฟล์ที่มีไวรัส หรือการทำสำเนา (copy) ไฟล์ที่ติดไวรัสไว้บน server เป็นต้น
  </p>
  <p className="mb-8 leading-relaxed text-white text-left text-xl">
    • Trojans ( ม้าโทรจัน ) - เป็นโปรแกรมที่ซ่อนตัวอยู่ในรูปแบบโปรแกรมทั่วไป เพื่อหลอกให้คนดาวน์โหลดมาใช้งาน และทันทีที่มีการใช้งานโปรแกรมจะเข้าทำลายไฟล์ข้อมูล หรือเปิดประตูให้แฮกเกอร์เข้าควบคุมเครื่องจากระยะไกลได้
  </p>
  <p className="mb-8 leading-relaxed text-white text-left text-xl">
    • Worm ( หนอน ) - เป็นโปรแกรมที่ถูกออกแบบมาให้แพร่กระจายตัวเองจากคอมพิวเตอร์เครื่องหนึ่งไปอีกเครื่องหนึ่งผ่านระบบเครือข่าย (network) ส่วนใหญ่ worm จะถูกฝังอยู่ในไฟล์แนบของอีเมลและสามารถสำเนาตัวเองเพื่อส่งต่อไปยังรายชื่อ (contact) ที่อยู่ในอีเมลของเครื่องคอมพิวเตอร์ที่ติดเชื้อ ทำให้ worm แพร่ได้อย่างรวดเร็ว สร้างความเสียหายรุนแรงกว่าไวรัสได้
  </p>
  <p className="mb-8 leading-relaxed text-white text-left text-xl">
    • Ransomware ( แรนซัมแวร์ ) - เป็นมัลแวร์อีกประเภทหนึ่งที่ใช้ปิดกั้นการเข้าถึงข้อมูลสำคัญหรือระบบของเหยื่อ เพื่อทำการข่มขู่เรียกค่าไถ่ หากไม่จ่าย แฮกเกอร์จะลบข้อมูลหรือปิดกั้นการใช้งานระบบ ก่อให้เกิดความเสียหายทั้งชื่อเสียงและเงินขององค์กรที่ตกเป็นเหยื่อ
  </p>
  <p className="mb-8 leading-relaxed text-white text-left text-xl">
    • Spyware - เป็นโปรแกรมประเภทหนึ่งที่ถูกแอบติดตั้งไว้ในคอมพิวเตอร์เพื่อรวบรวมข้อมูลของผู้ใช้งาน แฮกเกอร์สามารถใช้ข้อมูลเหล่านี้เพื่อแบล็คเมล์ หรือใช้ดาวน์โหลดหรือติดตั้งมัลแวร์ตัวอื่นๆ จากเว็บไซต์ เพื่อแสวงประโยชน์ต่อไป
  </p>
</div>

<div className="text-center lg:w-2/3 w-full border-2 border-white-300 bg-white-50 p-6 rounded-lg m-5">
<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-yellow-500 text-left">
      2.   Phishing (ฟิชชิง ) 
      </h1>
      <p className="mb-8 leading-relaxed text-white text-left text-xl">
      เป็นการหลอกลวงในโลกออนไลน์ที่พบได้มากที่สุด มีเป้าหมายเพื่อขอข้อมูลสำคัญด้วยวิธีการต่าง ๆ เช่น อีเมลปลอม ข้อความหลอกลวงผ่าน messenger หรือเว็บไซต์ปลอม เป็นต้น โดยทั่วไปแล้ว Phishing มี 3 รูปแบบ ได้แก่
      </p>
      <p className="mb-8 leading-relaxed text-white text-left text-xl">
     
      •  Spear Phishing:  กำหนดกลุ่มเป้าหมายการโจมตีเป็นบริษัทหรือบุคคลแบบเฉพาะเจาะจง
      </p>
      <p className="mb-8 leading-relaxed text-white text-left text-xl">
    •    Whaling:  โจมตีเป้าหมายที่เป็นผู้บริหารระดับสูง หรือผู้ที่มีส่วนได้ส่วนเสียขององค์กรเป้าหมาย
      </p>
      <p className="mb-8 leading-relaxed text-white text-left text-xl">
•         Pharming:  เป็นรูปแบบที่แฮกเกอร์เข้าไปโจมตี server ของเว็บไซต์ต่าง ๆ แล้วเปลี่ยนลิงค์เว็บไซต์ให้ลิงค์ไปยังเว็บไซต์ปลอม ทำให้คนที่เข้ามาใช้งานถูกส่งต่อไปยังเว็บไซต์หลอก เพื่อขโมยข้อมูลส่วนตัว
      </p>
      
      
      
    </div>
    <div className="text-center lg:w-2/3 w-full border-2 border-white-300 bg-white-50 p-6 rounded-lg m-5">
  <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-yellow-500 text-left">
      3.   Man-in-the-Middle (MitM) Attack
      </h1>
      <p className="mb-8 leading-relaxed text-white text-left text-xl">
      
เป็นการที่ผู้ประสงค์ร้ายเข้ามาแทรกกลางระหว่างการสนทนา หรือทำธุรกรรมออนไลน์ของคนสองคน และทำหน้าที่เป็นตัวกลางรับส่งข้อมูลโดยที่ทั้งคู่ไม่รู้ตัว โดยทั่วไปแล้วผู้โจมตีแบบ MitM มักจะใช้ช่องโหว่จากเครือข่าย WiFi สาธารณะ และแทรกตัวอยู่ระหว่างผู้ใช้งานกับเครือข่ายต่างๆ เพื่อหลอกเอาข้อมูลสำคัญ นอกจากนั้นแฮกเกอร์หลายรายมักใช้วิธี MitM เพื่อส่งต่อ Phishing หรือ Malware อีกด้วย
      </p>
      
      
      
    </div>
    <div className="text-center lg:w-2/3 w-full border-2 border-white-300 bg-white-50 p-6 rounded-lg m-5">
    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-yellow-500 text-left">
      4. Denial of Service (DOS) และ Distributed Denial of Service (DDOS) 
      </h1>
      <p className="mb-8 leading-relaxed text-white text-left text-xl">
      
      เป็นการโจมตีระบบเป้าหมายด้วยการส่งคำขอเข้าไปจำนวนมาก จนทำให้ระบบปฏิบัติการหรือแอปพลิเคชันทำงานล่าช้า หรือหยุดชะงักชั่วคราวเหมือนกัน เพียงแต่การโจมตีแบบ DoS นั้นเป็นการส่งคำขอเข้าระบบจำนวนมากจากคอมพิวเตอร์แค่เครื่องเดียว แต่ DDOS จะส่งคำขอจำนวนมากด้วยเครื่องคอมพิวเตอร์หลายเครื่องด้วย Botnet ซึ่งในระหว่างการโจมตีนั้น แฮกเกอร์อาจฝังมัลแวร์ เพื่อเจาะเข้าระบบหรือข้อมูลสำคัญขององค์กรด้วย ที่ผ่านมามีแอปพลิเคชันชื่อดังเคยถูก DDOS มาแล้ว เช่น Twitter, Spotify, และ SoundCloud เป็นต้น
      </p>
      
      
      
    </div>
    <div className="text-center lg:w-2/3 w-full border-2 border-white-300 bg-white-50 p-6 rounded-lg m-5">
    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-yellow-500 text-left">
      5. SQL Injection
      </h1>
      <p className="mb-8 leading-relaxed text-white text-left text-xl">
      
     
เว็บไซต์ส่วนใหญ่ใช้ SQL databases เก็บข้อมูลสำคัญ เช่น logins, passwords และข้อมูลบัญชี เป็นต้น ดังนั้น แฮกเกอร์อาศัยช่องโหว่ของโปรแกรมหรือเว็บไซต์แอบใส่ SQL เข้าไปทาง input เพื่อหลอก database แล้วดึงข้อมูลออกไป นอกจากนี้ยังสามารถใช้คำสั่ง insert, update, delete, drop หรืออื่นๆ กับฐานข้อมูลได้อีกด้วย
      </p>
      
      
      
    </div>
    <div className="text-center lg:w-2/3 w-full border-2 border-white-300 bg-white-50 p-6 rounded-lg m-5">
    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-yellow-500 text-left">
     
6. Zero-day Exploit & Attack
      </h1>
      <p className="mb-8 leading-relaxed text-white text-left text-xl">
      
     
      Zero-day Exploit เป็นการโจมตีระบบด้วยการแอบเข้าไปปล่อย Malware ผ่านช่องโหว่ที่มีอยู่ที่ในซอฟต์แวร์/เครือข่าย/ฮาร์ดแวร์ ที่แม้แต่ผู้พัฒนาหรือเจ้าของซอฟต์แวร์เองก็ไม่รู้ ส่วน Zero-day Attack หมายถึงการที่แฮกเกอร์ใช้ Zero-day Exploit สร้างความเสียหายหรือโจรกรรมข้อมูลจากอุปกรณ์ที่มีช่องโหว่ บริษัทเทคโนโลยียักษ์ใหญ่อย่าง Microsoft, Google, และ Apple ต่างเคยต้องแก้ bug หรือช่องโหว่ในระบบหรือซอฟต์แวร์มาแล้วทั้งนั้น         


      </p>
      
      
      
    </div>
    <div className="text-center lg:w-2/3 w-full border-2 border-white-300 bg-white-50 p-6 rounded-lg m-5">
    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-yellow-500 text-left">
     
      7. Password Attack
      </h1>
      <p className="mb-8 leading-relaxed text-white text-left text-xl">
      เป็นการโจมตีทางไซเบอร์ ด้วยการเดารหัสผ่าน (Password) หรือใช้วิธีการล่อลวงให้เป้าหมายเปิดเผยรหัสผ่าน โดยทั่วไปแล้ว Password Attack มี 3 รูปแบบ ได้แก่

      </p>
      <p className="mb-8 leading-relaxed text-white text-left text-xl">
      •    Password Spraying Attack: เป็นการโจมตีกลุ่มเป้าหมายที่ใช้รหัสผ่าน ที่คาดเดาง่ายและเป็นที่นิยมอย่าง “123456” แล้วไล่โจมตีบัญชี (account) ที่มีอยู่ทีละบัญชี ถ้าผ่านก็จะจดบันทึกไว้ และไล่จนครบทุกบัญชีที่มีอยู่ใน List
      </p>
      <p className="mb-8 leading-relaxed text-white text-left text-xl">
      •    Brute Force Attack: เป็นการสุ่มรหัสผ่านแบบลองผิดลองถูกไปเรื่อย ๆ จนกว่าจะได้รหัสผ่านที่ตรงกับบุคคลหรือองค์กรเป้าหมาย

      </p>
      <p className="mb-8 leading-relaxed text-white text-left text-xl">
      •    Social Engineering: เป็นวิธีการที่แฮกเกอร์ใช้หลักจิตวิทยาหลอกล่อเป้าหมายให้บอกรหัสผ่าน เช่น การแจ้งเตือนผ่านแอปฯ หลอกล่อให้ใส่ username และ password หรืออีเมล Phishing และ call center ที่โทรมาหลอกให้ทำธุรกรรมการเงิน เป็นต้น

      </p>
      
      
      
    </div>
    <div className="text-center lg:w-2/3 w-full border-2 border-white-300 bg-white-50 p-6 rounded-lg m-5">
    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-yellow-500 text-left">
     
      8. Drive-by Attack
      </h1>
      <p className="mb-8 leading-relaxed text-white text-left text-xl">
      การโจมตีทางไซเบอร์ส่วนใหญ่จะสำเร็จได้นั้นต้องให้เป้าหมายดำเนินการบางอย่าง เช่น กดคลิกลิงก์ หรือกดดาวน์โหลดไฟล์เอกสารแนบ แต่ Drive-by Attack นั้นจะแทรกโค้ดที่เป็นอันตรายไปยังเว็บไซต์ที่ถูกต้องทั่วไป ซึ่งอาจอยู่ในรูปแบบของเว็บลิงก์ เพียงคุณคลิกเปิดมันขึ้นมาอุปกรณ์ของคุณก็จะถูกติดตั้ง Malware โดยไม่รู้ตัว
      </p>
      
    </div>
    <div className="text-center lg:w-2/3 w-full border-2 border-white-300 bg-white-50 p-6 rounded-lg m-5">
    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-yellow-500 text-left">
     
      9. Internet of Things (IoT)
      </h1>
      <p className="mb-8 leading-relaxed text-white text-left text-xl">
      เมื่อโลกมีการเชื่อมโยงกันมากขึ้นด้วยอินเทอร์เน็ตทำให้อุปกรณ์ต่าง ๆ เช่น ลำโพงอัจฉริยะ สมาร์ททีวี หรือแม้แต่กล้องวงจรปิด ตกเป็นเป้าหมายของแฮกเกอร์ เพื่อขโมยข้อมูลจากอุปกรณ์ หรือใช้อุปกรณ์เหล่านั้นเป็น botnet เพื่อใช้โจมตีเป้าหมายแบบ DDoS โดยทั่วไปแล้วอุปกรณ์ IoT ส่วนใหญ่ไม่มีการอัปเดตซอฟต์แวร์ antivirus ทำให้ติดตั้ง malware และควบคุมจากระยะไกลทำได้ง่าย
      </p>
      
    </div>
    <div className="text-center lg:w-2/3 w-full border-2 border-white-300 bg-white-50 p-6 rounded-lg m-5">
    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-yellow-500 text-left">
     
      10. DNS Spoofing or “Poisoning”
      </h1>
      <p className="mb-8 leading-relaxed text-white text-left text-xl">
      Domain Name System (DNS) Spoofing เป็นการปลอมแปลง domain name เพื่อนำ traffic ที่พยายามเข้าเว็บไซต์ที่ถูกต้องส่งต่อไปยังเว็บไซต์ปลอมหรือเว็บไซต์มัลแวร์ หน้าตาของเว็บไซต์หลอกจะเหมือนเว็บไซต์จริงมาก เพื่อหลอกให้ผู้ใช้งานป้อนข้อมูลส่วนตัวที่สำคัญ แฮกเกอร์บางรายมักใช้การโจมตีรูปแบบนี้เป็นส่วนหนึ่งในการก่อวินาศกรรมองค์กรเป้าหมาย เช่น เปลี่ยนเส้นทางเว็บไซต์ขององค์กรไปยังเว็บไซต์อนาจารเพื่อสร้างความอับอาย เป็นต้น


      </p>
      
    </div>
    
    
    
  </div>
</section>

     
    </div>
  );
}

export default Page;
