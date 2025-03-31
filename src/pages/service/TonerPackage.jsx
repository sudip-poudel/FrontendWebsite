import React from "react";

function TonerPackage() {
    const colors = {
        background: "bg-[#DED2C5]",
        primary: "text-[#403E3E]",
        secondary: "text-[#716C6C]",
        accent: "text-[#8B5A2B]",
        dark: "text-[#131313]",
        black: "text-[#000000]" // Added black color for headings
    };

    return (
        <section className="z-10">
            <div className="flex flex-col md:flex-row gap-0"> {/* Changed gap-5 to gap-0 */}
                {/* Content Card */}
                <div className="w-full md:w-1/2">
                    <div className={`${colors.background} flex flex-col items-start px-8 py-12 rounded-lg`}>
                        <h3 className={`text-6xl font-serif font-light ${colors.black}`}>
                            The Toner Package
                        </h3>

                        <p className={`text-2xl uppercase tracking-wider mt-4 ${colors.primary}`}>
                            FRESHEN YOUR COLOUR
                        </p>

                        <p className="text-xl uppercase mt-4">
                            PRICES DEPEND ON HAIR LENGTH & THICKNESS
                        </p>

                        <div className="w-full mt-8 space-y-4 pl-12">
                            <ul className="space-y-2 list-disc pl-5">
                                <li className="text-left">
                                    <span className={`font-medium ${colors.primary}`}>CUSTOM COLOUR & MELT</span>
                                    <span className={`mx-1 ${colors.primary}`}>:</span>
                                    <span className={`${colors.secondary}`}>FROM Rs 900/Hours</span>
                                </li>

                                <li className="text-left">
                                    <span className={`font-medium ${colors.primary}`}>PERMANENT COLOUR/GREY COVERAGE</span>
                                    <span className={`mx-1 ${colors.primary}`}>:</span>
                                    <span className={`${colors.secondary}`}>FROM Rs 1500</span>
                                </li>
                            </ul>
                        </div>

                        <div className="w-full mt-8 space-y-4">
                            <h4 className={`text-xl font-bold text-left uppercase tracking-wide ${colors.secondary}`}>
                                The Package Includes:
                            </h4>
                            <ul className="space-y-2 list-disc pl-15">
                                <li className="text-left">
                                    <span className={`text-base ${colors.secondary}`}>
                                        IDEAL FOR PREVIOUSLY BLEACHED OR NATURALLY LIGHT HAIR WISHING TO FRESHEN THEIR COLOUR
                                    </span>
                                </li>
                                <li className="text-left">
                                    <span className={`text-base ${colors.secondary}`}>
                                        INCLUDES A CUSTOM MIX & MELT APPLICATION TO ACHIEVE RESULTS OF THE SAME LEVEL OR DARKER THAN YOUR EXISTING HAIR
                                    </span>
                                </li>
                            </ul>
                        </div>

                        <div className="flex justify-start items-center gap-2 mt-8 pl-5">
                            <span className={`font-bold ${colors.primary}`}>
                                Service Time:
                            </span>
                            <span className={`${colors.secondary}`}>
                                2-3 HOURS
                            </span>
                        </div>
                    </div>
                </div>

                {/* Image */}
                <div className="w-full md:w-1/2">
                    <img
                        src="./Image/ImageServicePage2.png"
                        alt="Toner Package"
                        className="w-full h-64 md:h-138 object-cover rounded-lg aspect-[0.91]"
                    />
                </div>

            </div>
        </section>
    );
}

export default TonerPackage;
