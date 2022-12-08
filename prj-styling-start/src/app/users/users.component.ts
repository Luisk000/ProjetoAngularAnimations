import { routeFadeStateTrigger, routeSlideStateTrigger } from './../shared/route-animations';
import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  animations: [
    routeSlideStateTrigger
  ]
})
export class UsersComponent implements OnInit {
  @HostBinding('@routeSlideState') routeAnimation = true;

  constructor() { }

  ngOnInit() {
  }

}
