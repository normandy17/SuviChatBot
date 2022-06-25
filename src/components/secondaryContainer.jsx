import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles"
import VideoPlaylist from "./videoPlayer/playListPlayer";
import BannerExample from "./sapiensNews";
import "./styles.css";

const useStyles = makeStyles((theme) => ({
    gridContainer: {
        padding: "20px 40px"
    }
}));

const SecondaryContainer = () => {
    const classes = useStyles();
    return (
        <Grid
            container
            spacing={1}
            className={classes.gridContainer}
            justify="center"
        >
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <BannerExample/>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
               <VideoPlaylist />
            </Grid>
        </Grid>
    );
};

export default SecondaryContainer;
