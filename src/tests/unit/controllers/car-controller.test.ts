import chai from 'chai';
import { Request, Response } from 'express';
import { Model } from 'mongoose';
import * as sinon from 'sinon';
import CarController from '../../../controllers/CarController';
import Car from '../../../models/CarModel';
import Service from '../../../services/CarServices/Service';
import { ICarDTOMock } from '../../mocks/ICarDTOMock';
import { ICarMock } from '../../mocks/ICarMock';
const { expect } = chai;

describe('Api controller', () => {
  const carModel = new Car()
  const carService = new Service(carModel)
  const carController = new CarController(carService)

  after(()=>{
    sinon.restore();
  })
  
  const req = {} as Request;
  const res = {} as Response;

  it('Create function should be called with success return', async () => {
    sinon.stub(Model, 'create').resolves(ICarMock);

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    req.body = ICarDTOMock
    
    await carController.saveNewCar(req, res)
    
    expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;

    sinon.restore();
  });

  // it('Create function should be called with ERROR return', async () => {
  //   try {
  //     await carController.saveNewCar({} as any, response)
  //   } catch(err) {
  //     expect(err)
  //   }
  //   sinon.restore();
  // });

  // it('Read function should be called with success return', async () => {
  //   sinon.stub(Model, 'find').resolves([]);
  //   const result = await carModel.read()
  //   expect(result).to.be.a('array')

  //   sinon.restore();
  // });

  // it('ReadOne function should be called with success return', async () => {
  //   sinon.stub(Model, 'findOne').resolves(ICarMock);
  //   const result = await carModel.readOne("carName")
  //   expect(result).to.be.deep.equal(ICarMock)

  //   sinon.restore();
  // });

  // it('Update function should be called with success return', async () => {
  //   sinon.stub(Model, 'findByIdAndUpdate').resolves(ICarMock);
  //   const result = await carModel.update("632383aaea59c2b5dc96346b", ICarDTOMock)
  //   expect(result).to.be.deep.equal(ICarMock)

  //   sinon.restore();
  // });

  // it('Update function should be called with ERROR return', async () => {
  //   sinon.stub(Model, 'findByIdAndUpdate').resolves(ICarMock);
  //   try {
  //     await carModel.update("2", ICarDTOMock)
  //   } catch(err: any) {
  //     expect(err.message).to.be.equal('InvalidMongoId')
  //   }

  //   sinon.restore();
  // });

  // it('Delete function should be called with success return', async () => {
  //   sinon.stub(Model, 'findByIdAndDelete').resolves(ICarMock);
  //   const result = await carModel.delete("632383aaea59c2b5dc96346b")
  //   expect(result).to.be.deep.equal(ICarMock)

  //   sinon.restore();
  // });

});