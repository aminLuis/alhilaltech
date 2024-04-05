import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { BodyComponent } from './body/body.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { SwiperModule } from 'swiper/angular';
import { FooterComponent } from './pages/footer/footer.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';
import { MisionComponent } from './pages/mision/mision.component';
import { VisionComponent } from './pages/vision/vision.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ToolbarComponent,
    BodyComponent,
    InicioComponent,
    FooterComponent,
    QuienesSomosComponent,
    MisionComponent,
    VisionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
