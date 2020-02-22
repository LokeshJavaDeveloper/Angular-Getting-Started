import { Component } from '@angular/core';

@Component({
selector:'pm-root-lokesh',
template: `
   <nav class ='nav navbar-expand navbar-light bg-light'>
   <a class='navbar-brand'>{{pageTitle}} </a>
    <ul class='nav nav-pills'>
      <li><a class='nav-link' [routerLink]="['/welcome']">Home</a></li>
      <li><a class='nav-link' [routerLink]="['/products']">ProductList</a></li>
    </ul>
   </nav>
   <div class='container'>
   <router-outlet></router-outlet>
   </div>
  `
}
)
export class AppComponet{
  pageTitle: string="Product Managment";
}