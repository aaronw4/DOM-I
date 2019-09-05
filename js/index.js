const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let nav = document.querySelectorAll('a');
nav[0].textContent = siteContent['nav']['nav-item-1'];
nav[1].textContent = siteContent['nav']['nav-item-2'];
nav[2].textContent = siteContent['nav']['nav-item-3'];
nav[3].textContent = siteContent['nav']['nav-item-4'];
nav[4].textContent = siteContent['nav']['nav-item-5'];
nav[5].textContent = siteContent['nav']['nav-item-6'];

let text = document.querySelector('.cta-text');
let header1 = text.querySelector('h1');
header1.textContent = siteContent['cta']['h1'];
header1.style.display = 'flex';
header1.style.flexWrap = 'wrap';

let button = text.querySelector('button');
button.textContent = siteContent['cta']['button'];

let ctaImg = document.querySelector('#cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src']);

let mainHeaders = document.querySelectorAll('h4');
mainHeaders[0].textContent = siteContent['main-content']['features-h4'];
mainHeaders[1].textContent = siteContent['main-content']['about-h4'];
mainHeaders[2].textContent = siteContent['main-content']['services-h4'];
mainHeaders[3].textContent = siteContent['main-content']['product-h4'];
mainHeaders[4].textContent = siteContent['main-content']['vision-h4'];
mainHeaders[5].textContent = siteContent['contact']['contact-h4'];

let mainPara = document.querySelectorAll('p');
mainPara[0].textContent = siteContent['main-content']['features-content'];
mainPara[1].textContent = siteContent['main-content']['about-content'];
mainPara[2].textContent = siteContent['main-content']['services-content'];
mainPara[3].textContent = siteContent['main-content']['product-content'];
mainPara[4].textContent = siteContent['main-content']['vision-content'];
mainPara[5].textContent = siteContent['contact']['address'];
mainPara[6].textContent = siteContent['contact']['phone'];
mainPara[7].textContent = siteContent['contact']['email'];
mainPara[8].textContent = siteContent['footer']['copyright'];


