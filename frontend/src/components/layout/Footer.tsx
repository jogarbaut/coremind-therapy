const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-light mb-4 tracking-wide">
                            COREMIND
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Where you will find the courage to embrace what
                            makes you you.
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-medium mb-4">Contact</h4>
                        <div className="space-y-2 text-sm text-gray-300">
                            <p>Phone: (555) 123-4567</p>
                            <p>Email: hello@coremindtherapy.com</p>
                            <p>Telehealth sessions available</p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-medium mb-4">
                            Quick Links
                        </h4>
                        <div className="space-y-2 text-sm">
                            <a
                                href="/about"
                                className="block text-gray-300 hover:text-white transition-colors"
                            >
                                About
                            </a>
                            <a
                                href="/services"
                                className="block text-gray-300 hover:text-white transition-colors"
                            >
                                Services
                            </a>
                            <a
                                href="/faqs"
                                className="block text-gray-300 hover:text-white transition-colors"
                            >
                                FAQs
                            </a>
                            <a
                                href="/contact"
                                className="block text-gray-300 hover:text-white transition-colors"
                            >
                                Contact
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-8 text-center">
                    <p className="text-sm text-gray-400">
                        © 2025 CoreMind Therapy. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
