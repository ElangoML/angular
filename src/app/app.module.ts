import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { BiddetailComponent } from './biddetail/biddetail.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule} from '@angular/material/select'
import { MatTableModule} from '@angular/material/table'
import { MatCardModule} from '@angular/material/card'
import { MatDividerModule} from '@angular/material/divider'
import { AnimationTriggerMetadata } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductComponent,
    BiddetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatSelectModule,
    MatTableModule,
    MatCardModule,
    MatDividerModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
