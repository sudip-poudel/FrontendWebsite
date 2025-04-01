import React from 'react'

function ServiceList() {
    const depositItems = [
      "CONSULTATION: FREE OF CHARGE",
      "FULL PACKAGE/BRIDAL TRIAL: RS 5000 DEPOSIT",
      "TONER/GREY PACKAGE: RS 1000 DEPOSIT",
      "WASH, CUT & BLOW DRY/ HAIRSTYLE: RS 1000 DEPOSIT",
      "BARBER CUT/ FADE: RS 300 DEPOSIT",
    ];
  
    const consultationItems = [
      "NEW CLIENTS WITH PREVIOUSLY COLOURED HAIR OR CHEMICALLY PROCESSED HAIR",
      "NEW CLIENTS WITH VIRGIN (ALL NATURAL) HAIR",
      "EXISTING CLIENTS WITH THE MOST RECENT BLEACH DONE BY US",
    ];
  
    return (
      <div className="bg-[color:var(--bg-light)] px-0 py-[100px]">
        <div className="text-center">
          <div className="text-[50px] text-[color:var(--secondary-color)] mb-[30px]">
            EXCLUSIVE SERVICES
          </div>
          <div className="text-[120px] text-[color:var(--secondary-color)] mb-5 max-sm:text-[80px]">
            10% OFF
          </div>
          <div className="text-[40px] text-[color:var(--secondary-color)]">
            GUARANTEED WHEN YOU REBOOK IN STORE
          </div>
        </div>
        <div className="flex justify-between mt-[50px] px-[100px] py-[50px] max-md:flex-col max-md:gap-[50px] max-sm:p-[30px]">
          <div className="flex-1 px-[30px] py-0">
            <div className="text-[70px] mb-5">Deposit required</div>
            <div className="text-3xl mb-5">FOR SELECTED SERVICES</div>
            <div className="text-xl font-bold mb-[30px]">
              ALL DEPOSITS ARE NON-REFUNDABLE. DEPOSITS ARE DEDUCTED FROM THE
              TOTAL COST OF YOUR SERVICE
            </div>
            <div className="mb-[30px]">
              {depositItems.map((item, index) => (
                <div key={index} className="flex items-center text-lg mb-[15px]">
                  <span className="w-2 h-2 bg-[color:var(--primary-color)] mr-[15px] rounded-[50%]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="text-xl">
              <div className="mb-5">
                IF YOU CANCEL OR POSTPONE WITHIN 2 DAYS OF YOUR APPOINTMENT, YOUR
                DEPOSIT WILL BE FORFEITED &amp; CANNOT BE USED AS SALON CREDIT
              </div>
              <div className="mb-5">
                IF MORE THAN 2 DAYS NOTICE IS GIVEN TO MODIFY YOUR BOOKING, YOUR
                DEPOSIT CAN BE CONVERTED AS SALON CREDIT TO USE TOWARDS ANOTHER
                SALON SERVICE OF YOUR CHOICE
              </div>
              <div className="mb-5">
                YOUR BOOKING IS NOT CONFIRMED UNTIL A DEPOSIT IS SECURED
              </div>
            </div>
          </div>
          <div className="flex-1 px-[30px] py-0">
            <div className="text-[80px] mb-5">Full package</div>
            <div className="text-3xl mb-[30px]">CONDITIONS OF BOOKING</div>
            <div className="mb-10">
              <div className="text-lg mb-[15px]">
                A CONSULTATION IS REQUIRED FOR:
              </div>
              {consultationItems.map((item, index) => (
                <div key={index} className="text-lg flex items-center mb-[15px]">
                  <span className="w-2 h-2 bg-[color:var(--primary-color)] mr-[15px] rounded-[50%]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="text-xl">
              <div className="mb-5">
                IF YOU HAVE ANY ADDITIONAL ENQUIRIES, PLEASE CONTACT OUR CUSTOMER
                SERVICE TEAM
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
  
