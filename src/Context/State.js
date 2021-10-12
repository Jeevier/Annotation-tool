import React, { useState } from "react";
import Context from "./Context";
import data from "../Data/data.js";
import radioLabels from "../Data/label";

const State = (props) => {
  const [info, setInfo] = useState(data);
  const [annotation, setAnnotation] = useState("6163020e7d3434c9f4d955da");
  const [label, setLabel] = useState("category1");

  const annotationHandler = (id) => {
    setAnnotation(id);
  };

  const labelHandler = (value) => {
    setLabel(value);
  };

  const infoHandler = (substring) => {
    const identifiedItem = info.find((item) => {
      return item._id === annotation;
    });
    const identifiedLabel = radioLabels.find((radioLabel) => {
      return radioLabel.value === label;
    });

    identifiedItem[`${identifiedLabel.value}`].push(substring);
  };
  return (
    <Context.Provider
      value={{
        info,
        infoHandler,
        annotation,
        annotationHandler,
        label,
        labelHandler,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default State;
