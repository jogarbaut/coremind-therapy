import React from "react"
import Section from "../../components/layout/Section"
import { useFAQs } from "../../hooks/useFAQ"

const FAQsSection: React.FC = () => {
    const { faqs, loading, error } = useFAQs()

    if (loading) {
        return (
            <Section id="faqs" background="white" padding="lg">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 tracking-wide text-center mb-12">
                        FAQ'S
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
            <Section id="faqs" background="white" padding="lg">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 tracking-wide mb-12">
                        FAQ'S
                    </h2>
                    <p className="text-red-600 mb-4">
                        Error loading FAQs: {error}
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

    return (
        <Section id="faqs" background="white" padding="lg">
            <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 tracking-wide">
                    FAQ'S
                </h2>
            </div>

            <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-2 md:gap-12 items-start max-w-6xl mx-auto">
                {/* FAQs */}
                <div className="space-y-8 md:space-y-12">
                    {faqs.length === 0 ? (
                        <p className="text-gray-600 text-center">
                            No FAQs available at this time.
                        </p>
                    ) : (
                        faqs.map((faq) => {
                            // In Strapi v5, data is flattened - no .attributes needed!
                            const { question, answer, category } = faq

                            return (
                                <div
                                    key={faq.id}
                                    className="border-b border-gray-200 pb-6"
                                >
                                    <h3 className="text-lg md:text-xl font-medium text-gray-900 mb-4 italic">
                                        {question}
                                        {category && (
                                            <span className="ml-2 inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                                                {category}
                                            </span>
                                        )}
                                    </h3>
                                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                                        {answer}
                                    </p>
                                </div>
                            )
                        })
                    )}
                </div>

                {/* Image - Hidden on mobile, shown on desktop */}
                <div className="hidden md:flex justify-center">
                    <div className="w-80 h-80 rounded-full overflow-hidden">
                        <img
                            src="/images/hands.jpg"
                            alt="Hands reaching for each other"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default FAQsSection
