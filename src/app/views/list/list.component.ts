import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
	selectedPokemon = null;
	pokemonList = [
		{
			name: 'Bulbasaur',
			number: 1,
		},
		{
			name: 'Charmander',
			number: 4,
		},
		{
			name: 'Squirtle',
			number: 7,
		},
		{
			name: 'Pikachu',
			number: 25,
		},
	];
	get pkmSprite(){
		const number = ('000' + this.selectedPokemon.number).slice(-3);
		return `//serebii.net/pokedex-xy/icon/${number}.png`;
	}
	constructor() {}

	ngOnInit(): void {}

	selectPokemon(pkm){
		this.selectedPokemon = pkm;
	}
}
