import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from './components/main-component/main-component';
import { HeaderComponent } from './components/header-component/header-component';
import { WEATHER_PREDICTION } from './type';
import { AppComponentService } from './app.component.service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainComponent, HeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
