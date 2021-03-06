import {
  Component,
  OnInit,
  ViewEncapsulation,
  ElementRef,
  Input
} from '@angular/core'
import * as $ from 'jquery'
import { Router, NavigationEnd } from '@angular/router'
import { MenuService } from '../menu.service'
import { AppSettings } from '../../../../app.settings'
import { ISettings } from '../../../../app.settings.model'

@Component({
  selector: 'app-horizontal-menu',
  templateUrl: './horizontal-menu.component.html',
  styleUrls: ['./horizontal-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [MenuService]
})
export class HorizontalMenuComponent implements OnInit {
  @Input('menuItems') menuItems
  public settings: ISettings
  constructor(
    public appSettings: AppSettings,
    private menuService: MenuService,
    private router: Router,
    private elementRef: ElementRef
  ) {
    this.settings = this.appSettings.settings
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0)
        let activeLink = this.menuService.getActiveLink(this.menuItems)
        this.menuService.setActiveLink(this.menuItems, activeLink)
        ;(<any>$('.tooltip')).tooltip('hide')
      }
    })
  }

  ngOnInit() {
    let menu_wrapper = this.elementRef.nativeElement.children[0]
    this.menuService.createMenu(this.menuItems, menu_wrapper, 'horizontal')

    if (this.settings.theme.menuType == 'mini')
      (<any>$('.menu-item-link')).tooltip()
  }

  ngAfterViewInit() {
    let activeLink = this.menuService.getActiveLink(this.menuItems)
    this.menuService.setActiveLink(this.menuItems, activeLink)
  }
}
