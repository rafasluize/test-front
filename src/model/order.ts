export interface IOrder {
  id: string
  items: [
    {
      quantity: number
      product: {
        sku: string
        name: string
        imageObjects: [
          {
            thumbnail: string
            small: string
          }
        ]
        priceSpecification: {
          price: number
          originalPrice: number
          maxPrice: number
          percent: number
          discount: number
        }
      }
    }
  ]
  subTotal: number
  shippingTotal: number
  discount: number
  total: number
}
