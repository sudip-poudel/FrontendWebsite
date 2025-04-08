import React from 'react';

function Stylist() {
    const locations = [
        { name: 'Newroad', schedule: 'Wednesday-Saturday' },
        { name: 'Lakeside', schedule: 'Sunday-Tuesday' }
    ];

    return (
        <main className="flex flex-col items-center min-h-[946px] bg-[#EDE4D9] px-5 py-[86px]">
            {/* Hero Section */}
            <header className="text-black text-center text-6xl font-light mb-[60px] max-md:text-5xl max-sm:text-4xl max-sm:mb-10">
                FIND YOUR STYLIST
            </header>

            {/* Stylist Introduction */}
            <section className="flex max-w-[897px] gap-10 items-start mb-[50px] max-md:flex-col max-md:items-center">
                <div className="flex-[0_0_413px] text-black text-3xl leading-[1.4] max-md:flex-none max-md:w-full max-md:text-center max-md:mb-[30px] max-sm:text-2xl">
                    Hello, I'm Anil, the director of AM Hair Salon, where our mission is to help you achieve your ultimate hair goals. My hair family of highly skilled and passionate artists are here to provide you with an exceptional salon experience. With their experience and dedication, we will guide you towards the perfect look that reflects your unique style and personality.
                </div>
                <img
                    src="./Image/Director.png"
                    className="w-[461px] h-[560px] object-cover max-md:w-full max-md:max-w-[461px] max-md:h-auto"
                    alt="Stylist portrait"
                />

            </section>

            {/* Location Schedule Section */}
            <section className="flex flex-col items-center">
                <div className="text-black text-3xl text-center max-w-[917px] mb-[30px] max-sm:text-2xl">
                    If you're looking for me, I will be available at 2 location selected days:
                </div>
                <div className="flex justify-center">
                    <div className="border px-[60px] py-[30px] rounded-[80px] border-solid border-black max-md:px-10 max-md:py-5 max-sm:w-[90%] max-sm:px-[30px] max-sm:py-[15px] max-sm:rounded-[40px]">
                        {locations.map((location, index) => (
                            <div key={index} className="text-black text-3xl mx-0 my-2.5 max-sm:text-2xl">
                                <span className="font-bold">{location.name}</span>
                                <span>: {location.schedule}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Stylist;
