import {AppComponent}     from './app.component.ts';
import {bootstrap}        from 'angular2/platform/browser';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig} from 'angular2/router';
import {provide}           from 'angular2/core';

bootstrap(AppComponent, [
  ROUTER_PROVIDERS
]);