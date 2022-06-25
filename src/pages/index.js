import React, {useEffect} from "react";
import { Link } from "gatsby";
import { ROUTES } from "../utils/constants/RouteConstants";
import { journeys } from "../utils/constants/Journey";
import Home from "../components/home"
import chatbotScriptInvoker from '../components/chatbot/chatbotScript';
import "cloudinary-video-player/dist/cld-video-player.min.css";

const IndexPage = () => {
  useEffect(() => {
    chatbotScriptInvoker();
  }, []);
  return (
    <Home></Home>
  );
};

export default IndexPage;
