import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, of, Observable } from 'rxjs';
import { map, filter, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http:HttpClient) { }

  getData():Observable<any> {
    const url = "https://api.github.com/users";
    return this.http.get<any>(url);
  }

  getRepositories(user:String):Observable<any> {
    const url = "https://api.github.com/users/" + user + "/repos";
    let result = this.http.get<any>(url).pipe(
      map(res => {
        if (!res[0]) {
          throw new Error('Value expected!');
        }
        return res.filter(item => item.fork === false);
      }),
      catchError(err => of([]))
    );

    return result;
  }

}
