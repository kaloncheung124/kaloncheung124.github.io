import './sass/App.scss';
import { Links } from './components/Links/Links';
import { Introduction } from './components/Introduction/Introduction';

function App() {
    return (
        <div className="App">
            <Links />
            <Introduction />
        </div>
    );
}

export default App;
