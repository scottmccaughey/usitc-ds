import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PrismModule } from '@ngx-prism/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './components/error/error.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { StyleguideComponent } from './components/styleguide/styleguide.component';
import { KeepHtmlPipe } from './pipes/keep-html.pipe';
import { SectionComponent } from './components/section/section.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';

@NgModule({
  declarations: [
    AppComponent,
    StyleguideComponent,
    HeaderComponent,
    MenuComponent,
    HomeComponent,
    ErrorComponent,
    KeepHtmlPipe,
    SectionComponent,
    BreadcrumbComponent
  ],
  imports: [ AppRoutingModule, BrowserModule, HttpClientModule, AppRoutingModule, PrismModule ],
  exports: [ StyleguideComponent ],
  providers: [],
  bootstrap: [ AppComponent ],
  entryComponents: [ StyleguideComponent ]
})
export class AppModule {}
