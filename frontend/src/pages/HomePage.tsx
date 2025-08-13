import FAQsSection from "./sections/FAQsSection"
import ServicesSection from "./sections/ServicesSection"
import SpecialtiesSection, {
    defaultSpecialties,
} from "./sections/SpecialtiesSection"
import HeroSection from "./sections/HeroSection"
import AboutSection from "./sections/AboutSection"
import BioSection from "./sections/BioSection"
import TreatmentApproachesSection from "./sections/TreatmentApproachesSection"
import EducationTrainingSection from "./sections/EducationTrainingSection"
import ContactSection from "./sections/ContactSection"

export type TreatmentApproach = {
    id: number
    approach: string
}

const HomePage = () => {
    ;<script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
            __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Therapist",
                name: "CoreMind Therapy",
                url: "coremind-therapy.com",
                email: "kjones@coremind-therapy.com",
                areaServed: "California",
            }),
        }}
    />

    return (
        <div>
            <HeroSection />
            <AboutSection />
            <BioSection />
            <TreatmentApproachesSection />
            <SpecialtiesSection specialties={defaultSpecialties} />
            <EducationTrainingSection />
            <ServicesSection />
            <FAQsSection />
            <ContactSection />
        </div>
    )
}

export default HomePage
