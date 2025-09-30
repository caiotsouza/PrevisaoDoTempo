interface WEATHER_PREDICTION {
    name:string,
    date:string,
    description:string,
    maxTemperature:number,
    minTemperature:number,
    days: {
            description:string,
            date:string
            tempmax:number
            tempmin:number
    }
}

export type { WEATHER_PREDICTION }