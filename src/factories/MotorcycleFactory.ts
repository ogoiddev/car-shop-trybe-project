import MotorcycleController from '../controllers/MotorcycleController';
import Motorcycle from '../models/MotorcycleModel';
import Service from '../services/MotorcycleServices/Services';

export default class MotorcycleFactory {
  static make() {
    const model = new Motorcycle();
    const service = new Service(model);
    const controller = new MotorcycleController(service);
    
    return controller;
  }
}