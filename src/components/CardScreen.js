import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import './card.css'


const CardScreen = () => {
    return (
        <div>
            <Card className="card" style={{width: '85%', color: 'white',
           height: '40vh',
           textAlign: 'center'}}
         variant="outlined">
      <CardContent style={{textAlign: 'center', padding: '30px'}}>
          <Grid container alignContent="center">
      <Grid item xs={6} style={{marginLeft: 'auto', marginTop: '40px'}}>
        <Typography variant="h3">
            Ezone ecommerce
        </Typography>
        <Typography variant="p">
            Get buying today
        </Typography>
        </Grid>
        <Grid item xs={4}>

    <img src="https://purepng.com/public/uploads/large/purepng.com-women-shoppingwomenpeoplepersonsfemaleshopping-1121525085594exo2y.png" width={350} height={350}  alt="phone"/>
        </Grid>
        </Grid>
      </CardContent>
      
    </Card>
        </div>
    )
}

export default CardScreen