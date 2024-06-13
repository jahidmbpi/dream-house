import { useLoaderData } from "react-router-dom";
import Header from "../../Header/Header";
import HotelDetails from "../../HotelDetails/HotelDetails";
import EstateSection from "../../EstateSection/EstateSection";
import ClientREviwe from "../../ClientReviwe/ClientREviwe";

const Home = () => {
  const hotelData = useLoaderData();
  console.log(hotelData);
  return (
    <div>
      <Header></Header>
      <div>
        <EstateSection></EstateSection>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {hotelData.map((data) => (
          <HotelDetails key={data.id} hotel={data}></HotelDetails>
        ))}
      </div>
      <div>
        <h2>review</h2>
        <ClientREviwe></ClientREviwe>
      </div>
    </div>
  );
};

export default Home;
