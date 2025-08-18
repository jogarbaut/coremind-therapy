import Section from "../../components/layout/Section"
import ContactForm from "../../components/forms/ContactForm"

const ContactSection = () => {
    return (
        <Section id="contact" background="gray" padding="lg">
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 tracking-wide">
                    CONTACT
                </h2>
            </div>

            <div className="max-w-2xl mx-auto">
                <div className="text-center md:text-left my-6">
                    <p className="mt-3 text-gray-700 text-center">
                        Ready to take the first step? We offer a free 15-minute
                        initial phone consultation to help you get started and
                        determine if we're the right fit for your needs.
                    </p>
                </div>

                <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
                    <h3 className="text-lg md:text-xl font-medium text-gray-900 mb-6 text-center md:text-left">
                        Send a Message
                    </h3>
                    <ContactForm />
                </div>
            </div>
        </Section>
    )
}

export default ContactSection
