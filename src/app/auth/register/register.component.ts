import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { retry, concatMap, map, mergeMap, catchError, switchMap, tap, flatMap, find } from "rxjs/operators"

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  firstObs$: any
  secondObs$: any
  thirdObs$: any
  constructor() { 


      this.firstObs$ = () => {
        return new Observable((observer => {
          setTimeout(() => {
            console.log(1);
            observer.next([1,2,3,4]);
            observer.complete()
          }, 9000); 
        }))
      }
      this.secondObs$ = (second = [2]) => {
        return new Observable((observer => {
          setTimeout(() => {
            console.log(2);
            observer.next([10,11,12,13, second]);
            observer.complete()
          }, 1000); 
        }))
      }
      this.thirdObs$ = (second = [2]) => {
        return new Observable((observer => {
          setTimeout(() => {
            console.log(3);
            observer.next([20,21,22,23, second]);
            observer.complete()
          }, 1000); 
        }))
      }
  

      const result = this.firstObs$().pipe(
        concatMap(responseOfFirst => this.secondObs$(responseOfFirst)),
        concatMap(responseOfSecond => this.thirdObs$(responseOfSecond)),
      );
      result.subscribe(x => console.log(x));


  }

  ngOnInit() {
  }

}
