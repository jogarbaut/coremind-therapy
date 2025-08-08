import React from "react"
import Section from "../../components/layout/Section"
import { useServices } from "../../hooks/useServices"
import Button from "../../components/ui/Button"

const ServicesSection: React.FC = () => {
    const { services, loading, error } = useServices()

    if (loading) {
        return (
            <Section id="services" background="white" padding="lg">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 mb-12 tracking-wide text-center">
                        SERVICES
                    </h2>
                    <div className="flex justify-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
                    </div>
                </div>
            </Section>
        )
    }

    if (error) {
        return (
            <Section id="services" background="white" padding="lg">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 mb-12 tracking-wide">
                        SERVICES
                    </h2>
                    <p className="text-red-600 mb-4">
                        Error loading services: {error}
                    </p>
                    <button
                        onClick={() => window.location.reload()}
                        className="bg-gray-900 text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors"
                    >
                        Try Again
                    </button>
                </div>
            </Section>
        )
    }

    if (!services || !Array.isArray(services) || services.length === 0) {
        return (
            <Section id="services" background="white" padding="lg">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 mb-12 tracking-wide">
                        SERVICES
                    </h2>
                    <p className="text-gray-600">
                        No services available at this time.
                    </p>
                </div>
            </Section>
        )
    }

    return (
        <Section id="services" background="white" padding="lg">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                {/* Services List */}
                <div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 mb-12 tracking-wide text-center md:text-left">
                        SERVICES
                    </h2>

                    <div className="space-y-8">
                        {services.map((service) => {
                            // In Strapi v5, data is flattened - no .attributes needed!
                            const {
                                title,
                                duration,
                                description,
                                notes,
                                is_featured,
                            } = service

                            return (
                                <div
                                    key={service.id}
                                    className="border-b border-gray-200 pb-6"
                                >
                                    <h3 className="text-lg md:text-xl font-medium text-gray-900 mb-2">
                                        {title}
                                        {duration && (
                                            <span className="font-normal text-gray-600 ml-2">
                                                ({duration})
                                            </span>
                                        )}
                                        {is_featured && (
                                            <span className="ml-2 inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                                                Featured
                                            </span>
                                        )}
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed mb-2">
                                        {description}
                                    </p>
                                    {notes && (
                                        <p className="text-sm text-gray-600 italic">
                                            {notes}
                                        </p>
                                    )}
                                </div>
                            )
                        })}
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
                        <Button
                            onClick={() =>
                                document
                                    .getElementById("contact")
                                    ?.scrollIntoView({ behavior: "smooth" })
                            }
                            className="bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors"
                        >
                            Schedule Consultation
                        </Button>
                    </div>
                </div>

                {/* Image */}
                <div className="order-first md:order-last">
                    <img
                        src="/images/services-plant.jpg"
                        alt="Green plant in a dark room"
                        className="w-full h-auto rounded-lg"
                    />
                </div>
            </div>
        </Section>
    )
}

export default ServicesSection
