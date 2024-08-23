import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  
  selectedTab: string = 'chartType';
  selectedChartOption: number | null = null;

  selectTab(tab: string) {
    this.selectedTab = tab;
  }

  selectChartOption(option: number) {
    this.selectedChartOption = option;
  }

}
