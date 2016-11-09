import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import { ParentSearchService } from './parent-search.service';
import { Parent } from './parent';

@Component({
  // moduleId: module.id,
  // module: 'parents-search',
  selector: 'parents-search',
  templateUrl: 'parent-search.component.html',
  styleUrls: [ 'parent-search.component.css' ],
  providers: [ParentSearchService]
})

export class ParentSearchComponent implements OnInit {

  parents: Observable<Parent[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private parentSearchService: ParentSearchService,
    private router: Router) {}
    // private filter:string = "1";
  // Push a search term into the observable stream.

  search(term: string): void {
    // debugger
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.parents = this.searchTerms
      .debounceTime(300)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time
        // return the http search observable
        ? this.parentSearchService.search(term)
        // or the observable of empty parents if no search term
        : Observable.of<Parent[]>([]))
      .catch(error => {
        // TODO: real error handling
        console.log(error);
        return Observable.of<Parent[]>([]);
      });
  }

  gotoDetail(parent: Parent): void {
    let link = ['/detail', parent.code];
    this.router.navigate(link);
  }

}
