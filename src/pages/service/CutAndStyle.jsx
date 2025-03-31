import React from "react";

function CutAndStyle() {
  // Color variables
  const colors = {
    background: "bg-[#DED2C5]",
    primary: "text-[#403E3E]",
    secondary: "text-[#716C6C]",
    accent: "text-[#8B5A2B]",
    dark: "text-[#131313]"
  };

  // Service items data
  const services = [
    {
      title: "PRECISION HAIRCUT",
      duration: "1 HOUR",
      options: [
        "EMERGING ARTIST : RS 700/HOUR",
        "SENIOR ARTIST : RS 1200/HOUR",
        "MASTER ARTIST : RS 1500/HOUR"
      ]
    },
    {
      title: "BARBER FADE/CUT",
      duration: "30 MINUTES",
      options: [
        "AMY : RS 500",
        "PRIYA : RS 500",
        "TOOHIE : FROM RS 2500"
      ]
    },
    {
      title: "BARBER HAIR PERMING",
      duration: "FROM 2 HOURS",
      options: []
    },
    {
      title: "",
      duration: "",
      options: [
        "BEARD TRIM/FADE : RS 300-500 (30 MINUTES)",
        "AFTER HOURS WITH EMERGING ARTIST: RS 1000",
        "AFTER HOURS WITH SENIOR : RS 2000"
      ]
    }
  ];

  return (
    <section className="z-10">
      <div className="flex flex-col md:flex-row gap-5">
        {/* Content Card */}
        <div className="w-full md:w-1/2">
          <div className={`${colors.background} flex flex-col items-center px-8 py-12 rounded-lg`}>
            <h3 className={`text-4xl font-serif font-light ${colors.accent}`}>
              Cut & Style
            </h3>

            <p className={`text-2xl uppercase tracking-wider mt-4 ${colors.primary}`}>
              LOOK GOOD, FEEL GOOD
            </p>

            <p className="text-xl uppercase mt-4 italic">
              ALL CUTS/FADES INCLUDE WASH, BLOW-DRY & STYLE
            </p>

            <div className="w-full mt-8 space-y-8">
              {services.map((service, index) => (
                <div key={index} className="space-y-4">
                  {service.title && (
                    <h4 className={`text-xl font-bold ${colors.dark}`}>
                      {service.title} {service.duration && <span className="font-normal">: {service.duration}</span>}
                    </h4>
                  )}

                  {service.options.map((option, idx) => (
                    <p key={idx} className="text-lg ml-4">
                      {option}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <p className="text-lg">
                PLEASE CALL FOR <span className="font-bold">AFTER HOURS BARBERING</span>
              </p>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src="./Image/ImageServicePage4.png"
            alt="Cut and Style"
            className="w-full h-full object-cover rounded-lg aspect-[0.9]"
          />
        </div>
      </div>
    </section>
  );
}
export default CutAndStyle;