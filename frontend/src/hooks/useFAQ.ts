import { useState, useEffect } from "react"
import type { FAQ } from "../types/strapi"
import { faqsApi } from "../services/api/services"

interface UseFAQsState {
    faqs: FAQ[]
    loading: boolean
    error: string | null
}

export const useFAQs = (category?: string) => {
    const [state, setState] = useState<UseFAQsState>({
        faqs: [],
        loading: true,
        error: null,
    })

    useEffect(() => {
        const fetchFAQs = async () => {
            try {
                setState((prev) => ({ ...prev, loading: true, error: null }))

                const response = category
                    ? await faqsApi.getByCategory(category)
                    : await faqsApi.getAll()

                setState({
                    faqs: response.data, // Direct array access
                    loading: false,
                    error: null,
                })
            } catch (error) {
                console.error("Error fetching FAQs:", error)
                setState({
                    faqs: [],
                    loading: false,
                    error:
                        error instanceof Error
                            ? error.message
                            : "Failed to fetch FAQs",
                })
            }
        }

        fetchFAQs()
    }, [category])

    return state
}

// Hook for FAQs grouped by category
export const useFAQsByCategory = () => {
    const [state, setState] = useState<{
        faqsByCategory: Record<string, FAQ[]>
        loading: boolean
        error: string | null
    }>({
        faqsByCategory: {},
        loading: true,
        error: null,
    })

    useEffect(() => {
        const fetchGroupedFAQs = async () => {
            try {
                setState((prev) => ({ ...prev, loading: true, error: null }))

                const grouped = await faqsApi.getAllGroupedByCategory()

                setState({
                    faqsByCategory: grouped,
                    loading: false,
                    error: null,
                })
            } catch (error) {
                console.error("Error fetching grouped FAQs:", error)
                setState({
                    faqsByCategory: {},
                    loading: false,
                    error:
                        error instanceof Error
                            ? error.message
                            : "Failed to fetch FAQs",
                })
            }
        }

        fetchGroupedFAQs()
    }, [])

    return state
}
