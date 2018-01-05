import { Observable, Subscription } from '@reactivex/rxjs';

export default class Example1 {
    ob: Observable<any>;
    sub: Subscription;

    constructor () {
        this.ob = Observable.create((observer) => {
            observer.next(1);
        });
        this.sub = this.ob.subscribe((val) => {
            console.log('Hellooo ' + val);
        });
    }
};
