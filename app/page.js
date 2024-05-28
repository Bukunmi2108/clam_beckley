"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Home() {
  // dynamic hero

  const [strings, setStrings] = React.useState([
    "Fight for your Best Interests",
    "Secure your Child's Custody",
    "Make the Process Easygoing"
  ])

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % strings.length
        return newIndex
      })
    }, 2000);

    return () => clearInterval(intervalId)
  }, [])

  // toggle

  const [toggle, setToggle] = useState(false)

  function toggleMenu () {
    setToggle((prevState) => {
      let newState = true
      if (!prevState) {
        newState = true
      } else {newState = false}
      return newState
    })
  }

  //scroll

  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (scrollY >= 500) {
        setScroll(true)
      } else if (scrollY < 500){
        setScroll(false)
      }
    })
  })


  return (
      <body>
        <header className={scroll? "black" : ""}>
          <nav>
            <div className="logo-container">
              <img src="/imgs/logo.png" alt="logo" className="logo"/>
              <h4>Clam Berkeley</h4>
              <svg onClick={toggleMenu} className="menu" width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="Menu / Menu_Alt_02">
              <path id="Vector" d="M11 17H19M5 12H19M11 7H19" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              </svg>
            </div>
            <ul className="navlinks" id={toggle? "active": ""}>
              <li><a href="#">Home</a></li>
              <li><a href="#mission">About</a></li>
              <li><a href="#services">Services</a></li>
            </ul>
            <a href="#contact" className="button navbutton" id={toggle? "active": ""}>Contact us</a>
          </nav>
        </header>

        <main>
          <section id="hero" className="container hero">
            <div className="hero-content">
              <div className="reviews-stars">
                <div className="stars">
                  <img src="imgs/star.svg" alt="star"/>
                  <img src="imgs/star.svg" alt="star"/>
                  <img src="imgs/star.svg" alt="star"/>
                  <img src="imgs/star.svg" alt="star"/>
                  <img src="imgs/star.svg" alt="star"/>
                </div>
                <span>
                  26 Reviews
                </span>
                <div className="line"></div>
                <span>
                  50+ Happy Clients
                </span>
              </div>
              <p className="subhero">
                Divorce has never been easy
              </p>
              <h1 className="hero-title">
                We would <span className="dynamo">
                  {strings[currentIndex]}
                </span>
              </h1>
              <p className="subhero">
                Child Custody, Alimony & many more
              </p>
              <div className="btn-div">
                <a href="#contact" className="button">
                  Book a Free Consultation Call
                </a>
              </div>
            </div>
          </section>
          <section id="testimonial" className="container testimonial">
            <div className="topic-container">
              <div className="h-line"></div>
              <h2>
                <small>A Fight worth Fighting</small>
                Our Satisfied Clients
              </h2>
            </div>
            <div className="testimonial-grid">
              <div className="testimonial-scroll">
                <div className="testimony">
                  <img src="./imgs/background.jpg" alt="Profile" loading="lazy"/>
                  <p className="testimony-text">
                    "Clam Beckley helped in my divorce suit. it was seamless. they are the best"
                  </p>
                  <h6>
                    Mary Hackesaw
                    <small>
                      CEO BIWI
                    </small>
                  </h6>
                </div>
                <div className="testimony">
                  <img src="./imgs/background.jpg" alt="Profile" loading="lazy"/>
                  <p className="testimony-text">
                    "I never thought that the separation could be easy. I was frustrated but Clam's cam through'"
                  </p>
                  <h6>
                    Mary Hackesaw
                    <small>
                      CEO BIWI
                    </small>
                  </h6>
                </div>
                <div className="testimony">
                  <img src="./imgs/background.jpg" alt="Profile" loading="lazy"/>
                  <p className="testimony-text">
                    "Clam Beckley helped in my divorce suit. it was seamless. they are the best"
                  </p>
                  <h6>
                    Mary Hackesaw
                    <small>
                      CEO BIWI
                    </small>
                  </h6>
                </div>
                <div className="testimony">
                  <img src="./imgs/background.jpg" alt="Profile" loading="lazy"/>
                  <p className="testimony-text">
                    "Clam Beckley helped in my divorce suit. it was seamless. they are the best"
                  </p>
                  <h6>
                    Mary Hackesaw
                    <small>
                      CEO BIWI
                    </small>
                  </h6>
                </div>
                <div className="testimony">
                  <img src="./imgs/background.jpg" alt="Profile" loading="lazy"/>
                  <p className="testimony-text">
                    "Clam Beckley helped in my divorce suit. it was seamless. they are the best"
                  </p>
                  <h6>
                    Mary Hackesaw
                    <small>
                      CEO BIWI
                    </small>
                  </h6>
                </div>
                <div className="testimony">
                  <img src="./imgs/background.jpg" alt="Profile" loading="lazy"/>
                  <p className="testimony-text">
                    "Clam Beckley helped in my divorce suit. it was seamless. they are the best"
                  </p>
                  <h6>
                    Mary Hackesaw
                    <small>
                      CEO BIWI
                    </small>
                  </h6>
                </div>
                <div className="testimony">
                  <img src="./imgs/background.jpg" alt="Profile" loading="lazy"/>
                  <p className="testimony-text">
                    "Clam Beckley helped in my divorce suit. it was seamless. they are the best"
                  </p>
                  <h6>
                    Mary Hackesaw
                    <small>
                      CEO BIWI
                    </small>
                  </h6>
                </div>
                <div className="testimony">
                  <img src="./imgs/background.jpg" alt="Profile" loading="lazy"/>
                  <p className="testimony-text">
                    "Clam Beckley helped in my divorce suit. it was seamless. they are the best"
                  </p>
                  <h6>
                    Mary Hackesaw
                    <small>
                      CEO BIWI
                    </small>
                  </h6>
                </div>
                <div className="testimony">
                  <img src="./imgs/background.jpg" alt="Profile" loading="lazy"/>
                  <p className="testimony-text">
                    "Clam Beckley helped in my divorce suit. it was seamless. they are the best"
                  </p>
                  <h6>
                    Mary Hackesaw
                    <small>
                      CEO BIWI
                    </small>
                  </h6>
                </div>
                <div className="testimony">
                  <img src="./imgs/background.jpg" alt="Profile" loading="lazy"/>
                  <p className="testimony-text">
                    "Clam Beckley helped in my divorce suit. it was seamless. they are the best"
                    "Clam Beckley helped in my divorce suit. it was seamless. they are the best"
                  </p>
                  <h6>
                    Mary Hackesaw
                    <small>
                      CEO BIWI
                    </small>
                  </h6>
                </div>
                <div className="testimony">
                  <img src="./imgs/background.jpg" alt="Profile" loading="lazy"/>
                  <p className="testimony-text">
                    "Clam Beckley helped in my divorce suit. it was seamless. they are the best"
                  </p>
                  <h6>
                    Mary Hackesaw
                    <small>
                      CEO BIWI
                    </small>
                  </h6>
                </div>
                <div className="testimony">
                  <img src="./imgs/background.jpg" alt="Profile" loading="lazy"/>
                  <p className="testimony-text">
                    "Clam Beckley helped in my divorce suit. it was seamless. they are the best"
                  </p>
                  <h6>
                    Mary Hackesaw
                    <small>
                      CEO BIWI
                    </small>
                  </h6>
                </div>
                <div className="testimony">
                  <img src="./imgs/background.jpg" alt="Profile" loading="lazy"/>
                  <p className="testimony-text">
                    "Clam Beckley helped in my divorce suit. it was seamless. they are the best"
                  </p>
                  <h6>
                    Mary Hackesaw
                    <small>
                      CEO BIWI
                    </small>
                  </h6>
                </div>
                <div className="testimony">
                  <img src="./imgs/background.jpg" alt="Profile" loading="lazy"/>
                  <p className="testimony-text">
                    "Clam Beckley helped in my divorce suit. it was seamless. they are the best"
                  </p>
                  <h6>
                    Mary Hackesaw
                    <small>
                      CEO BIWI
                    </small>
                  </h6>
                </div>
                <div className="testimony">
                  <img src="./imgs/background.jpg" alt="Profile" loading="lazy"/>
                  <p className="testimony-text">
                    "Clam Beckley helped in my divorce suit. it was seamless. they are the best"
                  </p>
                  <h6>
                    Mary Hackesaw
                    <small>
                      CEO BIWI
                    </small>
                  </h6>
                </div>
                <div className="testimony">
                  <img src="./imgs/background.jpg" alt="Profile" loading="lazy"/>
                  <p className="testimony-text">
                    "Clam Beckley helped in my divorce suit. it was seamless. they are the best"
                  </p>
                  <h6>
                    Mary Hackesaw
                    <small>
                      CEO BIWI
                    </small>
                  </h6>
                </div>
              </div>
            </div>
          </section>
          <section id="mission" className="mission container">
            <div className="topic-container">
              <div className="h-line"></div>
              <h2>
                <small>About Us</small>
                Mission Statement
              </h2>
            </div>
            <div className="mission-grid">
              <p className="topic-sentence">
                We are committed to
              </p>
              <div className="une-mission">
                <div className="mission-statement">
                  <h1>1</h1>
                  <p>Guiding you through every step of the divorce process with compassion and understanding</p>
                </div>
                <div className="solicitor">
                  <img src="/imgs/a1.png" alt="divorce lawyer"/>
                  <div className="title">
                    <p className="name">Clam Beckley
                      <small>
                        DIVORCE LAWYER
                      </small>
                    </p>
                  </div>
                </div>
              </div>
              <div className="une-mission">
                <div className="mission-statement">
                  <h1>2</h1>
                  <p>Protecting your rights and ensure a fair outcome for you and your family</p>
                </div>
                <div className="solicitor">
                  <img src="/imgs/b1.png" alt="divorce lawyer"/>
                  <div className="title">
                    <p className="name">Anthony Gilbson
                      <small>
                        DIVORCE LAWYER
                      </small>
                    </p>
                  </div>
                </div>
              </div>
              <div className="une-mission">
                <div className="mission-statement">
                  <h1>3</h1>
                  <p>Providing clear and honest communication throughout your case</p>
                </div>
                <div className="solicitor">
                  <img src="/imgs/c1.png" alt="divorce lawyer"/>
                  <div className="title">
                    <p className="name">Ryan Wilson
                      <small>
                        DIVORCE LAWYER
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="services" className="container services">
            <div className="topic-container">
              <div className="h-line"></div>
              <h2>
                <small>This is What we do</small>
                Our Services
              </h2>
            </div>
            <div className="services-container">
              <div className="service">
                <h4 className="service-tag">1</h4>
                <h4>
                  Custody of the Child
                </h4>
                <a href="#">Learn More</a>
              </div>
              <div className="service">
                <h4 className="service-tag">2</h4>
                <h4>
                  Family Attorney
                </h4>
                <a href="#">Learn More</a>
              </div>
              <div className="service">
                <h4 className="service-tag">3</h4>
                <h4>
                  Spousal Support & Alimony
                </h4>
                <a href="#">Learn More</a>
              </div>
              <div className="service">
                <h4 className="service-tag">4</h4>
                <h4>
                  Order of Protection
                </h4>
                <a href="#">Learn More</a>
              </div>
              <div className="service">
                <h4 className="service-tag">5</h4>
                <h4>
                  Will, Trust & Estate matters
                </h4>
                <a href="#">Learn More</a>
              </div>
              <div className="service">
                <h4 className="service-tag">6</h4>
                <h4>
                  Defending false allegation of Abuse
                </h4>
                <a href="#">Learn More</a>
              </div>
              <div className="service">
                <h4 className="service-tag">7</h4>
                <h4>
                  Child Abuse & Adoption
                </h4>
                <a href="#">Learn More</a>
              </div>
              <div className="service">
                <h4 className="service-tag">8</h4>
                <h4>
                  Legal Counselling on Family matters
                </h4>
                <a href="#">Learn More</a>
              </div>
            </div>
          </section>
          <section id="contact" className="container contact">
            <div className="contact-container">
              <h2>
                Send us a Message
              </h2>
              <input id="name" type="text" name="" placeholder="Your name"/>
              <input id="message" type="text" name="" placeholder="Your message"/>
              <a className="button send">
                send
              </a>
            </div>
          </section>
        </main>
        <footer>
          <div className="foot">
            <img className="logo" src="/imgs/logo.png" alt="logo"/>
            <ul className="navlinks">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
            </ul>
            <div className="details">
              <p><a href="mailto:bkakinyemi@gmail.com">bkakinyemi@gmail.com</a></p>
              <p>
                Marina island, Lagos state.
              </p>
              <p>
                09137099774
              </p>
            </div>
          </div>
          <p className="copyright">Designed & Developed by Bukunmi Akinyemi</p>
        </footer>
        <img loading="lazy" className="gavel" src="/imgs/gavel.png" alt="gavel"/>
        <img loading="lazy" className="statue" src="/imgs/lady_justice.png" alt="gavel"/>
      </body>
  );
}
