import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/User';
import { HttpClient} from '@angular/common/http';
import Movie from 'src/Movie';

@Injectable({
  providedIn: 'root'
})
export class UtilserviceService {

  constructor(private httpClient:HttpClient) { }

  set = new Set<User>();
  User(u:User):Observable<User>{
    return this.httpClient.post<User>("http://localhost:8086/register",
    {"username":u.username,"password":u.password,"mobileno":u.mobile_no,"email":u.email},{responseType:"json"} 
    );
  }

  set1 = new Set<Movie>();
  Movie(m:Movie):Observable<Movie>{
    return this.httpClient.post<Movie>("http://localhost:9000/registermovie",
    {"movietitle":m.title,"genre":m.genre});
  }

}
