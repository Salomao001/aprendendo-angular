import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
})
export class FirstComponentComponent implements OnInit {
  name: string = 'Eduardo Salomão';
  age: number = 20;
  job: string = 'Fullstack Developer';
  hobbies: string[] = ['gym', 'bike', 'party'];
  car = {
    name: 'Crossfox',
    branch: 'volkswagen',
  };

  constructor() {}

  ngOnInit(): void {}
}
