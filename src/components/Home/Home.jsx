import Artists from "../Artists/Artists";
import Carousel from "../Carousel/Carousel";
import Services from "../Services/Services";
import Timer from "../Timer/Timer";

const Home = () => {
  return (
    <div>
      <div>
        <Carousel></Carousel>
      </div>
      <div className="flex flex-col items-end justify-end px-2">
        <div className="mr-6"><h1 className="outline outline-[#66FCF1] font-medium text-3xl my-2 p-6"><span className="text-[#66FCF1]">L</span>ast <span className="text-[#66FCF1]">M</span>onth</h1></div>
        <div><Timer></Timer></div>
        
      </div>
     <div className="max-lg:p-2">
     <div className="flex items-center justify-center">
        <h1 className="outline outline-[#66FCF1] font-bold text-5xl my-2 p-6"><span className="text-[#66FCF1]">O</span>ur <span className="text-[#66FCF1]">S</span>ervices</h1>
      </div>
      <div>
        <Services></Services>
      </div>
     </div>
      <div className="flex flex-col items-center justify-center px-2">
        <div><h1 className="outline outline-[#66FCF1] font-bold text-center text-5xl my-2 p-6"><span className="text-[#66FCF1]">F</span>eatured <span className="text-[#66FCF1]">A</span>rtists</h1></div>
        <div><Artists></Artists></div>
      </div>
    </div>
  );
};

export default Home;
