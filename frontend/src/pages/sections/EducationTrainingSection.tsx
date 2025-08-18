import Section from "../../components/layout/Section"

const EducationTrainingSection = () => {
    return (
        <Section id="education" background="gray" padding="lg">
            <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div>
                    <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-6 text-center md:text-left">
                        EDUCATION
                    </h2>
                    <ul className="list-disc pl-4 space-y-4 text-gray-700 text-sm md:text-base">
                        <li>
                            Doctor of Philosophy (PhD) in Clinical Psychology
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
                    <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-6 text-center md:text-left">
                        TRAINING
                    </h2>
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
                                Washington State University, CAPS
                            </span>
                        </li>
                        <li>
                            Behavioral Health Trainee — Child & Adolescent Track
                            <br />
                            <span className="text-gray-600">
                                Asian Americans for Community Involvement (AACI)
                            </span>
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
    )
}

export default EducationTrainingSection
