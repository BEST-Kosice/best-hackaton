import { HeroSection } from "../../components/sections/HeroSection";
import { ParticipantsSection } from "../../components/sections/ParticipantsSection";
import { SponsorsSection } from "../../components/sections/SponsorsSection";
import { AboutSection } from "../../components/sections/AboutSection";
import { AboutUsSection } from "../../components/sections/AboutUsSection";
import { ContactUsSection } from "../../components/sections/ContactUsSection";

export function HomePage() {
    return (
        <>
            <HeroSection />
            <ParticipantsSection />
            <SponsorsSection />
            <AboutSection />
            <AboutUsSection />
            <ContactUsSection />
        </>
    );
}