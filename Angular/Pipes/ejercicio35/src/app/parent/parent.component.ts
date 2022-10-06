import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  movies = [
    { name: 'Star Wars Episode X', rating: 'PG' },
    { name: 'Rocky XV', rating: 'PG-13' },
    { name: 'Jaws the Revenge', rating: 'R' },
    { name: 'Avengers 6 - The Marriage of the Hulk', rating: 'PG-13' },
    { name: "Finding Dory's Grandkids", rating: 'G' },
  ];

  constructor() {}

  ngOnInit() {}

  sortAsc() {
    this.movies = this.movies.sort((first, second) =>
      first.rating > second.rating ? 1 : first.rating == second.rating ? 0 : -1
    );
  }

  sortDesc() {
    this.movies = this.movies.sort((first, second) =>
      first.rating > second.rating ? -1 : first.rating == second.rating ? 0 : 1
    );
  }
}