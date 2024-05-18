import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { NgxEverComponentsModule } from 'ngx-ever-components';
import { UiComponentsComponent } from './pages/ui-components/ui-components.component';
import { InstallationComponent } from './pages/installation/installation.component';
import { UsageComponent } from './pages/usage/usage.component';
import { EButtonDoc } from './pages/e-button/e-button.component';
import { EFlexDoc } from './pages/e-flex/e-flex.component';
import { ECardDoc } from './pages/e-card/e-card.component';
import { EModalDoc } from './pages/e-modal/e-modal.component';
import { EItemDoc } from './pages/e-item/e-item.component';
import { EBadgeDoc } from './pages/e-badge/e-badge.component';
import { EContentDoc } from './pages/e-content/e-content.component';
import { ESearchDoc } from './pages/e-search/e-search.component';
import { EInputDoc } from './pages/e-input/e-input.component';
import { ETooltipDoc } from './pages/e-tooltip/e-tooltip.component';
import { EToastDoc } from './pages/e-toast/e-toast.component';
import { ELoadingDoc } from './pages/e-loading/e-loading.component';
import { HeaderTitleComponent } from './components/header-title/header-title.component';
import { PagerComponent } from './components/pager/pager.component';
import { HeaderComponent } from './components/header/header.component';
import { EDialogComponent } from './components/e-dialog/e-dialog.component';
import { EDropdownComponent } from './components/e-dropdown/e-dropdown.component';
import { EItemNavigatorComponent } from './components/e-item-navigator/e-item-navigator.component';
import { ESidesheetComponent } from './components/e-sidesheet/e-sidesheet.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    UiComponentsComponent,
    InstallationComponent,
    UsageComponent,
    EButtonDoc,
    EFlexDoc,
    ECardDoc,
    EModalDoc,
    EItemDoc,
    EBadgeDoc,
    EContentDoc,
    ESearchDoc,
    EInputDoc,
    ETooltipDoc,
    EToastDoc,
    ELoadingDoc,
    HeaderTitleComponent,
    PagerComponent,
    HeaderComponent,
    EDialogComponent,
    EDropdownComponent,
    EItemNavigatorComponent,
    ESidesheetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    NgxEverComponentsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
