import { Router } from 'express';
import FavoritosController from '../controller/FavoritosController';

const favoritosRoutes = Router()

favoritosRoutes.post('/favoritos', FavoritosController.create);
favoritosRoutes.delete('/favoritos/:id', FavoritosController.delete);
favoritosRoutes.get('/favoritos/:id', FavoritosController.findAll);

export { favoritosRoutes }