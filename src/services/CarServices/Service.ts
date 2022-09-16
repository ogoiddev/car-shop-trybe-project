import { ICar, CarZodSchema } from '../../interfaces/ICar';
import { IModel } from '../../interfaces/IModel';
import { ICarDTO } from './ICarDTO';

export default class Service {
  constructor(private carModel: IModel<ICar>) {}

  public async saveNewCar(objectCar: ICarDTO) {
    const parseSuccess = CarZodSchema.safeParse(objectCar);
    
    if (!parseSuccess.success) {
      throw parseSuccess.error;
    }

    const results = await this.carModel.create(objectCar);
    return results;
  }

  public async getCarsList() {
    const results = this.carModel.read();
    return results;
  }
}