import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-v11-heroes',
  templateUrl: './v11-heroes.component.html',
  styleUrls: ['./v11-heroes.component.css']
})
export class V11HeroesComponent implements OnInit {

  constructor() { }

  hero = 'Ram';

  ngOnInit(): void {
  }

}
