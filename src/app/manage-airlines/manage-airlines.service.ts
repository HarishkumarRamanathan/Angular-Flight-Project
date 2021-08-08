import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ManageAirlinesService {

  private url: string = 'http://localhost:3000/flights';
  constructor(private httpClient: HttpClient) {
    
   }

   addAirlines(data:any){

    return this.httpClient.post<any>(this.url,data,
    { observe: 'response' }).pipe(res => {
      return res;
    });
   }
}
