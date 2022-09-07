import { Component, OnInit } from '@angular/core';
import { JokesService } from './jokes.services';

//Models
import { Joke } from './joke.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  jokes: Joke[] = [];
  categories: string[] = [];

  constructor(
    private jokesService: JokesService
  ){}

  ngOnInit(): void {
    this.jokesService.getCategories()
    .subscribe((categories: string[]) => {
      this.categories = categories;

      this.jokesService.getRandomJoke()
      .subscribe((joke: Joke) => {
        // console.log('Joke', joke);
        this.jokes.push(joke);
       });
    });
  }

   // Search by Category
   searchByCategory(category: string){
    this.jokesService.getCategoryJoke(category)
      .subscribe((joke: Joke) => {
        this.jokes = [];
        this.jokes.push(joke);
      });
    }

    // Search by Search Term
    searchBySearchTerm(searchTerm: string){
     if(searchTerm !== ''){
      this.jokesService.getSearchJokes(searchTerm)
      .subscribe(jokes =>{
        this.jokes = jokes.result;
      });
     }
    }
}
