import React from "react";
import ServiceCard from "./ServiceCard";

function ServicePackages() {
    return (
        <section className="w-full max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                <ServiceCard
                    title="The toner package"
                    subtitle="FRESHEN YOUR COLOUR"
                    description="PRICES DEPEND ON HAIR LENGTH & THICKNESS"
                    prices={[
                        { service: "CUSTOM COLOUR & MELT", price: "FROM Rs 900/Hours" },
                        { service: "PERMANENT COLOUR/GREY COVERAGE", price: "FROM Rs 1500" }
                    ]}
                    includes={[
                        "IDEAL FOR PREVIOUSLY BLEACHED OR NATURALLY LIGHT HAIR WISHING TO FRESHEN THEIR COLOUR",
                        "INCLUDES A CUSTOM MIX & MELT APPLICATION TO ACHIEVE RESULTS OF THE SAME LEVEL OR DARKER THAN YOUR EXISTING HAIR",
                    ]}
                    serviceTime="2-3 HOURS"
                    imageSrc="./Image/ImageServicePage.png"  
                    imagePosition="top"
                />

                <ServiceCard
                    title="The full package"
                    subtitle="BLEACH & COLOUR"
                    description="CHARGED BASED ON THE SERVICE TIME REQUIRED"
                    prices={[
                        { service: "EMERGING ARTIST", price: "Rs 700/Hours" },
                        { service: "SENIOR ARTIST", price: "Rs 1000/Hours" },
                        { service: "MASTER ARTIST", price: "Rs 1500/Hours" },
                    ]}
                    includes={[
                        "EVO BLEACH (OMBRE, BALAYAGE, FOIL/HIGHLIGHTS ROOT RETOUCH) + Rs 500",
                        "CUSTOM TONER AND MELT APPLICATION",
                        "YOUR CHOICE OF TREATMENT TO BRING HOME",
                        "CUT, WASH, BLOW DRY & STYLE",
                    ]}
                    serviceTime="FROM 6-8 HOURS"
                    imageSrc="./Image/ImageServicePage2.png"
                    imagePosition="bottom"
                />
            </div>
        </section>
    );
}
export default ServicePackages;