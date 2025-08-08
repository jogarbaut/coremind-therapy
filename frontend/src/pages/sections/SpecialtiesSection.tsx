import Section from "../../components/layout/Section"

// This defines what each specialty item looks like
interface Specialty {
    id: number
    title: string
    subtitle?: string
    image: string
    alt: string
}

interface SpecialtiesProps {
    title?: string
    specialties: Specialty[]
}

// The main component that creates the circular image grid
const SpecialtiesSection = ({
    title = "SPECIALTIES",
    specialties,
}: SpecialtiesProps) => {
    return (
        <Section background="cream" padding="xl" id="specialties">
            <div className="text-center">
                {/* Section Title */}
                <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-16 tracking-wide">
                    {title}
                </h2>

                {/* Grid of circular images with labels */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12">
                    {specialties.map((specialty) => (
                        <div
                            key={specialty.id}
                            className="flex flex-col items-center"
                        >
                            {/* Circular Image */}
                            <div className="w-24 h-24 md:w-32 md:h-32 mb-4 rounded-full overflow-hidden">
                                <img
                                    src={specialty.image}
                                    alt={specialty.alt}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Text Labels */}
                            <div className="text-center">
                                <h3 className="text-sm md:text-base font-medium text-gray-900 leading-tight">
                                    {specialty.title}
                                </h3>
                                {specialty.subtitle && (
                                    <p className="text-xs md:text-sm text-gray-600 mt-1">
                                        {specialty.subtitle}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    )
}

export default SpecialtiesSection

// Sample data
export const defaultSpecialties: Specialty[] = [
    {
        id: 1,
        title: "Adjustment",
        subtitle: "Stress Anxiety",
        image: "/images/specialties/adjustment.jpg",
        alt: "Person experiencing adjustment stress",
    },
    {
        id: 2,
        title: "Depression",
        subtitle: "",
        image: "/images/specialties/depression.jpg",
        alt: "Person dealing with depression",
    },
    {
        id: 3,
        title: "Identity",
        subtitle: "development",
        image: "/images/specialties/identity.jpg",
        alt: "Person exploring identity",
    },
    {
        id: 4,
        title: "Teens",
        subtitle: "Young adults Adults",
        image: "/images/specialties/teens.jpg",
        alt: "Group of teenagers",
    },
    {
        id: 5,
        title: "Asian American",
        subtitle: "mental health",
        image: "/images/specialties/asian-american.jpg",
        alt: "Asian American mental health support",
    },
]
