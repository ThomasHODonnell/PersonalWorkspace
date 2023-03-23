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


const GetName = (props) => {

    const {loginfirst} = props

    return (
        <div>
            {loginfirst}
        </div>
)}
export default GetName