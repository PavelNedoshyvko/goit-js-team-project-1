const root = document.querySelector(':root');
const btnDarkTheme = document.querySelector('#switch');
if (innerWidth < 768) {
  const btmMobileDark = document.querySelector('#switch-mob');
  btmMobileDark.addEventListener('change', btnHandler);
}
const themes = {
  default: {
    '--background-w': '#f8f8f8',
    '--black': '#050505',
    '--white-w': '#f8f8f8',
    '--gray-title-w': 'rgba(5, 5, 5, 0.5)',
    '--gray-ul-w': 'rgba(5, 5, 5, 0.3)',
    '--gray-border-w': 'rgba(5, 5, 5, 0.2)',
    '--gallery-gradient':
      'linear-gradient(1deg,rgba(5, 5, 5, 0.6) 0%,rgba(5, 5, 5, 0) 100%)',
    '--gray-descrip-w': 'rgba(5, 5, 5, 0.8)',
    '--color-card-gallary': '#f8f8f8',
  },

  dark: {
    '--background-w': '#161616',
    '--black': '#f8f8f8',
    '--white-w': '#050505',
    '--gray-title-w': '#ffffff8c',
    '--gray-ul-w': '#f8f8f833',
    '--gray-border-w': '#f8f8f822',
    '--gallery-gradient':
      'linear-gradient(1deg,rgba(5, 5, 5, 0.8) 0%,rgba(5, 5, 5, 0.2) 100%)',
    '--gray-descrip-w': '#f8f8f888',
    '--color-card-gallary': '#f8f8f888',
  },
};

if (!localStorage.getItem('isDarkTheme')) {
  localStorage.setItem('isDarkTheme', false);
}

let isDarkTheme = JSON.parse(localStorage.getItem('isDarkTheme'));

btnDarkTheme.addEventListener('change', btnHandler);

function btnHandler(e) {
  e.preventDefault();
  isDarkTheme = !isDarkTheme;
  localStorage.setItem('isDarkTheme', isDarkTheme);
  changeTheme(isDarkTheme);
}

function changeTheme(isDarkTheme) {
  const theme = isDarkTheme ? 'dark' : 'default';
  Object.entries(themes[theme]).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });
}
