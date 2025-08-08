// This is the main service that handles all HTTP requests to the Strapi API
class StrapiService {
    private baseURL: string
    private apiToken?: string

    constructor() {
        // Get your Strapi URL from environment variables (Vite uses VITE_ prefix)
        this.baseURL =
            import.meta.env.VITE_STRAPI_URL || "http://localhost:1337"
        this.apiToken = import.meta.env.VITE_STRAPI_TOKEN
    }

    // Generic request method that all other methods use
    private async request<T>(
        endpoint: string,
        options: RequestInit = {}
    ): Promise<T> {
        const url = `${this.baseURL}/api${endpoint}`

        const config: RequestInit = {
            headers: {
                "Content-Type": "application/json",
                // Add authorization header if you have a token
                ...(this.apiToken && {
                    Authorization: `Bearer ${this.apiToken}`,
                }),
                ...options.headers,
            },
            ...options,
        }

        try {
            const response = await fetch(url, config)

            if (!response.ok) {
                const errorData = await response.json()
                throw new Error(
                    errorData.error?.message ||
                        `HTTP ${response.status}: ${response.statusText}`
                )
            }

            return await response.json()
        } catch (error) {
            console.error("Strapi API Error:", error)
            throw error
        }
    }

    // GET many items (with optional filters, sorting, etc.)
    async findMany<T>(
        contentType: string,
        params?: Record<string, any>
    ): Promise<{ data: T[]; meta: any }> {
        const query = params
            ? `?${new URLSearchParams(this.flattenParams(params))}`
            : ""
        return this.request(`/${contentType}${query}`)
    }

    // GET single item by ID
    async findOne<T>(
        contentType: string,
        id: number | string,
        params?: Record<string, any>
    ): Promise<{ data: T; meta: any }> {
        const query = params
            ? `?${new URLSearchParams(this.flattenParams(params))}`
            : ""
        return this.request(`/${contentType}/${id}${query}`)
    }

    // POST - Create new item
    async create<T>(
        contentType: string,
        data: any
    ): Promise<{ data: T; meta: any }> {
        return this.request(`/${contentType}`, {
            method: "POST",
            body: JSON.stringify({ data }),
        })
    }

    // PUT - Update existing item
    async update<T>(
        contentType: string,
        id: number | string,
        data: any
    ): Promise<{ data: T; meta: any }> {
        return this.request(`/${contentType}/${id}`, {
            method: "PUT",
            body: JSON.stringify({ data }),
        })
    }

    // DELETE item
    async delete(
        contentType: string,
        id: number | string
    ): Promise<{ data: any; meta: any }> {
        return this.request(`/${contentType}/${id}`, {
            method: "DELETE",
        })
    }

    // Helper method to flatten nested parameters for URL query string
    private flattenParams(
        params: Record<string, any>,
        prefix = ""
    ): Record<string, string> {
        const flattened: Record<string, string> = {}

        for (const [key, value] of Object.entries(params)) {
            const newKey = prefix ? `${prefix}[${key}]` : key

            if (value && typeof value === "object" && !Array.isArray(value)) {
                Object.assign(flattened, this.flattenParams(value, newKey))
            } else if (Array.isArray(value)) {
                value.forEach((item, index) => {
                    if (typeof item === "object") {
                        Object.assign(
                            flattened,
                            this.flattenParams(item, `${newKey}[${index}]`)
                        )
                    } else {
                        flattened[`${newKey}[${index}]`] = String(item)
                    }
                })
            } else {
                flattened[newKey] = String(value)
            }
        }

        return flattened
    }
}

// Export a single instance that your whole app can use
export const strapiService = new StrapiService()
export default strapiService
