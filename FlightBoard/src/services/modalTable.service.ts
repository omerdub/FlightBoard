import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalTableService {
  private display: BehaviorSubject<{ status: 'open' | 'close', content: any }> =
    new BehaviorSubject({ status: 'close', content: null });

  watch(): Observable<{ status: 'open' | 'close', content: any }> {
    return this.display.asObservable();
  }

  open(content: any) {
    this.display.next({ status: 'open', content });
  }

  close() {
    this.display.next({ status: 'close', content: null });
  }
}