import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MonstersComponent } from './monsters/monsters.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MonstersComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
