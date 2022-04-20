import { ActiveModelSerializer, createServer, Model, Response } from "miragejs"
import products from "./products.json"

function mirageServer() {
  let server = createServer({
    serializers: {
      application: ActiveModelSerializer
    },

    models: {
      product: Model,
    },

    seeds(server) {
      products.forEach(product => {
        const { id, name, price, score, image } = product

        server.create("product", {
          id: String(id),
          name,
          price,
          score,
          image
        })
      })
    },

    routes() {
      this.namespace = "api"
      this.timing = 750

      this.get("/products", (schema, request) => {
        const { page = 1, perPage = 4  } = request.queryParams

        const pageStart = (Number(page) - 1) * Number(perPage)
        const pageEnd = Number(pageStart) + Number(perPage)

        const data = schema.db.products
        const total = data.length

        const products = data.slice(pageStart, pageEnd)

        return new Response(200, { "x-count-products": String(total) }, { products })
      })

      this.get("/products/search", (schema, request) => {
        const { name, page = 1, perPage = 4 } = request.queryParams

        const pageStart = (Number(page) - 1) * Number(perPage)
        const pageEnd = Number(pageStart) + Number(perPage)
          
        const data = schema.db.products.filter(
            product => product.name
              .toLowerCase()
              .includes(name.toLowerCase())
          )
          
        const total = data.length
        const products = data.slice(pageStart, pageEnd)
        
        return new Response(200, { "x-count-products": String(total) }, { products })
      })


      this.get("/products/:id")

      this.namespace = ""
      this.passthrough()
    },
  })

  return server
}

export { mirageServer }