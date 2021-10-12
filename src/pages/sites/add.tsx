import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { saveNewSite } from "src/redux/sites/actions/sitesAction";

import Head from "next/head";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Fab from "@mui/material/Fab";
import NavigationIcon from "@mui/icons-material/Navigation";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const AddSiteForm = (props) => {
  const [siteName, setSiteName] = useState("");
  const [siteUrl, setSiteUrl] = useState("");

  const handleInputChange = (e) => {
    console.log(e.target.id);
    switch (e.target.id) {
      case "siteName":
        return setSiteName(e.target.value);
      case "siteUrl":
        return setSiteUrl(e.target.value);
      default:
        return false;
    }
  };

  const handleSubmit = () => {
    console.log("submit");
    dispatch(saveNewSite({ siteName: siteName, siteUrl: siteUrl }));
  };

  const dispatch = useDispatch();
  return (
    <div>
      <Head>
        <title>Add New Site</title>
        <meta name="description" content="Add New Site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Grid container spacing={2} columns={6} justifyContent={`center`}>
          <Grid item xs={12} md={4}>
            <Box textAlign="center">
              <Typography variant="button" display="block" gutterBottom>Add New Site</Typography>
            </Box>
            <Box
              sx={{
                display: "block",
                "& > :not(style)": { m: 0, width: "100%" },
              }}
              component="form"
              noValidate
              autoComplete="off"
              className="box-form-wrapper"
              padding="2"
            >
              <Box
                sx={{
                  "& > :not(style)": { mt: 1, mb: 1, width: "100%" },
                }}
                component="div"
              >
                <TextField
                  id="siteName"
                  label="Site Name"
                  variant="outlined"
                  onChange={(e) => handleInputChange(e)}
                  value={siteName}
                />
              </Box>
              <Box
                sx={{
                  "& > :not(style)": { mt: 1, mb: 1, width: "100%" },
                }}
                component="div"
              >
                <TextField
                  id="siteUrl"
                  label="Site Url"
                  variant="outlined"
                  onChange={(e) => handleInputChange(e)}
                  value={siteUrl}
                />
              </Box>
              <Box>
                <Fab
                  variant="extended"
                  className="button-save"
                  onClick={() => handleSubmit()}
                >
                  <NavigationIcon sx={{ mr: 1 }} />
                  Save
                </Fab>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </main>
    </div>
  );
};

export default AddSiteForm;
