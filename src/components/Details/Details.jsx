import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
  const details = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const detail = details.find((detail) => detail.id === idInt);
  const { image, title, long_description } = detail;
  return (
    <div className="flex flex-col justify-center items-center max-lg:p-4 lg:p-20">
      <div className="mb-4">
        <figure>
          <img src={image} className="w-[1500px] h-[850px]" alt={title} />
        </figure>
      </div>
      <div className="flex flex-col items-center mb-4 max-lg:p-4 lg:px-36">
        <h1 className="my-6 text-[#66FCF1] font-bold text-2xl">"{title}"</h1>
        <p className="font-semibold">{long_description}</p>
      </div>
      <div className="mb-4">
        <button className="btn btn-ghost outline outline-[#66FCF1] text-[#66FCF1]">Buy Package</button>
      </div>
    </div>
  );
};

export default Details;
