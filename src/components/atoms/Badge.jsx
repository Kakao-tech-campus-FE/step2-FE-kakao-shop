const Badge = ({ children, className }) => {
  return <span className={`rounded-2xl p-1 ${className}`}>{children}</span>;
};
export default Badge;
