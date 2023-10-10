const CustomerReviews = () => {
  return (
    <div>
      <div className="flex justify-center items-center my-4 px-4">
        <h1 className="text-3xl text-center outline outline-[#66FCF1]">
          <span className="font-extrabold text-[#66FCF1]">Listen</span> to what
          our dearest customers got to say about us.
        </h1>
      </div>
      <div className="mx-auto w-2/4">
        {/* card1 */}
        <div className="card card-side bg-base-100 shadow-xl my-4">
          <figure>
            <img
              src="https://i.ibb.co/CQ9hdzD/reviewrs-3.jpg"
              className="h-[300px] w-[800px]"
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Katie Hugh</h2>
            <p>Entertainment World exceeded all our expectations! From meticulous planning to flawless execution, they turned our corporate gala into an unforgettable night. Their attention to detail, creativity, and professionalism are top-notch. Our guests are still raving about the event. We highly recommend Entertainment World for any event, big or small.</p>
          </div>
        </div>
        {/* card2 */}
        <div className="card card-side bg-base-100 shadow-xl my-4">
          <figure>
            <img
              src="https://i.ibb.co/VYTvdC4/reviewrs-4.jpg"
              className="h-[300px] w-[650px]"
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Sophia Williams</h2>
            <p>Entertainment World made our wedding day a dream come true! Their team took care of every detail, ensuring a stress-free and magical experience. The decor, catering, and entertainment were perfect. We can't thank Entertainment World enough for creating memories that will last a lifetime.</p>
            
          </div>
        </div>
        {/* card3 */}
        <div className="card card-side bg-base-100 shadow-xl my-4">
          <figure>
            <img
              src="https://i.ibb.co/3sKf2vN/reviewrs-2.jpg"
              className="h-[300px] w-[650px]"
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Olivia Mitchell</h2>
            <p>Entertainment World knows how to throw a party! We attended their music festival, and it was an absolute blast. The lineup of artists was incredible, and the production quality was top-notch. The whole event ran smoothly, and the atmosphere was electric. We can't wait for the next one!</p>
            
          </div>
        </div>
        {/* card4 */}
        <div className="card card-side bg-base-100 shadow-xl my-4">
          <figure>
            <img
              src="https://i.ibb.co/KhZcQz8/reviewrs-1.jpg"
              className="h-[300px] w-[650px]"
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Benjamin Anderson</h2>
            <p>Entertainment World knows comedy! We attended their comedy show, and it was non-stop laughter from start to finish. The comedians were hilarious, and the venue was cozy and intimate. It was a perfect night out with friends. We'll definitely be back for more laughs!</p>
            
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default CustomerReviews;
