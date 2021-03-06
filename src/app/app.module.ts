import { NgModule } from '@angular/core';
import { StorageServiceModule } from 'ngx-webstorage-service';

import { AppRoutingModule } from './app-routing.module';
import { SearchModule } from './view/search/search.module';

import { HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { QRCodeModule } from 'angularx-qrcode';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

import { AppComponent } from './app.component';
import { LocalStorageService } from './service/local-storage.service';

import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule} from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatCardModule } from "@angular/material/card";
import { MatTableModule } from "@angular/material/table";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { HeaderComponent } from './core/components/header/header.component';
import { SearchComponent } from './view/search/search.component';
import { ColisComponent } from './view/colis/colis.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    ColisComponent,
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    SearchModule,

    MatButtonModule, MatFormFieldModule, MatIconModule,
    MatInputModule, MatListModule, MatSelectModule,
    MatSidenavModule, MatCardModule, MatTableModule,
    MatProgressSpinnerModule,

    QRCodeModule,
    ZXingScannerModule,

    StorageServiceModule
  ],
  providers: [LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
