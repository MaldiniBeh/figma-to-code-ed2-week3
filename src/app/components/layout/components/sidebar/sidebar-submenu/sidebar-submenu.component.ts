import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { MenuService, SubMenuItem } from '../../../../../shared';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sidebar-submenu',
  standalone: true,
  imports: [AngularSvgIconModule, CommonModule, RouterModule],
  templateUrl: './sidebar-submenu.component.html',
  styleUrl: './sidebar-submenu.component.scss',
})
export class SidebarSubmenuComponent {
  @Input() submenu = <SubMenuItem>{};
  showSideBar$: Observable<boolean> = new Observable<boolean>();
  constructor(private menuService: MenuService) {
    this.showSideBar$ = this.menuService.showSideBar$;
  }
  toggleMenu(menu: any) {
    this.menuService.toggleSubMenu(menu);
  }

  private collapse(items: Array<any>) {
    items.forEach(item => {
      item.expanded = false;
      if (item.children) this.collapse(item.children);
    });
  }
}
