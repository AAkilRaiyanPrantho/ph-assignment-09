import Carousel from "../Carousel/Carousel";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <div>
        <Carousel></Carousel>
      </div>
      <div className="flex justify-end px-2">
        <h1 className="outline outline-[#66FCF1] font-medium text-3xl my-2 p-6"><span className="text-[#66FCF1]">S</span>ale <span className="text-[#66FCF1]">B</span>egins</h1>
      </div>
      <div className="flex items-center justify-center">
        <h1 className="outline outline-[#66FCF1] font-bold text-5xl my-2 p-6"><span className="text-[#66FCF1]">O</span>ur <span className="text-[#66FCF1]">S</span>ervices</h1>
      </div>
      <div>
        <Services></Services>
      </div>
      <div className="flex items-center justify-center">
        <h1 className="outline outline-[#66FCF1] font-bold text-5xl my-2 p-6"><span className="text-[#66FCF1]">F</span>eatured <span className="text-[#66FCF1]">A</span>rtists</h1>
      </div>
    </div>
  );
};

export default Home;
