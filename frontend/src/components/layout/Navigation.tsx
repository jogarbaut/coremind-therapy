import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

const Navigation = () => {
    // State for Navigation Bar functionality
    const [isOpen, setIsOpen] = useState(false)
    const [activeSection, setActiveSection] = useState("home")

    // Navigation items
    const navItems = [
        { id: "home", label: "HOME" },
        { id: "about", label: "ABOUT" },
        { id: "specialties", label: "SPECIALTIES" },
        { id: "services", label: "SERVICES" },
        { id: "faqs", label: "FAQS" },
        { id: "contact", label: "CONTACT" },
    ]

    // Smooth scroll to section
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            })
        }
        setIsOpen(false) // Close mobile menu
    }

    // Track active section on scroll
    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map((item) => item.id)
            const scrollPosition = window.scrollY + 100 // Offset for navbar height

            for (const sectionId of sections.reverse()) {
                const element = document.getElementById(sectionId)
                if (element && element.offsetTop <= scrollPosition) {
                    setActiveSection(sectionId)
                    break
                }
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
    return (
        <nav className="bg-white sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`text-sm font-medium tracking-wide transition-colors hover:text-gray-600 ${
                                    activeSection === item.id
                                        ? "text-gray-900 border-b-2 border-gray-900 pb-1"
                                        : "text-gray-700"
                                }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                    {/* Logo */}
                    <button
                        onClick={() => scrollToSection("home")}
                        className="text-xl md:text-2xl font-light text-gray-900 tracking-wide hover:text-gray-600 transition-colors"
                    >
                        COREMIND THERAPY
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden p-2 text-gray-700 hover:text-gray-900 focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation Menu */}
                {isOpen && (
                    <div className="md:hidden border-t border-gray-200 bg-white">
                        <div className="py-4 space-y-4">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`block w-full text-left text-base font-medium tracking-wide transition-colors hover:text-gray-600 ${
                                        activeSection === item.id
                                            ? "text-gray-900 font-semibold"
                                            : "text-gray-700"
                                    }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navigation
