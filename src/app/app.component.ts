import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { ShowdetailsComponent } from "./showdetails/showdetails.component";
import { InsertComponent } from "./insert/insert.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent, ShowdetailsComponent, InsertComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular3';
}
