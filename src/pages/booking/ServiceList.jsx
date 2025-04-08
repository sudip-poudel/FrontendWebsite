import React from 'react'

function ServiceList() {
  const consultationItems = [
    "NEW CLIENTS WITH PREVIOUSLY COLOURED HAIR OR CHEMICALLY PROCESSED HAIR",
    "NEW CLIENTS WITH VIRGIN (ALL NATURAL) HAIR",
    "EXISTING CLIENTS WITH THE MOST RECENT BLEACH DONE BY US",
  ];

  return (
    <div className="bg-[#DED2C5] px-0 py-[100px]">
      <div className="text-center">
        <div className="text-[50px] text-[#403E3E] mb-[10px]">
          EXCLUSIVE SERVICES
        </div>
        <div className="text-[120px] text-[#403E3E] mb-[10px] max-sm:text-[80px] font-serif">
          10% OFF
        </div>
        <div className="text-[40px] text-[#403E3E]">
          GUARANTEED WHEN YOU REBOOK IN STORE
        </div>
      </div>

      <div className="flex justify-center mt-[50px] px-[20px]">
        <div className="w-full md:w-3/4 px-[30px] py-10 text-center">
          <div className="text-[80px] mb-5 text-[#403E3E]">Full package</div>
          <div className="text-3xl mb-[30px] text-[#403E3E]">CONDITIONS OF BOOKING</div>
          <div className="mb-10">
            <div className="text-lg mb-[15px] text-[#716C6C]">
              A CONSULTATION IS REQUIRED FOR:
            </div>
            <ul className="list-none">
              {consultationItems.map((item, index) => (
                <li key={index} className="text-lg flex justify-center items-center mb-[15px] text-[#716C6C]">
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-xl text-[#716C6C]">
            <div className="mb-5">
              IF YOU HAVE ANY ADDITIONAL ENQUIRIES, PLEASE CONTACT OUR CUSTOMER SERVICE TEAM
            </div>
            <div>
              <div className="mb-2.5">EMAIL: Hairstylist@.com</div>
              <div className="mb-2.5">PHONE: 0129 277 356</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceList;
