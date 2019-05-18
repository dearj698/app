import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/extras/authentication/authentication.module#AuthenticationPageModule' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'edit-profile', loadChildren: './pages/edit-profile/edit-profile.module#EditProfilePageModule' },
  { path: 'settings', loadChildren: './pages/settings/settings.module#SettingsPageModule' },
  { path: 'booking-list', loadChildren: './pages/booking-list/booking-list.module#BookingListPageModule' },
  { path: 'about', loadChildren: './pages/about/about.module#AboutPageModule' },
  { path: 'support', loadChildren: './pages/support/support.module#SupportPageModule' },
  { path: 'messages', loadChildren: './pages/messages/messages.module#MessagesPageModule' },
  { path: 'message/:id', loadChildren: './pages/message/message.module#MessagePageModule' },
  { path: 'location', loadChildren: './pages/modal/location/location.module#LocationPageModule' },
  { path: 'extras', loadChildren: './pages/extras/extras.module#ExtrasPageModule' },
  { path: 'extras/profile-one', loadChildren: './pages/extras/profile-one/profile-one.module#ProfileOnePageModule' },
  { path: 'extras/profile-two', loadChildren: './pages/extras/profile-two/profile-two.module#ProfileTwoPageModule' },
  { path: 'extras/timeline', loadChildren: './pages/extras/timeline/timeline.module#TimelinePageModule' },
  { path: 'extras/authentication', loadChildren: './pages/extras/authentication/authentication.module#AuthenticationPageModule' },
  { path: 'extras/popupmenu', loadChildren: './pages/extras/popupmenu/popupmenu.module#PopupmenuPageModule' },
  { path: 'extras/charts', loadChildren: './pages/extras/charts/charts.module#ChartsPageModule' },
  { path: 'extras/post', loadChildren: './pages/extras/post/post.module#PostPageModule' },
    { path: 'list', loadChildren: './list/list.module#ListPageModule' },
  { path: 'boardlist', loadChildren: './boardlist/boardlist.module#BoardlistPageModule' },
  { path: 'bookcase', loadChildren: './bookcase/bookcase.module#BookcasePageModule' },
  { path: 'preview', loadChildren: './preview/preview.module#PreviewPageModule' },

  // { path: 'walkthrough', loadChildren: './pages/walkthrough/walkthrough.module#WalkthroughPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
