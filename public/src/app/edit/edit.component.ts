import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  pet_id:any;
  pet:any;
  errors:any;
  skill1:any;
  skill2:any;
  skill3:any;
  constructor(private _httpService: HttpService,private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe((params:Params)=>{
      this.pet_id = params['id'];
    });
    console.log("product id from edit: ",this.pet_id);
    this.getOnePet();
  }
  getOnePet(){
    this._httpService.getOne(this.pet_id).subscribe(data=>{
      this.pet=data['data'];
      this.skill1 = this.pet.skills[0];
      this.skill2 = this.pet.skills[1];
      this.skill3 = this.pet.skills[2];
      
    })
  };
  updateOnePet(id){
    console.log('from update: ',id);
    this.pet.skills[0]=this.skill1
    this.pet.skills[1]=this.skill2
    this.pet.skills[2]=this.skill3
    this._httpService.updateOne(id,this.pet).subscribe(data=>{
      if(data['message']==='Error'){
        this.errors=data['data']['errors'];
      }else{
        this._router.navigate(['/pets']);
      }
    })
  }
  destroyOnePet(id){
    this._httpService.destroy(id).subscribe(data=>{
      this._router.navigate(['/pets']);
      this.ngOnInit()
    });
  };

}
