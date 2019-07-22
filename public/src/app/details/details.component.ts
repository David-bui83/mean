import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { typeSourceSpan } from '@angular/compiler';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  pet_id:any;
  isDisabled =false;
  pet = {
    name:'',
    type:'',
    desc:'',
    skills: [],
    likes: 0
  }
  errors:any;
  status = true;
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
      console.log(this.pet);
    })
  };
  updateOnePet(id){
    // this.pet.name = upet.name;
    // this.pet.type = upet.type;
    // this.pet.desc = upet.desc;
    // this.pet.skills = upet.skills;
    this.pet.likes = this.pet.likes += 1;
    // console.log("upet: ",this.pet);
    // console.log('from update: ',id);
    // console.log(upet)
    this._httpService.updateOne(this.pet_id,this.pet).subscribe(data=>{
      console.log(data);
      if(data['message']==='error'){
        this.errors=data['data']['errors'];
      }else{
        console.log('details data: ', data);
        this._router.navigate([`/pets/${data['data'].id}`]);
      }
    })
  }
  changeStatus(){
    this.status = false;
  }
  disableButton(){
    return this.isDisabled = true;
  }
  destroyOnePet(id){
    this._httpService.destroy(id).subscribe(data=>{});
    this._router.navigate(['']);
  };
}
