import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import LoginIcon from "@mui/icons-material/Login";
import { NavLink } from "react-router-dom";
import NavbarData from "../data/NavbarData";

const Navbar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#000000",
        borderRadius: 5,
        boxShadow: "0 10px 10px rgba(0, 0, 0, 0.3)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "monospace",
              fontSize: "1.7rem",
              fontWeight: 700,
              color: "#fe6807",
              textDecoration: "none",
            }}
          >
            DisasterAID
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
              gap: 5,
            }}
          >
            {NavbarData.map((data) => (
              <NavLink
                key={data.id}
                to={`${data.link}`}
                style={{ textDecoration: "none" }}
                activeClassName="active"
              >
                {({ isActive }) => (
                  <Button
                    sx={{
                      my: 2,
                      color: "white",
                      fontWeight: 700,
                      textDecoration: isActive ? "underline" : "none",
                      textUnderlineOffset: "5px",
                    }}
                  >
                    {data.name}
                  </Button>
                )}
              </NavLink>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Login">
              <NavLink to="/login">
                <Button
                  sx={{
                    fontWeight: 700,
                    color: "white   ",
                    textDecoration: "none",
                  }}
                >
                  <LoginIcon />
                </Button>
              </NavLink>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
