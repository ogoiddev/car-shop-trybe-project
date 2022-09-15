import { isValidObjectId, Model, UpdateQuery } from 'mongoose';
import { ErrorTypes } from '../errors/catalog';
import { IModel } from '../interfaces/IModel';

abstract class MongoModel<T> implements IModel<T> {
  constructor(private model: Model<T>) { }

  async read(): Promise<T[]> {
    const results = this.model.find();
    return results;
  }
  
  async readOne(dataValue: string): Promise<T | null> {
    const results = await this.model.findOne({ dataValue });
    return results;
  }
  
  async delete(dataValue: string): Promise<T | null> {
    const results = await this.model.findByIdAndDelete({ dataValue });
    return results;
  }

  public async create(dataValue: T): Promise<T> {
    const results = await this.model.create({ ...dataValue });
    return results;
  }

  public async update(_id:string, obj:Partial<T>):Promise<T | null> {
    if (!isValidObjectId(_id)) throw Error(ErrorTypes.InvalidMongoId);
    
    return this.model.findByIdAndUpdate(
      { _id },
      { ...obj } as UpdateQuery<T>,
      { new: true },
    );
  }
}

export default MongoModel;