import { useState, useEffect, useCallback } from "react";
import { content } from "../../content/content";
import { iconMap } from "../../assets/icons";
import { Button } from "../Button";
import { RegistrationModal } from "../RegistrationModal";
import fulllogo from "../../assets/logos/fulllogo.svg";

function useCountdown(targetDate: string) {
    const calcDiff = useCallback(() => {
        const diff = new Date(targetDate).getTime() - Date.now();
        if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        return {
            days: Math.floor(diff / (1000 * 60 * 60 * 24)),
            hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((diff / (1000 * 60)) % 60),
            seconds: Math.floor((diff / 1000) % 60),
        };
    }, [targetDate]);

    const [time, setTime] = useState(calcDiff);

    useEffect(() => {
        const id = setInterval(() => setTime(calcDiff()), 1000);
        return () => clearInterval(id);
    }, [calcDiff]);

    return time;
}

export function HeroSection() {
    const { hero } = content;
    const countdown = useCountdown(hero.countdownDate);
    const [modalOpen, setModalOpen] = useState(false);
    const units = hero.countdownUnits;

    const countdownBlocks = [
        { value: countdown.days, label: units.days },
        { value: countdown.hours, label: units.hours },
        { value: countdown.minutes, label: units.minutes },
        { value: countdown.seconds, label: units.seconds },
    ];

    return (
        <>
            <section
                className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 relative overflow-hidden"
                style={{ background: "linear-gradient(135deg, #f2edda 0%, #d7cfae 100%)" }}
            >
                {/* Decorative floating dots */}
                <div className="absolute top-10 left-10 w-4 h-4 rounded-full bg-[#981a36]/20 animate-bounce" style={{ animationDelay: "0s", animationDuration: "3s" }} />
                <div className="absolute top-1/4 right-16 w-6 h-6 rounded-full bg-[#17789c]/15 animate-bounce" style={{ animationDelay: "0.5s", animationDuration: "4s" }} />
                <div className="absolute bottom-20 left-1/4 w-3 h-3 rounded-full bg-[#ffc50e]/30 animate-bounce" style={{ animationDelay: "1s", animationDuration: "3.5s" }} />
                <div className="absolute top-1/3 left-1/3 w-5 h-5 rounded-full bg-[#981a36]/10 animate-bounce" style={{ animationDelay: "1.5s", animationDuration: "4.5s" }} />
                <div className="absolute bottom-10 right-1/3 w-4 h-4 rounded-full bg-[#17789c]/20 animate-bounce" style={{ animationDelay: "2s", animationDuration: "3s" }} />

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
                    <div className="flex flex-col lg:flex-row items-stretch">
                        {/* Logo */}
                        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end lg:pr-8 xl:pr-12 2xl:pr-16 mt-10 lg:mt-0">
                            <div className="w-full max-w-[600px] lg:max-w-none animate-float">
                                <img
                                    alt="Code4BEST Full Logo"
                                    loading="lazy"
                                    width="1120"
                                    height="480"
                                    className="w-full h-full max-h-[500px] md:max-h-[600px] lg:max-h-[700px] object-contain drop-shadow-2xl"
                                    src={fulllogo}
                                />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="w-full lg:w-1/2 mt-12 lg:mt-0 lg:pl-8 xl:pl-12 2xl:pl-16 flex flex-col justify-center">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-8 md:mb-12 text-center lg:text-left text-[#17789c] leading-tight font-upheaval">
                                Hackathon študentov<br />pre študentov
                            </h2>

                            <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12 md:mb-16 lg:mb-20 text-[#17789c]">
                                {hero.infoItems.map((item) => {
                                    const Icon = iconMap[item.icon];
                                    return (
                                        <div key={item.icon} className="flex items-center justify-center sm:justify-start">
                                            <Icon className="mr-3 sm:mr-4 text-[#981a36] h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 flex-shrink-0" />
                                            <span className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#17789c] leading-tight font-upheaval">
                                                {item.value}<br />{item.label}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Countdown Timer */}
                    <div className="bg-[#981a36] rounded-xl shadow-lg px-4 sm:px-6 py-6 sm:py-8 mb-6 sm:mb-8 md:mb-10 w-full max-w-4xl mx-auto">
                        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#ffc50e] mb-3 sm:mb-4 text-center font-upheaval">
                            {hero.countdownLabel}
                        </h3>
                        <div className="grid grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6 text-center">
                            {countdownBlocks.map((block) => (
                                <div key={block.label} className="bg-[#17789c] text-[#ffc50e] p-2 sm:p-3 rounded-lg">
                                    <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold block mb-1 font-upheaval">
                                        {String(block.value).padStart(2, "0")}
                                    </span>
                                    <span className="text-xs sm:text-sm md:text-base lg:text-lg font-medium block text-white uppercase tracking-wider font-upheaval">
                                        {block.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-4 sm:mt-6 max-w-4xl mx-auto">
                        <div className="flex-1">
                            <button
                                onClick={() => setModalOpen(true)}
                                className="inline-flex justify-center items-center px-4 sm:px-5 md:px-6 py-3 sm:py-4 text-lg sm:text-xl md:text-2xl font-medium rounded-md text-[#ffc50e] bg-[#981a36] hover:bg-[#5c1021] focus:outline-none transform hover:-translate-y-1 transition-all duration-200 ease-in-out font-upheaval w-full"
                                style={{
                                    boxShadow: "0 -6px 0 #5c1021 inset, 0 6px 0 #5c1021, 0 3px 8px rgba(0,0,0,0.4)",
                                    transformStyle: "preserve-3d",
                                    minWidth: "200px",
                                }}
                            >
                                {hero.cta.label}
                            </button>
                        </div>
                        <div className="flex-1">
                            <Button href={hero.secondary.href} variant="secondary" fullWidth>
                                {hero.secondary.label}
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <RegistrationModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
            />
        </>
    );
}