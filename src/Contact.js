import './App.css';
import { useState } from 'react';

import { Link } from 'react-router-dom';


export default function Contact() {

  const [hoverHome, setHoverHome] = useState(false)

  return (
    <>

      <div className="homepage">

        <div className="overlay-container">

          <div id='music-header-container'>

            <div className='music-header-empty'></div>

            <div className='music-header-title-container'>

              {/* <img className='music-header-title-scroll'src={require('./images/Page-cropped-half.png')} alt="WMFR"></img>
              <div className='music-text'>Contact</div> */}

            </div>

            <div className='music-header-title-container'>
              

              <img className='music-header-home-scroll'src={require('./images/Page-cropped-half-edgeoff.png')} alt="WMFR"></img>
              <div className='home-text' onMouseEnter={() => setHoverHome(true)} onMouseLeave={() => setHoverHome(false)}>

                <p>
                                  <Link
                                                style={{
                                                  color: hoverHome ? "red" : 'inherit',
                                                  textDecoration: 'inherit',
                                                  backgroundColor: 'inherit',
                                                }}
                                                to={'/'}
                                              >
                                                Home
                                              </Link>
                                </p>
              </div>

            </div>


          </div>

            <div className="contact-container">

              <div>


              </div>
              <div className="contact-text-container">
                
                {/* <p className="contact-text">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. hhdhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh */}
                {/* </p> */}
                <p className='contact-text'>
                  Hi there, friend!
                  <br/>
                  <br/>
                  Get me here: walterkeyne@gmail.com for composition, production/engineering, sound design and such, or, if you want to know more about me and/or my work.
                  <br/>
                  <br/> 
                  :-::---::--:-
                  <br/> 
                  <br/>
                  Just got my new, excellent studio up and running in Spain and as such - finally have the right isolation, space and acoustics to get stuck into some more live drums and piano recordings.
                  Naturally I'll still be spending an inordinant amount of time on the ol' synths cause well they're just so damn fun...
                  especially now with my new modular system which I love I do. Some favourite works of mine are like so partly through the merging of the acoustic with the electric, the analogue with the digital etc. 
                  Goes without saying that I'll continue merging emotions in tandem -  when it's called for at least. 
                  <br/>
                  <br/>
                  Also imminently will be downloading a comprehensive library of orchestral software instruments.
                  I haven't spent as much time as I would of liked in this realm. 
                  <br/>
                  <br/>
                  So much to play with...
                  <br/>
                  <br/>
                  Let's make it happen : - :: ::-: :: :,,::::
                                                
                                                
                                                
                </p>

              </div>
              <div>

                
              </div>

              

            </div>



        </div>


        <img id='background-image'src={require('./images/CONTACTfull_smaller.png')} alt="WMFR"></img>

      </div>
    </>
  );
}
