import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Post } from 'src/models';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostApiService {
  constructor(private http: HttpClient) {}

  getPosts({ offset, limit, ...rest }: any): Observable<Array<Post>> {
    const restArray = Object.entries(rest);
    let queryString: string = '';
    restArray.forEach((element) => {
      queryString += `&${element[0]}=${element[1]}`;
    });
    return this.http
      .get(
        `${environment.api}/v1/item/all?offset=${offset}&limit=${limit}${queryString}`
      )
      .pipe(map((res: any) => res.items));
  }
}
