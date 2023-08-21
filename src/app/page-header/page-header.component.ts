import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {

  @Output() menuClicked = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  logOut() {
    //this.api.deleteToken();
  }

}
