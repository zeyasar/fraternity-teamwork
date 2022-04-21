import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import {useStyles} from './FooterStyles';


const Footer = () => {
    const classes = useStyles();
  return (
    <div className={classes.root}>
        <Grid container alignItems="center">
                <Grid item xs={12} sm={12}>
                    <Box style={{display: 'flex', justifyContent: 'center'}}>
                        <Box> <a href="https://github.com/enes9103" target="_blank" rel="noopener noreferrer" style={{color:'white'}}> <GitHubIcon className={classes.icon} /> </a> </Box>
                        <Box> <a href="https://www.linkedin.com/in/enesunlu/" target="_blank" rel="noopener noreferrer" style={{color:'white'}}> <LinkedInIcon className={classes.icon} /> </a> </Box>
                        <Box> <a href="https://www.instagram.com/enesunlu0303/" target="_blank" rel="noopener noreferrer" style={{color:'white'}}> <InstagramIcon className={classes.icon} /> </a></Box>
                        <Box> <a href="https://twitter.com/Enes9103" target="_blank" rel="noopener noreferrer" style={{color:'white'}}> <TwitterIcon className={classes.icon}/> </a> </Box>
                    </Box>
                </Grid>
                <Grid item sm={1}></Grid>
            </Grid>
            <Grid container justify="center" alignItems="center">
                <Grid item xs={12}>
                    <p className={classes.footer__copyRight}>Developed by Fraternity Team <small>Copyright © {new Date().getFullYear()}</small> </p>
                </Grid>
            </Grid>
    </div>
  )
}

export default Footer

