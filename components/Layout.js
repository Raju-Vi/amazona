import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/system";
import useStyles from "../utils/styles";
import NextLink from "next/link";
import Head from "next/head";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useContext } from "react";
import { Store } from "../utils/Store";
import { Switch } from "@mui/material";
import Cookies from "js-cookie";

const Layout = ({ title, description, children }) => {
  const { state, dispatch } = useContext(Store);
  const { darkMode } = state;
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: "#f0c000",
      },
      secondary: {
        main: "#208080",
      },
    },
  });
  const classes = useStyles();
  const modeChangeHandler = () => {
    dispatch({ type: darkMode ? "DARK_MODE_OFF" : "DARK_MODE_ON" });
    const newDarkMode = !darkMode;
    Cookies.set("darkMode", newDarkMode ? "ON" : "OFF");
  };
  return (
    <Box>
      <Head>
        <title>{title ? `${title}-Next amazona` : "Next amazona"}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="sticky" className={classes.navBar}>
          <Toolbar>
            <NextLink href="/" className={classes.logo}>
              amazona
            </NextLink>
            <div className={classes.grow}></div>
            <div>
              <Switch
                checked={darkMode}
                onChange={modeChangeHandler}
                inputProps={{ "aria-label": "controlled" }}
              />
              <NextLink href="/cart" className={classes.link}>
                Cart
              </NextLink>
              <NextLink href="/login" className={classes.link}>
                Login
              </NextLink>
            </div>
          </Toolbar>
        </AppBar>
        <Container className={classes.main}>{children}</Container>
        <footer className={classes.footer}>
          <Typography color="primary">All Rights Reserved .amazona</Typography>
        </footer>
      </ThemeProvider>
    </Box>
  );
};

export default Layout;
