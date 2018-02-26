import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
@Injectable()
export class LocalService {

  constructor(private http: Http) { }


getData () {
  return this.http.get('http://localhost:3000/hello');
}
putData(data:any){
  console.log('Putet:',data);
  this.http.put('http://localhost:3000/put',data)//.subscribe((response: Response)=> console.log(response));
}
postData(data:any){
  console.log('Posted:',data);
  this.http.post('http://localhost:3000/hello',data).subscribe((response: Response)=> console.log(response));

}
getSiemensData(){
  return this.http.get('http://localhost:3000/siemens');
      
}
// postSiemensData(data:any){
//   console.log('Siemens Posted',data);
//   this.http.post('http://localhost:3000/spost',data).subscribe((response: Response)=>{
//   });

// }

postSiemensData(data:any){
  return new Promise((resolve) =>{
    console.log('Siemens Posted',data);
    this.http.post('http://localhost:3000/spost',data).subscribe((response: Response)=>{
      resolve(response);
    });
  })


}
}