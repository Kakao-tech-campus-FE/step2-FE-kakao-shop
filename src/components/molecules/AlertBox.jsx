import Label from "../atoms/Label";
import Box from "../atoms/Box";

/** 알림 박스
 *
 * @param {string} id - Label htmlFor
 * @param {string} label - Label label
 * @param {string} className - Box className
 * @return {JSX.Element}
 */
const AlertBox = ({ id, label, className }) => {
  return (
    <Box className={className}>
      <Label htmlFor={id} className="label text-red-600">
        {label}
      </Label>
    </Box>
  );
};

export default AlertBox;
