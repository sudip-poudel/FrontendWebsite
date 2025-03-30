import React from "react";

function ServiceCard({
    title,
    subtitle,
    description,
    prices = [],  
    includes = [],
    serviceTime,
    imageSrc,
    imagePosition = "top",
}) {

    const content = (
        <div className="bg-[rgba(222,210,197,1)] flex w-full flex-col pl-[13px] pr-[30px] pt-[45px] pb-[90px] max-md:max-w-full max-md:pr-5">
            <h3 className="text-black text-[40px] font-light text-center max-md:max-w-full">
                {title}
            </h3>
            <div className="text-[rgba(64,62,62,1)] text-xl font-normal text-center ml-14 mt-[17px] max-md:ml-2.5">
                {subtitle}
            </div>
            <div className="text-[rgba(113,108,108,1)] text-xl font-normal text-center ml-[54px] mt-[34px] max-md:max-w-full">
                {description}
            </div>

            {prices.map((price, index) => (
                <div
                    key={index}
                    className="text-black text-xl font-light text-center self-center ml-[25px] mt-7 max-md:max-w-full"
                >
                    <span className="font-bold text-[rgba(64,62,62,1)]">
                        {price.service}{" "}
                    </span>
                    <span className="text-[rgba(64,62,62,1)]">:</span>{" "}
                    <span className="text-[rgba(113,108,108,1)]">{price.price}</span>
                </div>
            ))}

            <div className="text-[rgba(113,108,108,1)] text-xl font-bold text-center ml-[47px] mt-[49px] max-md:ml-2.5 max-md:mt-10">
                THIS PACKAGE INCLUDES:
            </div>

            {includes.map((item, index) => (
                <div
                    key={index}
                    className="text-[rgba(113,108,108,1)] text-xl font-normal mt-[31px] max-md:max-w-full"
                >
                    {item}
                </div>
            ))}

            <div className="flex items-stretch gap-[19px] text-center ml-[49px] mt-[33px] max-md:ml-2.5">
                <div className="text-[rgba(64,62,62,1)] text-xl font-bold basis-auto">
                    SERVICE TIME :
                </div>
                <div className="text-[rgba(113,108,108,1)] text-[25px] font-normal basis-auto">
                    {serviceTime}
                </div>
            </div>
        </div>
    );

    const image = (
        <img
            src={imageSrc}
            alt={title}
            className="aspect-[0.89] object-contain w-full max-md:max-w-full"
        />
    );

    return (
        <div className="w-6/12 max-md:w-full max-md:ml-0">
            {imagePosition === "top" ? (
                <>
                    {image}
                    {content}
                </>
            ) : (
                <>
                    {content}
                    {image}
                </>
            )}
        </div>
    );
}

export default ServiceCard;

