import { Component } from '@angular/core';
import { Home } from './home/home';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
 <main>
      <a [routerLink]="['/']">
        <header class="brand-name">
          <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true" />
        </header>
      </a>
      <h1>{{ title }}</h1>
      <h2>Welcome to {{ name }}!</h2>
      <p>Current Year: {{ year }}</p>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrls: ['./app.css'],
})
export class App {
  title = 'Homes';
  name:string = 'Aitech';
  year: number = new Date().getFullYear();
}


