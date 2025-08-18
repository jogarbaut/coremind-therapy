import Section from "../../components/layout/Section"
import Approach from "../../components/ui/Approach"

const approaches = [
    "Acceptance and Commitment Therapy (ACT)",
    "Cognitive Behavioral Therapy (CBT)",
    "Compassion-Focused Therapy (CFT)",
    "Mindfulness",
    "Culturally-Informed Therapy",
    "Solution-Focused Therapy",
]

const TreatmentApproachesSection = () => {
    return (
        <Section
            id="approaches"
            background="gray"
            padding="lg"
            layout="twoCol"
            containerClassName="max-w-2xl mx-auto my-12 items-start"
        >
            <div>
                <h2 className="text-3xl font-light text-gray-900 mb-6 md:mb-8 tracking-wide text-center">
                    TREATMENT APPROACHES
                </h2>
                <div className="flex flex-col space-y-4 mx-auto items-center w-full">
                    {approaches.map((a) => (
                        <Approach key={a}>{a}</Approach>
                    ))}
                </div>
            </div>
            <div className="flex items-center justify-center text-center md:text-left">
                <div className="w-full">
                    <img
                        src="/images/treatment-approaches.jpg"
                        alt="Open road symbolizing therapeutic journey"
                        className="w-full max-w-md mx-auto h-auto object-cover"
                        loading="lazy"
                    />
                </div>
            </div>
        </Section>
    )
}

export default TreatmentApproachesSection
