import {CalculatorService} from './calculator.service';
import {TestBed} from '@angular/core/testing';
import {LoggerService} from './logger.service';

describe('CalculatorService', () => {

  let calculator: CalculatorService;
  let loggerSpy: any;

  beforeEach(() => {
    console.log('Calling beforeEach');

    // Creates mock implementation for dependency
    loggerSpy = jasmine.createSpyObj('LoggerService', ['log']);

    // Simulates a dependency injection environment;
    TestBed.configureTestingModule({
      providers: [
        CalculatorService,
        {provide: LoggerService, useValue: loggerSpy}
      ]
    });

    // Gets an instance of the service from the module
    calculator = TestBed.get(CalculatorService);
  });

  it('it should add two numbers', () => {
    console.log('add test');

    const result = calculator.add(2, 2);

    expect(result).toBe(4);

    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  });

  it('it should subtract two numbers', () => {
    console.log('subtract test');

    const result = calculator.subtract(4, 2);

    expect(result).toBe(2);

    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  });

});
