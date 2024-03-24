class TemplatingEngine {
    static parse(template, data) {
        const regex = /\$\{([^}]+)\}/g;
        const evaluate = (expression, data) => {
            try {
                return new Function(...Object.keys(data), `return ${expression};`)(...Object.values(data));
            } catch (error) {
                console.error('Error evaluating expression:', expression, error);
                return '';
            }
        };

        const convertToVirtualDom = (template) => {
            const div = document.createElement('div');
            div.innerHTML = template;

            const convertElement = (element) => {

                if (element.nodeType === Node.TEXT_NODE) {
                    return element.textContent.trim() ? element.textContent : null;
                }

                const node = {
                    tag: element.tagName.toLowerCase(),
                    attrs: {},
                    events: {}, // Add a property for event listeners
                    children: []
                };

                for (const attr of element.attributes) {
                    const attrValue = attr.value;
                    if (attr.name.startsWith('on') && data[attrValue]) {
                        node.events[attr.name] = data[attrValue]; // Attach the function from the data object
                    } else {
                        node.attrs[attr.name] = attrValue;
                    }
                }

                for (const child of element.childNodes) {
                    const childNode = convertElement(child);
                    if (childNode) {
                        node.children.push(childNode);
                    }
                }

                return node;
            };

            // Convert all child nodes of the div element
            const children = [];
            for (const child of div.childNodes) {
                const childNode = convertElement(child);
                if (childNode) {
                    children.push(childNode);
                }
            }

            return children.length === 1 ? children[0] : { tag: 'div', children }; // Wrap multiple nodes in a div
        };

        let evaluatedTemplate = template.replace(regex, (match, expression) => {
            return evaluate(expression.trim(), data);
        });

        return convertToVirtualDom(evaluatedTemplate);
    }
}