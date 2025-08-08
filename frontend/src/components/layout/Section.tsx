import type { ReactNode } from "react"

interface SectionProps {
    children: ReactNode
    className?: string
    background?: "white" | "gray" | "cream"
    padding?: "sm" | "md" | "lg" | "xl"
    maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full"
    id?: string
}

const Section = ({
    children,
    className = "",
    background = "white",
    padding = "lg",
    maxWidth = "2xl",
    id,
}: SectionProps) => {
    const backgroundClasses: Record<typeof background, string> = {
        white: "bg-white",
        gray: "bg-gray-50",
        cream: "bg-orange-50",
    }

    const paddingClasses: Record<typeof padding, string> = {
        sm: "py-8 px-4",
        md: "py-12 px-4",
        lg: "py-16 px-4",
        xl: "py-24 px-4",
    }

    const maxWidthClasses: Record<typeof maxWidth, string> = {
        sm: "max-w-2xl",
        md: "max-w-4xl",
        lg: "max-w-6xl",
        xl: "max-w-7xl",
        "2xl": "max-w-7xl",
        full: "max-w-none",
    }

    return (
        <section
            id={id}
            className={`${backgroundClasses[background]} ${paddingClasses[padding]} ${className}`}
        >
            <div className={`mx-auto ${maxWidthClasses[maxWidth]}`}>
                {children}
            </div>
        </section>
    )
}

export default Section
