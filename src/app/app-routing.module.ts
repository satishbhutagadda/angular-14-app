import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './components/can-activate/auth.guard';
import { CanActivateComponent } from './components/can-activate/can-activate.component';
import { ChartExamplesComponent } from './components/chart-examples/chart-examples.component';
import { CopyToClipboardComponent } from './components/copy-to-clipboard/copy-to-clipboard.component';
import { HomeComponent } from './components/home/home.component';
import { VerticalBarChartComponent } from './components/vertical-bar-chart/vertical-bar-chart.component';
import { TestParentComponent } from './test/test-parent/test-parent.component';
import { TypedFormComponent } from './typed-form/typed-form.component';
import { DocumentViewerComponent } from './components/document-viewer/document-viewer.component';
import { RouteOneComponent } from './route-test/route-one/route-one.component';
import { RouteTwoComponent } from './route-test/route-two/route-two.component';
import { RouteThreeComponent } from './route-test/route-three/route-three.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home'
  },
  {
    path: 'typed-form', 
    component: TypedFormComponent, 
    title: 'Typed Form'
  },
  {
    path: 'can-activate',
    component: CanActivateComponent,
    canActivate: [AuthGuard],
    title: 'Can Activate'
  },
  {
    path: 'search-user',
    component: TestParentComponent,
    title: 'Test Parent'
  },
  {
    path: 'lazy', 
    loadChildren: ()=> import('./modules/lazy/lazy.module').then((m) => m.LazyModule),
    title: 'LazyComponent'
  },
  {
    path: 'shopping-cart', 
    loadChildren: ()=> import('./modules/shopping-cart/shopping-cart.module').then((m) => m.ShoppingCartModule),
    title: 'Shopping Cart'
  },
  {
    path: 'lazy-test', 
    loadChildren: ()=> import('./modules/lazy-test/lazy-test.module').then((m) => m.LazyTestModule),
    title: 'LazyTestComponent'
  },
  {
    path: 'chart-examples', 
    component: ChartExamplesComponent,
    title: 'Chart Examples'
  },
  {
    path: 'vertical-bar-chart', 
    component: VerticalBarChartComponent,
    title: 'Vertical Bar Chart'
  },
  {
    path: 'clipboard', 
    component: CopyToClipboardComponent,
    title: 'Copy to Clipboard'
  },
  {
    path: 'document-viewer', 
    component: DocumentViewerComponent,
    title: 'Document Viewer'
  },
  {
    path: 'route-test',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'route-one'
      },
      {
        path: 'route-one',
        component: RouteOneComponent,
        title: 'Route One',
      },
      {
        path: ':routeOneID',
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'route-two'
          },
          {
            path: 'route-two',
            component: RouteTwoComponent,
            title: 'Route Two',
          },
          {
            path: ':routeTwoID',
            children: [
              {
                path: '',
                pathMatch: 'full',
                redirectTo: 'route-three'
              },
              {
                path: 'route-three',
                component: RouteThreeComponent,
                title: 'Route Three',
              }
            ]
          },
        ]
      },
    ],
  },
  { path: '',
    redirectTo: '/lazy',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
