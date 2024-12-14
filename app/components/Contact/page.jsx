import React from 'react';

function Page() {
  return (
    <div>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Contact Us
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Working Hours:
              <br />
              Monday – Friday: 8:00 AM – 6:00 PM (GMT+7)
              <br />
              Saturday: 9:00 AM – 3:00 PM
              <br />
              Sunday & Public Holidays: Closed
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <p>
                  <a className="text-indigo-500">General Inquiries:</a> info@custodiancyber.com
                </p>
                <p>
                  <a className="text-indigo-500">Support Team:</a> support@custodiancyber.com
                </p>
                <p className="leading-normal my-5">
                  <a className="text-indigo-500">Drop Us a Message:</a> Have questions or need expert advice? Use the contact form below to reach out. We’re here to protect your business from cyber threats!
                  <br />
                  <br />
                  <a className="text-indigo-500">Find Us:</a> Embedded Google Map showing the location of Custodian HQ.
                  <br />
                  Your Security is Our Priority – Let's build a safer digital future together!
                  <br />
                  <a className="text-indigo-500">Connect with Us:</a>
                  <br />
                  <a className="text-indigo-500">Facebook:</a> CustodianCyber
                  <br />
                  <a className="text-indigo-500">LinkedIn:</a> Custodian Cybersecurity
                  <br />
                  <a className="text-indigo-500">Twitter:</a> @CustodianCyber
                  <br />
                  For Urgent Matters or Incident Response:
                  <br />
                  24/7 Cybersecurity Incident Hotline: +66-9999-1122
                </p>

                <span className="inline-flex">
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  </a>
                  <a className="ml-4 text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  </a>
                  <a className="ml-4 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                    </svg>
                  </a>
                  <a className="ml-4 text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Page;