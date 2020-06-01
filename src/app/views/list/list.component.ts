import { PokeapiService } from './../../services/pokeapi.service';
import { Component, OnInit } from '@angular/core';


@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
	nameFilter = '';
	selectedPokemon = null;
	get pokemonList() {
		return this.pokeList.pokeList.filter((pokemon) => {
			return (
				pokemon.name
					.toLowerCase()
					.indexOf(this.nameFilter.toLowerCase()) !== -1
			);
		});
	}

	get pkmSprite() {
		const number = ('000' + this.selectedPokemon.number).slice(-3);
		return `//serebii.net/pokedex-xy/icon/${number}.png`;
	}
	constructor(private pokeList: PokeapiService) {}

	ngOnInit(): void {
		this.pokeList.listAll();
	}

	selectPokemon(pkm) {
		this.selectedPokemon = pkm;
	}
}
