import fastify from "fastify";

const app = fastify();

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.listen({port: 3000}, () => {
    console.log("Server running on port 3000");
})