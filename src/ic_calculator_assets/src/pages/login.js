import React, { useState, useCallback, useEffect } from 'react';
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LogoDfinity from "../components/logo";
import { ic_calculator } from "../../../declarations/ic_calculator/index";

function Copyright(props) {
  const [copyright, setCopyright]=useState('');
  async function printCopyright(){
    setCopyright('processing');
    let copyrightInActor = await ic_calculator.getCopyrights();
    setCopyright(copyrightInActor);
  }
  useEffect(() => {
    printCopyright();
  }, []);

  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
       {copyright}
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {

  const [helloWorld, setHelloWorld] = useState('');
  const [InputUser, SetInputUser] = useState('');
  const [UserName,SetUserName] = useState('');

  async function queryHelloWorld() {
    setHelloWorld('Query is in progress...');
    let helloWorld = await ic_calculator.greetingsFromIc();
    setHelloWorld(helloWorld);
    SetUserName("...processing")
    await ic_calculator.setName(InputUser);
    let settedName = await ic_calculator.getName();
    SetUserName(settedName);
    
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <LogoDfinity></LogoDfinity>
          <Typography component="h1" variant="h5">
           {helloWorld} {UserName}
          </Typography>
          <Box
            component="form"
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="Name"
              label="Your Name"
              name="name"
              autoComplete="Name"
              onChange={(e) => SetInputUser(e.target.value)}
              value={InputUser}
              autoFocus
            />         
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={queryHelloWorld}
            >
              Send It
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="https://smartcontracts.org/" variant="body2">
                {"The most powerful open- source blockchain network."}
                </Link>
              </Grid>
              <Grid item>
                <Link href="https://smartcontracts.org/docs/current/developer-docs/ic-overview" variant="body2">
                  {"Get started"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
