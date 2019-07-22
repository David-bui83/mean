import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {
  pets = []
  constructor(private _httpService: HttpService,private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.getAllPets();
  }
  getAllPets(){
    this._httpService.getAll().subscribe(data=>{
      this.pets=data['data'];
      console.log(this.pets);
    });
  }
  destroyOnePet(id){
    this._httpService.destroy(id).subscribe(data=>{
      this.ngOnInit()
    });
  };

}
