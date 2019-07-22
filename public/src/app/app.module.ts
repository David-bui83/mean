import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetsComponent } from './pets/pets.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    PetsComponent,
    CreateComponent,
    EditComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
