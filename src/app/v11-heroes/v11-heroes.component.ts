import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../v11-heroes';

@Component({
  selector: 'app-v11-heroes',
  templateUrl: './v11-heroes.component.html',
  styleUrls: ['./v11-heroes.component.css']
})
export class V11HeroesComponent implements OnInit {

  constructor() { }
 
  heroes = HEROES;
  selectedHero?: Hero;

  ngOnInit(): void {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
