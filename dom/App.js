// App.js
class App {
    constructor(virtualDom) {
        this.virtualDom = virtualDom;
    }

    run() {
        const myApp = new MyApp();
        this.virtualDom.render(myApp, document.getElementById('app'));
    }
}