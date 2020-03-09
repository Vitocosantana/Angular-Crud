import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const url = 'http://hello-world.innocv.com/api/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { 

   }

   create(user){
    return this.http.post(url, user);
   }

   list() {
      return this.http.get(url);
   }

   read(id) {
    return this.http.get(url+"/"+id);
   }

   update(user){
    return this.http.put(url, user);
   }

   delete(id) {
    return this.http.delete(url+"/"+id);
   }
}
