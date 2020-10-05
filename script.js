const html = document.querySelector("html");
const checkbox = document.querySelector("input[name=theme]");

    const getStyle = (element, style) => 
        window
            .getComputedStyle(element)
            .getPropertyValue(style)

const inicialColors = {
    bg: getStyle(html, "--bg"),
    bgPanel: getStyle(html, "--bg-panel"),
    colorHeading: getStyle(html, "--color-headings"),
    colorText: getStyle(html, "--color-text"),
    
}

const darkMode = {
    bg: "#333333", 
    bgPanel: "#434343",
    colorHeading: "#3664ff",
    colorText: "#f1f1f1"
    
}

//Vai fazer uma varredura de A - Z maiusculo e adicionar um traço anterior e trasformar tudo para minusculo
const transformKey = key => 
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()

const changeColors = (colors) => {
    Object.keys(colors).map(key => 
        html.style.setProperty(transformKey(key), colors[key])
    )
}

checkbox.addEventListener("change", ({ target }) => {
    //if ternario
    target.checked ? changeColors(darkMode) : changeColors(inicialColors)
});