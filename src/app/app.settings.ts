import { Injectable } from '@angular/core'

import { ISettings } from './app.settings.model'

@Injectable()
export class AppSettings {
  public settings: ISettings
  public title = 'drdaycare'
  public baseUrl = 'http://localhost:9090/drcare/'

  constructor() {}

  public load() {
    return new Promise((resolve, reject) => {
      try {
        this.settings = {
          title: this.title,
          name: this.title,
          theme: {
            logoUrl: 'assets/img/default/logo.png',
            logoMiniUrl: 'assets/img/default/logo_sm.png',
            skinAccentColor: '#ED2636',
            menuOrientation: 'vertical',
            menuType: 'vertical',
            showMenu: true,
            navbarIsFixed: true,
            footerIsFixed: true,
            sidebarIsFixed: true,
            showSideChat: false,
            sideChatIsHoverable: false,
            skinType: this.title,
            mainLogoUrl: 'assets/img/default/logo.png',
            mainLogoInvUrl: 'assets/img/default/logo.png'
          }
        }

        resolve(true)
      } catch (err) {
        console.error(err)
        reject(err)
      }
    })
  }
}
