import React, { Component } from 'react'
import { FaLinkedin, FaTwitterSquare } from 'react-icons/fa'


export class Footer extends Component {
    render() {
        return (<div>
             <div className="footer">
                <div>
                    <p>
                        Ramiro D'Accorso <a href="https://www.linkedin.com/in/irnias/" target="_blank"><FaLinkedin/></a> <a href="https://twitter.com/irnias"target="_blank"><FaTwitterSquare/></a>
                    </p>
                </div>
            </div>   
        <style jsx>{`
        
            .footer {
                background-color: #2A2A2A;
                background-position: center;
                color: grey;  
                z-index: -1;
                left: 0;
	            right: 0;
                bottom: 0;
                background-size: cover;
                background-position: center;
                border-Top: 1px solid #E7E7E7;
                padding: 40px;
                position: fixed;
                height: 80px;
                width: 100%;
            }
            p{
                padding-top: 35px;
            }
        `}</style>
        </div>
        );
    }
}

export default Footer;
 