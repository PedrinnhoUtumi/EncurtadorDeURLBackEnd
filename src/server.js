import fastify from "fastify";
import cors from "@fastify/cors";
import { linkRoutes } from "./modules/links/link.routes.js"; 

const server = fastify({
  logger: true
});

const port = process.env.PORT || 3000;

await server.register(cors); 
await server.register(linkRoutes); 

server.get("/", async (request, reply) => {
  return reply.send("Servidor on");
});

server.listen({ port }).then(() => {
  console.log("Servidor executando na porta", port);
}).catch((error) => {
  console.error("Erro ao iniciar o servidor:", error);
  process.exit(1);
});
