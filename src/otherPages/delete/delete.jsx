import React from "react";
import { AppBar, CssBaseline, Box, ButtonGroup } from "@mui/material";
import { Grid, Toolbar, Typography, Container, Avatar } from "@mui/material"
import GlobalStyles from '@mui/material/GlobalStyles';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import  DeskTwoToneIcon  from "@mui/icons-material/DeskTwoTone"
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const DeleteEntry = () => {
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
                        href="create"
                        sx={{ my: 1, mx: 1.5 }}
                        >
                        Create
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
                            <DeleteOutlinedIcon />
                        </Avatar>
                        <Typography 
                        component="h1" 
                        variant="h2"
                        fontSize = '2rem'
                        >
                            Which column you would like delete an entry in?
                        </Typography>
                        <ButtonGroup 
                            variant="outlined" 
                            aria-label="outlined button group"
                            sx = {{ py: 5 }}
                            >
                            <Button href = "deletetodo"> To-Do </Button>
                            <Button href = "deleteshortcut"> Shortcut </Button>
                            <Button href = "deletetab"> Tab List </Button>
                        </ButtonGroup>
                    </Box>
                </Container>
            </main>
        </React.Fragment>
    </div>
)}; 

export default DeleteEntry; 