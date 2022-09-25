import { Router } from 'express';
import carRoutes from './carRoutes';
import motorcycleRoutes from './motorcycleRoutes';

const Routes = Router();

Routes.use('/cars', carRoutes);
Routes.use('/motorcycles', motorcycleRoutes);

export default Routes;
