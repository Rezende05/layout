
  const slickBanner = () => {
    $('.main__firstBanner').slick();
  }

  const slickShelf = () => {
    $('.shelf__conteiner').slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      variableWidth: true
    });
  }

  const closePopUp = () => {
    const close = document.querySelector('.popUp__close')
    close.addEventListener('click', () => {
      close.parentElement.parentElement.classList.add('hide')
    })
  }

  const menuMobile = () => {
    const menu = document.querySelector('.header__menu');
    const buttonMenu = document.querySelector('.header__menu-mobile');

    buttonMenu.addEventListener('click', () => {
      menu.classList.toggle('open');
    })

    menu.addEventListener('click', () => {
      menu.classList.toggle('open');
    })
  }

  const openMenuFooter = () => {
    const titles = document.querySelectorAll('.footer__title');

    titles.forEach((title) => {
      title.addEventListener('click', () => {
        title.nextElementSibling.classList.toggle('open');
      })
    })
  }

  menuMobile()
  openMenuFooter()
  closePopUp()
  slickBanner()
  slickShelf()

  