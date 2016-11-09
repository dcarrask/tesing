import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

// import { PARENTS } from '_mock/parents.json';
// import {Http} from '@angular/http';

import { AppService } from './app.service';

import {Http, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';

// import { MyFilterPipe } from './_filter/filter-pipe';
// import { Ng2FilterPipe } from 'ng2-filter-pipe';

@Component({
  selector: 'app-root',
  // pipes: [ MyFilterPipe ],
  // pipes: [ Ng2FilterPipe ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ AppService ]
})

// export class AppComponent implements OnInit {
export class AppComponent {
  title = 'app works!';
  items: FirebaseListObservable<any[]>;
  users: FirebaseListObservable<any[]>;
  articles: FirebaseListObservable<any[]>;

  item: FirebaseObjectObservable<any>;

  // parents;
  // parents = {};
  parents: Object;

  parentsFilter:string[];

  // array: string[] = ['one', 'two', 'three', 'four'];
  // stringFilter: string = '';

  // getServices(): Observable<any> {
  //     this.parentsFilter=this._http.get(this._url)
  //         .map(res => res.json());
  // }

  // this.http.get('./friends.json').map((res: Response) => res.json()).subscribe(res => this.friends = res);

  constructor(af: AngularFire, private _http: Http, _appService: AppService) {

    // private _friendService: FriendService) {
    this.parents = _appService.getParents();

    // debugger
    // this.items = af.database.list('/todos');
    // console.log(this.items)

    // this.users = af.database.list('/users');
    // console.log(this.users)

    // this.articles = af.database.list('/items',
    //   {
    //   query: {
    //     limitToLast: 10,
    //     orderByKey: true,
    //   }
    // });

    this.articles = af.database.list('/articles',
      {
      query: {
        limitToLast: 45,
        orderByKey: true,
      }
    });



    // this.articles = {
    //     return this.http.get("MY_URL")
    //                     .map(res => res.json());
    // }


    // console.log(this.articles)

    // this.parents = http.get('./_mock/parents.json').map(res => res.json());

    // this.parents = this.http.get('/src/app/_mock/parents.json')
    // this.parents = this.http.get('_mock/parents.json')
    // this.parents = this.http.get(PARENTS)
    //     // .map(res => res.json())
    //     // .subscribe(res => this.data = res.json());
    //     .subscribe(data => this.parents = data,
    //                 err => console.log(err),
    //                 () => console.log('Completed'));

    // this.articles.remove("-KVQoSzsO12y2GAI-owN").then(_ => console.log('item deleted!'));

    // DB - Elements Management
    // https://github.com/angular/angularfire2/issues/144
    // class MyComp {
    // questions: FirebaseListObservable<any[]>;
    // value: FirebaseObjectObservable<any>;
    // constructor(af: AngularFire) {
    //   this.questions = af.database.list('/questions');
    //   this.value = af.database.object('/value');
    // }
    // addToList(item: any) {
    //   this.questions.push(item);
    // }
    // removeItemFromList(key: string) {
    //   this.questions.remove(key).then(_ => console.log('item deleted!'));
    // }
    // deleteEntireList() {
    //   this.questions.remove().then(_ => console.log('deleted!'));
    // }
    // setValue(data: any) {
    //   this.value.set(data).then(_ => console.log('set!'));
    // }
    // updateValue(data: any) {
    //   this.value.update(data).then(_ => console.log('update!'));
    // }
    // deleteValue() {
    //   this.value.remove().then(_ => console.log('deleted!'));
    // }
    // }



    // console.log(this.users)

    // var usersQuery = usersRef.limitToLast(10);

    // https://firebase.google.com/docs/database/rest/retrieve-data?hl=es
    // https://www.firebase.com/docs/rest/guide/retrieving-data.html
    // orderBy
      // limitToFirst
      // limitToLast
      // startAt
      // endAt
      // equalTo


                            // const itemsToDelete = af.database.list('/articles',
                            //   {
                            //   query: {
                            //     limitToLast: 2,
                            //     orderByKey: true,
                            //     // orderBy
                            //     // startAt
                            //     // endAt
                            //   }
                            // });

    // debugger
    // const itemsToDelete = this.articles;
    // itemsToDelete.remove();

    // var ref= new Firebase('https://Yourapp.firebaseio.com/YourObjectName');

    // ref.child(postId).remove(function(error){
    //   if (error) {
    //     console.log("Error:", error);
    //   } else {
    //     console.log("Removed successfully!");
    //   }
    // });



    // console.log(this.articles)

    this.articles = af.database.list('/articles',
      {
      query: {
        limitToLast: 10,
        orderByKey: true
      }
    });

    // -KVQnCY6WsEETv4NmUdI
    // this.item = af.database.object('/item');

    // ,
    //   {
    //   query: {
    //     key: '-KVQnCY6WsEETv4NmUdI'
    //   }
    // });

    // UPDATE ELEMENT
    // this.item = af.database.object('/items/-KVQoSzsO12y2GAI-owN');
    // let newData = {
    //   "code" : "2NEWCODE",
    //   "description-long" : "2NEW DESCRIPTION",
    //   "family" : "2NEW FAMILY",
    //   "iva" : "266.00%",
    //   "margin-real" : 2500,
    //   "name" : "2Tarifa New",
    //   "price-of-cost" : "210.99",
    //   "price-sale" : "259.99",
    //   "provider" : "2YEP PROVIDER NEW",
    // }

    // this.item.set(newData).then(_ => console.log('set!'));

    // NEW ELEMENT
    // let newElem = {
    //   "code" : "NEWCODE",
    //   "description-long" : "NEW DESCRIPTION",
    //   "family" : "NEW FAMILY",
    //   "iva" : "66.00%",
    //   "margin-real" : 500,
    //   "name" : "Tarifa New",
    //   "price-of-cost" : "10.99",
    //   "price-sale" : "59.99",
    //   "provider" : "YEP PROVIDER NEW",
    // }
    // this.articles.push(newElem);



    // this.articles = af.database.
  }

  // ngOnInit() {
  //   // this._appService.getServices()
  //   this._appService.getServices()
  //       .subscribe(lists => this.parentsFilter = lists)
  // }
}
