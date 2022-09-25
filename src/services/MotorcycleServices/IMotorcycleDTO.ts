export interface IMotorcycleDTO {
  model: string,
  year: number,
  color: string,
  status?: boolean,
  buyValue: number,
  category: 'Street' | 'Custom' | 'Trail',
  engineCapacity: number,
}