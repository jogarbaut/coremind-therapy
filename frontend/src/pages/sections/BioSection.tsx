const BioSection = () => {
    return (
        <div className="my-24 grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-4 items-start max-w-6xl mx-auto p-4">
            <div className="flex flex-col items-center">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 tracking-wide text-center md:text-left mb-4">
                    ABOUT ME
                </h3>
                <img
                    src="/images/kaylin-jones.png"
                    alt="Dr. Kaylin Jones, Licensed Clinical Psychologist"
                    className="w-full max-h-[40vh] object-contain rounded-lg"
                    loading="lazy"
                />
                <div className="text-center mt-4">
                    <p className="text-lg font-light text-gray-900">
                        Kaylin Jones, PhD
                    </p>
                    <p className="text-gray-600 italic mb-1">she/her</p>
                    <p className="text-gray-600">PSY35169</p>
                </div>
            </div>

            <div>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                    It is such an honor to support you on your mental health
                    journey! I am a licensed clinical psychologist who works
                    with a variety of concerns, including anxiety/stress,
                    depression, relationship challenges, identity concerns,
                    trauma, perfectionism, academic struggles, burnout, and
                    more.
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                    Though I work with individuals across the lifespan, I am
                    particularly passionate about working with teens and young
                    adults. As if life weren't hard enough, so much goes on
                    during this time that can easily make your world feel like
                    it's spinning out of control. If you're looking for a safe
                    space to discover and express yourself while also building a
                    strong foundation for your future, you're in the right
                    place.
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    As an Asian American woman, I get how hard it can be to
                    reach out and ask for help. With me, therapy isn't be about
                    fixing symptoms — it's about exploring what is beneath them,
                    honoring everything that makes you,{" "}
                    <span className="italic">you</span>, and helping you to
                    discover your strengths so that you can thrive! Your story —
                    your background, your beliefs, your struggles — matters.
                    Whether you're dealing with life transitions, interpersonal
                    issues, perfectionism, past traumas, or just wanting to
                    develop more self-awareness, this is a place that supports
                    you.
                </p>
            </div>
        </div>
    )
}

export default BioSection
