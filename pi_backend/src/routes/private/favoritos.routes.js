import { Router } from 'express';
import FavoritosController from '../../controller/FavoritosController';

const favoritosRoutes = Router()

favoritosRoutes.post('/', FavoritosController.create);
favoritosRoutes.delete('/:id', FavoritosController.delete);
favoritosRoutes.get('/:id', FavoritosController.findAll);

export { favoritosRoutes }