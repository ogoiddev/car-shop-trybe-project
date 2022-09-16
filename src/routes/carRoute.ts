import { Router } from 'express';
import factory from '../factories';

const carRoute = Router();

carRoute.put('/cars/:id', factory.carHandler.updateCar);
carRoute.post('/cars', factory.carHandler.saveNewCar);

carRoute.get('/cars/:id', factory.carHandler.getCarById);
carRoute.get('/cars', factory.carHandler.getCarsList);

export default carRoute;