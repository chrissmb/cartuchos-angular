import { Injectable } from '@angular/core';
declare var  jQuery: any;
declare var $: any;

@Injectable()
export class JqueryService {

  constructor() { }

  ativaSideBar() {
    $('.button-collapse').sideNav();
  }
}
