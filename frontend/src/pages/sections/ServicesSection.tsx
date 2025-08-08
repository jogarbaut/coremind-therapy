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
            description:
                "Get started with a complimentary consultation to determine if we're the right fit for your needs.",
            is_featured: true,
        },
        {
            id: 2,
            title: "INDIVIDUAL THERAPY",
            duration: "50 minutes",
            description:
                "One-on-one therapy sessions focused on your unique needs and goals.",
            notes: "Sessions are exclusively offered via telehealth at this time.",
            is_featured: false,
        },
        {
            id: 3,
            title: "THERAPY FOR TEENS",
            duration: "50 minutes",
            description:
                "Specialized therapy for teenagers navigating the challenges of adolescence.",
            notes: "*Evening session times offered based on availability. Sessions are exclusively offered via telehealth at this time.",
            is_featured: false,
        },
    ]

    return (
        <Section id="services" background="white" padding="lg">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                {/* Services List */}
                <div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 mb-12 tracking-wide text-center md:text-left">
                        SERVICES
                    </h2>

                    <div className="space-y-8">
                        {services.map((service) => (
                            <div
                                key={service.id}
                                className="border-b border-gray-200 pb-6"
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

                    {/* Call to Action */}
                    <div className="mt-12 p-6 bg-gray-50 rounded-lg">
                        <h3 className="text-xl font-medium text-gray-900 mb-4">
                            Ready to Get Started?
                        </h3>
                        <p className="text-gray-700 mb-4">
                            Take the first step towards better mental health
                            with our free consultation.
                        </p>
                        <button
                            onClick={() =>
                                document
                                    .getElementById("contact")
                                    ?.scrollIntoView({ behavior: "smooth" })
                            }
                            className="bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors"
                        >
                            Schedule Consultation
                        </button>
                    </div>
                </div>

                {/* Image */}
                <div className="order-first md:order-last">
                    <img
                        src="/images/therapy-chair.jpg"
                        alt="Comfortable therapy chair in serene setting"
                        className="w-full h-auto rounded-lg"
                    />
                </div>
            </div>
        </Section>
    )
}

export default ServicesSection
