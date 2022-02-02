import './Footer.css'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import {Grid, Slider} from "@material-ui/core";

export default function Footer() {
    return (
        <div className='footer'>
            <div className="footer__left">
                <img className='footer__albumLogo'
                     src='https://i.pinimg.com/originals/3c/99/9c/3c999cd310f95f8878f38589b7ac8167.jpg' alt='' />
                <div className='footer__songInfo'>
                    <p>hi there</p>
                    <h4>Taylor Swift</h4>
                </div>
            </div>
            <div className="footer__center">
                <ShuffleIcon className='footer__green'/>
                <SkipPreviousIcon className='footer__icon'/>
                <PlayCircleOutlineIcon fontSize='large' className='footer__icon'/>
                <SkipNextIcon className='footer__icon'/>
                <RepeatIcon className='footer__green '/>
            </div>
            <div className="footer__right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item={6}>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider/>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}