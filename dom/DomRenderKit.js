// DomRenderKit.js
function loadScripts(sources, callback) {
    let loadedCount = 0;

    sources.forEach(src => {
        let script = document.createElement('script');
        script.src = src;
        script.async = false;

        script.onload = () => {
            loadedCount++;
            if (loadedCount === sources.length) {
                callback(); // All scripts loaded
            }
        };

        script.onerror = (error) => {
            console.error(`Error loading script: ${src}`, error);
        };

        document.body.appendChild(script);
    });
}

// Usage
loadScripts([
    './dom/DIContainer.js',
    './dom/Renderer.js',
    './dom/VirtualDom.js',
    './dom/TemplatingEngine.js',
    './dom/Component.js',
    './primitives/Button.js',
    './primitives/Header.js',
    './primitives/Paragraph.js',
    './primitives/Link.js',
    './primitives/Image.js',
    './primitives/List.js',
    './primitives/ListItem.js',
    './primitives/Input.js',
    './primitives/Label.js',
    './primitives/TextArea.js',
    './primitives/Select.js',
    './primitives/Option.js',
    './primitives/Form.js',
    './primitives/Table.js',
    './primitives/TableHeader.js',
    './primitives/TableRow.js',
    './primitives/TableCell.js',
    './primitives/NavBar.js',
    './primitives/Footer.js',
    './primitives/Section.js',
    './primitives/Article.js',
    './primitives/Aside.js',
    './primitives/Heading.js',
    './primitives/Style.js',
    './dom/App.js',
    './MyApp.js',
    './dom/Main.js'
], () => {

});
