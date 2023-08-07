import classnames from 'classnames';

export const ExternalLink = ({ className, children, ...rest }) => (
    <a
        className={classnames('link', className)}
        target="_blank"
        rel="noreferrer"
        {...rest}
    >
        {children}
    </a>
);
