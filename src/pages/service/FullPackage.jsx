import React from "react";

function FullPackage() {
    const colors = {
        background: "bg-[#DED2C5]",
        primary: "text-[#403E3E]",
        secondary: "text-[#716C6C]",
        accent: "text-[#8B5A2B]",
        dark: "text-[#131313]"
    };

    return (
        <section className="mt-0">
            <div className="flex flex-col md:flex-row-reverse items-stretch">
                {/* Content Card */}
                <div className="w-full md:w-1/2 flex flex-col h-full">
                    <div className={`${colors.background} flex flex-col px-8 py-12 rounded-lg w-full h-full`}>
                        <h3 className="text-6xl font-serif font-light text-black text-left">
                            The Full Package
                        </h3>

                        <p className={`text-2xl uppercase tracking-wider mt-4 text-left ${colors.primary}`}>
                            BLEACH & COLOUR
                        </p>

                        <p className="text-xl uppercase mt-4 text-left">
                            CHARGED BASED ON THE SERVICE TIME REQUIRED
                        </p>

                        <div className="w-full mt-8 space-y-4 pl-12">
                            <ul className="list-disc space-y-2">
                                <li className="text-left">
                                    <span className={`font-medium ${colors.primary}`}>EMERGING ARTIST</span>
                                    <span className={`mx-1 ${colors.primary}`}>:</span>
                                    <span className={`${colors.secondary}`}>Rs 700/Hours</span>
                                </li>

                                <li className="text-left">
                                    <span className={`font-medium ${colors.primary}`}>SENIOR ARTIST</span>
                                    <span className={`mx-1 ${colors.primary}`}>:</span>
                                    <span className={`${colors.secondary}`}>Rs 1000/Hours</span>
                                </li>

                                <li className="text-left">
                                    <span className={`font-medium ${colors.primary}`}>MASTER ARTIST</span>
                                    <span className={`mx-1 ${colors.primary}`}>:</span>
                                    <span className={`${colors.secondary}`}>Rs 1500/Hours</span>
                                </li>
                            </ul>
                        </div>

                        <div className="w-full mt-8 space-y-4">
                            <h4 className={`text-xl font-bold text-left uppercase tracking-wide ${colors.secondary}`}>
                                The Package Includes:
                            </h4>
                            <ul className="space-y-2 pl-12 list-disc">
                                <li className={`text-base ${colors.secondary}`}>
                                    EVO BLEACH (OMBRE, BALAYAGE, FOIL/HIGHLIGHTS ROOT RETOUCH) + Rs 500
                                </li>
                                <li className={`text-base ${colors.secondary}`}>
                                    CUSTOM TONER AND MELT APPLICATION
                                </li>
                                <li className={`text-base ${colors.secondary}`}>
                                    YOUR CHOICE OF TREATMENT TO BRING HOME
                                </li>
                                <li className={`text-base ${colors.secondary}`}>
                                    CUT, WASH, BLOW DRY & STYLE
                                </li>
                            </ul>
                        </div>

                        <div className="flex justify-start items-center gap-2 mt-8">
                            <span className={`font-bold ${colors.primary}`}>
                                Service Time:
                            </span>
                            <span className={`${colors.secondary}`}>
                                FROM 6-8 HOURS
                            </span>
                        </div>
                    </div>
                </div>

                {/* Image Section */}
                <div className="w-full md:w-1/2">
                    <img
                        src="./Image/ImageServicePage.png"
                        alt="Toner Package"
                        className="w-full h-64 md:h-156 object-cover rounded-lg aspect-[0.91]"
                    />
                </div>
            </div>
        </section>
    );
}

export default FullPackage;
