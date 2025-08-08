// src/services/api/services.ts - Updated for Strapi v5
import { strapiService } from "../strapi"
import type {
    Service,
    FAQ,
    StrapiCollectionResponse,
    StrapiResponse,
} from "../../types/strapi"

// Services API
export const servicesApi = {
    // Get all services, ordered by the 'order' field
    async getAll(): Promise<StrapiCollectionResponse<Service>> {
        return strapiService.findMany<Service>("services", {
            sort: ["order:asc"],
            pagination: {
                pageSize: 100, // Get all services
            },
        })
    },

    // Get only featured services
    async getFeatured(): Promise<StrapiCollectionResponse<Service>> {
        return strapiService.findMany<Service>("services", {
            filters: {
                is_featured: true,
            },
            sort: ["order:asc"],
        })
    },

    // Get single service by ID
    async getById(id: number): Promise<StrapiResponse<Service>> {
        return strapiService.findOne<Service>("services", id)
    },

    // Get single service by documentId (Strapi v5)
    async getByDocumentId(
        documentId: string
    ): Promise<StrapiCollectionResponse<Service>> {
        return strapiService.findMany<Service>("services", {
            filters: {
                documentId: documentId,
            },
            pagination: {
                limit: 1,
            },
        })
    },
}

// FAQs API
export const faqsApi = {
    // Get all FAQs, ordered by the 'order' field
    async getAll(): Promise<StrapiCollectionResponse<FAQ>> {
        return strapiService.findMany<FAQ>("faqs", {
            sort: ["order:asc"],
            pagination: {
                pageSize: 100, // Get all FAQs
            },
        })
    },

    // Get FAQs by category
    async getByCategory(
        category: string
    ): Promise<StrapiCollectionResponse<FAQ>> {
        return strapiService.findMany<FAQ>("faqs", {
            filters: {
                category: {
                    $eq: category,
                },
            },
            sort: ["order:asc"],
        })
    },

    // Get single FAQ by ID
    async getById(id: number): Promise<StrapiResponse<FAQ>> {
        return strapiService.findOne<FAQ>("faqs", id)
    },

    // Get single FAQ by documentId (Strapi v5)
    async getByDocumentId(
        documentId: string
    ): Promise<StrapiCollectionResponse<FAQ>> {
        return strapiService.findMany<FAQ>("faqs", {
            filters: {
                documentId: documentId,
            },
            pagination: {
                limit: 1,
            },
        })
    },

    // Get FAQs grouped by category
    async getAllGroupedByCategory(): Promise<Record<string, FAQ[]>> {
        const response = await strapiService.findMany<FAQ>("faqs", {
            sort: ["order:asc"],
            pagination: {
                pageSize: 100,
            },
        })

        // Group FAQs by category
        const grouped: Record<string, FAQ[]> = {}

        response.data.forEach((faq) => {
            const category = faq.category || "General"
            if (!grouped[category]) {
                grouped[category] = []
            }
            grouped[category].push(faq)
        })

        return grouped
    },
}
