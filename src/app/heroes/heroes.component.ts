import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
// import { HEROES } from '../mock-heroes';
import { HeroService } from "../hero.service";
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService, private messageService: MessageService) {
    console.log("service injected.");
    console.log(heroService.getHeroes());
  }

  ngOnInit(): void {
    this.getHeroes();
    console.log("values initialized.");
  }

  // hero:Hero={id:1,name:'windstorm'};

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
    console.log("subsribed to the data emmited by the service");
  }

  heroes: Hero[];

  selectedHero: Hero;

  onSelect(hero: Hero): void {
    // alert("selected "+hero.name);
    this.selectedHero = hero;
    this.messageService.add(`HeroService: Selected hero id=${hero.id}`);
  }
}
