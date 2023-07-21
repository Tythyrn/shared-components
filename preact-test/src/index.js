import { h, render } from 'preact';
import TestComponent from '../../shared-component/dist/shared-component';
// Tells babel to use h for JSX. It's better to configure this globally.
// See https://babeljs.io/docs/en/babel-plugin-transform-react-jsx#usage
// In tsconfig you can specify this with the jsxFactory
/** @jsx h */
  
function App() {
    return (
        <div>
            <TestComponent />
        </div>
    )
}
  
render(<App />, document.getElementById("root"));