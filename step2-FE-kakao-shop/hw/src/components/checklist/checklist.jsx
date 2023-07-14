import React from "react";
import "./checklist.css";

const Check = () => {
  return (
    <table>
      <th>checklist</th>
      <tr>
        <label>
          <input type="checkbox" />
          check 1
        </label>
      </tr>
      <tr>
        <label>
          <input type="checkbox" />
          check 2
        </label>
      </tr>
      <tr>
        <label>
          <input type="checkbox" />
          check 3
        </label>
      </tr>
    </table>
  );
};

export default Check;
