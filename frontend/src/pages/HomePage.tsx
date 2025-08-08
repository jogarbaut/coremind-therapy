// src/pages/HomePage/HomePage.tsx - Updated with hardcoded data
import React from "react"
import Section from "../components/layout/Section"
import FAQsSection from "./sections/FAQsSection"
import ServicesSection from "./sections/ServicesSection"
import SpecialtiesSection, {
    defaultSpecialties,
} from "./sections/SpecialtiesSection"

const HomePage: React.FC = () => {
    return (
        <div>
            {/* HOME SECTION */}
            <Section
                id="home"
                background="white"
                padding="lg"
                className="min-h-screen flex items-center"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Image First on Mobile */}
                    <div className="order-1 md:order-2">
                        <img
                            src="/images/therapy-chair.jpg"
                            alt="Comfortable therapy chair in serene setting"
                            className="w-full rounded-lg max-h-svh"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="order-2 md:order-1 text-center md:text-left">
                        {/* SVG Logo */}
                        <div className="mb-6 md:mb-8">
                            <img
                                src="/images/coremind-therapy-logo.svg"
                                alt="CoreMind Therapy"
                                className="w-full max-w-md mx-auto md:mx-0 h-auto"
                            />
                        </div>
                    </div>
                </div>
            </Section>

            {/* ABOUT SECTION */}
            <Section id="about" background="gray" padding="lg">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 mb-6 md:mb-8 tracking-wide">
                        ABOUT ME
                    </h2>
                </div>

                {/* Intro Text */}
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed mb-6 md:mb-8">
                        Life can be hard. We all get knocked down from time to
                        time, and sometimes it can feel incredibly difficult to
                        get back up. Whether you are feeling lost, lonely, stuck
                        or unsure of your future, there <em>is</em> a path
                        forward for you, one that you do not have to brave
                        alone.
                    </p>
                    <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
                        Rather than avoiding the chaos, let's help you take back
                        control of your own life and stay authentic to yourself
                        even when things get messy. If you are ready to build
                        resilience, discover your voice – who you are and what
                        you want to stand for, and live authentically, you've
                        found the right place.
                    </p>
                </div>

                {/* Bio Section */}
                <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-2 md:gap-12 items-center max-w-6xl mx-auto">
                    {/* Image First on Mobile */}
                    <div className="flex justify-center md:order-2">
                        <img
                            src="/images/kaylin-jones.jpg"
                            alt="Dr. Kaylin Jones, Licensed Clinical Psychologist"
                            className="w-64 md:w-80 h-auto rounded-lg"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="md:order-1">
                        <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                            Welcome! It is such an honor to support you on your
                            mental health journey! I am a licensed clinical
                            psychologist who works with a variety of concerns,
                            including anxiety/stress, depression, interpersonal
                            difficulties, relationship challenges,
                            identity-related concerns, trauma, perfectionism,
                            academic struggles, burnout, and more.
                        </p>

                        <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
                            I am particularly passionate about working with
                            teens and young adults. Life can be chaotic and your
                            world can start to feel like it's spinning out of
                            control with all the changes happening.
                        </p>

                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="text-xl md:text-2xl font-light text-gray-900 mb-2">
                                Kaylin Jones, PhD
                            </h3>
                            <p className="text-gray-600 italic mb-1">She/her</p>
                            <p className="text-gray-600">PSY35169</p>
                        </div>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                        As an Asian American woman, I get how hard it can be to
                        reach out and ask for help. It takes courage and
                        vulnerability to begin. But you do not have to do it
                        alone. With me, therapy won't be about fixing symptoms —
                        it will be about exploring what lies beneath them,
                        honoring everything that makes you you, and helping you
                        to discover your strengths so that you can thrive!
                    </p>
                </div>

                {/* Education & Training - Stacked on Mobile */}
                <div className="mt-16 space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-16 max-w-6xl mx-auto">
                    <div>
                        <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-6 md:mb-8 text-center md:text-left">
                            EDUCATION
                        </h3>
                        <ul className="space-y-4 text-gray-700 text-sm md:text-base">
                            <li>
                                • Doctor of Philosophy (PhD) in Clinical
                                Psychology
                                <br />
                                <span className="text-gray-600">
                                    Palo Alto University
                                </span>
                            </li>
                            <li>
                                • Master of Science (MS) in Clinical Psychology
                                <br />
                                <span className="text-gray-600">
                                    Palo Alto University
                                </span>
                            </li>
                            <li>
                                • Bachelor of Arts (BA) in Psychology and Social
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
                        <ul className="space-y-4 text-gray-700 text-sm md:text-base">
                            <li>
                                • Postdoctoral Psychology Fellowship
                                <br />
                                <span className="text-gray-600">
                                    UC Berkeley Student Mental Health Services
                                </span>
                            </li>
                            <li>
                                • Predoctoral Psychology Internship
                                <br />
                                <span className="text-gray-600">
                                    Washington State University, Counseling and
                                    Psychological Services
                                </span>
                            </li>
                            <li>
                                • Behavioral Health Trainee - Child & Adolescent
                                Track
                            </li>
                            <li>
                                • Asian Americans for Community Involvement
                                (AACI)
                            </li>
                            <li>
                                • Mental Health Trainee
                                <br />
                                <span className="text-gray-600">
                                    San Jose Job Corps, Student Mental Health
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </Section>

            {/* SERVICES SECTION - Now hardcoded */}
            <ServicesSection />

            {/* SPECIALTIES SECTION */}
            <SpecialtiesSection specialties={defaultSpecialties} />

            {/* FAQS SECTION - Now hardcoded */}
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

                        <div className="space-y-4 text-gray-700 mb-8">
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
                        </div>

                        {/* Quick Contact Button for Mobile */}
                        <div className="md:hidden">
                            <a
                                href="tel:(555)123-4567"
                                className="inline-block bg-gray-900 text-white py-4 px-8 rounded-md hover:bg-gray-800 transition-colors text-lg w-full text-center"
                            >
                                Call Now
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
                        <h3 className="text-lg md:text-xl font-medium text-gray-900 mb-6 text-center md:text-left">
                            Send a Message
                        </h3>

                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Name *
                                </label>
                                <input
                                    type="text"
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-transparent text-base"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Email *
                                </label>
                                <input
                                    type="email"
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-transparent text-base"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Phone (optional)
                                </label>
                                <input
                                    type="tel"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-transparent text-base"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Message *
                                </label>
                                <textarea
                                    rows={5}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-transparent text-base resize-none"
                                    placeholder="Tell me a bit about what brings you here today..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gray-900 text-white py-4 px-6 rounded-md hover:bg-gray-800 transition-colors text-lg"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </Section>
        </div>
    )
}

export default HomePage
