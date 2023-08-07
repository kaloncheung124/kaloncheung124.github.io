import './sass/App.scss';
import { ExternalLink } from './components/ExternalLink/ExternalLink';

function App() {
    return (
        <div className="App">
            <div className="App-links">
                <ExternalLink
                    className="email-link"
                    href="mailto:kaloncheung124@gmail.com"
                >
                    Email
                </ExternalLink>
                <ExternalLink
                    className="github-link"
                    href="https://github.com/kaloncheung124"
                >
                    GitHub
                </ExternalLink>
                <ExternalLink
                    className="linkedin-link"
                    href="https://www.linkedin.com/in/kalon-cheung-b7452486/"
                >
                    LinkedIn
                </ExternalLink>
            </div>
            <div className="App-intro">
                <div className="App-name">Hi, I'm Kalon Cheung.</div>
                <div className="App-subtitle">
                    <p>
                        I'm a Frontend Software Engineer at Taboola, and I love
                        building beautiful things with clean code.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default App;
