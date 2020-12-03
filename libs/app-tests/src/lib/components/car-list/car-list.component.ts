import { Component, Input } from '@angular/core';
import { Car } from '@simples/api-interfaces';


@Component({
  selector: "app-car-list",
  templateUrl: "./car-list.component.html",
  styleUrls: ["./car-list.component.scss"],
  providers: []
})
export class CarListComponent {
  @Input() cars: Car[] = [];

  constructor() { }
}
