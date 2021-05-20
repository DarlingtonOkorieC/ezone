import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import '../App.css'
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';


const Body = () => {
    const [spacing, setSpacing] = React.useState(2);
    return (
        <div>
        <Typography variant="h5" color="dark">
            Popular Categories
        </Typography>
            <Grid container justify="center" spacing={spacing}>
                <Grid item>
                <Box borderRadius="50%" style={{display: 'block'}}>
                    <img className="img" src="https://m-cdn.phonearena.com/images/article/64576-wide-two_1200/The-Best-Phones-in-2021.jpg" alt="one"></img>
                    <br/>
                    <Typography variant="p">
                    Phones and Accessories
                    </Typography>
                </Box>
                </Grid>
                <Grid item>
                <Box borderRadius="50%">
                <img className="img" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/flawlessskin-1589384044.png?crop=1xw:1xh;center,top&resize=1200:*" alt="one"></img>
                <br/>
                    <Typography variant="p">
                        Health and Beauty
                    </Typography>
                </Box>
                </Grid>
                <Grid item>
                <Box borderRadius="50%">
                <img className="img" src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFzaGlvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="one"></img>
                <br/>
                    <Typography variant="p" justify="center" style={{marginLeft: 'auto'}}>
                    Fashion
                    </Typography>
                </Box>   
                </Grid>
                <Grid item>
                <Box borderRadius="50%">
                <img className="img" src="https://www.nutsvolts.com/uploads/articles/NV_0704_Christopherson_Large.jpg" alt="one"></img>
                <br/>
                    <Typography variant="p">
                    Electronics
                    </Typography>
                </Box>    
                </Grid>
            </Grid>

            </div>

    )
}
export default Body