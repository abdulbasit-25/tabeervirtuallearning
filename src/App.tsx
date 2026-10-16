import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutTeacher from '@/components/AboutTeacher';
import YouTubeSection from '@/components/YouTubeSection';
import FirstYearPhysics from '@/components/FirstYearPhysics';
import LiveLectures from '@/components/LiveLectures';
import Courses from '@/components/Courses';
import Quotes from '@/components/Quotes';
import WhyChooseUs from '@/components/WhyChooseUs';
import CTASection from '@/components/CTASection';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import { useScrollReveal } from '@/hooks/useScrollReveal';

function App() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={ref} className="min-h-screen bg-navy-50">
      <Navbar />
      <main>
        <Hero />
        <AboutTeacher />
        <FirstYearPhysics />
        <LiveLectures />
        <Courses />
        <Quotes />
        <WhyChooseUs />
        <YouTubeSection />
        <CTASection />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
