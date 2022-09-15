import { Request, Response } from 'express';
import Service from '../services/CarServices/Service';

export default class CarController {
  constructor(private service: Service) {}

  public saveNewCar = async (req: Request, res: Response) => {
    const { body } = req;
    const results = await this.service.saveNewCar(body);
    res.status(201).json(results);
  };
}