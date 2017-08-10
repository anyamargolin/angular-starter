import {
  Component,
  OnInit,
} from '@angular/core';

/**
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */
const path=require('path');
console.log('`Detail` component loaded asynchronously');

@Component({
  selector: 'detail',
  template: `
    <h1 class="lightenblue">Hello from Detail</h1>
    <span >
      <a [routerLink]=" ['./child-detail'] " class="label-default">
        Child Detail
      </a>
    </span>
    <router-outlet></router-outlet>
  `,
  //styleUrls: [('less/test/less/colors.less').toString(),
  //            ('bootstrap/less/bootstrap.less').toString()],
})
export class DetailComponent implements OnInit {

  public ngOnInit() {
    console.log('hello `Detail` component');
  }

}
