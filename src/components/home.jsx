import React from 'react';
import { CssBaseline } from "@material-ui/core";
import Navbar from "./navbar";
import Container from "./content/container"
import VideoPlaylist from "./videoPlayer/playListPlayer";
import SecondaryContainer from './secondaryContainer';
import Footer from './footer';


export default function Home() {

    return (
        <div className="Home">
            <CssBaseline />
            <Navbar />
            <h1 style={{ textAlign: "center" }}>Hi User, Welcome to Sapiens University!</h1>
            <img className='header-logo' alt={'title'} style={{ maxHeight: "40vh", width: "100vw" }} src={"Banner.jpg"} />
            <Container />
            <SecondaryContainer/>
            <Footer></Footer>
        </div>
    );
}
