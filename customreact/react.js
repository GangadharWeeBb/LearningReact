function customRender(reactElement, container) {
    /*
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.content;
    domElement.setAttribute('href', reactElement.attributs.href)
    domElement.setAttribute('target', reactElement.attributs.target);
    container.appendChild(domElement)
     */
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.content;
    for (const attributs in reactElement.attributs) {
        if(attributs === 'content') continue;
        domElement.setAttribute(attributs, reactElement.attributs[attributs]);
    }
    container.appendChild(domElement)
}
const reactElement = {
    type: 'a',
    attributs: {
        href : "https:google.com",
        target: '_blank'
    },
    content: "Click here to visit google"
}
const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer)