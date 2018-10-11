import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ClipboardModule } from 'ngx-clipboard';
import { PrismModule } from '@ngx-prism/core';
import { InlineSVGModule } from 'ng-inline-svg';

import { AppRoutingModule } from './app-routing.module';

import { KeepHtmlPipe } from './pipes/keep-html.pipe';

import { AppComponent } from './app.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { CodeComponent } from './components/code/code.component';
import { ColorsComponent } from './components/colors/colors.component';
import { ErrorComponent } from './components/error/error.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { IconComponent } from './components/icon/icon.component';
import { IconsComponent } from './components/icons/icons.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NavComponent } from './components/nav/nav.component';
import { ParametersComponent } from './components/parameters/parameters.component';
import { SectionComponent } from './components/section/section.component';
import { StyleguideComponent } from './components/styleguide/styleguide.component';

@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbComponent,
    CodeComponent,
    ColorsComponent,
    ErrorComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    IconComponent,
    IconsComponent,
    KeepHtmlPipe,
    LayoutComponent,
    NavComponent,
    ParametersComponent,
    SectionComponent,
    StyleguideComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ClipboardModule,
    HttpClientModule,
    InlineSVGModule.forRoot(),
    PrismModule
  ],
  exports: [StyleguideComponent],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [StyleguideComponent]
})
export class AppModule {}
