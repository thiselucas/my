import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, timer } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProgressBarService {
  private _progress = new BehaviorSubject<number>(0);

  get progress(): Observable<number> {
    return this._progress.asObservable();
  }

  constructor() {}

  startProgressBar(durationInSeconds: number): void {
    timer(0, (durationInSeconds * 1000) / 100)
      .pipe(take(101))
      .subscribe((value) => {
        this._progress.next(value);
      });
  }
}
