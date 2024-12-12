import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-example-signals',
  imports: [],
  templateUrl: './example-signals.component.html',
  styleUrl: './example-signals.component.css'
})
export class ExampleSignalsComponent {
  search = signal('');
  users = signal([
    { id: 1, name: 'Karel' },
    { id: 2, name: 'Peter' },
  ])

  filteredUsers = computed(() => this.users().filter(user => user.name.toLocaleLowerCase().startsWith(this.search())));

  setSearchString(e: Event) {
    this.search.set((e.target as HTMLInputElement).value.toLowerCase());
  }

  addUser() {

    this.users.update(users => [...users, {id: 3, name: 'John'}])
  }
}
