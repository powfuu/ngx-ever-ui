import { Component, OnInit } from '@angular/core';
import { inject } from '@vercel/analytics';
import { injectSpeedInsights } from '@vercel/speed-insights';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  stateSideSheet: boolean = false;

  ngOnInit(): void {
    this.initVercelAnalyticsAndSpeedInsights();
  }

  handleSideSheet(): void {
    this.stateSideSheet = !this.stateSideSheet;
  }

  initVercelAnalyticsAndSpeedInsights(): void {
    //Init Analytics
    inject();
    //Init Speed Insights
    injectSpeedInsights();
  }
}
