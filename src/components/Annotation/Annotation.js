import React, { useContext, useEffect, useState } from "react";
import Context from "../../Context/Context";
import radioLabels from "../../Data/label";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const Annotation = () => {
  const { annotation, info, label } = useContext(Context);
  const [content, setContent] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  useEffect(() => {
    const displayContent = () => {
      const identifiedItem = info.find((item) => {
        return item._id === annotation;
      });
      setContent(identifiedItem.content);
    };

    displayContent();
  }, [annotation, info]);

  useEffect(() => {
    const colorHandler = () => {
      const identifiedLabel = radioLabels.find((radioLabel) => {
        return radioLabel.value === label;
      });
      setSelectedColor(identifiedLabel.color);
    };
    colorHandler();
  }, [label]);

  const handleMouseUp=()=>{
    console.log(` ${window.getSelection().toString()}`);
    console.log(window.getSelection().getRangeAt(0).getBoundingClientRect())
}
  return (
    <div style={{ height: "100vh" }}>
      <Container sx={{mt:5}}>
        <Typography sx={{ fontSize: 18 }} gutterBottom onMouseUp={handleMouseUp}>
          {content}
        </Typography>
      </Container>
    </div>
  );
};

export default Annotation;
