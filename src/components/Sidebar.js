import React from 'react';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import Image from '../images/phone.png'
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import ChildCareIcon from '@material-ui/icons/ChildCare';
import MailIcon from '@material-ui/icons/Mail';
import PregnantWomanIcon from '@material-ui/icons/PregnantWoman';
import Grid from '@material-ui/core/Grid';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    margin: '0 auto',
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function Sidebar() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        style={{background: '#f4f4f4', color: '#333'}}
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>

{/* SearchBar */}
          <Paper component="form" className={classes.paper}>
          <SearchIcon />
      <InputBase
        className={classes.input}
        placeholder="Search Anything"
        inputProps={{ 'aria-label': 'search Anything' }}
      />
      <IconButton type="submit" aria-label="search" style={{background: '#EF5E0D', color: '#fff', borderRadius: '7px'}}>
        Search
      </IconButton>
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton color="primary" className={classes.iconButton} aria-label="directions">
        
      </IconButton>
    </Paper>

    <AddShoppingCartIcon />
  

        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['Females', 'Males', 'Accessories', 'Footwear'].map((text, index) => (
            <ListItem button key={text}>
            <ListItemIcon>
                  {index % 2 === 0 ? <PregnantWomanIcon /> : <EmojiPeopleIcon />}
            </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Kids', 'Clothing', 'Health and Beauty'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <Typography variant="p" style={{color: 'red', textAlign: 'center' }}>
            More Categories
        </Typography>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <Card className={classes.root}
         style={open !== 'null' ? {width: '100%', 
         backgroundColor: '#BE11E93D', height: '60vh', color: '#52525f',
          textAlign: 'center'} : {width: '50%',
          backgroundColor: '#BE11E93D', height: '90vh',
           textAlign: 'center'}}
         variant="outlined">
      <CardContent style={{textAlign: 'center', padding: '30px'}}>
          <Grid container alignContent="center">
      <Grid item xs={6} style={{marginLeft: 'auto', marginTop: '40px'}}>
        <Typography variant="h3">
            Shop The Latest Iphones
        </Typography>
        <Button variant="contained" style={{ color: '#fff', background: '#EF5E0D'
 }}>
        Shop Now
      </Button>
        </Grid>
        <Grid item xs={4}>

    <img src={Image} width={350} height={350}  alt="phone"/>
        </Grid>
        </Grid>
      </CardContent>
      
    </Card>
      </main>
    </div>
  );
}
