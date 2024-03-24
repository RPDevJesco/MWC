# Modular Web Components (MWC)

## Introduction

Modular Web Components (MWC) is a lightweight framework for building web applications using a component-based architecture. The goal of MWC is to provide a simple and intuitive way to create reusable, encapsulated, and modular components that can be easily composed to build complex user interfaces.

## Motivation

The motivation behind MWC is to create a framework that adheres to the principles of separation of concerns and modularity, allowing developers to build web applications with clear and maintainable code. By using MWC, developers can create components that are independent and self-contained, making it easier to manage and scale their applications.

## Features

- **Component-Based Architecture**: MWC follows a component-based approach, where each component is a self-contained unit with its own state and behavior.
- **Templating Engine**: MWC includes a templating engine that allows developers to define their components' structure using HTML-like templates, making it easy to create dynamic and interactive UIs.
- **Event Handling**: MWC provides a simple mechanism for handling events, allowing components to respond to user interactions and update their state accordingly.
- **Styling**: MWC supports modular styling, enabling developers to define styles for their components in a way that follows the MWC methodology.
- **Virtual DOM**: MWC utilizes a virtual DOM to optimize rendering performance, ensuring that updates to the UI are efficient and fast.

## Getting Started

To get started with MWC, you can create a new component by extending the `Component` class and defining its `render` method:

```javascript
class MyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'Hello, MWC!'
        };
    }

    render() {
        return `
            <div>
                <p>${this.state.message}</p>
            </div>
        `;
    }
}
```

You can then use your component in your application and render it using the TemplatingEngine:

```javascript
const app = new MyComponent();
const root = document.getElementById('root');
root.innerHTML = TemplatingEngine.parse(app.render());
```

To call the entire framework to use it in your html, you import the 'DomRenderKit' js file.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Virtual DOM Example</title>
</head>
<body>
<div id="app"></div>

<!-- Include JavaScript files -->
<script type="module" src="./dom/DomRenderKit.js"></script>
</body>
</html>
```

Future Work

    State Management: Integrate a state management solution to handle complex application states.
    Routing: Add support for client-side routing to enable single-page application (SPA) development.
    Server-Side Rendering: Implement server-side rendering for improved SEO and faster initial load times.

Contributing

Contributions to MWC are welcome! If you have ideas for improvements or new features, feel free to submit a pull request or open an issue.
