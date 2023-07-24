import { h, render } from 'preact';
import SharedComponent from '../../shared-component/dist/shared-component'
  
function App() {
    return (
        <div>
            <SharedComponent />
        </div>
    )
}
  
render(<App />, document.getElementById("root"));