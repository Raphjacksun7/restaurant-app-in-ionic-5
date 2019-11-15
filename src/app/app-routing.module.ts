import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/home-location/home-location.module').then(m => m.HomeLocationPageModule) },
  { path: 'login', loadChildren: () => import('./pages/auth/login/login.module').then(m => m.LoginPageModule) },
  { path: 'register', loadChildren: () => import('./pages/auth/register/register.module').then(m => m.RegisterPageModule) },
  { path: 'about', loadChildren: () => import('./pages/about/about.module').then(m => m.AboutPageModule) },
  // { path: 'support', loadChildren: () => import('./pages/support/support.module').then(m => m.SupportPageModule) },
  { path: 'add-address', loadChildren: () => import('./pages/add-address/add-address.module').then(m => m.AddAddressPageModule) },
  { path: 'myadress', loadChildren: () => import('./pages/myadress/myadress.module').then(m => m.MyAdressPageModule), canActivate: [AuthGuard]},
  { path: 'myadress2', loadChildren: () => import('./pages/myadress2/myadress.module').then(m => m.MyAdressPageModule), canActivate: [AuthGuard]},
  { path: 'special-offer', loadChildren: () => import('./pages/special-offer/special-offer.module').then(m => m.SpecialOfferPageModule) },
  { path: 'edit-profile', loadChildren: () => import('./pages/edit-profile/edit-profile.module').then(m => m.EditProfilePageModule) , canActivate: [AuthGuard]},
  // { path: 'message', loadChildren: () => import('./pages/modal/message/message/message.module').then(m => m.MessagePageModule) },
  // { path: 'message/:id', loadChildren: () => import('./pages/message/message.module').then(m => m.MessagePageModule) },
  { path: 'home-location/', loadChildren: () => import('./pages/home-location/home-location.module').then(m => m.HomeLocationPageModule) },
  // { path: 'search-filter', loadChildren: () => import('./pages/modal/search-filter/search-filter.module').then(m => m.SearchFilterPageModule) },
  { path: 'validation', loadChildren: () => import('./pages/validation/validation.module').then(m => m.ValidationPageModule) },
  { path: 'update-address/:id', loadChildren: () => import('./pages/update-address/update-address.module').then(m => m.UpdateAddressPageModule) },
  { path: 'restaurant-list/', loadChildren: () => import('./pages/restaurant-list/restaurant-list.module').then(m => m.RestaurantListPageModule) },
  { path: 'restaurant-detail/:id', loadChildren: () => import('./pages/restaurant-detail/restaurant-detail.module').then(m => m.RestaurantDetailPageModule) },
  // { path: 'dish-list', loadChildren: () => import('./pages/dish-list/dish-list.module').then(m => m.DishListPageModule) },
  // { path: 'dish-detail/:id', loadChildren: () => import('./pages/dish-detail/dish-detail.module').then(m => m.DishDetailPageModule) },
  { path: 'checkout', loadChildren: () => import('./pages/checkout/checkout.module').then(m => m.CheckoutPageModule) },
  // { path: 'favorites', loadChildren: () => import('./pages/favorites/favorites.module').then(m => m.FavoritesPageModule) },
  { path: 'latest-orders', loadChildren: () => import('./pages/latest-orders/latest-orders.module').then(m => m.LatestOrdersPageModule) },
  { path: 'cart', loadChildren: () => import('./pages/modal/cart/cart.module').then(m => m.CartPageModule) },
  { path: '**', redirectTo: 'home-location/' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
