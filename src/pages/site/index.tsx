import React, { useRef } from "react";
import dynamic from "next/dynamic";
import { useDispatch } from "react-redux";

import {
  generateNewPsiReport,
} from "src/redux/site/actions/siteAction";
import { saveNewSite } from "src/redux/site/actions/siteAction";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Chip from '@mui/material/Chip';

// accordion
import LoadingButton from "@mui/lab/LoadingButton";
import UpdateIcon from "@mui/icons-material/Update";
import Masonry from "@mui/lab/Masonry";
import MasonryItem from "@mui/lab/MasonryItem";

// import FetchSubPagesButton from "@components/site/fetchSitesButton";
import MobilePsiResult from "@pages/site/mobilePsiResult";
import DesktopPsiResult from "@pages/site/desktopPsiResult";

const FetchSubPagesButton = dynamic(
  () => import("@components/site/fetchSitesButton"),
  { ssr: false }
);

interface SiteProps {
  siteData: any;
  currSiteName: string;
  generateLoading?: boolean;
  loading?: boolean;
  subPages: any;
}

const Site = (props: SiteProps) => {
  const { siteData, currSiteName, generateLoading, subPages } = props;
  const nodeRef = useRef(null);

  const dispatch = useDispatch();

  const getDate = (date) => {
    const dt = new Date(date);
    return `${
      dt.getMonth() + 1
    }/${dt.getUTCDate()}/${dt.getUTCFullYear()} - ${dt.getUTCHours()}:${dt.getUTCMinutes()}`;
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} columns={12}>
          <Grid item xs={12} md={12}>
            <div className="site-wrapper">
              <Typography noWrap variant="h4" gutterBottom component="div">
                {siteData?.getSiteDetails[0].name}
              </Typography>
              <Typography
                noWrap
                variant="subtitle2"
                gutterBottom
                component="div"
              >
                {siteData?.getSiteDetails[0].requestedUrl}
              </Typography>
              <Accordion className={`sub-pages-wrapper`}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  Sub Pages
                </AccordionSummary>
                <AccordionDetails>
                  {subPages.map((subpage, idx) => (
                    <Chip label={subpage.requestedUrl} variant="outlined" key={idx} className={`label-button`} />
                  ))}
                </AccordionDetails>
              </Accordion>
              <LoadingButton
                loading={generateLoading}
                loadingPosition="start"
                startIcon={<UpdateIcon />}
                variant="outlined"
                className="primary-button"
                onClick={() =>
                  dispatch(
                    generateNewPsiReport(
                      siteData?.getSiteDetails[0]._id,
                      currSiteName
                    )
                  )
                }
              >
                {generateLoading ? `Generating` : `Generate`} New Report
              </LoadingButton>
              <Box>
                <FetchSubPagesButton
                  saveSitefn={(siteData) => {
                    dispatch(saveNewSite(siteData));
                  }}
                  siteName={siteData?.getSiteDetails[0].requestedUrl}
                  siteId={siteData?.getSiteDetails[0]._id}
                />
              </Box>
            </div>
          </Grid>
          <Grid item xs={12} md={12}>
            <Masonry columns={{ sm: 2, md: 3 }} spacing={1} ref={nodeRef}>
              {siteData.getSitePsiResults.map((psi, idx) => (
                <MasonryItem key={idx} ref={nodeRef}>
                  <Grid item xs={12} md={12} key={idx}>
                    <div className="site-wrapper psi-detail-container">
                      <Typography
                        noWrap
                        variant="h6"
                        gutterBottom
                        component="div"
                      >
                        {getDate(psi.created_at)}
                      </Typography>
                      <div className="psi-info">
                        <Grid item xs={12} md={12}>
                          <div>
                            <MobilePsiResult psi={psi.mobile} />
                            <DesktopPsiResult psi={psi.desktop} />
                          </div>
                        </Grid>
                      </div>
                    </div>
                  </Grid>
                </MasonryItem>
              ))}
            </Masonry>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Site;
