import Section from "../../components/layout/Section"

const AboutSection = () => {
    return (
        <Section id="about" background="gray" padding="lg" layout="twoCol">
            {/* Intro row */}
            <div className="flex items-center justify-center text-center md:text-left">
                <div className="w-full">
                    <img
                        src="/images/intro-jump.jpg"
                        alt="CoreMind Therapy logo"
                        className="w-full max-w-xs mx-auto h-auto"
                        loading="eager"
                    />
                </div>
            </div>
            <div className="space-y-6 max-w-6xl mx-auto">
                <h2 className="sm:text-4xl md:text-2xl font-light text-gray-900 tracking-wide text-center">
                    WELCOME TO COREMIND THERAPY!
                </h2>
                <p className="text-lg text-gray-800 leading-relaxed mb-4">
                    Where you will find the courage to embrace what makes you,
                    you.
                </p>

                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                    Life can be hard. We all get knocked down from time to time.
                    But sometimes, it can feel like we're drowning in
                    responsibilities and expectations. Whether you are feeling
                    lost, lonely, stuck, or unsure of your future, there is a
                    path forward for you, one that you do not have to brave
                    alone.
                </p>

                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                    It's easy to feel like you're losing yourself and become
                    disconnected when everything around you gets loud and
                    overwhelming whether that be work, school, friends, family,
                    social media, etc. But what if it didn't have to be that
                    way? What if you can find purpose in what you do and not
                    just manage to get through the day? What if you can build
                    resilience so the setbacks don't knock you down so hard? And
                    what if you can find the courage to stay true to yourself
                    even when it feels hard and scary? We are here to help you
                    find your direction!
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                    Rather than avoiding the chaos, let's help you take back
                    control of your own life. Let's help you discover your voice
                    - who you are and what you stand for - and find ways to show
                    up as your authentic self even when things gets messy.
                </p>
            </div>
        </Section>
    )
}

export default AboutSection
