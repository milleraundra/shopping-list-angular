import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() {
    //TODO call $(".dropdown-button").dropdown(); to activate navbar dropdown
    //TODO also return here (http://materializecss.com/navbar.html#!) to learn how to implement the hamburger menu for mobile

  }

  ngOnInit() {
  }

}
