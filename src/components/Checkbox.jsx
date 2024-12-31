import React from "react";

function Checkbox(){
    const [checked, setChecked] = useState(false);
    return (
      <label>
        <input type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
      </label>
    );
  }
  export default Checkbox;
