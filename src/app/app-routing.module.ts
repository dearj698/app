import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/walkthrough/walkthrough.module#WalkthroughPageModule' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'edit-profile', loadChildren: './pages/edit-profile/edit-profile.module#EditProfilePageModule' },
  { path: 'settings', loadChildren: './pages/settings/settings.module#SettingsPageModule' },
  { path: 'hotel-list', loadChildren: './pages/hotel-list/hotel-list.module#HotelListPageModule' },
  { path: 'hotel-detail/:id', loadChildren: './pages/hotel-detail/hotel-detail.module#HotelDetailPageModule' },
  { path: 'hotel-checkout/:hotelID/:roomID', loadChildren: './pages/hotel-checkout/hotel-checkout.module#HotelCheckoutPageModule' },
  { path: 'booking-list', loadChildren: './pages/booking-list/booking-list.module#BookingListPageModule' },
  { path: 'favorites', loadChildren: './pages/favorites/favorites.module#FavoritesPageModule' },
  { path: 'local-weather', loadChildren: './pages/local-weather/local-weather.module#LocalWeatherPageModule' },
  { path: 'about', loadChildren: './pages/about/about.module#AboutPageModule' },
  { path: 'support', loadChildren: './pages/support/support.module#SupportPageModule' },
  { path: 'messages', loadChildren: './pages/messages/messages.module#MessagesPageModule' },
  { path: 'message/:id', loadChildren: './pages/message/message.module#MessagePageModule' },
  { path: 'rentcar', loadChildren: './pages/rentcar/rentcar.module#RentcarPageModule' },
  { path: 'cars-list', loadChildren: './pages/cars-list/cars-list.module#CarsListPageModule' },
  { path: 'car-detail/:id', loadChildren: './pages/car-detail/car-detail.module#CarDetailPageModule' },
  { path: 'car-checkout/:carshopID/:carID', loadChildren: './pages/car-checkout/car-checkout.module#CarCheckoutPageModule' },
  { path: 'location', loadChildren: './pages/modal/location/location.module#LocationPageModule' },
  { path: 'activities', loadChildren: './pages/activities/activities.module#ActivitiesPageModule' },
  { path: 'activity-list', loadChildren: './pages/activity-list/activity-list.module#ActivityListPageModule' },
  { path: 'activity-detail/:id', loadChildren: './pages/activity-detail/activity-detail.module#ActivityDetailPageModule' },
  { path: 'activity-checkout/:tripID', loadChildren: './pages/activity-checkout/activity-checkout.module#ActivityCheckoutPageModule' },
  { path: 'extras', loadChildren: './pages/extras/extras.module#ExtrasPageModule' },
  { path: 'extras/profile-one', loadChildren: './pages/extras/profile-one/profile-one.module#ProfileOnePageModule' },
  { path: 'extras/profile-two', loadChildren: './pages/extras/profile-two/profile-two.module#ProfileTwoPageModule' },
  { path: 'extras/timeline', loadChildren: './pages/extras/timeline/timeline.module#TimelinePageModule' },
  { path: 'extras/authentication', loadChildren: './pages/extras/authentication/authentication.module#AuthenticationPageModule' },
  { path: 'extras/popupmenu', loadChildren: './pages/extras/popupmenu/popupmenu.module#PopupmenuPageModule' },
  { path: 'extras/charts', loadChildren: './pages/extras/charts/charts.module#ChartsPageModule' },
  { path: 'extras/post', loadChildren: './pages/extras/post/post.module#PostPageModule' },
  { path: 'boardlist', loadChildren: './boardlist/boardlist.module#BoardlistPageModule' },
  // { path: 'walkthrough', loadChildren: './pages/walkthrough/walkthrough.module#WalkthroughPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
