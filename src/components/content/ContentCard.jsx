import React from "react";
import { Link } from "gatsby";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 200
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

const ContentCard = ({ mainHeading, subHeading, contents, icon }) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  console.log(mainHeading, subHeading, contents, icon)
  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container direction="row" alignItems="center">
          <Grid item>
            <img className='header-logo' alt={'title'} src={"Sapiens.svg"} style={{ width: "50px", height: '50px', borderRadius: "25px", border: "1px solid black" }} />
          </Grid>
          <Grid item>
            <Typography variant="h5" style={{marginLeft:"10px"}}>
              {mainHeading}
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="h6" className={classes.pos} color="textSecondary">
          {subHeading}
        </Typography>
        {contents.map((item) => (
          <Link
            style={{ color: "black", display:'flex', textDecoration:'none', fontSize:"18px" }}
            to={item.to}
          >
            {bull}{item.title}
          </Link>
        ))}
      </CardContent>
    </Card>
  );
};

export default ContentCard;
