import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ETRContainerComponent } from './etr-container/etr-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ETRContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'KRA-ETR_LOGIN';
}
