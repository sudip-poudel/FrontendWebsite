import React from "react";

function VIPSuite() {
  // Color variables
  const colors = {
    background: "bg-[#DED2C5]",
    primary: "text-[#403E3E]",
    secondary: "text-[#716C6C]",  // This is your desired color
    accent: "text-[#8B5A2B]",
    dark: "text-[#4A4848]",
    black: "text-[#000000]"
  };

  // Benefits list
  const benefits = [
    "IDEAL FOR OUR SCARFED CLIENTS OR THOSE WANTING EXTRA PRIVACY",
    "GET ALL DAY ACCESS TO THE PRIVATE LOUNGE",
    "EXPERIENCE EXCLUSIVE PREMIUM AMENITIES",
    "SUBJECT TO AVAILABILITY"
  ];

  // Special occasions
  const occasions = [
    "PRIVATE HAIR SESSION : BRIDAL PARTY, HENS, BUCKS OR SPECIAL OCCASION",
    "SURPRISE A LOVED ONE : WE'LL DO OUR BEST TO ACCOMMODATE SPECIAL REQUESTS"
  ];

  return (
    <section className="z-10">
      <div className="flex flex-col md:flex-row gap-0">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src="./Image/ImageServicePage3.png"
            alt="VIP Suite"
            className="w-full h-full object-cover rounded-lg aspect-[0.91]"
          />
        </div>

        {/* Content Card */}
        <div className="w-full md:w-1/2">
          <div className={`${colors.background} flex flex-col items-start px-8 py-12 rounded-lg`}>
            <h3 className={`text-6xl font-serif font-light ${colors.black} text-left`}>
              VIP Private Suite
            </h3>
            <p className={`text-2xl uppercase tracking-wider mt-4 text-left ${colors.primary}`}>
              LUXURY EXPERIENCE
            </p>
            <p className="text-xl uppercase mt-4 text-left">
              AVAILABLE TO BOOK ONLINE FOR THE FULL PACKAGE & TONER PACKAGE AT NO ADDITIONAL COSTS
            </p>

            {/* Benefits with bullet points - now in #716C6C */}
            <ul className="w-full mt-5 space-y-3 pl-12 list-disc">
              {benefits.map((benefit, index) => (
                <li key={index} className={`text-lg text-left ${colors.secondary}`}>
                  {benefit.includes("SCARFED CLIENTS") || benefit.includes("EXTRA PRIVACY") ? (
                    <>
                      {benefit.split(/(SCARFED CLIENTS|EXTRA PRIVACY)/).map((part, i) =>
                        part.match(/SCARFED CLIENTS|EXTRA PRIVACY/) ? (
                          <span key={i} className="font-bold text-[#4A4848]">{part}</span>
                        ) : (
                          part
                        )
                      )}
                    </>
                  ) : (
                    benefit
                  )}
                </li>
              ))}
            </ul>

            <h4 className={`text-2xl font-bold mt-12 ${colors.black} text-left`}>
              TREAT YOURSELF
            </h4>

            {/* Occasions with bullet points - now in #716C6C */}
            <ul className="w-full mt-8 space-y-3 pl-12 list-disc">
              {occasions.map((occasion, index) => (
                <li key={index} className={`text-lg text-left ${colors.secondary}`}>
                  {occasion.split(":").map((part, i) =>
                    i === 0 ? (
                      <span key={i} className="font-bold text-[#4A4848]">{part}:</span>
                    ) : (
                      part
                    )
                  )}
                </li>
              ))}
            </ul>

            <p className="text-lg text-left mt-12">
              <span className={`${colors.secondary}`}>
                PLEASE CALL OR EMAIL TO ORGANISE YOUR NEXT EVENT
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VIPSuite;