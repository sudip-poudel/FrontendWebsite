import React from "react";

function CutAndStyle() {
  // Color variables
  const colors = {
    background: "bg-[#DED2C5]",
    primary: "text-[#403E3E]",
    secondary: "text-[#716C6C]", // This is our target color
    accent: "text-[#8B5A2B]",
    dark: "text-[#131313]",
    black: "text-[#000000]"
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
      <div className="flex flex-col md:flex-row gap-0">
        {/* Content Card */}
        <div className="w-full md:w-1/2">
          <div className={`${colors.background} flex flex-col items-start px-8 py-12 rounded-lg`}>
            <h3 className={`text-6xl font-serif font-light ${colors.black} text-left`}>
              Cut & Style
            </h3>

            <p className={`text-2xl uppercase tracking-wider mt-4 ${colors.primary} text-left`}>
              LOOK GOOD, FEEL GOOD
            </p>

            <p className="text-xl uppercase mt-4 text-left">
              ALL CUTS/FADES INCLUDE WASH, BLOW-DRY & STYLE
            </p>

            <div className="w-full mt-8 space-y-8 text-left">
              {services.map((service, index) => (
                <div key={index} className="space-y-4">
                  {service.title && (
                    <h4 className={`text-xl font-bold ${colors.black} text-left`}>
                      {service.title} {service.duration && <span className="font-normal">: {service.duration}</span>}
                    </h4>
                  )}

                  {service.options.length > 0 && (
                    <ul className="list-disc pl-[60px] space-y-2">
                      {service.options.map((option, idx) => (
                        <li key={idx} className={`text-lg ${colors.secondary}`}>
                          {option}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-10 text-left">
  <p className="text-lg">
    <span className="text-[#716C6C]">PLEASE CALL FOR </span>
    <span className="font-bold text-[#403E3E]">AFTER HOURS BARBERING</span>
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