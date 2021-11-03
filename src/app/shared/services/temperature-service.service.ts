import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TemperatureServiceService {
  getAverageTemperatureSummary(city: string): string {
    const averageTemperature = this.getAverageTemperature(city);
    return `The average temperature of ${city} is ${averageTemperature}`;
  }

  getAverageTemperature(city: string): number {
    switch(city) {
      case 'corvallis':
        return 52.65;
      case 'st. louis':
        return 54.25;
      case 'edwardsville':
        return 54.75
    }
    return 0;
  }
}
