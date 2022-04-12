import { ActiveModelSerializer, createServer, Model, Response } from "miragejs"
import games from "./games.json"

interface Game{
  id: string,
  name: string,
  price: number,
  score: number,
  image: string
}

function mirageServer() {
  let server = createServer({
    serializers: {
      application: ActiveModelSerializer
    },

    models: {
      game: Model.extend<Partial<Game>>({}),
    },

    seeds(server) {
      games.forEach(game => {
        const { id, name, price, score, image } = game

        server.create("game", {
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

      this.get("/games", (schema) => {
        const games = schema.all("game").models

        return new Response(200, {}, { games })
      })

      this.namespace = ""
      this.passthrough()
    },
  })

  return server
}

export { mirageServer }