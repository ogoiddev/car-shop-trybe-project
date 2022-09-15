import { Router } from 'express';
import factory from '../factories';

const carRoute = Router();

carRoute.post('/cars', factory.carHandler.saveNewCar);

export default carRoute;