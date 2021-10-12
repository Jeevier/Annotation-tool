import React, { useContext, useState } from "react";
import Context from "../../Context/Context";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
const clone = require("rfdc")();

const List = () => {
  const { info, annotationHandler } = useContext(Context);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const totalNumberOfPages = Math.ceil(info.length / itemsPerPage);
  const copiedInfo = clone(info);

  const listInfo = copiedInfo.slice(indexOfFirstItem, indexOfLastItem);

  listInfo.forEach((item) => {
    item.content = item.content.slice(0, 80) + "...";
  });

  return (
    <div style={{ height: "100vh" }}>
      <Container>
        {listInfo.map((item) => {
          return (
            <Typography
              key={item._id}
              sx={{ fontSize: 14, mt: 5 }}
              color="text.secondary"
              gutterBottom
              onClick={() => annotationHandler(item._id)}
            >
              {item.content}
            </Typography>
          );
        })}
      </Container>

      <Stack spacing={2} sx={{ mt: 2 }}>
        <Pagination
          count={totalNumberOfPages}
          size="small"
          page={currentPage}
          onChange={(e, value) => setCurrentPage(value)}
        />
      </Stack>
    </div>
  );
};

export default List;
