import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  private dataSource = new BehaviorSubject<any>('');
  currentData = this.dataSource.asObservable();

  constructor() { }

  emitData(data: any) {
    this.dataSource.next(data)
  }
}
