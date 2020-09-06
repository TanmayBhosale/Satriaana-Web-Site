import React, { Component } from "react";
import "./newsletter.css";

class Newsletter extends Component {
    render(){
        return(
            <div style={{backgroundColor: '#222f3a', fontFamily: 'Poppins, sans-serif', color: 'rgb(255,255,255)'}}>
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center">
                    <h1><strong>Subscribe for our Newsletter</strong><br/></h1>
                    <p>Subscribe for our newsletter to stay in touch with us&nbsp;<br/>Don't worry, we won't be spamming you<br/></p><input type="text" style={{marginRight: '16px',marginTop: '20px', height: '38px', width: '260px'}}/><button class="btn btn-primary"
                        type="button" placeholder="Enter your e-mail address" style={{marginBottom: '4px', height: '38px', width: '100px'}}>Subscribe</button></div>
            </div>
        </div>
    </div>
        );
    }
}
export default Newsletter;
