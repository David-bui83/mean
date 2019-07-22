import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PetsComponent } from './pets/pets.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {path:'', pathMatch: 'full',redirectTo:'pets'},
  {path:'pets',component:PetsComponent},
  {path:'pets/edit/:id',component:EditComponent},
  {path:'pets/create',component:CreateComponent},
  {path:'pets/create',component:CreateComponent},
  {path:'pets/:id',component:DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
