import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Parent }           from './parent';

@Injectable()
export class ParentSearchService {
  constructor(private http: Http) {}
  search(term: string): Observable<Parent[]> {
    return this.http
               .get(`app/parent/?name=${term}`)
               .map((r: Response) => r.json().data as Parent[]);
  }
}
