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
    // Color variables
    const colors = {
        background: "bg-[#DED2C5]",
        primary: "text-[#403E3E]",
        secondary: "text-[#716C6C]",
        accent: "text-[#8B5A2B]",
    };

    // Check if there's any content to render
    const hasContent = title || subtitle || description ||
        prices.length > 0 || includes.length > 0 || serviceTime;

    // Don't render anything if no image and no content
    if (!imageSrc && !hasContent) return null;

    // Content component (only renders if hasContent is true)
    const content = hasContent ? (
        <div className={`${colors.background} flex flex-col px-5 py-8 space-y-6 rounded-b-lg`}>
            {title && (
                <h3 className={`text-4xl font-serif font-light text-center ${colors.accent}`}>
                    {title}
                </h3>
            )}

            {subtitle && (
                <p className={`text-lg uppercase tracking-wider text-center ${colors.primary}`}>
                    {subtitle}
                </p>
            )}

            {description && (
                <p className={`text-lg italic text-center ${colors.secondary}`}>
                    {description}
                </p>
            )}

            {prices.length > 0 && (
                <div className="space-y-3">
                    {prices.map((price, index) => (
                        <div key={index} className="text-center">
                            <span className={`font-medium ${colors.primary}`}>
                                {price.service}
                            </span>
                            <span className={`mx-1 ${colors.primary}`}>:</span>
                            <span className={`${colors.secondary}`}>
                                {price.price}
                            </span>
                        </div>
                    ))}
                </div>
            )}

            {includes.length > 0 && (
                <div className="space-y-4">
                    <h4 className={`text-xl font-bold text-center uppercase tracking-wide ${colors.secondary}`}>
                        Package Includes:
                    </h4>
                    <ul className="space-y-2 pl-5 list-disc">
                        {includes.map((item, index) => (
                            <li key={index} className={`text-base ${colors.secondary}`}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {serviceTime && (
                <div className="flex justify-center items-center gap-2 mt-4">
                    <span className={`font-bold ${colors.primary}`}>
                        Service Time:
                    </span>
                    <span className={`${colors.secondary}`}>
                        {serviceTime}
                    </span>
                </div>
            )}
        </div>
    ) : null;

    const image = imageSrc ? (
        <img
            src={imageSrc}
            alt={title || "Service image"}
            className="aspect-[0.89] object-cover w-full rounded-t-lg"
        />
    ) : null;

    // Don't render container if nothing to show
    if (!image && !content) return null;

    return (
        <div className="w-full md:w-6/12 shadow-lg hover:shadow-xl transition-shadow duration-300">
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