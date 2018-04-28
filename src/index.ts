import Rx from 'rxjs/Rx'
// or
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

Rx.Observable.of(1,2,3).map(x => x + '!!!'); // etc

Observable.of(1,2,3).map(x => x + '!!!'); // etc