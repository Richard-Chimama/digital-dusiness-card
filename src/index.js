import ReactDOM from "react-dom"
import PicChim from "./images/chim02.jpeg"
import linkendIn from "./images/linkedin.png"
import instagram from "./images/instagram.png"
import github from "./images/github.png"
import facebook from "./images/facebook.png"
import twitter from "./images/twitter.png"
import email from "./images/email.png"

import './style.css'

export default function App(){
    return(
        <main>
            <picture>
                <source media={{maxWidth:'1345px'}} type="image/jpeg" srcSet="PicChimPotrait"></source>
                <source media={{minWidth:'720px'}} type="image/jpeg" srcSet="PicChimPotrait"></source>
                <img className="picChim"
                src={PicChim}
                alt="Richard" />
            </picture>
    
            <div className="container">
                    <div className="person-info flow">
                        <p>Richard Chimama</p>
                        <p className="position">Frontend Developer</p>
                        <p>rich.chime@gmail.com</p>
                    </div>
                    <div className="info--buttons">
                        {/*eslint-disable-next-line*/ }
                        <a rel="external opener" className="email-button" href="mailto:rich.chime@gmail.com" target="_blank"><img className="info--icon-button " src={email}/><span>Email</span></a>
                        {/*eslint-disable-next-line*/ }
                        <a rel="external opener" className="linked-button" href="https://www.linkedin.com/in/richard-chimama-a8aa55148/" target="_blank"><img className="info--icon-button" src={linkendIn}/><span>LinkednIn</span></a>
                    </div>
                    <div>
                        <div className="info--about">
                            <h4 className="more-info">About</h4>
                            <p>I am a frontend developer with a particular interested
                                of making things simple and automating daily task. I try to
                                keep up with security and best practices, and am always looking for
                                new things to learn.
                            </p>
                        </div>

                        <div className="info--interest">
                            <h4 className="more-info">Interests</h4>
                            <p>
                                Internet fanatic, Football, Enterpreneur, Reader, Religious 
                            </p>
                        </div>
                     </div>
            </div>
            <footer>
                    {/*eslint-disable-next-line*/ }
                    <a rel="external" href="https://twitter.com/chime_rich" target="_blank"><img className="info--icon "  alt="twitter" src={twitter}/></a>
                    {/*eslint-disable-next-line*/ }
                    <a rel="external" href="https://www.facebook.com/chime.salvadollar/" target="_blank"><img className="info--icon "  alt="facebook" src={facebook}/></a>
                    {/*eslint-disable-next-line*/ }
                    <a rel="external" href="https://instagram.com/rich_chim04?utm_medium=copy_link" target="_blank"><img className="info--icon "  alt="instagram" src={instagram}/></a>
                    {/*eslint-disable-next-line*/ }
                    <a rel="external" href="https://github.com/Richard-Chimama" target="_blank"><img className="info--icon "  alt="github" src={github}/></a>
                </footer>
        </main>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)