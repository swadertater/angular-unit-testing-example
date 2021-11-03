import { AppComponent } from './app.component';
import {NumberUtils} from './shared/utils/number-utils';
import {TemperatureServiceService} from './shared/services/temperature-service.service';
import {TestBed} from '@angular/core/testing';
// let comp: AppComponent;

describe('AppComponent\'s temperature conversions', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({});

    let service: TemperatureServiceService;
    let temperatureServiceStub: Partial<TemperatureServiceService>;

    temperatureServiceStub = {
      getAverageTemperatureSummary: (city: string) =>  `The average temperature of ${city} is 50`,
      getAverageTemperature: (city: string) => 55,
    };

    TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      providers: [ { provide: TemperatureServiceService, useValue: temperatureServiceStub } ],
    });

    service = TestBed.inject(TemperatureServiceService);
    let fixture = TestBed.createComponent(AppComponent);
    // comp = fixture.componentInstance;
  });
  const comp = new AppComponent();
  it('converts fahrenheiht to celsius', () => {
    expect(comp.convertFahrenheitToCelsius(0)).toBe(-17.78)
  });

  it('converts fahrenheiht to kelvin', () => {
    expect(comp.convertFahrenheitToKelvin(0)).toBe(255.37)
  })

  it('converts celsius to fahrenheiht', () => {
    expect(comp.convertCelsiusToFahrenheiht(0)).toBe(32)
  })

  it('converts celsius to kelvin', () => {
    expect(comp.convertCelsiusToKelvin(0)).toBe(273.15)
  })

  it('converts kelvin to fahrenheiht', () => {
    expect(comp.convertKelvinToFahrenheiht(0)).toBe(-459.67)
  })

  it('converts kelvin to celsius', () => {
    expect(comp.convertKelvinToCelsius(0)).toBe(-273.15)
  })

  it('converts fahrenheit to schmelvins', () => {
    expect(comp.convertFahrenheihtToSchmelvins(0)).toBe(100)
  })

});

describe('Number utils', () => {
  it('rounds to two decimal places', () => {
    const methodToTest = NumberUtils.roundToTwoDecimalPlaces;
    expect(methodToTest(54.95)).toBe(54.95)
    expect(methodToTest(61)).toBe(61.00);
    expect(methodToTest(654654.239)).toBe(654654.24);
    expect(methodToTest(2.999)).toBe(3.00);
  })
})
