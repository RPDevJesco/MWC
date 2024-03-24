// Main.js
const container = new DIContainer();
container.register('renderer', new Renderer());
container.register('virtualDom', new VirtualDom(container.resolve('renderer')));

const app = new App(container.resolve('virtualDom'));
app.run();