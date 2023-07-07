import '../../styles/atoms/Container.css';

/**
 * Container component
 * children: child component
 * className: custom class name
 */
export default function Container({ children, className = '' }) {
  return <div className={`container ${className}`}>{children}</div>;
}
