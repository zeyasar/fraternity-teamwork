import React from 'react'
import Grid from '@mui/material/Grid';
import {useStyles} from './FooterStyles';


const Footer = () => {
    const classes = useStyles();
  return (
    <div className={classes.root}>
        <Grid container alignItems="center">
                
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

