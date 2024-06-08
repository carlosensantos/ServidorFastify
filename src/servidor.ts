import fastify from "fastify";

const servidor = fastify({
    logger: true
})

servidor.get('/teste', function controlador (requisicao, resposta) {
    const saudacao = 'Bem vindo ao primeiro servidor Node.js com Typescript'
    return resposta.send(saudacao)
})

servidor.listen({
    port: 3000
})