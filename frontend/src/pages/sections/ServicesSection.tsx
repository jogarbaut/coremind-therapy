// src/components/sections/ServicesSection/ServicesSection.tsx
import React from "react"
import Section from "../../components/layout/Section"

interface Service {
    id: number
    title: string
    duration?: string
    description: string
    notes?: string
    is_featured: boolean
}

const ServicesSection: React.FC = () => {
    const services: Service[] = [
        {
            id: 1,
            title: "FREE INITIAL PHONE CONSULTATION",
            duration: "10-15 minutes",
            description: "",
            is_featured: false,
        },
        {
            id: 2,
            title: "INDIVIDUAL THERAPY",
            duration: "50 minutes",
            description:
                "One-on-one therapy sessions focused on helping you address your personal needs and achieve your goals",
            notes: "",
            is_featured: false,
        },
        {
            id: 3,
            title: "THERAPY FOR YOUNG ADULTS",
            duration: "50 minutes",
            description:
                "Specialized therapy oriented toward supporting you in finding yourself and navigating life's challenges during a pivotal stage of life",
            notes: "",
            is_featured: false,
        },
        {
            id: 4,
            title: "THERAPY FOR TEENS",
            duration: "50 minutes",
            description:
                "Specialized and developmentally-appropriate therapy for teens working through challenges unique to adolesence",
            notes: "",
            is_featured: false,
        },
    ]

    return (
        <Section id="services" background="white" padding="lg">
            <div className="grid grid-cols-[3fr_2fr] gap-4 items-center max-w-6xl mx-auto">
                {/* Services List */}
                <div>
                    <div className="mb-8">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 tracking-wide text-center md:text-left">
                            SERVICES
                        </h2>
                        <p className="text-sm text-gray-600 italic">
                            * Sessions are exclusively offered via telehealth at
                            this time
                        </p>
                        <p className="text-sm text-gray-600 italic">
                            * Evening session times offered based on
                            availability
                        </p>
                    </div>

                    <div className="space-y-4">
                        {services.map((service) => (
                            <div
                                key={service.id}
                                className="border-b border-gray-100 pb-6"
                            >
                                <h3 className="text-lg md:text-xl font-medium text-gray-900 mb-2">
                                    {service.title}
                                    {service.duration && (
                                        <span className="font-normal text-gray-600 ml-2">
                                            ({service.duration})
                                        </span>
                                    )}
                                    {service.is_featured && (
                                        <span className="ml-2 inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                                            Featured
                                        </span>
                                    )}
                                </h3>
                                <p className="text-gray-700 leading-relaxed mb-2">
                                    {service.description}
                                </p>
                                {service.notes && (
                                    <p className="text-sm text-gray-600 italic">
                                        {service.notes}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Image */}
                <div className="">
                    <img
                        src="/images/services-plant.jpg"
                        alt="Comfortable therapy chair in serene setting"
                        className="w-full h-auto"
                    />
                </div>
            </div>
        </Section>
    )
}

export default ServicesSection
