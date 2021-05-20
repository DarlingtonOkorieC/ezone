import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import '../App.css'
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/Star';

const Png = () => {
    const [spacing, setSpacing] = React.useState(10);
    return (
        <div>
            <Typography variant="h6" style={{textAlign: 'left'}}>
                Deals of the day
            </Typography>
            <Grid container justify="center" spacing={spacing} style={{marginTop: '40pxyhtn'}}>
                <Grid item>
                <Box borderRadius="50%" style={{display: 'block'}}>
                    <img className="imgof" src="https://www.pngkit.com/png/full/253-2538387_mobile-phone-png-transparent-hd-photo-mobile-images.png" alt="one"></img>
                    <br/>
                    <Typography style={{fontWeight: '600'}} variant="p">
                    1Phone11
                    </Typography>
                    <br></br>
                    <Typography style={{fontWeight: '600'}} variant="p">
                    $5000
                    </Typography>
                    <br />
                    <StarIcon style={{backgroundColor: 'red'}} />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                </Box>
                </Grid>
                <Grid item>
                <Box borderRadius="50%">
                <img className="imgof" src="https://bacsgl.com/wp-content/uploads/2018/02/Supply-of-Electronics.png" alt="one"></img>
                <br/>
                    <Typography style={{fontWeight: '600'}} variant="p">
                    1Phone11
                    </Typography>
                    <br></br>
                    <Typography style={{fontWeight: '600'}} variant="p">
                    $5000
                    </Typography>
                    <br />
                    <StarIcon style={{backgroundColor: 'red'}} />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                </Box>
                </Grid>
                <Grid item>
                <Box borderRadius="50%" style={{display: 'block'}}>
                    <img className="imgof" src="https://www.pngkit.com/png/full/253-2538387_mobile-phone-png-transparent-hd-photo-mobile-images.png" alt="one"></img>
                    <br/>
                    <Typography style={{fontWeight: '600'}} variant="p">
                    1Phone11
                    </Typography>
                    <br></br>
                    <Typography style={{fontWeight: '600'}} variant="p">
                    $5000
                    </Typography>
                    <br />
                    <StarIcon style={{backgroundColor: 'red'}} />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                </Box>
                </Grid>
                <Grid item>
                <Box borderRadius="50%">
                <img className="imgof" src="https://bacsgl.com/wp-content/uploads/2018/02/Supply-of-Electronics.png" alt="one"></img>
                <br/>
                    <Typography style={{fontWeight: '600'}} variant="p">
                    1Phone11
                    </Typography>
                    <br></br>
                    <Typography style={{fontWeight: '600'}} variant="p">
                    $5000
                    </Typography>
                    <br />
                    <StarIcon style={{backgroundColor: 'red'}} />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                </Box>
                </Grid>
            </Grid>

            </div>

    )
}
export default Png