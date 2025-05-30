
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import About from '@/components/About';
import Timeline from '@/components/Timeline';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-20">
        <About />
        <Timeline />
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
