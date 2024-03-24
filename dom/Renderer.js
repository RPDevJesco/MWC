// Renderer.js
class Renderer {
    render(virtualNode, container) {
        // Clear the container before rendering
        container.innerHTML = '';

        // Create a real DOM node from the virtual node
        const realNode = this.createRealNode(virtualNode);
        // Append the real node to the container
        container.appendChild(realNode);
        return realNode;
    }

    createRealNode(virtualNode) {
        if (typeof virtualNode === 'string' || typeof virtualNode === 'number') {
            // Create a text node for strings and numbers
            return document.createTextNode(virtualNode);
        }

        // Create an element node for virtual nodes
        const element = document.createElement(virtualNode.tag);

        // Attach event listeners
        if (virtualNode.events) {
            for (const [event, listener] of Object.entries(virtualNode.events)) {
                element.addEventListener(event.slice(2).toLowerCase(), listener); // Remove the 'on' prefix and add the listener
            }
        }

        // Set attributes
        if (virtualNode.attrs) {
            for (const [key, value] of Object.entries(virtualNode.attrs)) {
                element.setAttribute(key, value);
            }
        }

        // Recursively render children
        if (virtualNode.children) {
            for (const child of virtualNode.children) {
                const childNode = this.createRealNode(child);
                element.appendChild(childNode);
            }
        }
        return element;
    }
}