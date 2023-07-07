import '../../styles/atoms/Box.css';
/**
 * Box component
 * className: custom class name
 */
export default function Box({ children, className = '' }) {
  return <div className={`box ${className}`}>{children}</div>;
}
