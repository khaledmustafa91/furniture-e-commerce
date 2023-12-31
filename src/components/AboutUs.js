import Team from './AboutUs/Team';
import Testimonials from './Home/Testimonials';
import WhyChooseUs from './Home/WhyChooseUs';
import MainHero from './MainHero';

const AboutUs = () => {
  return (
    <>
      <MainHero
        title="About Us"
        description="Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique."
      />
      <WhyChooseUs />
      <Team />
      <Testimonials />
    </>
  );
};

export default AboutUs;
