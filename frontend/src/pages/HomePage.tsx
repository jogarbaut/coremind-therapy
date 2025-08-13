// src/pages/HomePage/HomePage.tsx
import React from "react"
import Section from "../components/layout/Section"
import FAQsSection from "./sections/FAQsSection"
import ServicesSection from "./sections/ServicesSection"
import SpecialtiesSection, {
    defaultSpecialties,
} from "./sections/SpecialtiesSection"
import Approach from "../components/ui/Approach"
import ContactForm from "../components/forms/ContactForm"

export type TreatmentApproach = {
    id: number
    approach: string
}

const HomePage: React.FC = () => {
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

    const treatmentApproaches: TreatmentApproach[] = [
        {
            id: 1,
            approach: "Acceptance and Commitment Therapy (ACT)",
        },
        {
            id: 2,
            approach: "Cognitive Behavioral Therapy (CBT)",
        },
        {
            id: 3,
            approach: "Compassion-Focused Therapy (CFT)",
        },
        {
            id: 4,
            approach: "Mindfulness",
        },
        {
            id: 5,
            approach: "Culturally-Informed Therapy",
        },
        {
            id: 6,
            approach: "Solution-Focused Therapy",
        },
    ]

    return (
        <div>
            {/* HOME SECTION */}
            <Section
                id="home"
                background="white"
                className="min-h-scree flex items-center"
                padding="none"
            >
                <div className="grid grid-cols-2 gap-8 md:gap-12 items-center h-full">
                    {/* Text Content */}
                    <div className="order-1 text-center md:text-left">
                        {/* SVG Logo */}
                        <div className="flex justify-center items-center">
                            <img
                                src="/images/coremind-therapy-logo.svg"
                                alt="CoreMind Therapy"
                                className="w-full max-w-xl h-auto"
                            />
                        </div>
                    </div>
                    {/* Image First on Mobile */}
                    <div className="order-2 flex justify-center items-center h-full">
                        <img
                            src="/images/therapy-chair.jpg"
                            alt="Comfortable therapy chair in serene setting"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </Section>

            {/* ABOUT SECTION */}
            <Section id="" background="gray" padding="lg">
                {/* Bio Section */}
                <div className="grid grid-cols-[2fr_3fr] gap-4 items-start max-w-6xl mx-auto">
                    {/* Image First on Mobile */}
                    <div className="flex flex-col items-center">
                        <img
                            src="/images/intro-jump.jpg"
                            alt="Dr. Kaylin Jones, Licensed Clinical Psychologist"
                            className="w-full max-h-[40vh] object-contain rounded-lg"
                            loading="lazy"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="">
                        <h1 className="text-2xl text-gray-800 leading-relaxed mb-4">
                            Welcome to Coremind Therapy!
                        </h1>
                        <p className="text-lg text-gray-800 leading-relaxed mb-4">
                            Where you will find the courage to embrace what
                            makes you, you?
                        </p>

                        <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                            Life can be hard. We all get knocked down from time
                            to time. But sometimes, it can feel like we're
                            drowning in responsibilities and expectations.
                            Whether you are feeling lost, lonely, stuck, or
                            unsure of your future, there is a path forward for
                            you, one that you do not have to brave alone.
                        </p>

                        <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                            It's easy to feel like you're losing yourself and
                            become disconnected when everything around you gets
                            loud and overwhelming whether that be work, school,
                            friends, family, social media, etc. But what if it
                            didn't have to be that way? What if you can find
                            purpose in what you do and not just manage to get
                            through the day? What if you can build resilience so
                            the setbacks don't knock you down so hard? And what
                            if you can find the courage to stay true to yourself
                            even when it feels hard and scary? We are here to
                            help you find your direction!
                        </p>
                        <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-24">
                            Rather than avoiding the chaos, let's help you take
                            back control of your own life. Let's help you
                            discover your voice - who you are and what you stand
                            for - and find ways to show up as your authentic
                            self even when things gets messy.
                        </p>
                    </div>
                </div>

                {/* Bio Section */}
                <div className="grid grid-cols-[2fr_3fr] gap-4 items-start max-w-6xl mx-auto">
                    {/* Image First on Mobile */}
                    <div className="flex flex-col col- items-center">
                        <div className="text-center">
                            <h2 className="text-xl sm:text-4xl md:text-5xl font-light text-gray-900 mb-6 md:mb-8 tracking-wide">
                                ABOUT ME
                            </h2>
                        </div>
                        <img
                            src="/images/kaylin-jones.png"
                            alt="Dr. Kaylin Jones, Licensed Clinical Psychologist"
                            className="w-full max-h-[40vh] object-contain rounded-lg"
                            loading="lazy"
                        />
                        <div className="text-center mt-4">
                            <h3 className="text-lg font-light text-gray-900">
                                Kaylin Jones, PhD
                            </h3>
                            <p className="text-gray-600 italic mb-1">She/her</p>
                            <p className="text-gray-600">PSY35169</p>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="">
                        <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                            Welcome! It is such an honor to support you on your
                            mental health journey! I am a licensed clinical
                            psychologist who works with a variety of concerns,
                            including anxiety/stress, depression, relationship
                            challenges, identity concerns, trauma,
                            perfectionism, academic struggles, burnout, and
                            more.
                        </p>

                        <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
                            Though I work with individuals across the lifespan,
                            I am particularly passionate about working with
                            teens and young adults. As if life weren't hard
                            enough, so many changes and transitions happen
                            during this time that can easily make your world
                            feel like it's spinning out of control. If you're
                            looking for a safe space to discover and express
                            yourself while also building a strong foundation for
                            your future, you're in the right place.
                        </p>

                        <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
                            As an Asian American woman, I get how hard it can be
                            to reach out and ask for help. I commend you for
                            your courage and vulnerability to show up. With me,
                            therapy won't be about fixing symptoms — it will be
                            about exploring what is beneath them, honoring
                            everything that makes you, you, and helping you to
                            discover your strengths so that you can thrive! Your
                            story — your background, your beliefs, your
                            struggles — matters. I am devoted to meeting you
                            where you are and listening with empathy and
                            respect. Whether you're dealing with life
                            transitions, family pressure, perfectionism,
                            relationship struggles, past traumas, or just
                            wanting to develop more self-awareness, this is a
                            place that sees you and accepts you.
                        </p>
                    </div>
                </div>

                {/* SPECIALTIES SECTION */}
                <SpecialtiesSection specialties={defaultSpecialties} />

                {/* Treatment Approaches */}
                <div className="grid grid-cols-[3fr_2fr] gap-12 items-start max-w-3xl mx-auto my-12">
                    <div className="flex flex-col">
                        <div className="text-center">
                            <h2 className="text-3xl font-light text-gray-900 mb-6 md:mb-8 tracking-wide">
                                TREATMENT APPROACHES
                            </h2>
                        </div>
                        <div className="flex flex-col space-y-4 mx-auto">
                            {treatmentApproaches.map((approach) => (
                                <Approach>{approach.approach}</Approach>
                            ))}
                        </div>
                    </div>

                    {/* Image First on Mobile */}
                    <div className="flex flex-col items-center">
                        <img
                            src="/images/treatment-approaches.jpg"
                            alt="Roadway"
                            className="w-full max-h-[80vh] object-contain"
                            loading="lazy"
                        />
                    </div>
                </div>

                {/* Education & Training - Stacked on Mobile */}
                <div className="mt-16 space-y-12 grid grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <div>
                        <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-6 md:mb-8 text-center md:text-left">
                            EDUCATION
                        </h3>
                        <ul className="list-disc pl-4 space-y-4 text-gray-700 text-sm md:text-base">
                            <li>
                                Doctor of Philosophy (PhD) in Clinical
                                Psychology
                                <br />
                                <span className="text-gray-600">
                                    Palo Alto University
                                </span>
                            </li>
                            <li>
                                Master of Science (MS) in Clinical Psychology
                                <br />
                                <span className="text-gray-600">
                                    Palo Alto University
                                </span>
                            </li>
                            <li>
                                Bachelor of Arts (BA) in Psychology and Social
                                Behavior
                                <br />
                                <span className="text-gray-600">
                                    University of California, Irvine
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-6 md:mb-8 text-center md:text-left">
                            TRAINING
                        </h3>
                        <ul className="list-disc pl-4 space-y-4 text-gray-700 text-sm md:text-base">
                            <li>
                                Postdoctoral Psychology Fellowship
                                <br />
                                <span className="text-gray-600">
                                    UC Berkeley Student Mental Health Services
                                </span>
                            </li>
                            <li>
                                Predoctoral Psychology Internship
                                <br />
                                <span className="text-gray-600">
                                    Washington State University, Counseling and
                                    Psychological Services
                                </span>
                            </li>
                            <li>
                                Behavioral Health Trainee - Child & Adolescent
                                Track
                            </li>
                            <li>
                                Asian Americans for Community Involvement (AACI)
                            </li>
                            <li>
                                Mental Health Trainee
                                <br />
                                <span className="text-gray-600">
                                    San Jose Job Corps, Student Mental Health
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </Section>

            {/* SERVICES SECTION */}
            <ServicesSection />

            {/* FAQS SECTION  */}
            <FAQsSection />

            {/* CONTACT SECTION */}
            <Section id="contact" background="gray" padding="lg">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 tracking-wide">
                        CONTACT
                    </h2>
                </div>

                <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-2 md:gap-12 max-w-4xl mx-auto">
                    {/* Contact Info */}
                    <div className="text-center md:text-left">
                        <h3 className="text-xl md:text-2xl font-light text-gray-900 mb-6 md:mb-8">
                            Get Started
                        </h3>
                        <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 md:mb-8">
                            Ready to take the first step? We offer a free
                            15-minute initial phone consultation to help you get
                            started and determine if we're the right fit for
                            your needs.
                        </p>

                        {/* <div className="space-y-4 text-gray-700 mb-8">
                            <p className="text-lg">
                                <strong>Phone:</strong> (555) 123-4567
                            </p>
                            <p className="text-lg">
                                <strong>Email:</strong>{" "}
                                hello@coremindtherapy.com
                            </p>
                            <p className="text-lg">
                                <strong>Location:</strong> Telehealth sessions
                                available
                            </p>
                        </div> */}

                        {/* Quick Contact Button for Mobile */}
                        {/* <div className="md:hidden">
                            <a
                                href="tel:(555)123-4567"
                                className="inline-block bg-gray-900 text-white py-4 px-8 rounded-md hover:bg-gray-800 transition-colors text-lg w-full text-center"
                            >
                                Call Now
                            </a>
                        </div> */}
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
                        <h3 className="text-lg md:text-xl font-medium text-gray-900 mb-6 text-center md:text-left">
                            Send a Message
                        </h3>
                        <ContactForm />
                    </div>
                </div>
            </Section>
        </div>
    )
}

export default HomePage
