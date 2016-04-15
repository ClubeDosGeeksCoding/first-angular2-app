import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {PersonComponent}   from './person.component.ts';

@Component({
    selector: 'my-app',
    templateUrl: 'views/index.html',
  	directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([

  	{path:'/persons',    name: 'Persons',   component: PersonComponent}
])
export class AppComponent { }