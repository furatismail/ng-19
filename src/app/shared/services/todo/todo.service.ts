import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Todo } from '../../interfaces/todo.interface';
import { delay, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private httpClient = inject(HttpClient);

  // constructor(private httpClient: HttpClient) { }

  getAll() : Observable<Todo[]> {
    return this.httpClient.get<Todo[]>('https://jsonplaceholder.typicode.com/todos').pipe(delay(3000))
  }


  // getAllAsync() : Promise<Todo[]> {
  //   return lastValueFrom(this.httpClient.get<Todo[]>('https://jsonplaceholder.typicode.com/todos'))
  // }

}