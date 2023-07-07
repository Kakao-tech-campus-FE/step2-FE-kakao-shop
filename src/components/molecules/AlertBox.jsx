import Label from "../atoms/Label";
import Box from "../atoms/Box";

const AlertBox = ({ id, className, label }) => {
  return (
    <Box className={className}>
      <Label htmlFor={id} className="label text-red-600">
        {label}
      </Label>
    </Box>
  );
};

export default AlertBox;
