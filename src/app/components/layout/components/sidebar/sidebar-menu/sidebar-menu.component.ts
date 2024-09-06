import { Observable } from 'rxjs';
import { MenuItem, MenuService, SubMenuItem } from './../../../../../shared';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarSubmenuComponent } from '../sidebar-submenu/sidebar-submenu.component';

@Component({
  selector: 'app-sidebar-menu',
  standalone: true,
  imports: [AngularSvgIconModule, CommonModule, RouterModule, SidebarSubmenuComponent],
  templateUrl: './sidebar-menu.component.html',
  styleUrl: './sidebar-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarMenuComponent implements OnInit {
  pagesMenu$: Observable<MenuItem[]> = new Observable<MenuItem[]>();
  showSideBar$: Observable<boolean> = new Observable<boolean>();
  constructor(private menuService: MenuService) {
    this.pagesMenu$ = this.menuService.pagesMenu$;
  }
  ngOnInit(): void {}
  toggleMenu(subMenu: SubMenuItem) {
    this.menuService.toggleMenu(subMenu);
  }
}
