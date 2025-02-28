import React from 'react';

function Page() {
  return (
    <div className="bg-gray-100 min-h-screen py-12 gradient-bg ">
      <section className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8 bg-white bg-opacity-70 ">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold text-gray-800 mb-2">
            Contact Us
          </h1>
          <p className="text-gray-600 leading-relaxed">
            Working Hours:
            <br />
            Monday – Friday: 8:00 AM – 6:00 PM (GMT+7)
            <br />
            Saturday: 9:00 AM – 3:00 PM
            <br />
            Sunday & Public Holidays: Closed
          </p>
        </div>
        <div className="space-y-6 text-gray-700">
          <div className="border-t pt-4">
            <p>
              <span className="font-medium text-indigo-600">General Inquiries:</span> info@custodiancyber.com
            </p>
            <p>
              <span className="font-medium text-indigo-600">Support Team:</span> support@custodiancyber.com
            </p>
          </div>
          <div>
            <p className="font-medium text-indigo-600 mb-1">Drop Us a Message:</p>
            <p className="leading-relaxed">
              Have questions or need expert advice? Use the contact form below to reach out. We’re here to protect your business from cyber threats!
            </p>
          </div>
          <div>
            <p className="font-medium text-indigo-600 mb-1">Find Us:</p>
            <p className="leading-relaxed">
              Embedded Google Map showing the location of Custodian HQ.
            </p>
          </div>
          <div>
            <p className="font-medium text-indigo-600 mb-1">Connect with Us:</p>
            <p className="leading-relaxed">
              Facebook: CustodianCyber
              <br />
              LinkedIn: Custodian Cybersecurity
              <br />
              Twitter: @CustodianCyber
            </p>
          </div>
          <div className="border-t pt-4">
            <p className="text-red-600 font-bold">
              For Urgent Matters or Incident Response:
            </p>
            <p className="text-gray-800">
              24/7 Cybersecurity Incident Hotline: +66-9999-1122
            </p>
          </div>
          <div className="flex justify-center space-x-4 mt-6">
            <a href="https://www.facebook.com/lekko.lekke.9" className="text-gray-500 hover:text-indigo-600 transition-colors">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a href="https://www.facebook.com/lekko.lekke.9" className="text-gray-500 hover:text-indigo-600 transition-colors">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a href="https://www.facebook.com/lekko.lekke.9" className="text-gray-500 hover:text-indigo-600 transition-colors">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </a>
            <a href="https://www.facebook.com/lekko.lekke.9" className="text-gray-500 hover:text-indigo-600 transition-colors">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Page;
