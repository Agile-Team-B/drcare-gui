interface Theme {
  menuOrientation: string
  menuType: string
  showMenu: boolean
  navbarIsFixed: boolean
  footerIsFixed: boolean
  sidebarIsFixed: boolean
  showSideChat: boolean
  sideChatIsHoverable: boolean
  skinType: string
  skinAccentColor: any
  logoUrl: any
  logoMiniUrl: string
  mainLogoUrl: string
  mainLogoInvUrl: string
}

export interface ISettings {
  name: string
  title: string
  theme: Theme
}
