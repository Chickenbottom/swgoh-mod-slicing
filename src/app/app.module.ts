import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ModSliceComponent } from './mod-slice/mod-slice.component';
import { AppRoutingModule } from './app-routing/app-routing';
import { HttpClientModule } from '@angular/common/http';
import { ModServiceService } from './services/mod-service.service';
import { ModCardComponent } from './shared/mod-card/mod-card.component';
import { StatSelectionComponent } from './shared/stat-selection/stat-selection.component';
import { ModDataService } from './services/mod-data.service';
@NgModule({
  declarations: [
    AppComponent,
    ModSliceComponent,
    ModCardComponent,
    StatSelectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ModServiceService,
    ModDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
