import { Request, Response } from 'express';
import Service from '../services/MotorcycleServices/Services';

export default class MotorcycleController {
  constructor(private service: Service) {}

  public saveNewMotorcycle = async (req: Request, res: Response) => {
    const { body } = req;
    const results = await this.service.saveNewMotorcycle(body);
    res.status(201).json(results);
  };

  public getMotorcyclesList = async (_req: Request, res: Response) => {
    const results = await this.service.getMotorcyclesList();
    res.status(200).json(results);
  };

  public getMotorcycleById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await this.service.getMotorcycleById(id);
    res.status(200).json(result);
  };

  public updateMotorcycle = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;
    
    const result = await this.service.updateMotorcycle(id, body);
    res.status(200).json(result);
  };

  public deleteMotorcycle = async (req: Request, res: Response) => {
    const { id } = req.params;

    const result = await this.service.deleteMotorcycle(id);
    res.status(204).json(result);
  };
}