import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAll = ()=>{
    return this._http.get('/pets');
  };
  getOne = (id:string)=>{
    return this._http.get(`pets/${id}`);
  };
  postOne = (newPet:any)=>{
    return this._http.post('pets',newPet);
  };
  updateOne = (id:string,pet:any)=>{
    return this._http.put(`pets/edit/${id}`,pet);
  };
  destroy = (id:string)=>{
    return this._http.delete(`pets/${id}`);
  };
}
