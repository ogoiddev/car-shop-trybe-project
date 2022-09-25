import chai from 'chai';
import { Model } from 'mongoose';
import * as sinon from 'sinon';
import Car from '../../../models/CarModel';
import { ICarDTO } from '../../../services/CarServices/ICarDTO';
import Service from '../../../services/CarServices/Service';
import { ICarDTOMock } from '../../mocks/ICarDTOMock';
import { ICarMock } from '../../mocks/ICarMock';
const { expect } = chai;

describe('Api service', () => {
  const carModel = new Car()
  const carService = new Service(carModel)

  after(()=>{
    sinon.restore();
  })


  it('Create function should be called with success return', async () => {
    sinon.stub(Model, 'create').resolves(ICarMock);

    const result = await carService.saveNewCar(ICarDTOMock)
    expect(result).to.be.deep.equal(ICarMock)

    sinon.restore();
  });

  it('Create function should be called with ERROR return', async () => {
    try {
      await carService.saveNewCar({} as ICarDTO)
    } catch(err) {
      expect(err)
    }
    sinon.restore();
  });

  it('Read function should be called with success return', async () => {
    sinon.stub(Model, 'find').resolves([]);
    const result = await carService.getCarsList()
    expect(result).to.be.a('array')

    sinon.restore();
  });

  it('ReadOne function should be called with success return', async () => {
    sinon.stub(Model, 'findOne').resolves(ICarMock);
    const result = await carService.getCarById("632383aaea59c2b5dc96346b")
    expect(result).to.be.deep.equal(ICarMock)

    sinon.restore();
  });

  it('ReadOne function should be called with ERROR return - WRONG_CHAR_HEXADECIMAL ID CASE', async () => {
    try {
      await carService.getCarById("wrong")
    } catch(err) {
      expect(err)
    }
    
    sinon.restore();
  });

  it('ReadOne function should be called with ERROR return - NOT_FOUND ID CASE', async () => {
    sinon.stub(Model, 'findOne').resolves(null);

    try {
      await carService.getCarById("623456789012345678901234")
    } catch(err) {
      expect(err)
    }
    
    sinon.restore();
  });

  it('Update function should be called with success return', async () => {
    sinon.stub(Model, 'findByIdAndUpdate').resolves(ICarMock);
    const result = await carService.updateCar("632383aaea59c2b5dc96346b", ICarDTOMock)
    expect(result).to.be.deep.equal(ICarMock)

    sinon.restore();
  });

  it('Update function should be called with ERROR return', async () => {
    sinon.stub(Model, 'findByIdAndUpdate').resolves(ICarMock);
    try {
      await carService.updateCar("2", ICarDTOMock)
    } catch(err: any) {
      expect(err.message).to.be.equal('InvalidMongoId')
    }

    sinon.restore();
  });

  it('Delete function should be called with success return', async () => {
    sinon.stub(Model, 'findByIdAndDelete').resolves(ICarMock);
    const result = await carService.deleteCar("632383aaea59c2b5dc96346b")
    expect(result).to.be.deep.equal(ICarMock)

    sinon.restore();
  });

});