import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  pages = [];

  constructor(private wikiservice : WikipediaService) { }

  onTerm(searchTerm : string) {
    this.wikiservice.search(searchTerm).subscribe( (response : any) => {
      this.pages = response.query.search
    });
  }

}
