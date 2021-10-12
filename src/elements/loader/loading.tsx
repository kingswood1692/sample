import React from "react";

import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";

const Loading = () => {
  return (
    <Grid container spacing={2} columns={12} justifyContent={`center`} alignItems={`center`}>
      <Grid item md={12} textAlign={`center`}>
        <CircularProgress />
      </Grid>
    </Grid>
  );
};

export default Loading;
