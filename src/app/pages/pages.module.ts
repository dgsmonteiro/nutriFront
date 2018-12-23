import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Page404Component } from './page404/page404.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RegisterComponent } from './register/register.component';
import { HeaderModule } from '../components/header/header.module';
import { FooterModule } from '../components/footer/footer.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import { AboutComponent } from './about/about.component';
import { AgendaComponent } from './agenda/agenda.component';
import { DadosPacienteComponent } from './dados-paciente/dados-paciente.component';
import { MenuModule } from '../components/menu/menu.module';
import { CalendarModule, CalendarCommonModule, DateAdapter} from 'angular-calendar';
import { FlatpickrModule } from 'angularx-flatpickr';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { registerLocaleData } from '@angular/common';
import { NgbModalModule, NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';


import ptBr from '@angular/common/locales/pt';
registerLocaleData(ptBr);



@NgModule({
  imports: [
    NgbModalModule,
    // NgbTypeahead,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatListModule,
    MatCardModule,
    MatDividerModule,
    MatInputModule,
    CalendarCommonModule,
    CalendarModule,
    FlatpickrModule.forRoot({
    }),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    CommonModule,
    FooterModule,
    HeaderModule,
    MenuModule,
    AppRoutingModule,
  ],
  declarations: [
    HomeComponent,
    Page404Component,
    LoginComponent,
    ForgotPasswordComponent,
    RegisterComponent,
    AboutComponent,
    AgendaComponent,
    DadosPacienteComponent
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }]
})
export class PagesModule { }
