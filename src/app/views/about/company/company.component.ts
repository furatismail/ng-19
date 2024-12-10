import { AfterViewInit, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { lastValueFrom, Observable, Subscription } from 'rxjs';
import { TodoService } from '../../../shared/services/todo/todo.service';
import { Todo } from '../../../shared/interfaces/todo.interface';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-company',
  imports: [JsonPipe, AsyncPipe],
  templateUrl: './company.component.html',
  styleUrl: './company.component.css',
})
export class CompanyComponent implements OnInit, AfterViewInit, OnDestroy {
  todos$: Observable<Array<Todo>>;
  todos: Array<Todo> = [];
  private subscription: Subscription = new Subscription()


  constructor(private todoService: TodoService) {
    console.log('Constructor')
  }

  ngOnInit() {
    console.log('ngOnInit')

    // OBSERVABLE PRETYPOVANY NA PROMISE
    // const response = await lastValueFrom(this.todoService.getAll())
    // this.todos = response;

    // OBSERVABLE SE SUBSCRIBE
    // this.subscription.add(
    //   this.todoService.getAll()
    //     .subscribe(response => {
    //       this.todos = response
    //     })
    // )

    // OBSERVABLE BEZ SUBSCRIBE
    this.todos$ = this.todoService.getAll();
    console.log(this.todos$, 'todos$')
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
  }

  getTodos(): void {
    // pouzivam datovy typ Observable a vyvolam HTTP request pomoci subscribe
    this.subscription.add(
      this.todoService.getAll()
        .subscribe(response => console.log(response))
    )
  }

  async getTodosAsync(): Promise<void> {
    // Pretypovavam datovy typ Observable na Promise a volam HTTP request
    const response = await lastValueFrom(this.todoService.getAll())
    console.log(response)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
