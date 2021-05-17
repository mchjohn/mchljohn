const menu1 = document.getElementById('home')
const menu2 = document.getElementById('about')
const menu3 = document.getElementById('project')
const menu4 = document.getElementById('contact')

const navigation = document.querySelector('#navigation')

function activeLink1() {
  menu1.classList.add('home')
  menu2.classList.remove('about')
  menu3.classList.remove('project')
  menu4.classList.remove('contact')

  navigation.classList.toggle('hide-menu')
}
function activeLink2() {
  menu1.classList.remove('home')
  menu2.classList.add('about')
  menu3.classList.remove('project')
  menu4.classList.remove('contact')

  navigation.classList.toggle('hide-menu')
}
function activeLink3() {
  menu1.classList.remove('home')
  menu2.classList.remove('about')
  menu3.classList.add('project')
  menu4.classList.remove('contact')

  navigation.classList.toggle('hide-menu')
}
function activeLink4() {
  menu1.classList.remove('home')
  menu2.classList.remove('about')
  menu3.classList.remove('project')
  menu4.classList.add('contact')

  navigation.classList.toggle('hide-menu')
}