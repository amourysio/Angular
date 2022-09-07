import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

// Models
import { Joke } from "./joke.module";

@Injectable({
    providedIn: 'root'
})
export class JokesService{
    private apiUrl = 'https://api.chucknorris.io/jokes/';
    constructor(
       private http: HttpClient
    ) {}

    // Get Random Joke
    getRandomJoke(){
        return this.http.get<Joke>(this.apiUrl + 'random');
    }
    
    // Get Categories
    getCategories()
    {
        return this.http.get<string[]>(this.apiUrl + 'categories');
    }
    
    // Get Joke By Category
    getCategoryJoke(category: string){
        return this.http.get<Joke>(this.apiUrl + `random?category=${category}` );
    }

    // Get Search Jokes
    getSearchJokes(searchTerm: string){
        return this.http.get<{result: Joke[], amount: number}>(this.apiUrl + `search?query=${searchTerm}`)
    }

}