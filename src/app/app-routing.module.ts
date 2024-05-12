import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UiComponentsComponent } from './pages/ui-components/ui-components.component';
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
import { InstallationComponent } from './pages/installation/installation.component';
import { UsageComponent } from './pages/usage/usage.component';

const routes: Routes = [
  {
    path: 'ui-components',
    component: UiComponentsComponent,
  },
  {
    path: 'installation',
    component: InstallationComponent,
  },
  {
    path: 'usage',
    component: UsageComponent,
  },
  {
    path: 'e-button',
    component: EButtonDoc,
  },
  {
    path: 'e-flex',
    component: EFlexDoc,
  },
  {
    path: 'e-card',
    component: ECardDoc,
  },
  {
    path: 'e-modal',
    component: EModalDoc,
  },
  {
    path: 'e-item',
    component: EItemDoc,
  },
  {
    path: 'e-badge',
    component: EBadgeDoc,
  },
  {
    path: 'e-content',
    component: EContentDoc,
  },
  {
    path: 'e-search',
    component: ESearchDoc,
  },
  {
    path: 'e-input',
    component: EInputDoc,
  },
  {
    path: 'e-tooltip',
    component: ETooltipDoc,
  },
  {
    path: 'e-toast',
    component: EToastDoc,
  },
  {
    path: 'e-loading',
    component: ELoadingDoc,
  },
  {
    path: '**',
    redirectTo: 'ui-components',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
