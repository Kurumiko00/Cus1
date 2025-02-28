import React from 'react';

const About = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen py-12 gradient-bg ">
      <section className="text-white body-font">
        <div className="container px-5 mx-auto">
          <div className="text-center mb-12">
            <h1 className="sm:text-5xl text-4xl font-bold mb-4 text-yellow-500 tracking-widest">
              ทีมงานบริษัท CUSTODIAN
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-xl">
              {/* คณะจัดทำงานเกี่ยวกับการพัฒนาเว็ปแอพพิเคชั่นด้วย NextJS สมาชิกของทีมมีดังนี้ */}
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {/* Card สมาชิกแต่ละคน */}
            <div className="p-4 md:w-1/2">
              <div className="bg-white bg-opacity-20 rounded-lg p-6 flex flex-col md:flex-row items-center hover:shadow-xl transition-shadow duration-300">
                <img
                  alt="team"
                  className="w-32 h-32 object-cover rounded-full mb-4 md:mb-0"
                  src="/images/p1.jpg"
                />
                <div className="md:ml-6 text-center md:text-left">
                  <h2 className="text-2xl font-bold">นายนนท์ปวิธ โคตรธรรม</h2>
                  <h3 className="text-xl mt-1">รหัสพนักงาน : 6540204143</h3>
                  <p className="mt-2 text-xl">Position: CEO</p>
                  <div className="mt-3">
                    <a
                      href="https://www.linkedin.com/in/nonpavith-khottham-243875341/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-yellow-500"
                    >
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={0}
                        className="w-10 h-10 "
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="none"
                          d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                        />
                        <circle cx={4} cy={4} r={2} stroke="none" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* สมาชิกคนที่ 2 */}
            <div className="p-4 md:w-1/2">
              <div className="bg-white bg-opacity-20 rounded-lg p-6 flex flex-col md:flex-row items-center hover:shadow-xl transition-shadow duration-300">
                <img
                  alt="team"
                  className="w-32 h-32 object-cover rounded-full mb-4 md:mb-0"
                  src="/images/p2.jpg"
                />
                <div className="md:ml-6 text-center md:text-left">
                  <h2 className="text-2xl font-bold">นายอภิสิทธิ์ ศรีนอม</h2>
                  <h3 className="text-xl mt-1">รหัสพนักงาน : 6540204408</h3>
                  <p className="mt-2 text-xl">Position: Marketing Manager</p>
                  <div className="mt-3">
                    <a
                      href="https://www.linkedin.com/in/apisit-srinom-9b0765340/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-yellow-500"
                    >
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={0}
                        className="w-10 h-10"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="none"
                          d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                        />
                        <circle cx={4} cy={4} r={2} stroke="none" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* สมาชิกคนที่ 3 */}
            <div className="p-4 md:w-1/2">
              <div className="bg-white bg-opacity-20 rounded-lg p-6 flex flex-col md:flex-row items-center hover:shadow-xl transition-shadow duration-300">
                <img
                  alt="team"
                  className="w-32 h-32 object-cover rounded-full mb-4 md:mb-0"
                  src="/images/p3.jpg"
                />
                <div className="md:ml-6 text-center md:text-left">
                  <h2 className="text-2xl font-bold">นางสาวนันทิตา ไชยยงค์</h2>
                  <h3 className="text-xl mt-1">รหัสพนักงาน : 6540201677</h3>
                  <p className="mt-2 text-xl">Position: CFO</p>
                  <div className="mt-3">
                    <a
                      href="https://www.linkedin.com/in/nantitha-chaiyong-b1bb62341/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-yellow-500"
                    >
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={0}
                        className="w-10 h-10"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="none"
                          d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                        />
                        <circle cx={4} cy={4} r={2} stroke="none" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* สมาชิกคนที่ 4 */}
            <div className="p-4 md:w-1/2">
              <div className="bg-white bg-opacity-20 rounded-lg p-6 flex flex-col md:flex-row items-center hover:shadow-xl transition-shadow duration-300">
                <img
                  alt="team"
                  className="w-32 h-32 object-cover rounded-full mb-4 md:mb-0"
                  src="/images/p4.jpg"
                />
                <div className="md:ml-6 text-center md:text-left">
                  <h2 className="text-2xl font-bold">นายธนัท ใจซื่อกุล</h2>
                  <h3 className="text-xl mt-1">รหัสพนักงาน : 6540201339</h3>
                  <p className="mt-2 text-xl">Position: HR Manager</p>
                  <div className="mt-3">
                    <a
                      href="https://www.linkedin.com/in/tanut-jaisuekul-352765340/?fbclid=IwY2xjawHKefhleHRuA2FlbQIxMAABHWwMuQWr_lT6b2X4sUl8J-i6zmAZ36kafBAMW0Jqx4TvZlukJN9bs5uu8g_aem_Yjjfb2SnPRbN7Je0GDUHUg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-yellow-500"
                    >
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={0}
                        className="w-10 h-10"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="none"
                          d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                        />
                        <circle cx={4} cy={4} r={2} stroke="none" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* สมาชิกคนที่ 5 */}
            <div className="p-4 md:w-1/2">
              <div className="bg-white bg-opacity-20 rounded-lg p-6 flex flex-col md:flex-row items-center hover:shadow-xl transition-shadow duration-300">
                <img
                  alt="team"
                  className="w-32 h-32 object-cover rounded-full mb-4 md:mb-0"
                  src="/images/komari.jpg"
                />
                <div className="md:ml-6 text-center md:text-left">
                  <h2 className="text-2xl font-bold">นายชินวัตร คุณช่วย</h2>
                  <h3 className="text-xl mt-1">รหัสพนักงาน : 6540200752</h3>
                  <p className="mt-2 text-xl">Position: Software Network Developer</p>
                  <div className="mt-3">
                    <a
                      href="https://www.linkedin.com/in/chinnawat-khunchuai-216bb3340/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-yellow-500"
                    >
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={0}
                        className="w-10 h-10"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="none"
                          d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                        />
                        <circle cx={4} cy={4} r={2} stroke="none" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* สมาชิกคนที่ 6 */}
            <div className="p-4 md:w-1/2">
              <div className="bg-white bg-opacity-20 rounded-lg p-6 flex flex-col md:flex-row items-center hover:shadow-xl transition-shadow duration-300">
                <img
                  alt="team"
                  className="w-32 h-32 object-cover rounded-full mb-4 md:mb-0"
                  src="/images/p6.jpg"
                />
                <div className="md:ml-6 text-center md:text-left">
                  <h2 className="text-2xl font-bold">นายดนุเดช โชติขจรวงศ์</h2>
                  <h3 className="text-xl mt-1">รหัสพนักงาน : 6540201081</h3>
                  <p className="mt-2 text-xl">Position: Risk Analyst</p>
                  <div className="mt-3">
                    <a
                      href="https://www.linkedin.com/in/danuded-chodkhajonwong-915bb4340/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-yellow-500"
                    >
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={0}
                        className="w-10 h-10"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="none"
                          d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                        />
                        <circle cx={4} cy={4} r={2} stroke="none" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* สมาชิกคนที่ 7 */}
            <div className="p-4 md:w-1/2">
              <div className="bg-white bg-opacity-20 rounded-lg p-6 flex flex-col md:flex-row items-center hover:shadow-xl transition-shadow duration-300">
                <img
                  alt="team"
                  className="w-32 h-32 object-cover rounded-full mb-4 md:mb-0"
                  src="/images/p7.jpg"
                />
                <div className="md:ml-6 text-center md:text-left">
                  <h2 className="text-2xl font-bold">นายสราวุธ สัญเจริญ</h2>
                  <h3 className="text-xl mt-1">รหัสพนักงาน : 6540203384</h3>
                  <p className="mt-2 text-xl">Position: Software Developer</p>
                  <div className="mt-3">
                    <a
                      href="https://www.linkedin.com/in/sarawut-sanjaroey-8b4bb3340/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-yellow-500"
                    >
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={0}
                        className="w-10 h-10"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="none"
                          d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                        />
                        <circle cx={4} cy={4} r={2} stroke="none" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* สมาชิกคนที่ 8 */}
            <div className="p-4 md:w-1/2">
              <div className="bg-white bg-opacity-20 rounded-lg p-6 flex flex-col md:flex-row items-center hover:shadow-xl transition-shadow duration-300">
                <img
                  alt="team"
                  className="w-32 h-32 object-cover rounded-full mb-4 md:mb-0"
                  src="/images/pk8.jpg"
                />
                <div className="md:ml-6 text-center md:text-left">
                  <h2 className="text-2xl font-bold">นายชัยพร กรินทร</h2>
                  <h3 className="text-xl mt-1">รหัสพนักงาน : 6540200695</h3>
                  <p className="mt-2 text-xl">Position: System Security Engineer</p>
                  <div className="mt-3">
                    <a
                      href="https://www.linkedin.com/in/chaiyaporn-krinthorn-909bb4340/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-yellow-500"
                    >
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={0}
                        className="w-10 h-10"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="none"
                          d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                        />
                        <circle cx={4} cy={4} r={2} stroke="none" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* สมาชิกคนที่ 9 */}
            <div className="p-4 md:w-1/2">
              <div className="bg-white bg-opacity-20 rounded-lg p-6 flex flex-col md:flex-row items-center hover:shadow-xl transition-shadow duration-300">
                <img
                  alt="team"
                  className="w-32 h-32 object-cover rounded-full mb-4 md:mb-0"
                  src="/images/p9.jpg"
                />
                <div className="md:ml-6 text-center md:text-left">
                  <h2 className="text-2xl font-bold">นายวรภพ สืบดี</h2>
                  <h3 className="text-xl mt-1">รหัสพนักงาน : 6540205710</h3>
                  <p className="mt-2 text-xl">Position: Technical Support</p>
                  <div className="mt-3">
                    <a
                      href="https://www.linkedin.com/in/worapob-suebdee-648bb1340/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-yellow-500"
                    >
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={0}
                        className="w-10 h-10"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="none"
                          d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                        />
                        <circle cx={4} cy={4} r={2} stroke="none" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* สมาชิกคนที่ 10 */}
            <div className="p-4 md:w-1/2">
              <div className="bg-white bg-opacity-20 rounded-lg p-6 flex flex-col md:flex-row items-center hover:shadow-xl transition-shadow duration-300">
                <img
                  alt="team"
                  className="w-32 h-32 object-cover rounded-full mb-4 md:mb-0"
                  src="/images/p10.jpg"
                />
                <div className="md:ml-6 text-center md:text-left">
                  <h2 className="text-2xl font-bold">นายธนาธิป สีโย</h2>
                  <h3 className="text-xl mt-1">รหัสพนักงาน : 6540201370</h3>
                  <p className="mt-2 text-xl">Position: Field Service Technician</p>
                  <div className="mt-3">
                    <a
                      href="https://www.linkedin.com/in/thanathip-seeyo-877bb3340/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-yellow-500"
                    >
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={0}
                        className="w-10 h-10"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="none"
                          d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                        />
                        <circle cx={4} cy={4} r={2} stroke="none" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
