import * as React from "react";
import Box from "@mui/material/Box";
import Link from "../components/Link";
import { Button, Grid, IconButton, Menu, MenuItem, styled, useMediaQuery } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu'

const Container = styled("div")(({ theme }) => ({
    display: 'flex',
//   [theme.breakpoints.down("md")]: {
//     backgroundColor: theme.palette.secondary.main,
//   },
//   [theme.breakpoints.up("md")]: {
//     backgroundColor: theme.palette.primary.main,
//   },
//   [theme.breakpoints.up("lg")]: {
//     backgroundColor: green[500],
//   },
}));


const links = [
  {
    href: '/',
    caption: 'Reports'
  },
  {
    href: '/about',
    caption: 'About'
  },
  {
    href: '/contact',
    caption: 'Contact us'
  },
]

export default function Navigation({children}: {children?: any}) {
  const isMobile = useMediaQuery("(max-width:800px)"); // TODO this should go in context
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl) // TODO this should go in context
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid
      container
      justifyContent={"flex-end"}
      alignContent="center"
      alignItems="baseline"
      sx={{ p: 2 }}
      alignSelf="flex-end"
    >
      <Link href="/report" sx={{ marginRight: 4, marginLeft: 4 }}>
        <Button variant="contained">Report</Button>
      </Link>
      {isMobile ? (
        <Box>
          <IconButton
            id="navigation-button"
            aria-controls="menu"
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
          <Menu
            id="menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "navigation-button",
            }}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            {links.map((link) => (
              <MenuItem key={link.href} onClick={handleClose}>
                <Link href={link.href} color="primary">
                  {link.caption}
                </Link>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      ) : (
        links.map((link) => (
          <Grid item key={link.href} alignSelf="center" sx={{ marginRight: 2 }}>
            <Link href={link.href} color="primary">
              {link.caption}
            </Link>
          </Grid>
        ))
      )}
    </Grid>
  );
}
