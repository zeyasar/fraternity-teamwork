import styles from "./css/Contact.module.css";
import person1 from "../assets/img/anthony.png";
import person2 from "../assets/img/enes.png";
import person3 from "../assets/img/zyasar.jpg";
import person4 from "../assets/img/ahmet.jpg"
import person5 from "../assets/img/mst.jpg"
import person7 from "../assets/img/bora.jpg"
import person6 from "../assets/img/murt.jpg"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import { Grid } from "@mui/material";

const Contact = () => {
  return (
    <div className={styles.about}>
      <div className={styles.cards}>
        <div className={styles.card}>
          <img className={styles.cardImage} alt="person" src={person1} />
          <div className={styles.cardBody}>
            <h3 className={styles.cardText}>Anthony Harold</h3>
            <div sx={{display:"flex",height:"auto"}}>
            <Grid item xs={4}> <a href="https://www.linkedin.com/in/anthony-harold-67-fs" target="_blank" rel="noopener noreferrer" style={{color:'white',fontSize:25}}> <LinkedInIcon/> </a>
            <a href="https://github.com/anthonyharold67" target="_blank" rel="noopener noreferrer" style={{color:'white',fontSize:25}}> <GitHubIcon  /> </a> 
             <a href="mailto:anthonyharold@gmail.com" target="_blank" rel="noopener noreferrer" style={{color:'white',fontSize:25}}> <GoogleIcon /> </a> </Grid>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <img className={styles.cardImage} alt="person" src={person2} />
          <div className={styles.cardBody}>
            <h3 className={styles.cardText}>Enes Unlu</h3>
            <div sx={{display:"flex",height:"auto"}}>
            <Grid item xs={4}> <a href="https://www.linkedin.com/in/enesunlu/" target="_blank" rel="noopener noreferrer" style={{color:'white',fontSize:25}}> <LinkedInIcon/> </a>
            <a href="https://github.com/enes9103" target="_blank" rel="noopener noreferrer" style={{color:'white',fontSize:25}}> <GitHubIcon  /> </a> 
             <a href="mailto:anthonyharold@gmail.com" target="_blank" rel="noopener noreferrer" style={{color:'white',fontSize:25}}> <GoogleIcon /> </a> </Grid>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <img className={styles.cardImage} alt="person" src={person3} />
          <div className={styles.cardBody}>
            <h3 className={styles.cardText}>Zeynep Yasar</h3>
            <div sx={{display:"flex",height:"auto"}}>
            <Grid item xs={4}> <a href="https://www.linkedin.com/in/zeynep-yasar-dev/" target="_blank" rel="noopener noreferrer" style={{color:'white',fontSize:25}}> <LinkedInIcon/> </a>
            <a href="https://github.com/zeyasar" target="_blank" rel="noopener noreferrer" style={{color:'white',fontSize:25}}> <GitHubIcon  /> </a> 
             <a href="mailto:zynpysr67@gmail.com" target="_blank" rel="noopener noreferrer" style={{color:'white',fontSize:25}}> <GoogleIcon /> </a> </Grid>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <img className={styles.cardImage} alt="person" src={person4} />
          <div className={styles.cardBody}>
            <h3 className={styles.cardText}>Ahmet Suat Pinar</h3>
            <div sx={{display:"flex",height:"auto"}}>
            <Grid item xs={4}> <a href="https://www.linkedin.com/in/ahmet-suat-pinar/" target="_blank" rel="noopener noreferrer" style={{color:'white',fontSize:25}}> <LinkedInIcon/> </a>
            <a href="https://github.com/ahmetsuat67" target="_blank" rel="noopener noreferrer" style={{color:'white',fontSize:25}}> <GitHubIcon  /> </a> 
             <a href="mailto:anthonyharold@gmail.com" target="_blank" rel="noopener noreferrer" style={{color:'white',fontSize:25}}> <GoogleIcon /> </a> </Grid>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <img className={styles.cardImage} alt="person" src={person5} />
          <div className={styles.cardBody}>
            <h3 className={styles.cardText}>Mesut Yıldırım</h3>
            <div sx={{display:"flex",height:"auto"}}>
            <Grid item xs={4}> <a href="https://www.linkedin.com/in/yildirimesut/" target="_blank" rel="noopener noreferrer" style={{color:'white',fontSize:25}}> <LinkedInIcon/> </a>
            <a href="https://github.com/yildirimesutx" target="_blank" rel="noopener noreferrer" style={{color:'white',fontSize:25}}> <GitHubIcon  /> </a> 
             <a href="mailto:anthonyharold@gmail.com" target="_blank" rel="noopener noreferrer" style={{color:'white',fontSize:25}}> <GoogleIcon /> </a> </Grid>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <img className={styles.cardImage} alt="person" src={person7} />
          <div className={styles.cardBody}>
            <h3 className={styles.cardText}>Bora Güneş</h3>
            <div sx={{display:"flex",height:"auto"}}>
            <Grid item xs={4}> <a href="#" target="_blank" rel="noopener noreferrer" style={{color:'white',fontSize:25}}> <LinkedInIcon/> </a>
            <a href="https://github.com/gunesbora" target="_blank" rel="noopener noreferrer" style={{color:'white',fontSize:25}}> <GitHubIcon  /> </a> 
             <a href="mailto:gunesbora80@gmail.com" target="_blank" rel="noopener noreferrer" style={{color:'white',fontSize:25}}> <GoogleIcon /> </a> </Grid>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <img className={styles.cardImage} alt="person" src={person6} />
          <div className={styles.cardBody}>
            <h3 className={styles.cardText}>Murat Deniz</h3>
            <div sx={{display:"flex",height:"auto"}}>
            <Grid item xs={4}> <a href="https://www.linkedin.com/in/anthony-harold-67-fs" target="_blank" rel="noopener noreferrer" style={{color:'white',fontSize:25}}> <LinkedInIcon/> </a>
            <a href="https://github.com/muratkarap" target="_blank" rel="noopener noreferrer" style={{color:'white',fontSize:25}}> <GitHubIcon  /> </a> 
             <a href="mailto:mkarap1978@gmail.com" target="_blank" rel="noopener noreferrer" style={{color:'white',fontSize:25}}> <GoogleIcon /> </a> </Grid>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;

