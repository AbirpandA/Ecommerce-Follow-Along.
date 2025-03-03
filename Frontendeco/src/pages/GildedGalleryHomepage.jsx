import Header from "../components/Header";
import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import Quote from "../components/Quote";
import Categories from "../components/Categories";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const GildedGalleryHomepage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <FeaturedProducts />
      <Quote />  {/* Now has more height! */}
      <Categories />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default GildedGalleryHomepage;
