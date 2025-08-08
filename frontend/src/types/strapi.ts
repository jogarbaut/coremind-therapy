// src/types/strapi.ts - Updated for Strapi v5

// Strapi v5 Response Structure (flattened, no nested attributes)
export interface StrapiResponse<T> {
    data: T
    meta?: {
        availableLocales?: string[]
    }
}

export interface StrapiCollectionResponse<T> {
    data: T[]
    meta?: {
        pagination?: {
            page: number
            pageSize: number
            pageCount: number
            total: number
        }
    }
}

// Service Content Type (Strapi v5 - flattened structure)
export interface Service {
    id: number
    documentId: string
    title: string
    duration: string
    description: string
    notes?: string
    order: number
    is_featured: boolean
    createdAt: string
    updatedAt: string
    publishedAt: string
}

// FAQ Content Type (Strapi v5 - flattened structure)
export interface FAQ {
    id: number
    documentId: string
    question: string
    answer: string
    order: number
    category?: string
    createdAt: string
    updatedAt: string
    publishedAt: string
}

// Specialty Content Type (if you add it later)
export interface Specialty {
    id: number
    documentId: string
    title: string
    subtitle?: string
    image: any // Strapi media object
    order: number
    description?: string
    createdAt: string
    updatedAt: string
    publishedAt: string
}
