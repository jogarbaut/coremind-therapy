import type { ReactNode } from "react"

interface Props {
    id?: string
    children: ReactNode
    className?: string
    containerClassName?: string
    background?: "white" | "gray" | "cream"
    padding?: "sm" | "md" | "lg" | "xl" | "none"
    maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full"
    layout?: "default" | "twoCol"
}

const Section = ({
    id,
    children,
    className = "",
    containerClassName = "",
    background = "white",
    padding = "lg",
    maxWidth = "2xl",
    layout = "default",
}: Props) => {
    const backgroundClasses: Record<typeof background, string> = {
        white: "bg-tahiti-vanilla",
        gray: "bg-sweet-cream",
        cream: "bg-orange-50",
    }

    const paddingClasses: Record<typeof padding, string> = {
        sm: "py-8 px-4",
        md: "py-12 px-4",
        lg: "py-16 px-4",
        xl: "py-24 px-4",
        none: "px-0 py-0",
    }

    const maxWidthClasses: Record<typeof maxWidth, string> = {
        sm: "max-w-2xl",
        md: "max-w-4xl",
        lg: "max-w-6xl",
        xl: "max-w-7xl",
        "2xl": "max-w-7xl",
        full: "max-w-none",
    }

    // Mobile design
    const layoutClasses =
        layout == "twoCol"
            ? "grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
            : ""

    return (
        <section
            id={id}
            className={`${backgroundClasses[background]} ${paddingClasses[padding]} ${className}`}
        >
            <div
                className={`mx-auto ${maxWidthClasses[maxWidth]} ${layoutClasses} ${containerClassName}`}
            >
                {children}
            </div>
        </section>
    )
}

export default Section
