import Section from "../../components/layout/Section"

const HeroSection = () => {
    return (
        <Section
            id="home"
            background="white"
            padding="none"
            layout="default"
            className="min-h-[60vh]"
            containerClassName="grid grid-cols-2 items-center h-full"
        >
            {/* Left:  */}
            <div className="order-1 flex items-center justify-center text-center md:text-left">
                <div className="w-full">
                    <img
                        src="/images/coremind-therapy-logo.svg"
                        alt="CoreMind Therapy logo"
                        className="w-full max-w-xl mx-auto h-auto"
                        loading="eager"
                    />
                    <h1 className="sr-only">CoreMind Therapy</h1>
                </div>
            </div>

            {/* Right: Hero image */}
            <div className="order-2">
                <img
                    src="/images/therapy-chair.jpg"
                    alt="Comfortable therapy chair in a serene setting"
                    className="w-full h-full object-cover"
                    loading="lazy"
                />
            </div>
        </Section>
    )
}

export default HeroSection
