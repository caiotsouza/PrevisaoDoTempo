import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from './components/main-component/main-component';
import { HeaderComponent } from './components/header-component/header-component';
import { ComponentBody } from './components/component-body/component-body';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainComponent, HeaderComponent, ComponentBody],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('PrevisaoDoTempo');
}
