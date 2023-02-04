import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss']
})
export class BackButtonComponent implements OnInit {
  private location: Location;
  constructor(location: Location) {
    this.location = location;
  }

  ngOnInit(): void {
  }
  goBack(): void {
    this.location.back();
  }
}
