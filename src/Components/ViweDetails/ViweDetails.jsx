import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

const ViewDetails = () => {
  const [hotedata, setHoteldata] = useState(null);
  const { id } = useParams();
  const hotel = useLoaderData();

  useEffect(() => {
    const filterData = hotel.find((data) => data?.id == id);
    setHoteldata(filterData);
  }, [id, hotel]);

  if (!hotedata) {
    return <div>Loading...</div>;
  }

  const {
    description,
    estate_title,
    image,
    location,
    price,
    rating,
    segment_name,
    status,
  } = hotedata;

  console.log(price, rating);
  return (
    <div className="flex items-center justify-center min-h-screen relative">
      <div className="flex flex-col md:flex-row items-center">
        <div>
          <img className="w-full mx-auto mt-6 rounded-lg" src={image} />
        </div>
        <div className="mt-6 md:mt-0 md:ml-6 space-y-6">
          <h2 className="text-3xl font-bold">{estate_title}</h2>
          <p className="font-bold">{description}</p>
          <h2>{segment_name}</h2>
          <h2>
            <span className="font-bold text-2xl">Location</span>: {location}
          </h2>
          <p className="text-3xl">Status: {status}</p>
          <div>
            <p className="text-2xl flex justify-between">
              {" "}
              price: <span className="text-green-500">{price}</span>
            </p>
            <p>rating:{rating}</p>
            <div className="absolute mt-6 border bg-green-500 p-3 rounded-xl font-bold">
              <Link to="/">
                <button>back to home </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
