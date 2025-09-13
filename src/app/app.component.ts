import { Component } from '@angular/core';
import { WorkspaceComponent } from './features/canvas/workspace/workspace.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [WorkspaceComponent]
})
export class App {
  protected title = 'CanvasCraft';
}
