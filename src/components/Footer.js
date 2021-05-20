import React from 'react'
import './footer.css'
import Grid from '@material-ui/core/Grid';

const Footer = () => {
    return (
        <Grid container className="site-footer" justify="center" spacing={5}>
            
            <Grid item md={4}>
              <div className="col-sm-12 col-md-6">
                <h6>About</h6>
                <p className="text-justify">
                    Ezone ecommerce delivers the best of ecommerce to you
                    </p>
            </div>
            </Grid>
            <Grid item={4}>
                <h6>Categories</h6>
                <ul className="footer-links">
                  <li><a href="http://scanfcode.com/category/c-language/">Culture</a></li>
                  <li><a href="http://scanfcode.com/category/front-end-development/">UI Design</a></li>
                  <li><a href="http://scanfcode.com/category/back-end-development/">Females</a></li>
                  <li><a href="http://scanfcode.com/category/java-programming-language/">Males</a></li>
                  <li><a href="http://scanfcode.com/category/android/">Accessories</a></li>
                  <li><a href="http://scanfcode.com/category/templates/">Watches</a></li>
                </ul>
    </Grid>
    <Grid item md={4}>
                <h6>Quick Links</h6>
                <ul className="footer-links">
                  <li><a href="http://scanfcode.com/about/">About Us</a></li>
                  <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
                 item={6}  <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
                  <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
                  <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
                </ul>
            <hr />
          </Grid>
          <Grid container>
             <Grid item md={6}>
                <p className="copyright-text">Copyright &copy; 2017 All Rights Reserved by 
             <a href="#">Ezone</a>.
                </p>
               </Grid>
    <Grid item md={6}>
                <ul className="social-icons">
                  <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                  <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                  <li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li>
                  <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>   
                </ul>
           

          </Grid>
          </Grid>
    </Grid>
    )
}

export default Footer