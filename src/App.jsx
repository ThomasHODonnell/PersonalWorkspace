import React from "react";
import { AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline } from "@mui/material";
import { Grid, Toolbar, Typography, Container, Accordion, AccordionSummary, AccordionDetails } from "@mui/material"
import GlobalStyles from '@mui/material/GlobalStyles';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import MuiGrid from '@mui/material/Grid'; 
import Divider from "@mui/material/Divider";
import DeskTwoToneIcon  from "@mui/icons-material/DeskTwoTone"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



// use this for due dates w to/do list 
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";

import {useState, useEffect} from 'react';
import { Box } from "@mui/system";
import Login from "./otherPages/login";
import NameTimeDate from "./components/nameTimeDate";



const App = () => {

    // Needed for live date/time 
    const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
        setInterval(() => setDateState(new Date()), 30000); 
    }, []);



    const toDoList = (
        <div>
            <Container
            maxWidth = 'md'
            disableGutters = {true}
            component="side1" 
            sx={{ py: 4}}
            >
                <Box>
                <Typography
                component = 'h4'
                variant = 'h2'
                align = 'center'
                color = 'textPrimary'
                sx = {{mb: -5}}
                fontSize = "3rem"
                >
                    To-Do List:  <br></br>
                </Typography>
                    <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        my: 10, 
                    }}
                    >
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <Typography> To-Do Entry Header </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography>
                                    <br></br>
                                    To-Do Entry Due Date: 
                                    <br></br>
                                    <br></br>
                                    To-Do Entry Description: 
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                </Box>
            </Container>
        </div>
    ); 


    // const nameTimeDateShortcuts = (

    //     <div>
    //                 <Container
    //                 maxWidth = 'md'
    //                 disableGutters = {true}
    //                 component="main" 
    //                 sx={{ py: 4}}
    //                 >
    //                     <Box>
    //                     <Typography
    //                     component = 'h1'
    //                     variant = 'h2'
    //                     align = 'center'
    //                     color = 'textPrimary'
    //                     sx = {{mb: -5}}
    //                     fontSize = "3rem"
    //                     >
    //                         {`Welcome User!`} <br></br> 
    //                     </Typography>
    //                     <Typography
    //                     component = 'h2'
    //                     variant = 'h2'
    //                     align = 'center'
    //                     color = 'textPrimary'
    //                     sx = {{mb: -5}}
    //                     fontSize = "2.5rem"
    //                     >
    //                         <p>
    //                             {dateState.toLocaleString('en-US', {
    //                                 hour: 'numeric',
    //                                 minute: 'numeric',
    //                                 hour12: true,
    //                             })}
    //                         </p>
    //                     </Typography>
    //                     <Typography
    //                     component = 'h3'
    //                     variant = 'h2'
    //                     align = 'center'
    //                     color = 'textPrimary'
    //                     fontSize = "2.5rem"
    //                     >
    //                         <p>
    //                             {' '}
    //                             {dateState.toLocaleDateString('en-GB', {
    //                                 day: 'numeric',
    //                                 month: 'short',
    //                                 year: 'numeric',
    //                             })}
    //                         </p>
    //                     </Typography>
    //                     </Box>
    //                     <Box 
    //                         sx={{ flexGrow: 1,
    //                             marginTop: 8,
    //                             display: 'flex',
    //                             flexDirection: 'column',
    //                             alignItems: 'center',
    //                             m: 5
    //                         }}
    //                         >
    //                         <Grid container spacing={2}>
    //                             <Grid item xs={12} sm = {6} >
    //                             <Button
    //                             type="shortcut"
    //                             fullWidth
    //                             variant="outlined"
    //                             aria-label="outlined button group"
    //                             sx = {{ py: 3 }}
    //                             href="/"
    //                             >
    //                                 Your Shortcut ... 
    //                             </Button>
    //                             </Grid>
    //                             <Grid item xs={12} md={6}>
    //                             <Button
    //                             type="shortcut"
    //                             label = "Your Shortcut ..."
    //                             fullWidth
    //                             variant="outlined"
    //                             aria-label="outlined button group"
    //                             sx = {{ py: 3 }}
    //                             href="/"
    //                             >
    //                                 Your Shortcut ... 
    //                             </Button>
    //                             </Grid>
    //                             <Grid item xs={12} md={6}>
    //                             <Button
    //                             type="shortcut"
    //                             label = "Your Shortcut ..."
    //                             fullWidth
    //                             variant="outlined"
    //                             aria-label="outlined button group"
    //                             sx = {{ py: 3 }}
    //                             href="/"
    //                             >
    //                                 Your Shortcut ... 
    //                             </Button>
    //                             </Grid>
    //                             <Grid item xs={12} md={6}>
    //                             <Button
    //                             type="shortcut"
    //                             label = "Your Shortcut ..."
    //                             fullWidth
    //                             variant="outlined"
    //                             sx = {{ py: 3 }}
    //                             href="/"
    //                             >
    //                                 Your Shortcut ... 
    //                             </Button>
    //                             </Grid>
    //                         </Grid>
    //                     </Box>
    //                 </Container>
    //             </div>
    // ); 


    const tabList = (
        <div>
            <Container
            maxWidth = 'md'
            disableGutters = {true}
            component="side3" 
            sx={{ py: 4}}
            >
                <Box>
                <Typography
                component = 'h6'
                variant = 'h2'
                align = 'center'
                color = 'textPrimary'
                sx = {{mb: -5}}
                fontSize = "3rem"
                >
                    Tab List:  <br></br>
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        my: 10, 
                    }}
                    >
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <Typography> Folder </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography>
                                <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <Typography> Tab Header </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography>
                                <Button
                                type="taburl"
                                fullWidth
                                variant="outlined"
                                aria-label="outlined button group"
                                href="/"
                                >
                                    Tab URL 
                                </Button>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                </Box>
            </Container>
        </div>
    ); 


    return(
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
                    <nav>
                        <Link
                        variant="button"
                        color="text.primary"
                        href="create"
                        sx={{ my: 1, mx: 1.5 }}
                        >
                        Create
                        </Link>
                        <Link
                        variant="button"
                        color="text.primary"
                        href="delete"
                        sx={{ my: 1, mx: 1.5 }}
                        >
                        Delete
                        </Link>
                        <Link
                        variant="button"
                        color="text.primary"
                        href="edit"
                        sx={{ my: 1, mx: 1.5 }}
                        >
                        Edit
                        </Link>
                    </nav>
                    <Button 
                        href="login" variant="outlined" sx={{ my: 1, mx: 1.5 }}
                    >
                        Login
                    </Button>
                </Toolbar>
            </AppBar>
            <main>
                <Grid container>
                    <Grid item xs>
                        <Box
                            sx = {{
                                height: 504
                            }}
                        >
                            {toDoList}
                        </Box>
                    </Grid>
                    <Divider orientation="vertical" flexItem></Divider>
                    <Grid item xs>
                        <Box
                            sx = {{
                                width: 650, 
                                height: 504
                            }}
                        >
                            <NameTimeDate/>
                        </Box>
                    </Grid>
                    <Divider orientation="vertical" flexItem></Divider>
                    <Grid item xs>
                        <Box
                            sx = {{
                                height: 504
                            }}
                        >
                            {tabList}
                        </Box>
                    </Grid>
                </Grid>
            </main>
        </React.Fragment>
    )
}
export default App; 