import { Component, OnInit } from '@angular/core';
import { SidenavItem } from '../models/models';

@Component({
  selector: 'app-page-sidenav',
  templateUrl: './page-sidenav.component.html',
  styleUrls: ['./page-sidenav.component.scss']
})
export class PageSidenavComponent implements OnInit {
    sideNavContent:SidenavItem[]=[
      {
        title:'view books',
        link:'books/library',
      },
      {
        title:'manage books',
        link:'books/maintenance',
      },
      {
        title:'manage category',
        link:'books/categories',
      },
      {
        title:'return books',
        link:'books/return',
      },
      {
        title:'view user',
        link:'users/list',
      },
      {
        title:'all orders',
        link:'users/all-orders',
      },
      // {
      //   title:'my orders',
      //   link:'users/my-orders',
      // },
    ];



  constructor() { }

  ngOnInit(): void {
  }

}
