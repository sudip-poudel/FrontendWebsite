import React from "react";

function VIPSuite() {
  return (
    <section className="max-md:max-w-full">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-6/12 max-md:w-full max-md:ml-0">
          <img
            src="./Image/ImageServicePage3.png"
            alt="VIP Suite"
            className="aspect-[0.91] object-contain w-full grow max-md:max-w-full"
          />
        </div>
        <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
          <div className="bg-[rgba(222,210,197,1)] flex flex-col items-center text-lg text-[rgba(113,108,108,1)] font-normal w-full pt-[58px] pb-[98px] px-[35px] max-md:max-w-full max-md:px-5">
            <h3 className="text-black text-[40px] font-light text-center">
              VIP private suite
            </h3>
            <div className="text-xl text-center mt-[43px] max-md:max-w-full max-md:mt-10">
              AVAILABLE TO BOOK ONLINE FOR THE FULL PACKAGE & TONER PACKAGE AT
              NO ADDITIONAL COSTS
            </div>
            <div className="text-center mt-12 max-md:max-w-full max-md:mt-10">
              IDEAL FOR OUR{" "}
              <span className="font-bold text-[rgba(74,72,72,1)]">
                SCARFED CLIENTS
              </span>{" "}
              OR THOSE WANTING{" "}
              <span className="font-bold text-[rgba(79,76,76,1)]">
                EXTRA PRIVACY
              </span>
            </div>
            <div className="text-center ml-[26px] mt-[19px]">
              GET ALL DAY ACCESS TO THE PRIVATE LOUNGE
            </div>
            <div className="text-center ml-[26px] mt-[25px]">
              EXPERIENCE EXCLUSIVE PREMIUM AMENITIES
            </div>
            <div className="text-center mt-[25px]">SUBJECT TO AVAILABILITY</div>
            <div className="text-xl font-bold text-center ml-[49px] mt-[74px] max-md:ml-2.5 max-md:mt-10">
              TREAT YOURSELF
            </div>
            <div className="text-center ml-[31px] mt-[34px]">
              <span className="font-bold text-[rgba(59,57,57,1)]">
                PRIVATE HAIR SESSION
              </span>{" "}
              : BRIDAL PARTY, HENS, BUCKS OR SPECIAL OCCASION
            </div>
            <div className="mr-12 mt-[35px] max-md:max-w-full max-md:mr-2.5">
              <span className="font-bold text-[rgba(52,50,50,1)]">
                SURPRISE A LOVED ONE
              </span>{" "}
              : WE'LL DO OUR BEST TO ACCOMMODATE SPECIAL REQUESTS
            </div>
            <div className="text-center mt-[73px] max-md:max-w-full max-md:mt-10">
              PLEASE CALL OR EMAIL TO ORGANISE YOUR NEXT EVENTS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default VIPSuite;