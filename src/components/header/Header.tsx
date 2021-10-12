import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import LanguageIcon from "@mui/icons-material/Language";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

interface Props {
  children?: React.ReactElement;
}

export default function Header(props: Props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className={`header`} enableColorOnDark>
        <Toolbar variant="dense">
          <Link href="/" passHref>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              className={`logo-wrapper`}
            >
              <a>
                <Image
                  src="https://iona.studio/assets/images/logo/iona.svg"
                  alt="IONA"
                  width={200}
                  height={50}
                  className={`header-logo`}
                />
              </a>
            </Typography>
          </Link>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <LanguageIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <Link href="/sites" passHref>
                View Sites
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link href="/sites/add" passHref>
                Add Site
              </Link>
            </MenuItem>
          </Menu>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
