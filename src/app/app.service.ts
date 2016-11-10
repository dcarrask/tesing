import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { PARENTS } from './mock-parents';
import { Parent } from './parent';

import R from 'ramda';

// var R = require('ramda');

@Injectable()
export class AppService {

  parents:Array<Parent>;

  constructor(private http:Http) {
    http.request('parents.json')
                    .subscribe(response => this.parents = response.json());
  }

  // getParents()
  //       {
  //           //console.log(">>friend.service.ts:getFriends--")
  //           console.log(this.parents)
  //           return this.parents
  //       }

  getParents(): Parent[] {
    return PARENTS;
  }

  getParentChilds(parentCode:String): Parent[] {
    debugger
    return PARENTS;
    // debugger
    // R.find(R.propEq('code', "parentCode"))(PARENTS);
    // return R.find(R.propEq('code', "parentCode"))(PARENTS);
    // return PARENTS;
  }

  // getFriends() {
  //   return this.http.request('./_mock/parents.json')
  //                .map(res => res.json());
  // }
}
