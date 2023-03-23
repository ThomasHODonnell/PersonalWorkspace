import React from 'react'; 
import { AppBar, CssBaseline, Box, Avatar, Grid, TextField } from "@mui/material";
import { Toolbar, Typography, Container } from "@mui/material"
import GlobalStyles from '@mui/material/GlobalStyles';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import  DeskTwoToneIcon  from "@mui/icons-material/DeskTwoTone"
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {useState, useEffect} from 'react';
import App from '../App';
import NameTimeDate from '../components/nameTimeDate';
import GetName from '../components/getName';




const Login = () => {

    const url = 'http://localhost:3333/'; 

    const [loginfirst,setLoginFirst] = React.useState(['']); 
    const [loginlast,setLoginLast] = React.useState(['']); 
    const [next,setNext] = React.useState([])

    const call = async () => {
        const response = await fetch(url);
        const resjson = await response.json();
        setLoginFirst(resjson);
        setLoginLast(resjson)
    }

    useEffect( () => {
        call(); 
    }, [] )

    const handleSubmitLogin = async () => {
        const name = {
          firstname: loginfirst,
          lastname: loginlast
        };
        const http = {
          method: "POST", 
          body: JSON.stringify(name),
          headers: {"Content-type": "application/json"},
        }
        console.log("sending", http)
        const response = await fetch("http://localhost:3333/", http)
        const responsejson = await response.json()
        console.log('Credentials: ', responsejson)
        const arr = [...next, responsejson]
        console.log('arr', arr)
        setNext(arr)
      }

      const handleChangeFirst = (event) => {
        setLoginFirst(event.target.value)
      }
      const handleChangeLast = (event) => {
        setLoginLast(event.target.value)
      }

      const formatName = () => {
        return next.map((p, i) => (<div key = {i} value={p}>{p}</div>))
      }

    //   const nameAsProp = () => {
    //     <NameTimeDate formatName = {formatName}/>
    //  }

    return (
        <div>
            <React.Fragment>
            <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
            <CssBaseline/> 
            <AppBar 
                position="static"
                color="default"
                elevation={0}
                sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
            >
                <Toolbar sx={{ flexWrap: 'wrap' }} >
                    <DeskTwoToneIcon/> 
                    <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}> 
                        Personal Workspace 
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <Container
                component = 'main'
                maxWidth = 'md'
                >
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            my: 5
                        }}
                    >     
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography 
                        component="h1" 
                        variant="h2"
                        fontSize = '2rem'>
                        Enter your name to login!
                    </Typography>
                    <Box 
                        component="form" 
                        noValidate 
                        sx={{ mt: 3 }}>
                        <Grid
                            container spacing = {3}
                        >
                            <Grid item xs={12} sm={6}>
                                <TextField
                                label = "First Name"
                                type={'firstname'}
                                required
                                onChange={(event) => handleChangeFirst(event)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                label = "Last Name"
                                type={'lastname'}
                                required
                                onChange={(event) => handleChangeLast(event)}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            href="/"
                            onClick={handleSubmitLogin}
                            >
                            Login
                    </Button>
                    <GetName  loginfirst/>
                    </Box>
                    </Box>
                </Container>
            </main>
            </React.Fragment>
        </div>
    )
}

export default Login; 