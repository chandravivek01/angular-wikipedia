import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  @Output() submitted = new EventEmitter<string>();

  searchTerm = '';

  onInput( event : any ) {
    this.searchTerm = event?.target?.value;
  }

  onFormSubmit(event : any) {
    event.preventDefault();
    console.log(event.target.value)
    this.submitted.emit(this.searchTerm);
  }
}
