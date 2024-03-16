import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/animal';
import { ListRenderService } from 'src/app/services/list-render.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent implements OnInit {
  animais: Animal[] = [];
  animalDetails: string = '';

  constructor(private listRender: ListRenderService) {
    this.getAnimals();
  }

  ngOnInit(): void {}

  removeAnimal(animal: Animal) {
    this.animais = this.animais.filter((a) => animal.name !== a.name);
    this.listRender.delete(animal.id).subscribe();
  }

  getAnimals(): void {
    this.listRender.getAll().subscribe((animais) => (this.animais = animais));
  }

  show(animal: Animal) {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos`;
  }
}
