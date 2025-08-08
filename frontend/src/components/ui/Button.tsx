// src/components/ui/Button/Button.tsx
import React, { type ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline"
    size?: "sm" | "md" | "lg"
    children: React.ReactNode
    className?: string
}

const Button: React.FC<ButtonProps> = ({
    variant = "primary",
    size = "md",
    children,
    className = "",
    ...props
}) => {
    const baseClasses =
        "font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"

    const variantClasses = {
        primary: "bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-500",
        secondary:
            "bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-500",
        outline:
            "border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white focus:ring-gray-500",
    }

    const sizeClasses = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    }

    const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    )
}

export default Button

// src/components/ui/Button/index.ts
export { default as Button } from "./Button"
