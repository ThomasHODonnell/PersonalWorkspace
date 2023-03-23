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
import GetName from './getName';


const NameTimeDate = (props) => {
    
    // Needed for live date/time 
    const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
        setInterval(() => setDateState(new Date()), 30000); 
    }, []);
    

return(
<div>
            <Container
            maxWidth = 'md'
            disableGutters = {true}
            component="main" 
            sx={{ py: 4}}
            >
                <Box>
                <Typography
                component = 'h1'
                variant = 'h2'
                align = 'center'
                color = 'textPrimary'
                sx = {{mb: -5}}
                fontSize = "3rem"
                >
                    {`Welcome ${<GetName/>}!`} <br></br> 
                </Typography>
                <Typography
                component = 'h2'
                variant = 'h2'
                align = 'center'
                color = 'textPrimary'
                sx = {{mb: -5}}
                fontSize = "2.5rem"
                >
                    <p>
                        {dateState.toLocaleString('en-US', {
                            hour: 'numeric',
                            minute: 'numeric',
                            hour12: true,
                        })}
                    </p>
                </Typography>
                <Typography
                component = 'h3'
                variant = 'h2'
                align = 'center'
                color = 'textPrimary'
                fontSize = "2.5rem"
                >
                    <p>
                        {' '}
                        {dateState.toLocaleDateString('en-GB', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                        })}
                    </p>
                </Typography>
                </Box>
                <Box 
                    sx={{ flexGrow: 1,
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        m: 5
                    }}
                    >
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm = {6} >
                        <Button
                        type="shortcut"
                        fullWidth
                        variant="outlined"
                        aria-label="outlined button group"
                        sx = {{ py: 3 }}
                        href="/"
                        >
                            Your Shortcut ... 
                        </Button>
                        </Grid>
                        <Grid item xs={12} md={6}>
                        <Button
                        type="shortcut"
                        label = "Your Shortcut ..."
                        fullWidth
                        variant="outlined"
                        aria-label="outlined button group"
                        sx = {{ py: 3 }}
                        href="/"
                        >
                            Your Shortcut ... 
                        </Button>
                        </Grid>
                        <Grid item xs={12} md={6}>
                        <Button
                        type="shortcut"
                        label = "Your Shortcut ..."
                        fullWidth
                        variant="outlined"
                        aria-label="outlined button group"
                        sx = {{ py: 3 }}
                        href="/"
                        >
                            Your Shortcut ... 
                        </Button>
                        </Grid>
                        <Grid item xs={12} md={6}>
                        <Button
                        type="shortcut"
                        label = "Your Shortcut ..."
                        fullWidth
                        variant="outlined"
                        sx = {{ py: 3 }}
                        href="/"
                        >
                            Your Shortcut ... 
                        </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </div>
)}; 

export default NameTimeDate


