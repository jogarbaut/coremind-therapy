import { useState, useEffect } from "react"
import { servicesApi } from "../services/api/services"
import type { Service } from "../types/strapi"

interface UseServicesState {
    services: Service[]
    loading: boolean
    error: string | null
}

export const useServices = () => {
    const [state, setState] = useState<UseServicesState>({
        services: [],
        loading: true,
        error: null,
    })

    useEffect(() => {
        const fetchServices = async () => {
            try {
                setState((prev) => ({ ...prev, loading: true, error: null }))

                const response = await servicesApi.getAll()

                setState({
                    services: response.data, // Direct array access - no .attributes needed
                    loading: false,
                    error: null,
                })
            } catch (error) {
                console.error("Error fetching services:", error)
                setState({
                    services: [],
                    loading: false,
                    error:
                        error instanceof Error
                            ? error.message
                            : "Failed to fetch services",
                })
            }
        }

        fetchServices()
    }, [])

    return state
}

// Hook for featured services only
export const useFeaturedServices = () => {
    const [state, setState] = useState<UseServicesState>({
        services: [],
        loading: true,
        error: null,
    })

    useEffect(() => {
        const fetchFeaturedServices = async () => {
            try {
                setState((prev) => ({ ...prev, loading: true, error: null }))

                const response = await servicesApi.getFeatured()

                setState({
                    services: response.data, // Direct array access
                    loading: false,
                    error: null,
                })
            } catch (error) {
                console.error("Error fetching featured services:", error)
                setState({
                    services: [],
                    loading: false,
                    error:
                        error instanceof Error
                            ? error.message
                            : "Failed to fetch featured services",
                })
            }
        }

        fetchFeaturedServices()
    }, [])

    return state
}
