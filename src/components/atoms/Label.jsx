/**
 *
 * @param htmlFor 해당 label이 가리키는 input의 id입니다.
 * @param children 해당 label의 내용입니다.
 * @param className 해당 label의 className입니다.
 * @returns {JSX.Element}
 * @constructor
 */
const Label = ({ htmlFor, children, className }) => (
  <label htmlFor={htmlFor} className={`label ${className}`}>
    {children}
  </label>
);

export default Label;
