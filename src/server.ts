import fastify from "fastify"

// instanciar a base da aplicação através da principal função
const app = fastify()

app.get("/hello", () => {
  return "Hello World"
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("HTTP Server Running!")
  })
