import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public route: Router) { }
  ngOnInit(): void {

  }
  includeRoute(routeString: string): boolean {
    return this.route.routerState.snapshot.url.includes(routeString);
  }
}
