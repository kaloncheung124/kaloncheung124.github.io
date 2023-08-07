import { ExternalLink } from '../ExternalLink/ExternalLink';

export const Links = () => (
    <div className="personal-links">
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
);
