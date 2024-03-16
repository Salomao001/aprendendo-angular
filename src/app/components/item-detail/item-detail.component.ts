import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animal } from 'src/app/animal';
import { ListRenderService } from 'src/app/services/list-render.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css'],
})
export class ItemDetailComponent implements OnInit {
  animal?: Animal;

  constructor(
    private listService: ListRenderService,
    private route: ActivatedRoute
  ) {
    this.getAnimal();
  }

  ngOnInit(): void {}

  getAnimal(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.listService.getById(id).subscribe((animal) => (this.animal = animal));
  }
}
