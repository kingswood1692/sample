import React, { useEffect, useState } from "react";

import Button from "@mui/material/Button";
import XMLParser from "react-xml-parser";

import service from "src/services/serviceProvider";
import Typography from "@mui/material/Typography";

interface FetchSiteButtonTypes {
  saveSitefn?: any;
  siteName: string;
  siteId?: string;
}

const FetchSubPagesButton = (props: FetchSiteButtonTypes) => {
  const [xmlJson, setXmlJson] = useState([]);
  const [subPagesArr, setSubPagesArr] = useState([]);

  const { saveSitefn, siteName, siteId } = props;

  useEffect(() => {
    if (subPagesArr.length > 0) {
      saveSitefn(subPagesArr);
    }
  }, [saveSitefn, subPagesArr]);

  const xmlParser = async () => {
    const sitemaps = await service.container.content.xmlToJson(
      `${siteName}/sitemap.xml`
    );
    const xml = new XMLParser().parseFromString(sitemaps);
    const subPages = xml.children;
    const subPagesArray = [];

    setXmlJson(xml.children);

    await subPages.map((loc) => {
      loc.children.map((url) => {
        if (url.name === "loc") {
          if (siteName !== url.value) {
            subPagesArray.push({
              parentId: siteId,
              requestedUrl: url.value,
              name: url.value
                .replace(`${siteName}`, "")
                .replace(/[^a-zA-Z ]/g, " "),
            });
          }
        }
      });
    });
    setSubPagesArr(subPagesArray);
  };

  return (
    <>
      <Button
        onClick={() => xmlParser()}
        variant="outlined"
        className="primary-button"
      >
        Fetch Sub Pages
      </Button>
      <div>
        {xmlJson &&
          xmlJson.map((loc, idx) => (
            <div key={idx}>
              {loc.children.map((url, urlIdx) => (
                <div key={urlIdx}>
                  {url.name === "loc" && (
                    <>
                      {/* {saveSitefn({
                        requestedUrl: `${url.value}`,
                        name: `${url.value
                          .replace("https://iona.studio/", "")
                          .replace(/[^a-zA-Z ]/g, " ")}`,
                      })} */}
                      <div>
                        <Typography variant="body2">
                          siteUrl: {url.value}
                        </Typography>
                        <Typography variant="body2">
                          pageName:{" "}
                          {url.value
                            .replace("https://iona.studio/", "")
                            .replace(/[^a-zA-Z ]/g, " ")}
                        </Typography>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          ))}
      </div>
    </>
  );
};

export default FetchSubPagesButton;
