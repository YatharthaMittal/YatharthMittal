import Pages from "./components/sections/Pages";
import BlobCursor from "./components/sections/BlobCursor";
import FluidCursor from "./components/sections/FluidCursor"

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

function App() {
  return (
    <ModalContextProvider>
      <Pages>
        <FluidCursor/>
        <BlobCursor/>
        <Header>
          <Navigation />
          <Hero />
          <Review />
        </Header>
        <Main>
          <Logos />
          <Features />
          {/* <FAQs /> */}
          <Testimonials />
        </Main>
        <Footer />

        <Modal modal="sign-up">
          <SignUpModal />
        </Modal>
        
      </Pages>
    </ModalContextProvider>
  );
}

export default App;
