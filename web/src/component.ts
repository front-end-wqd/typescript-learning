namespace Component {
    export class Header {
        constructor() {
            const element = document.createElement("div");
            element.innerHTML = "header";
            document.body.appendChild(element);
        }
    }
    
    export class Footer {
        constructor() {
            const element = document.createElement("div");
            element.innerHTML = "footer";
            document.body.appendChild(element);
        }
    }
}