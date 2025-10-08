import fastify from "fastify";
import cors from "@fastify/cors"; 

const server = fastify({
    logger: true
});

const port = process.env.PORT || 3000;

server.register(cors, {
    origin: "*",
});

server.get("/", (request, reply) => {
    return reply.send("Servidor on");
});

server.post("/links", (request, reply) => {
    
})

server.listen({ port }).then(() => {
    console.log("Servidor executando na porta", port);
}).catch((error) => {
    console.error("Erro ao iniciar o servidor:", error);
    process.exit(1);
});
