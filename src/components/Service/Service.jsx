import PropTypes from "prop-types";

const Service = ({ service }) => {
  const { title, image, price, short_description } = service;

  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
  <div><figure><img src={image} className="w-[500px] h-[250px]" alt={title}/></figure></div>
  <div className="card-body">
    <h2 className="card-title text-[#66FCF1] font-bold text-2xl">{title}</h2>
    <p className="font-semibold mb-2">{short_description}</p>
    <div className="badge badge-outline font-semibold text-lg p-4 mb-4">{price} $</div>
    <div className="card-actions justify-end">
      <button className="btn outline outline-[#66FCF1] text-[#66FCF1]">Learn More</button>
    </div>
  </div>
</div>
    </div>
  );
};

Service.propTypes = {
  service: PropTypes.object,
};

export default Service;
