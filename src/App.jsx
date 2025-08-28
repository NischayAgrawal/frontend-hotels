import Hotels from "./components/Hotels";
import HotelDetails from "./components/HotelDetails";
import AddHotel from "./components/AddHotel";
function App() {
  return (
    <>
      <AddHotel></AddHotel>
      <Hotels></Hotels>
      <HotelDetails name="Sunset Resort" />
    </>
  );
}

export default App;
