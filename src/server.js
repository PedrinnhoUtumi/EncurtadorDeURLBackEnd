// import fastify from 'fastify';
// import { linkRoutes } from './modules/links/link.routes.js';

// const server = fastify({ logger: true });
// const port = process.env.PORT || 3000

// // Registramos nosso plugin de rotas e adicionamos um prefixo a todas elas
// server.register(linkRoutes, { prefix: '/api' });

// // Iniciar o Servidor
// server.listen({ port }, (error) => {    
// 	if (error) {        
// 		console.error("Erro ao iniciar o servidor:", error)
// 		process.exit(1)
// 	}    
// 	console.log("Servidor executando na porta ", port);
// })

import fastify from "fastify";
import cors from "@fastify/cors";
import { linkRoutes } from "./link.routes.js"; 

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
