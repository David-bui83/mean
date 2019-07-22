import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  errors: any;
  skill1:any;
  skill2:any;
  skill3:any;
  newPet = {
    name:'',
    type:'',
    desc:'',
    skills: [],
    likes: 0
  }
  constructor(private _httpService: HttpService,private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.newPet = {
      name:'',
      type:'',
      desc:'',
      skills: [],
      likes: 0
    }
  }
  postOnePet(){
    this.newPet.skills.push(this.skill1)
    this.newPet.skills.push(this.skill2)
    this.newPet.skills.push(this.skill3)
    console.log(this.newPet);
    this._httpService.postOne(this.newPet).subscribe(data=>{
      console.log(data)
      if(data["message"] == "error"){
        console.log("ERR")
        this.errors = data["data"]["errors"]
        console.log(this.errors)
      }else{
        this.newPet = {
          name:'',
          type:'',
          desc:'',
          skills: [],
          likes: 0
        }
        this._router.navigate(['']);
      }
    });
  };
}
