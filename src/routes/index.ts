import { Router } from 'express';
import carRoute from './carRoute';

const Routes = Router();

Routes.use(carRoute);

export default Routes;
