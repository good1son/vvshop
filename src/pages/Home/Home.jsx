import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import NewItems from '@/components/NewItems/NewItems';
import WhyChooseUs from '@/components/WhyChooseUs/WhyChooseUs';
import ContactUs from '@/components/ContactUs/ContactUs';

const Home = () => {
  return (
    <>
      <Header />

      <Hero />
      <NewItems />
      <WhyChooseUs />
      <ContactUs />
    </>
  );
};

export default Home;
