const Carousel = () => {
  return (
    <div>
      <div className="carousel max-lg:flex max-lg:mx-auto max-lg:w-5/6 max-lg:h-[350px] lg:w-full h-[700px] ">
        <div id="item1" className="carousel-item w-full">
          <img
            src="https://i.ibb.co/YLKHwXN/flatten.webp"
            className="w-full"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://i.ibb.co/2tmFZYS/13038-Musical-theatre-students-performing.jpg"
            className="w-full"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://i.ibb.co/zxXHFyV/indie-film-festival-premiere.jpg"
            className="w-full"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="https://i.ibb.co/zsSBNQv/All-Winners-Confetti-1024x495.jpg"
            className="w-full"
          />
        </div>
        <div id="item5" className="carousel-item w-full">
          <img
            src="https://i.ibb.co/fdNyctG/AAAAQSGq-RNATRmf-Lr-z-YKppk-Qg-KLn-Z4ao-I9v-NStx-NYs-U6n-Cm-E8d6-D8-Vq-M25un-ZQmv6572tp2-Hboa-Ikx1-Q.jpg"
            className="w-full"
          />
        </div>
        <div id="item6" className="carousel-item w-full">
          <img
            src="https://i.ibb.co/ThjPQrM/Sports-events-insurance-Main-scaled-e1644805433386.jpg"
            className="w-full"
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
        <a href="#item5" className="btn btn-xs">
          5
        </a>
        <a href="#item6" className="btn btn-xs">
          6
        </a>
      </div>
    </div>
  );
};

export default Carousel;
