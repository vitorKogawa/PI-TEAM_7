import { Router } from 'express'
import { userRouter } from './private/users.routes'
import { jogoRouter } from './private/jogos.routes'
import { pagamentoRouter } from './private/pagamento.routes'
import { tipoPagamentoRouter } from './private/tipo_pagamento.routes'
import { favoritosRoutes } from './private/favoritos.routes'

const privateRouter = Router();

privateRouter.use('/usuario', userRouter)
privateRouter.use('/jogo', jogoRouter)
privateRouter.use('/pagamento', pagamentoRouter)
privateRouter.use('/tipoPagamento', tipoPagamentoRouter)
privateRouter.use('/favoritos', favoritosRoutes)

export { privateRouter }