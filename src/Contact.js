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
                <p className='contact-text'>Get me here: walterkeyne@gmail.com for composition, production/engineering, sound design and such. Or if you want to know more about me* and/or my work.
                  <br/>
                  <br/>I might work for free if there's no budget, and, your a decent sort with some nicee ideas knocking around in your mind machine!
                  <br/>
                  <br/>I believe, perhaps strongly that my work is @ its best, or, at the very least - MINE - when it somehwat sharply diverts emotions to both unsettle the soul, and, remind one that a settled soul is a docile one. Think of it like watxching a good ol' Robert ALtman film, perhaps Nashville. The true value is only discovered upon completion. 
                  <br/>
                  <br/> *Such as the wild vicissitudes typical to the artist as person living in this fine world. 

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
