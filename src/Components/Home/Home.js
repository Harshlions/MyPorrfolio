import React from 'react';
import style from './Home.module.css';
import { Grid, Container, Avatar, ListItemText, ListItemAvatar, ListItem, List, makeStyles } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import CodeIcon from '@material-ui/icons/Code';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import useWebAnimations, { fadeInLeftBig } from "@wellyshen/use-web-animations";
import Typist from 'react-typist';
import home from '../../img/home.png';
import webDeveloper from '../../img/webdevelopment.jpg';
import webdDsigner from '../../img/designing.jpg';
import harshMakwana from '../../img/download.jfif';

const useStyles = makeStyles((theme) => ({
  demo: {
    backgroundColor: theme.palette.background.paper,
  }
}));


export default function Home() {

  const homeImgAni = useWebAnimations({
    keyframes: {
      transform: "translateY(40px)",
    },
    timing: {
      duration: 1500, // Run for 1000ms
      iterations: Infinity, // Repeat once
      direction: "alternate", // Run the animation forwards and then backwards
      easing: "ease-in-out", // Use a fancy timing function
    },
  });

  const iconAniomation = useWebAnimations({
    keyframes: {
      transform: 'translateX(10px)'
    },
    timing: {
      duration: 1500,
      iterations: Infinity,
      direction: 'alternate',
      // easing: 'ease-in-out'
    }
  });
  const iconAni = useWebAnimations({ ...fadeInLeftBig });
  const classes = useStyles();



  // social media links
  const Link = (value) => {
    if (value === 'facebook') {
      window.open('');
    } else if (value === 'github') {
      window.open('');
    }
    else if (value === 'linkedin') {
      window.open('');
    }
    else if (value === 'instagram') {
      window.open('');
    }
  }
  return (
    <div className={style.container}>

      {/* home section start*/}
      <section className={style.home}>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <img src={home} ref={homeImgAni.ref} className={style.homeImg} alt="home" />
            </Grid>
            <Grid item xs={12} sm={6}>

              <div className={style.homeContent}>
                <Typist>
                  <h1 className={style.heading}>Harsh Makwana</h1>
                  <Typist.Delay ms={500} />
                  <h2 className={style.title}>Web Designer</h2>
                </Typist>
              </div>
              <div className={style.socialIcon} ref={iconAni.ref}>
                <Grid item xs={12} sm={12}>
                  <div ref={iconAniomation.ref}>
                    <FacebookIcon className={style.icon} onClick={() => Link('facebook')} />
                    <GitHubIcon className={style.icon} onClick={() => Link('github')} />
                    <LinkedInIcon className={style.icon} onClick={() => Link('linkedin')} />
                    <InstagramIcon className={style.icon} onClick={() => Link('instagram')} />
                  </div>
                </Grid>
              </div>

            </Grid>
          </Grid>
        </Container>
      </section>
      {/* home section end */}


      {/* Introduction start */}
      <section className={style.intro}>
        <Container >
          <h1 className={style.introHeading}>Introduction</h1>
          <Grid container spacing={3}>

            <Grid item xs={12} sm={6}>
              <div className={style.content}>
                <h1 className={style.introTitle}>Harsh Makwana</h1>
                <Container>
                  I'm Harsh Makwana. I am Web Developer and Web Designer with more than 10 months of experience.
                  I have developed of Web Projects on various technologies including Html, css, Javascript and React.
     </Container>
              </div>
            </Grid>

            <Grid item xs={12} sm={6}>

              <img src={harshMakwana} className={style.introImg} alt="Harsh Makwana" />
            </Grid>
          </Grid>
        </Container>
      </section>
      {/* Introduction end */}


      {/* expertise section start */}
      <section className={style.expertiseSection}>
        <Container>
          <h1 className={style.expertiseTittle}>Expert In</h1>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6}>
              <img src={webDeveloper} alt="web development" width="100%" />
              <h2>Web Developer</h2>
            </Grid>
            <Grid item xs={12} sm={6}>
              <img src={webdDsigner} alt="web designer" width="100%" />
              <h2>Web Designer</h2>
            </Grid>
          </Grid>
        </Container>
      </section>
      {/* expertise section end */}

      {/* skills section start */}
      <section className={style.skill}>
        <Container>
          <h1 className={style.skillTitle}>Skills</h1>
          <Grid container spacing={1}>

            <Grid item xs={6} md={4}>
              <div className={classes.demo}>
                <List>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <CodeIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Html" />
                  </ListItem>
                </List>
              </div>
            </Grid>

            <Grid item xs={6} md={4}>
              <div className={classes.demo}>
                <List>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <CodeIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Css" />
                  </ListItem>
                </List>
              </div>
            </Grid>

            <Grid item xs={6} md={4}>
              <div className={classes.demo}>
                <List>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <CodeIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Flex Box" />
                  </ListItem>
                </List>
              </div>
            </Grid>

            <Grid item xs={6} md={4}>
              <div className={classes.demo}>
                <List>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <CodeIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Bootstrap" />
                  </ListItem>
                </List>
              </div>
            </Grid>



            <Grid item xs={6} md={4}>
              <div className={classes.demo}>
                <List>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <CodeIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Java Script" />
                  </ListItem>
                </List>
              </div>
            </Grid>

          

            <Grid item xs={6} md={4}>
              <div className={classes.demo}>
                <List>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <CodeIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="React Js" />
                  </ListItem>
                </List>
              </div>
            </Grid>
         </Grid>
        </Container>

      </section>
      {/* skills section end */}


    </div>
  );
}
