import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from '../header-component/header-component';

@Component({
  selector: 'app-main-component',
  imports: [ HeaderComponent, MatCardModule, MatButtonModule],
  templateUrl: './main-component.html',
  styleUrl: './main-component.css'
})
export class MainComponent {

}
