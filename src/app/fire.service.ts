import { Injectable } from '@angular/core';
import{ HttpClient} from '@angular/common/http';

import { Observable } from '../../node_modules/rxjs';
import { map } from '../../node_modules/rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class FireService {
info=
{
  id:1,
  name:"Meghna",
  Empid:1001
}
info1=
{
  id:2,
  name:"abhishek",
  Empid:1002
}
  constructor(private httpobj:HttpClient) { }
getData():Observable<any>{
  return this.httpobj.get("https://fire-7e890.firebaseio.com/mjson.json").pipe(map(data=>data));//show data
}

setData():Observable<any>{
  return this.httpobj.post("https://fire-7e890.firebaseio.com/mjson.json",this.info);//fetch data
}

delData():Observable<any>{
  return this.httpobj.delete("https://fire-7e890.firebaseio.com/mjson.json")
}
putData():Observable<any>{
  return this.httpobj.put("https://fire-7e890.firebaseio.com/mjson.json",this.info1)
}
}
