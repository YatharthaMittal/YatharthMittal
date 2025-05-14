import React, { useState }  from 'react'
import Pages from "./components/sections/Pages";
import BlobCursor from "./components/sections/BlobCursor";
import FluidCursor from "./components/sections/FluidCursor"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

// header
import Header from "./components/sections/Header";
import Navigation from "./components/sections/Navigation";
import Hero from "./components/sections/Hero";
import Review from "./components/sections/Review";

// main
import Main from "./components/sections/Main";
import Logos from "./components/sections/Logos";
import Features from "./components/sections/Features";
import FAQs from "./components/sections/FAQs/FAQs";
import Testimonials from "./components/sections/Testimonials/Testimonials";

// footer
import Footer from "./components/sections/Footer";

//modal
import Modal from "./components/sections/Modal/Modal";
import SignUpModal from "./components/sections/Modal/SignUpModal";
import { ModalContextProvider } from "./contexts/ModalContext";

// Mobile Menu
import MobileMenu from "./components/sections/MobileMenu/MobileMenu";
import { MobileMenuContextProvider } from "./contexts/MobileMenuContext";

function App() {
  let [showContent, setShowContent] = useState(false);
     useGSAP(()=>{
    const tl= gsap.timeline();
    tl.to(".vi-mask-group",{
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    })
    .to(".vi-mask-group",{
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function(){
        if(this.progress() >= .9){
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      }
    })
  });
  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  
                >
                  YM
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="src\assets\bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
    {showContent && (
    <ModalContextProvider>
      <MobileMenuContextProvider>
        <Pages>
          <FluidCursor />
          <BlobCursor />
          <Header>
            <Navigation />
            <Hero />
            <Review />
          </Header>
          <Main>
            {/* <Logos /> */}
            {/* <Features /> */}
            {/* <FAQs /> */}
            <Testimonials />
          </Main>
          <Footer />

          <Modal modal="sign-up">
            <SignUpModal />
          </Modal>

          <MobileMenu />
        </Pages>
      </MobileMenuContextProvider>
    </ModalContextProvider>
     )}
    </>
  );
}

export default App;
