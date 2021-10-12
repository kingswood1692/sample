import React from "react";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import CircularProgress from "@mui/material/CircularProgress";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import DesktopFieldData from "@components/psiDetails/DesktopFieldData";
import DesktopLabData from "@components/psiDetails/DesktopLabData";

interface MobilePsiResultTypes {
  psi: any;
}

const DesktopPsiResult = (props: MobilePsiResultTypes) => {
  const { psi } = props;
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2bh-content"
        id="panel2bh-header"
      >
        <Typography sx={{ width: "33%", flexShrink: 0 }}>Desktop</Typography>
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

        <DesktopFieldData psi={psi.fieldData} />
        <DesktopLabData psi={psi.labData} />
      </AccordionDetails>
    </Accordion>
  );
};

export default DesktopPsiResult;
