import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'hotels', loadChildren: () => import('./hotels/hotels.module').then(m => m.HotelsModule) }
  // {path:'home',loadChildren:()=>import{'.'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
