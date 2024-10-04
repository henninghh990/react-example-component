import React from 'react';
import ReactDOM from 'react-dom/client';
import MyComponent from './MyComponent';  

class MyComponentExample {
    constructor(el, options) {
       
        this.el = el;
        this.options = options;
        this.renderComponent();  
    }

    renderComponent() {
        if (this.el) {
            const root = ReactDOM.createRoot(this.el);
            root.render(<MyComponent options={this.options} />);
        } else {
            console.error("Element for rendering the component not found.");
        }
    }
}

window.MyComponentExample = MyComponentExample;
