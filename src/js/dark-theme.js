const root = document.querySelector(":root");
const btnDarkTheme = document.querySelector("#switch");


const themes = {
    default: {
        "--background-w": "#f8f8f8",
        "--black": "#050505",
    },
    dark: {
        "--background-w": "#161616",
        "--black": "#f8f8f8",
    },
}

if(!localStorage.getItem("isDarkTheme")) {
    localStorage.setItem("isDarkTheme", false)
}

let isDarkTheme = JSON.parse(localStorage.getItem("isDarkTheme"));


btnDarkTheme.addEventListener("click", btnHandler)

function btnHandler(e) {
    e.preventDefault();
    isDarkTheme = !isDarkTheme;
    localStorage.setItem("isDarkTheme", isDarkTheme)
    changeTheme(isDarkTheme)
}

function changeTheme(isDarkTheme){
    const theme = isDarkTheme?"dark":"default";
    Object.entries(themes[theme]).forEach(([key, value]) => {root.style.setProperty(key, value)})
       }

