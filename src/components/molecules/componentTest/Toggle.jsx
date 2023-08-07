import { useState } from "react";

const Toggle = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggleClick = () => {
    setToggle(prev => !prev);
  };
  return (
    <>
    <h1>Toggle</h1>
      <button style={{
        display: "flex",
        alignItems: "center",
        borderRadius: "20px",
        width: "100px", 
        height: "50px",
        backgroundColor: toggle ? "green" : "red",
        position: "relative",
        transition: "background-color 0.3s"
        }} 
        onClick={handleToggleClick}>
        <div
          style={{
            position: "absolute",
            top: "25%",
            fontSize:"20px",
            transform: toggle ? "translateX(0)" : "translateX(50px)", // Move text left/right based on toggle state
          }}
        >
        {toggle ? "On" : "Off"}
      </div>
        <div style={{
          width:"30px",
          height: "30px",
          borderRadius:"50%",
          backgroundColor:"white",
          position: "absolute",
          transform: toggle ? "translateX(50px)" : "translateX(0)",
          transition: "transform 0.3s"
          }}></div>
      </button>
    </>
  )
}
export default Toggle;