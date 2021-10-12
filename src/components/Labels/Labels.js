import React, { useContext } from "react";
import Context from "../../Context/Context";
import radioLabels from "../../Data/label";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const Labels = () => {
  const { label, labelHandler } = useContext(Context);
  const handleLabel = (e) => {
    labelHandler(e.target.value);
  };
  return (
    <FormControl component="fieldset" sx={{ mt: 5, ml: 2 }}>
      <FormLabel component="legend">Categories</FormLabel>
      <RadioGroup
        value={label}
        name="radio-buttons-group"
        onChange={handleLabel}
      >
        {radioLabels.map((item) => {
          return (
            <FormControlLabel
              key={item.value}
              value={item.value}
              control={<Radio />}
              label={
                <span>
                  <svg
                    width="15"
                    zoomAndPan="magnify"
                    viewBox="0 0 375 374.999991"
                    height="15"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <path
                      fill={item.color}
                      d="M 355.089844 0 L 19.910156 0 C 8.878906 0 0 8.878906 0 19.910156 L 0 355.089844 C 0 366.121094 8.878906 375 19.910156 375 L 355.089844 375 C 366.121094 375 375 366.121094 375 355.089844 L 375 19.910156 C 375 8.878906 366.121094 0 355.089844 0 Z M 355.089844 0 "
                      fillOpacity="1"
                      fillRule="nonzero"
                    ></path>
                  </svg>
                  <span>&nbsp;{item.text}</span>
                </span>
              }
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
};

export default Labels;
