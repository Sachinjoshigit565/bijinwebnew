import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class Scroll {

  scrollToProduct$ = new Subject<void>();
  scrollToContact$ = new Subject<void>();
  scrollToaboutus$ = new Subject<void>();
  scrollTohome$    = new Subject<void>();

  scrollToContact() { this.scrollToContact$.next(); }

  scrollToProduct() { this.scrollToProduct$.next() }

  scrollToaboutus() { this.scrollToaboutus$.next(); }

  scrollTohome() { this.scrollTohome$.next(); }






}
