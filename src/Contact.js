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
                  Hi there, friend(?),
                  <br/>
                  <br/>
                  Get me here: walterkeyne@gmail.com for composition, production/engineering, sound design and such, or, if you want to know more about me/my work.
                  <br/>
                  <br/> 
                  :-::---::--:-
                  <br/> 
                  <br/>
                  My most recent collaborative work was composition, production and sound design for the audio book 
                  <a href="https://www.youtube.com/watch?v=6jX3pPiplks" target="_blank">The Shadows that Wanted to Shined</a>
                  <br/>
                  <br/>
                  Before that I did composition and sound design for youtube channel <a href="https://www.youtube.com/@Thatfrenchartist" target="_blank">That French Artist.</a>
                  <br />
                  Some of the work included creating a few pieces to capture the aesthetic/mood of the TV series <a href="https://www.youtube.com/watch?v=0_rDNzC2D-o&t=215s" target="_blank">YOU</a> (e.g. end of that video @ 17.35) and a pelthora of pirate themed sounds and music for <a href="https://www.youtube.com/watch?v=d_QC6MoHK1w&t=3s" target="_blank">another video.</a>
                  <br />
                  <br />
                  Before before that I co-created a conceptual/experimental video series yet to be 
                  released called <a href="https://www.youtube.com/watch?v=LCRre56ppC0" target="_blank">Walking Flower</a>
                  
                  
                  <br/>
                  <br/>
                  :-::---::--:-
                  <br/>
                  <br/>
                  And some time ago...
                  <br/>
                  ...I did composition for a couple of short films: <a href="https://www.imdb.com/title/tt5254584/" target="_blank">Philoctetes: An Outsider's Myth</a> and                   <a href="https://vimeo.com/147148970?fl=pl&fe=sh" target="_blank">Blue Grey</a>

                                                
                                                
                                                
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
