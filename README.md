# React Example Component

A clean setup for creating React web components like UI-elements from scratch with Webpack, React, and SCSS setup.

## Overview

`react-example-component` is a starter template for creating reusable web components built with React. It provides a clean setup with Webpack, React, and SCSS, allowing you to build customizable UI elements or more complex forms to be embedded on websites. This project is perfect for developers who want to create isolated, encapsulated components using React and expose them as standard web components for use in any HTML page.

### Key Features
- **Customizable Web Components:** Build flexible UI components, from dropdowns and sliders to more complex forms.
- **React & Webpack Integration:** Full support for React 18 and Webpack for fast development and easy bundling.
- **SCSS Support:** Easily style your components with SCSS for more maintainable and powerful styling.
- **Reusable Components:** Create components that can be reused across different projects and integrated into any website.

## Getting Started

### Installation

First, clone the repository and install the necessary dependencies:

```bash
git clone https://github.com/yourusername/react-example-component.git
cd react-example-component
npm install
```

## Running the Development Server

To start the development server with hot-reloading, run:
```bash
npm start
```

This will launch the Webpack development server at http://localhost:3000. You can now make changes to your component and see them update in real-time.

## Building for Production

To create a production-ready bundle, run:
```bash
npm run build
```

This will generate the bundled files in the dist/ folder, which can be used in any project.

## Usage

Once you've built your component, you can use it in any HTML page. Below is an example of how to include the component and use it on a website:

### Example HTML:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>React Example Component</title>
</head>
<body>
  <div id="custom-dropdown"></div>

  <script src="dist/bundle.js"></script> <!-- Use the bundled component in your project -->

  <script>
    const dropdownOptions = {
      label: 'Choose an option:',
      options: ['Option 1', 'Option 2', 'Option 3']
    };

    // Using the component
    const dropdown = new MyComponent(document.getElementById('custom-dropdown'), dropdownOptions);
  </script>
</body>
</html>

```

## Customization

You can modify the `MyComponent` class in `src/index.js` and add new features, pass different options, or modify the rendering logic to suit your needs.

## Folder structure
```grahpql
├── dist/                   # Compiled output files for production
├── public/                 # Static public files
│   ├── index.html          # Simulated construtor in HTML and JavaScript
├── src/                    # Source code for the React component
│   ├── index.js            # Main entry file for the component
│   ├── MyComponent.js      # React component definition
│   └── styles/             # SCSS styles for the component
├── webpack.config.js       # Webpack configuration file
├── package.json            # NPM dependencies and scripts
└── README.md               # Project documentation
```

## Contributing

Feel free to fork the repository and make your own changes. If you'd like to contribute to the project, please submit a pull request with a description of your changes.

## License

This project is licensed under the MIT License.
