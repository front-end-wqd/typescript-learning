"use strict";
var Component;
(function (Component) {
    var Header = /** @class */ (function () {
        function Header() {
            var element = document.createElement("div");
            element.innerHTML = "header";
            document.body.appendChild(element);
        }
        return Header;
    }());
    Component.Header = Header;
    var Footer = /** @class */ (function () {
        function Footer() {
            var element = document.createElement("div");
            element.innerHTML = "footer";
            document.body.appendChild(element);
        }
        return Footer;
    }());
    Component.Footer = Footer;
})(Component || (Component = {}));
var Home;
(function (Home) {
    var Page = /** @class */ (function () {
        function Page() {
            new Component.Header();
            new Component.Footer();
        }
        return Page;
    }());
    Home.Page = Page;
})(Home || (Home = {}));
