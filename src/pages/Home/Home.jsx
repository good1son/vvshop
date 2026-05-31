import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import NewItem from '@/components/NewItem/NewItem';
import WhyChooseUs from '@/components/WhyChooseUs/WhyChooseUs';
import ContactUs from '@/components/ContactUs/ContactUs';

const Home = () => {
  return (
    <>
      <Header />

      <Hero />
      <NewItem />
      <WhyChooseUs />
      <ContactUs />
    </>
  );
};

export default Home;
