import { Router } from 'express';
import factory from '../factories';

const carRoute = Router();

carRoute.post('/cars', factory.carHandler.saveNewCar);

carRoute.get('/cars', factory.carHandler.getCarsList);

export default carRoute;