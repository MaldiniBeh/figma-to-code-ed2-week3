import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { MenuItem, SubMenuItem } from '../interfaces';
import { Menu } from '..';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class MenuService implements OnDestroy {
  pagesMenu$ = new BehaviorSubject<MenuItem[]>([]);
  private _showSidebar$ = new BehaviorSubject<boolean>(true);
  private subscription = new Subscription();
  constructor(private router: Router) {
    this.pagesMenu$.next(Menu.pages);
    let sub = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        /** Expand menu base on active route */
        this.pagesMenu$.forEach(menuItem => {
          menuItem.forEach(menu => {
            let activeGroup = false;
            menu.items.forEach(subMenu => {
              const active = this.isActive(subMenu.route);
              subMenu.expanded = active;
              subMenu.active = active;
              if (active) activeGroup = true;
              if (subMenu.children) {
                this.expand(subMenu.children);
              }
            });
            menu.active = activeGroup;
          });
        });
      }
    });
    this.subscription.add(sub);
  }
  get showSideBar$() {
    return this._showSidebar$.asObservable();
  }
  set showSideBar(value: boolean) {
    this._showSidebar$.next(value);
  }

  private isActive(instruction: any): boolean {
    return this.router.isActive(this.router.createUrlTree([instruction]), {
      paths: 'subset',
      queryParams: 'subset',
      fragment: 'ignored',
      matrixParams: 'ignored',
    });
  }
  private expand(items: Array<any>) {
    items.forEach(item => {
      item.expanded = this.isActive(item.route);
      if (item.children) this.expand(item.children);
    });
  }
  toggleMenu(menu: any) {
    menu.expanded = !menu.expanded;
  }
  toggleSubMenu(submenu: SubMenuItem) {
    submenu.expanded = !submenu.expanded;
  }
  toggleSidebar() {
    this._showSidebar$.next(!this._showSidebar$.value);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
