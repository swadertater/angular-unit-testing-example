import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {NumberUtils} from '../shared/number-utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  form: FormGroup = new FormGroup({
    fahrenheiht: new FormControl(0),
    celsius: new FormControl(-17.78),
    kelvin: new FormControl(255.37),
  });

  ngOnInit(): void {
    this.fahrenheihtControl.valueChanges.subscribe(fahrenheiht => {
      console.log('loop?')
      const celsius = this.convertFahrenheitToCelsius(fahrenheiht)
      this.celsiusControl.setValue(celsius,{emitEvent: false});
      const kelvin = this.convertFahrenheitToKelvin(fahrenheiht);
      this.kelvinControl.setValue(kelvin, {emitEvent: false});
    });

    this.celsiusControl.valueChanges.subscribe(celsius => {
      const fahrenheiht = this.convertCelsiusToFahrenheiht(celsius)
      this.fahrenheihtControl.setValue(fahrenheiht, {emitEvent: false});
      const kelvin = this.convertCelsiusToKelvin(celsius);
      this.kelvinControl.setValue(kelvin, {emitEvent: false});
    });

    this.kelvinControl.valueChanges.subscribe(kelvin => {
      const fahrenheiht = this.convertKelvinToFahrenheiht(kelvin);
      this.fahrenheihtControl.setValue(fahrenheiht, {emitEvent: false});
      const celsius = this.convertKelvinToCelsius(kelvin)
      this.celsiusControl.setValue(celsius, {emitEvent: false});
    });
  }

  get fahrenheihtControl(): FormControl {
    return this.form.get('fahrenheiht') as FormControl;
  }

  get celsiusControl(): FormControl {
    return this.form.get('celsius') as FormControl;
  }

  get kelvinControl(): FormControl {
    return this.form.get('kelvin') as FormControl;
  }

  convertFahrenheitToCelsius(fahrenheiht: number): number {
    const celsius = (fahrenheiht - 32) * 5/9;
    return NumberUtils.roundToTwoDecimalPlaces(celsius);
  }

  convertFahrenheitToKelvin(fahrenheiht: number): number {
    const kelvin = (fahrenheiht - 32) * 5/9 + 273.15
    return NumberUtils.roundToTwoDecimalPlaces(kelvin);
  }

  convertCelsiusToFahrenheiht(celsius: number): number {
    const fahrenheiht = (celsius * 9.5) + 32;
    return NumberUtils.roundToTwoDecimalPlaces(fahrenheiht);
  }

  convertCelsiusToKelvin(celsius: number): number {
    const kelvin = celsius + 273.15;
    return NumberUtils.roundToTwoDecimalPlaces(kelvin);
  }

  convertKelvinToFahrenheiht(kelvin: number): number {
    const fahreheiht = (kelvin - 273.15) * 9/5 + 32;
    return NumberUtils.roundToTwoDecimalPlaces(fahreheiht);
  }

  convertKelvinToCelsius(kelvin: number): number {
    const celsius = kelvin - 273.15;
    return NumberUtils.roundToTwoDecimalPlaces(celsius);
  }
}
