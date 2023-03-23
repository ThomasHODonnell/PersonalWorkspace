import React from "react";
import { AppBar, CssBaseline, Box, ButtonGroup, Avatar } from "@mui/material";
import { Grid, Toolbar, Typography, Container } from "@mui/material"
import GlobalStyles from '@mui/material/GlobalStyles';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import  DeskTwoToneIcon  from "@mui/icons-material/DeskTwoTone"
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';


const CreateEntry = () => {
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
                    <nav>
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
                        <Link
                        variant="button"
                        color="text.primary"
                        sx={{ my: 1, mx: 1.5 }}
                        href = "/"
                        >
                        Home
                        </Link>
                    </nav>
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
                            <AddCircleOutlineOutlinedIcon />
                        </Avatar>
                        <Typography 
                        component="h1" 
                        variant="h2"
                        fontSize = '2rem'
                        >
                            Which column you would like create an entry in?
                        </Typography>
                        <ButtonGroup 
                            variant="outlined" 
                            aria-label="outlined button group"
                            sx = {{ py: 5 }}
                            >
                            <Button href = "createtodo"> To-Do </Button>
                            <Button href = "createshortcut"> Shortcut </Button>
                            <Button href = "createtab"> Tab List </Button>
                        </ButtonGroup>
                    </Box>
                </Container>
            </main>
        </React.Fragment>
    </div>
)}; 

export default CreateEntry; 