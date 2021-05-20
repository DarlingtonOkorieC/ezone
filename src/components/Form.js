import React from 'react'
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import './form.css'


const Form = () => {
  
    return (
        <div className="body">
            <Grid container alignContent="center">
      <Grid item xs={6} style={{marginLeft: 'auto', marginTop: '40px'}}>
        <Typography variant="h5">
            Shop The Latest Iphones
        </Typography>
        <FormControl fullWidth variant="outlined" style={{width: '100%', padding: '10px 30px', borderRadius: '12px'}}>
          <InputLabel htmlFor="outlined-adornment-amount">

          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            endAdornment={
            <InputAdornment position="finish">
          <Button type="submit" style={{backgroundColor: 'orange', color: '#f4f4f4',borderRadius: '19px'}} >
            Submit
          </Button>
            </InputAdornment>}
            labelWidth={60}
          />
        </FormControl>
        </Grid>
        <Grid item xs={4}>

        </Grid>
        </Grid>
        </div>
    )
}

export default Form