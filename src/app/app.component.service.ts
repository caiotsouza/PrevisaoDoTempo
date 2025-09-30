import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { WEATHER_PREDICTION } from './type';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppComponentService {
  private readonly api = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"
  private readonly apiKey = "?unitGroup=metric&include=days,current&key=YLHSW9DSD8PJXK53SM2ZX5X4P&contentType=json&lang=pt"
  private http = inject(HttpClient)

  async searchByCity(city : string) : Promise<any> {
    const url = this.api + city + this.apiKey
    
    try {
      const response = await firstValueFrom(this.http.get<any>(url))
      const city = {
        name:response.address,
        date:response.days[0].datetime,
        description:response.days[0].description,
        maxTemperature:response.days[0].tempmax,
        minTemperature:response.days[0].tempmin,
        days:response.days.slice(1,4).map((day:any)=>{
        return {
          date:day.datetime,
          description:day.description,
          tempmax:day.tempmax,  
          tempmin:day.tempmin
        }
      })
      }
      return city
    } catch (Err) {
      console.log("Erro ao enviar API")
    }
  }
}
