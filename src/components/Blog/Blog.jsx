const Blog = () => {
  return (
    <div>
      <div className="flex justify-center items-center my-4 px-4">
        <h1 className="text-3xl text-center outline outline-[#66FCF1]">
          <span className="font-extrabold text-[#66FCF1]">Welcome</span> to our Blog Page!
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 p-4 gap-8 lg:p-8 lg:gap-20 md:w-2/4 lg:w-2/4 mx-auto">
        {/* card1 */}
        <div className="card w-96 bg-base-100 shadow-xl outline outline-[#66FCF1]">
          <figure>
            <img
              src="https://i.ibb.co/0YYHyPB/Authors-4.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">"The Science of Happiness: Secrets to a Fulfilling Life"</h2>
            <p>Secrets to a Fulfilling Life - Embark on a journey into the fascinating realm of happiness science. This blog unveils the science-backed secrets to leading a more fulfilling and joyous life. Explore the psychology behind happiness, discover practical happiness-boosting techniques, and gain insights into how simple shifts in mindset can transform your everyday experiences. </p>
            <div className="card-actions justify-end">
              <button className="btn outline outline-[#66FCF1] text-[#66FCF1]"
                >Read More</button>
            </div>
          </div>
        </div>
        {/* card2 */}
        <div className="card w-96 bg-base-100 shadow-xl outline outline-[#66FCF1]">
          <figure>
            <img
              src="https://i.ibb.co/QQQJjjc/Authors-3.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">"Unlocking Creativity: How to Overcome Writer's Block"</h2>
            <p>How to Overcome Writer's Block - Explore the fascinating world of creative writing and discover the keys to conquering writer's block. In this blog, we delve into proven techniques, writing exercises, and inspirational insights to reignite your creative spark.</p>
            <div className="card-actions justify-end">
            <button className="btn outline outline-[#66FCF1] text-[#66FCF1]"
                >Read More</button>
            </div>
          </div>
        </div>
        {/* card3 */}
        <div className="card w-96 bg-base-100 shadow-xl outline outline-[#66FCF1]">
          <figure>
            <img
              src="https://i.ibb.co/6H1vJtq/Authors-1.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">"Mastering the Art of Time Management"</h2>
            <p>Dive into the world of effective time management and discover how to take control of your day. From prioritizing tasks to setting goals and utilizing productivity tools, this blog explores the techniques and strategies that will help you make the most of your time</p>
            <div className="card-actions justify-end">
            <button className="btn outline outline-[#66FCF1] text-[#66FCF1]"
                >Read More</button>
            </div>
          </div>
        </div>
        {/* card4 */}
        <div className="card w-96 bg-base-100 shadow-xl outline outline-[#66FCF1]">
          <figure>
            <img
              src="https://i.ibb.co/k6Sp2WV/Authors-2.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">"The Art of Minimalist Living"</h2>
            <p>Discover the beauty in simplicity as we delve into the world of minimalism. Learn how to declutter your life, create functional spaces, and find contentment in less. Embrace minimalism and unlock the freedom it brings.</p>
            <div className="card-actions justify-end">
            <button className="btn outline outline-[#66FCF1] text-[#66FCF1]"
                >Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
