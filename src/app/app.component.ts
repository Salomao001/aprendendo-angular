import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userName = 'Joaquinho';
  userData = {
    email: 'eduardo@gmail.com',
    role: 'GOD',
  };
  title = 'aprendendo-angular';
}
