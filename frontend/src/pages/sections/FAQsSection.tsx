import React from "react"
import Section from "../../components/layout/Section"

interface FAQ {
    id: number
    question: string
    answer: string
    category?: string
}

const FAQsSection: React.FC = () => {
    const faqs: FAQ[] = [
        {
            id: 1,
            question: "WHAT ARE YOUR FEES?",
            answer: "We offer a free 15-minute initial phone consultation to help get you started and figure out whether we are the best for you. During that phone consultation, fees will be discussed in greater detail. It is our hope that fees do not stand in the way of you getting the support you desire and need.",
            category: "Payment",
        },
        {
            id: 2,
            question: "DO YOU TAKE INSURANCE?",
            answer: "We are an out-of-network provider, meaning that we do not bill services directly to your insurance carrier. However, many health insurance companies provide partial reimbursement for services. We can offer a superbill to support your claim to your insurance. We encourage you to contact your insurance provider before we meet to ask: 1) Do I have out-of-network benefits for mental health services? 2) What is the rate of reimbursement? 3) How many sessions are covered? 4) Is there a deductible I must meet first?",
            category: "Payment",
        },
        {
            id: 3,
            question: "HOW IS PAYMENT ACCEPTED?",
            answer: "Payments are completed through Ivy Pay, a HIPAA-compliant app to protect your private information. Acceptable forms of payment include debit cards, credit cards, HSA's and FSA's.",
            category: "Payment",
        },
        {
            id: 4,
            question: "DO YOU OFFER EVENING SESSIONS?",
            answer: "Yes, we do offer evening session times. Please inquire for availability.",
            category: "Sessions",
        },
        {
            id: 5,
            question: "HOW FREQUENT ARE SESSIONS?",
            answer: "Most clients start on a weekly schedule and transition to biweekly as they stabilize. Session frequency may also vary based on schedule and need.",
            category: "Sessions",
        },
    ]

    return (
        <Section id="faqs" background="white" padding="lg">
            <div className="space-y-8 md:space-y-0 grid grid-cols-[1fr_4fr] gap-8 items-start max-w-6xl mx-auto">
                {/* FAQs */}

                {/* Image - Hidden on mobile, shown on desktop */}
                <div className="items-center flex">
                    <div className="w-80 h-80 rounded-full overflow-hidden">
                        <img
                            src="/images/hands.jpg"
                            alt="Hands holding coffee cup"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                <div className="space-y-2">
                    <div className="text-center mb-4">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 tracking-wide">
                            FAQ'S
                        </h2>
                    </div>
                    {faqs.map((faq) => (
                        <div
                            key={faq.id}
                            className="border-b border-gray-100 pb-4"
                        >
                            <h3 className="text-lg md:text-xl font-medium text-gray-900 mb-4 italic">
                                {faq.question}
                                {faq.category && (
                                    <span className="ml-2 inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                                        {faq.category}
                                    </span>
                                )}
                            </h3>
                            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                                {faq.answer}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    )
}

export default FAQsSection
