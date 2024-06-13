import { Link } from "react-router-dom";

const HotelDetails = (hotel) => {
  console.log(hotel.hotel);
  const {
    // eslint-disable-next-line no-unused-vars
    description,
    // eslint-disable-next-line no-unused-vars
    estate_title,
    // eslint-disable-next-line no-unused-vars
    image,
    // eslint-disable-next-line no-unused-vars
    price,
    // eslint-disable-next-line no-unused-vars
    rating,
    // eslint-disable-next-line no-unused-vars
    segment_name,
    // eslint-disable-next-line no-unused-vars
    status,
    location,
    id,
  } = hotel.hotel;

  return (
    <div className="">
      <div className="card card-compact  bg-base-100 shadow-xl">
        <img className="w-full h-auto" src={image} alt="Shoes" />

        <div className="card-body">
          <h2 className="card-title">{estate_title}</h2>
          <div className="flex justify-between">
            <h2>{segment_name}</h2>
            <h2>{price}</h2>
          </div>
          <h2 className="">
            <span className="text-xl font-bold">Location:</span> {location}
          </h2>
          <p>{description}</p>
          <h2>{status}</h2>
          <div className="card-actions justify-end">
            <Link to={`/cetagorise/${id}`}>
              {" "}
              <button className="btn btn-primary">viwe more</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;
