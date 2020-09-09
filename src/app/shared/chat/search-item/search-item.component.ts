import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {

  constructor() { }

  @Output() search = new EventEmitter<string>();

  ngOnInit(): void {
  }

  handlerClickSearch(data: string){
    this.search.emit(data);
  }

}
