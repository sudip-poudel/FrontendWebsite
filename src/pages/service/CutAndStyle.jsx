import React from "react";

function CutAndStyle() {
  return (
    <section className="z-10 max-md:max-w-full">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-6/12 max-md:w-full max-md:ml-0">
          <div className="bg-[rgba(222,210,197,1)] flex flex-col text-lg text-[rgba(113,108,108,1)] font-normal text-center w-full px-[58px] py-[62px] max-md:max-w-full max-md:px-5">
            <h3 className="text-black text-[40px] font-light">Cut & style</h3>
            <div className="text-[rgba(64,62,62,1)] text-3xl mt-[15px] max-md:ml-[7px]">
              LOOK GOOD , FEEL GOOD
            </div>
            <div className="text-xl mt-[15px] max-md:max-w-full">
              ALL CUTS/FADES INCLUDE WASH, BLOW-DRY & STYLE
            </div>
            <div className="text-[rgba(19,19,19,1)] text-xl ml-3.5 mt-[26px] max-md:ml-2.5">
              <span className="font-bold">PRECISION HAIRCUT </span>: 1 HOUR
            </div>
            <div className="ml-[61px] mt-[27px] max-md:ml-2.5">
              EMERGING ARTIST : RS 700/HOUR
            </div>
            <div className="ml-[61px] mt-3 max-md:ml-2.5">
              SENIOR ARTIST : RS 1200/HOUR
            </div>
            <div className="ml-[63px] mt-[22px] max-md:ml-2.5">
              MASTER ARTIST : RS 1500/HOUR
            </div>
            <div className="text-[rgba(19,19,19,1)] text-xl font-bold ml-[19px] mt-[31px] max-md:ml-2.5">
              BARBER FADE/CUT <span className="font-normal">: 30 MINUTES</span>
            </div>
            <div className="ml-[65px] mt-[17px] max-md:ml-2.5">
              AMY : RS 500
            </div>
            <div className="ml-[67px] mt-4 max-md:ml-2.5">PRIYA : RS 500</div>
            <div className="ml-[67px] mt-4 max-md:ml-2.5">
              TOOHIE : FROM RS 2500
            </div>
            <div className="text-[rgba(19,19,19,1)] text-xl font-bold ml-4 mt-10 max-md:ml-2.5">
              BARBER HAIR PERMING{" "}
              <span className="font-normal">: FROM 2 HOURS</span>
            </div>
            <div className="ml-[68px] mt-5 max-md:ml-2.5">
              BEARD TRIM/FADE : RS 300-500 (30 MINUTES)
            </div>
            <div className="self-center mt-4 max-md:max-w-full">
              AFTER HOURS WITH EMERGING ARTIST: RS 1000
            </div>
            <div className="text-xl ml-4 mt-7 max-md:max-w-full">
              PLEASE CALL FOR{" "}
              <span className="font-bold">AFTER HOURS BARBERING:</span>
            </div>
            <div className="ml-[63px] mt-[15px] max-md:ml-2.5">
              AFTER HOURS WITH SENIOR : RS 2000
            </div>
          </div>
        </div>
        <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
          <img
            src="./Image/ImageServicePage4.png"
            alt="Cut and Style"
            className="aspect-[0.9] object-contain w-full grow max-md:max-w-full"
          />
        </div>
      </div>
    </section>
  );
}
export default CutAndStyle;