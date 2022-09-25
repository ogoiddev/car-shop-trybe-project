import CarFactory from './CarFactory';
import MotorcycleFactory from './MotorcycleFactory';

const carHandler = CarFactory.make();
const motorcycleHandler = MotorcycleFactory.make();

export default { carHandler, motorcycleHandler };