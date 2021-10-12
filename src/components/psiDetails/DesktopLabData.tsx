import React from "react";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

interface DesktopDetailsProps {
  psi: any;
}

const DesktopFieldData = (props: DesktopDetailsProps) => {
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
      <Box className="psi-description labdata-description">
        <Typography variant="body1" className="psi-detail" fontWeight="700">
          Lab Data
        </Typography>
        <Grid container spacing={2} columns={12}>
          <Grid item xs={12} md={6}>
            <Typography variant="body2" className="psi-detail">
              Time To Interactive
            </Typography>
            <Box>
              <Typography fontWeight="700">{psi.TimeToInteractive}</Typography>
            </Box>
          </Grid>
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
              First Contentful Paint
            </Typography>
            <Box>
              <Typography fontWeight="700">
                {psi.firstContentfulPaint}
              </Typography>
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
          <Grid item xs={12} md={6}>
            <Typography variant="body2" className="psi-detail">
              Speed Index
            </Typography>
            <Box>
              <Typography fontWeight="700">{psi.speedIndex}</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body2" className="psi-detail">
              Total Blocking Time
            </Typography>
            <Box>
              <Typography fontWeight="700">{psi.totalBlockingTime}</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default DesktopFieldData;
