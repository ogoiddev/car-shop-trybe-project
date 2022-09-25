import { Router } from 'express';
import factory from '../factories';

const motorcycleRoute = Router();

motorcycleRoute.put('/:id', factory.motorcycleHandler.updateMotorcycle);
motorcycleRoute.post('/', factory.motorcycleHandler.saveNewMotorcycle);

motorcycleRoute.get('/:id', factory.motorcycleHandler.getMotorcycleById);
motorcycleRoute.get('/', factory.motorcycleHandler.getMotorcyclesList);

motorcycleRoute.delete('/:id', factory.motorcycleHandler.deleteMotorcycle);

export default motorcycleRoute;