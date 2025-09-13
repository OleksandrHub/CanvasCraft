import { Component } from '@angular/core';
import { CanvasComponent } from '../canvas/canvas.component';
import { PropertiesPanelComponent } from '../properties-panel/properties-panel.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-workspace',
  imports: [CanvasComponent, PropertiesPanelComponent, SidebarComponent],
  templateUrl: './workspace.component.html',
  styleUrl: './workspace.component.scss'
})
export class WorkspaceComponent {

}
