class Component {
    constructor(props) {
        this.props = props;
        this.state = {};
        this._currentVNode = null; // Store the current virtual node
    }

    setState(newState) {
        this.state = { ...this.state, ...newState };
        if (this.virtualDom) {
            this.virtualDom.update(this); // Re-render the component
        }
    }

    renderTemplate(tagName, attributes, content) {
        const attrs = Object.entries(attributes)
            .filter(([_, value]) => value !== undefined && value !== null)
            .map(([key, value]) => `${key}="${value}"`)
            .join(' ');

        return `<${tagName} ${attrs}>${content}</${tagName}>`;
    }

    render() {
        // Return virtual DOM representation from subclass
        return null;
    }
}

function renderComponent(component) {
    if (!component) return '';
    return component.render();
}

async function loadStyles(cssFilePath) {
    try {
        const response = await fetch(cssFilePath);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const cssText = await response.text();
        return cssText;
    } catch (error) {
        console.error('Error loading CSS file:', error);
        return '';
    }
}