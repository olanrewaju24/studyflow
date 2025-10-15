import Hero from "../components/Hero";
import KeyFeatures from "../components/KeyFeatures";
import PopularCourses from "../components/Popular";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TopInstructors from "../components/Instructors";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <KeyFeatures />
      <PopularCourses />
      <TopInstructors />
      <Testimonials />
      <Footer />
    </>
  );
}
