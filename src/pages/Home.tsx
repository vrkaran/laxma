import Hero from '../components/Hero';
import StorySection from "../components/StorySection";
import DashboardSection from '../components/DashboardSection';
import AISection from '../components/AISection';
import ProgramsSection from '../components/Programs';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

function Home() {
  return (
    <>
      <Hero />
      <StorySection />
      <DashboardSection />
      <AISection />
      <ProgramsSection />
      <Testimonials />
      <CTA />
    </>
  )
}

export default Home
