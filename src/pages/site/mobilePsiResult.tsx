import React from "react";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import CircularProgress from "@mui/material/CircularProgress";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import MobileFieldData from "@components/psiDetails/MobileFieldData";
import MobileLabData from "@components/psiDetails/MobileLabData";

interface MobilePsiResultTypes {
  psi: any;
}

const MobilePsiResult = (props: MobilePsiResultTypes) => {
  const { psi } = props;
  // console.log(parseInt(psi.performanceScore))
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Typography sx={{ width: "33%", flexShrink: 0 }}>Mobile</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography fontWeight="700">Performance Score</Typography>
        <Box
          sx={{
            position: "relative",
            display: "inline-flex",
          }}
        >
          <CircularProgress
            variant="determinate"
            value={parseInt(psi.performanceScore)}
          />
          <Box className="psi-detail-title">
            <Typography
              variant="caption"
              component="div"
              color="text.secondary"
            >{`${psi.performanceScore}%`}</Typography>
          </Box>
        </Box>

        <MobileFieldData psi={psi.fieldData} />
        <MobileLabData psi={psi.labData} />
      </AccordionDetails>
    </Accordion>
  );
};

export default MobilePsiResult;
