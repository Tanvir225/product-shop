import DefaultCarousel from "../../Components/Carousel/DefaultCarousel";
import EffectOverFlow from "../../Components/Carousel/Effect/EffectOverFlow";

const Home = () => {
  return (
    <div className="h-screen">
      <div className="py-2">
        <DefaultCarousel></DefaultCarousel>
      </div>
      <div className="py-5">
        <h2 className="text-center">catagory coming soon...</h2>
      </div>
      <div >
        <EffectOverFlow></EffectOverFlow>
      </div>
    </div>
  );
};

export default Home;
