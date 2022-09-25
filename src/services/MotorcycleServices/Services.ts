import { isValidObjectId } from 'mongoose';
import { ErrorTypes } from '../../errors/catalog';
import { IMotorcycle, MotorcycleZodSchema } from '../../interfaces/IMotorcycle';
import { IModel } from '../../interfaces/IModel';
import { IMotorcycleDTO } from './IMotorcycleDTO';

export default class Service {
  constructor(private motorcycleModel: IModel<IMotorcycle>) {}

  public async saveNewMotorcycle(objectMotorcycle: IMotorcycleDTO) {
    const parseSuccess = MotorcycleZodSchema.safeParse(objectMotorcycle);
    
    if (!parseSuccess.success) throw parseSuccess.error;

    const results = await this.motorcycleModel.create(objectMotorcycle);
    return results;
  }

  public async getMotorcyclesList() {
    const results = await this.motorcycleModel.read();
    return results;
  }

  public async getMotorcycleById(id: string) {
    if (!isValidObjectId(id)) throw Error(ErrorTypes.InvalidMongoId);
    
    const result = await this.motorcycleModel.readOne(id);

    if (!result) throw Error(ErrorTypes.EntityNotFound);
    
    return result;
  }

  public async updateMotorcycle(id: string, objectMotorcycle: IMotorcycleDTO) {
    if (!isValidObjectId(id)) throw Error(ErrorTypes.InvalidMongoId);

    const parseSuccess = MotorcycleZodSchema.safeParse(objectMotorcycle);
    if (!parseSuccess.success) throw parseSuccess.error;

    const result = await this.motorcycleModel.update(id, objectMotorcycle);

    if (!result) throw Error(ErrorTypes.EntityNotFound);

    return result;
  }

  public async deleteMotorcycle(id: string) {
    if (!isValidObjectId(id)) throw Error(ErrorTypes.InvalidMongoId);
    
    const result = await this.motorcycleModel.delete(id);  
    console.log(result);

    if (!result) throw Error(ErrorTypes.EntityNotFound);

    return result;
  }
}