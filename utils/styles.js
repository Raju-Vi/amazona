import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  navBar: {
    backgroundColor: "#203040",
  },
  logo: {
    color: "white",
    fontSize: 30,
    fontWeight: 600,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  main: {
    minHeight: "80vh",
  },
  footer: {
    textAlign: "center",
  },
  grow: {
    flexGrow: 1,
  },
  link: {
    color: "white",
    marginLeft: 20,
    fontSize: 17,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  backhome: {
    marginTop: 20,
    marginBottom: 10,
  },
});
export default useStyles;
