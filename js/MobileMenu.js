class MobileMenu {
  constructor() {
    this._navigation = document.querySelector('#navigation')
    this._menu = document.querySelector('.menu-bars')
    this._bar1 = document.querySelector('.bar1')
    this._bar2 = document.querySelector('.bar2')
    this._bar3 = document.querySelector('.bar3')

    this.setStyle();
  }

  setStyle() {
    this._menu.addEventListener('click', () => {
      this._bar1.classList.toggle('rotate')
      this._bar2.classList.toggle('d-none')
      this._bar3.classList.toggle('rotate2')
      
      this._navigation.classList.toggle('hide-menu')
    })
  }
}
