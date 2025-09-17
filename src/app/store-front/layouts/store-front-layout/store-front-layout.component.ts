import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FrontNavbarComponent } from "../../components/front-navbar/front-navbar.component";

@Component({
  selector: 'app-store-front-layout',
  imports: [
    RouterModule,
    FrontNavbarComponent
],
  templateUrl: './store-front-layout.component.html',
  styleUrl: './store-front-layout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoreFrontLayoutComponent { }
