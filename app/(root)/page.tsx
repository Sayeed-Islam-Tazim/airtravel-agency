import PopularDest from "../components/PopularDest";
import Services from "../components/Services";
import TourPackages from "../components/TourPackages";
import TravelNext from "../components/TravelNext";
import UpcomingEvent from "../components/UpcomingEvent";

const page = () => {
  return (
    <div>
      <Services />
      <UpcomingEvent />
      <PopularDest />
      <TravelNext />
      <TourPackages />
    </div>
  );
};

export default page;
