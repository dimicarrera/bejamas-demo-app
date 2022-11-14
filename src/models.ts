export interface IProduct {
  name: string
  category: string
  price: number
  currency: string
  image: {
    src: string
    alt: string
  }
  bestseller: boolean
  featured: boolean
  dimensions?: {
    width: number
    height: number
  }
  details?: {
    size: number
    description: string
    recommendations: {
      src: string
      alt: string
    }[]
  }
}