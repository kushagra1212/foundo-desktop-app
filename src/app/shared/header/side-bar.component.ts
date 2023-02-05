import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  constructor(public router: Router) {}
  ngOnInit(): void {}
  includeRoute(routeString: string): boolean {
    return this.router.routerState.snapshot.url.includes(routeString);
  }
}
