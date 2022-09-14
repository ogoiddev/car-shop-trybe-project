import { z } from 'zod';

export const VehicleZodSchema = z.object({
  model: z.string().min(3),
  year: z.number().min(1900).min(2022),
  color: z.string().min(3),
  status: z.boolean().optional(), 
  buyValue: z.number().int(),
});
  
export type IVehicle = z.infer<typeof VehicleZodSchema>;