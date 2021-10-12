import React from "react";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

interface MobileDetailsProps {
  psi: any;
}

const MobileFieldData = (props: MobileDetailsProps) => {
  const { psi } = props;

  // const displayFields = (data) => {
  //   for (let k in data) {
  //     // if (data.hasOwnProperty(k)) {
  //     //   user[k] = data[k];
  //     // }
  //     console.log(`${data[k]} = ${k}`)
  //   }
  // };

  return (
    <>
      <Box className="psi-description">
        <Typography variant="body1" className="psi-detail" fontWeight="700">
          Field Data
        </Typography>
        <Grid container spacing={2} columns={12}>
          <Grid item xs={12} md={6}>
            <Typography variant="body2" className="psi-detail">
              Cumulative Layout Shift
            </Typography>
            <Box>
              <Typography fontWeight="700">
                {psi.cumulativeLayoutShift}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body2" className="psi-detail">
              First Content fulPaint
            </Typography>
            <Box>
              <Typography fontWeight="700">
                {psi.firstContentfulPaint}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body2" className="psi-detail">
              First Input Delay
            </Typography>
            <Box>
              <Typography fontWeight="700">{psi.firstInputDelay}</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body2" className="psi-detail">
              Largest Contentful Paint
            </Typography>
            <Box>
              <Typography fontWeight="700">
                {psi.largestContentfulPaint}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default MobileFieldData;
