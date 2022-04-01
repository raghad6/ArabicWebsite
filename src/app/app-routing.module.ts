import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ArticlesComponent } from './articles/articles.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';
import { ImagesComponent } from './images/images.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { VideosComponent } from './videos/videos.component';
import { VoicesComponent } from './voices/voices.component';
import { WritingsComponent } from './writings/writings.component';

import { AuthGuard } from './services/auth.guard';


const routes: Routes = [
  { path: 'admin-Dashboard' , component: AdminDashboardComponent , canActivate: [AuthGuard] },
  { path: 'articles' , component: ArticlesComponent},
  { path: 'dashboard' , component: DashboardComponent , canActivate: [AuthGuard] },
  { path: 'forget-pasword' , component: ForgotPasswordComponent},
  { path: 'history' , component: HistoryComponent},
  { path: 'home' , component: HomeComponent},
  { path: 'images' , component: ImagesComponent},
  { path: 'login' , component: LoginComponent},
  { path: 'signup' , component: SignupComponent},
  { path: 'verify-email' , component: VerifyEmailComponent},
  { path: 'videos' , component: VideosComponent},
  { path: 'voices' , component: VoicesComponent},
  { path: 'writings' , component: WritingsComponent},
  { path: '**', component: HomeComponent },                  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
