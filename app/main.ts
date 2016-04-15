import {AppComponent}     from './app.component.ts';
import {bootstrap}        from 'angular2/platform/browser';
import { HTTP_PROVIDERS }    from 'angular2/http';
import {
  ROUTER_DIRECTIVES,
  ROUTER_PROVIDERS,
  RouteConfig,
  Location,
  LocationStrategy,
  HashLocationStrategy
} from 'angular2/router';
import {provide}           from 'angular2/core';

bootstrap(AppComponent, [
  ROUTER_PROVIDERS,
  provide(LocationStrategy, {useClass: HashLocationStrategy}, HTTP_PROVIDERS)
]);