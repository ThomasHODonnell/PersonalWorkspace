import React from "react";
import { AppBar, CssBaseline, Box, ButtonGroup, TextField } from "@mui/material";
import { Grid, Toolbar, Typography, Container, Avatar } from "@mui/material"
import GlobalStyles from '@mui/material/GlobalStyles';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import  DeskTwoToneIcon  from "@mui/icons-material/DeskTwoTone"
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

const CreateTabEntry = () => {

    const handleSubmit = () => {
        <div>

        </div>
    }

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
                            sx = {{ py: 3 }}
                            >
                            <Button href = "createtodo"> To-Do </Button>
                            <Button href = "createshortcut"> Shortcut </Button>
                            <Button > Tab List (Selected) </Button>
                        </ButtonGroup>
                        <Box 
                        component="form" 
                        noValidate 
                        onSubmit={handleSubmit} 
                        >
                        <Grid
                            container spacing = {2}
                            sx = {{mt: 0}}
                        >
                            <Grid item xs={12} sm={6}>
                                <TextField
                                label = "Folder Name"
                                required
                                fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                label = "Tab Header"
                                required
                                fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                label = "Paste the URL"
                                required
                                fullWidth
                                multiline
                                rows = {4}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 5 }}
                            href="/"
                            >
                            Submit Entry
                    </Button>
                    </Box>
                    </Box>
                </Container>
            </main>
        </React.Fragment>
    </div>
)}; 

export default CreateTabEntry; 