import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FilterComponent } from './filter/filter.component';
import { SettingsComponent } from './settings/settings.component';
import { FileOptionsComponent } from './file-options/file-options.component';
import { ChartComponent } from './chart/chart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
            SidebarComponent, 
            FilterComponent, 
            SettingsComponent, 
            FileOptionsComponent, 
            ChartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myapp';
}
