import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TypedFormComponent } from './typed-form/typed-form.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { AppTestDirective } from './app-test.directive';
import { HomeComponent } from './components/home/home.component';
import { CanActivateComponent } from './components/can-activate/can-activate.component';
import { YobCalculatePipe } from './shared/pipes/yob-calculate.pipe';
import { CardComponent } from './components/card/card.component';
import { CardDynamicContentComponent } from './components/card-content/card-dynamic-content.component';
import { ContentHostDirective } from './components/card-content/content-host.directive';
import { TestParentComponent } from './test/test-parent/test-parent.component';
import { TestChildComponent } from './test/test-child/test-child.component';
import { FullNamePipe } from './shared/pipes/full-name.pipe';
import { HttpClientModule } from '@angular/common/http';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartExamplesComponent } from './components/chart-examples/chart-examples.component';
import { VerticalBarChartComponent } from './components/vertical-bar-chart/vertical-bar-chart.component';
import { CopyToClipboardComponent } from './components/copy-to-clipboard/copy-to-clipboard.component';
import { RemoveTabSpaceDirective } from './shared/directives/remove-tab-space.directive';

@NgModule({
  declarations: [
    AppComponent,
    TypedFormComponent,
    AppTestDirective,
    HomeComponent,
    CanActivateComponent,
    YobCalculatePipe,
    CardComponent,
    CardDynamicContentComponent,
    ContentHostDirective,
    TestParentComponent,
    TestChildComponent,
    FullNamePipe,
    ChartExamplesComponent,
    VerticalBarChartComponent,
    CopyToClipboardComponent,
    RemoveTabSpaceDirective
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatMenuModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
