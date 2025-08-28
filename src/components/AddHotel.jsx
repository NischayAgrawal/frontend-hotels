import { useState } from "react";

const AddHotel = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [rating, setRating] = useState(0);
  const [website, setWebsite] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [checkInTime, setCheckInTime] = useState("");
  const [checkOutTime, setCheckOutTime] = useState("");
  const [amenities, setAmenities] = useState("");
  const [price, setPrice] = useState("");
  const [reservations, setReservations] = useState(false);
  const [parking, setParking] = useState(false);
  const [wifi, setWifi] = useState(false);
  const [pool, setPool] = useState(false);
  const [spa, setSpa] = useState(false);
  const [restaurant, setRestaurant] = useState(false);
  const [photos, setPhotos] = useState("");

  const nameHandler = (e) => setName(e.target.value);

  const categoryHandler = (e) => setCategory(e.target.value);
  const locationHandler = (e) => setLocation(e.target.value);

  const ratingHandler = (e) => setRating(e.target.value);

  const websiteHandler = (e) => setWebsite(e.target.value);

  const phoneNumberInput = (e) => setPhoneNumber(e.target.value);
  const checkInHandler = (e) => setCheckInTime(e.target.value);
  const checkOutHandler = (e) => setCheckOutTime(e.target.value);
  const amenitiesHandler = (e) => setAmenities(e.target.value);
  const priceHandler = (e) => setPrice(e.target.value);

  const reservationsHandler = (e) => setReservations(e.target.checked);
  const parkingHandler = (e) => setParking(e.target.checked);
  const wifiHandler = (e) => setWifi(e.target.checked);
  const poolHandler = (e) => setPool(e.target.checked);
  const spaHandler = (e) => setSpa(e.target.checked);
  const restaurantHandler = (e) => setRestaurant(e.target.checked);

  const photosHandler = (e) => setPhotos(e.target.value);

  const submitHandler = async (e) => {
    e.preventDefault();

    const hotelData = {
      name,
      category: [category],
      reviews: [],
      location,
      rating: rating ? Number(rating) : 0,
      website,
      phoneNumber,
      checkInTime,
      checkOutTime,
      amenities: amenities ? [amenities] : [],
      priceRange: price,
      reservationsNeeded: reservations,
      isParkingAvailable: parking,
      isWifiAvailable: wifi,
      isPoolAvailable: pool,
      isSpaAvailable: spa,
      isRestaurantAvailable: restaurant,
      photos: photos ? [photos] : [],
    };

    try {
      const response = await fetch("http://localhost:3000/hotels", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(hotelData),
      });

      if (!response.ok) {
        throw "Failed to add hotel.";
      }
      const data = await response.json();
      console.log("Added hotel", data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h2>Add Hotel</h2>
      <form onSubmit={submitHandler}>
        <label htmlFor="nameInput">Name:</label> <br />
        <input type="text" id="nameInput" onChange={nameHandler} /> <br />
        <br />
        <label htmlFor="categoryInput">Category: </label>
        <select id="categoryInput" name="categories" onChange={categoryHandler}>
          <option value="Budget">Budget</option>
          <option value="Mid-Range">Mid-Range</option>
          <option value="Luxury">Luxury</option>
          <option value="Boutique">Boutique</option>
          <option value="Resort">Resort</option>
          <option value="Other">Other</option>
        </select>
        <br />
        <br />
        <label htmlFor="locationInput">Location: </label>
        <br />
        <input type="text" id="locationInput" onChange={locationHandler} />
        <br />
        <br />
        <label htmlFor="ratingInput">Rating: </label>
        <br />
        <input type="number" id="ratingInput" onChange={ratingHandler} />
        <br />
        <br />
        <label htmlFor="websiteInput">Website:</label>
        <br />
        <input type="text" id="websiteInput" onChange={websiteHandler} />
        <br />
        <br />
        <label htmlFor="phoneNumberInput">Phone Number:</label>
        <br />
        <input type="text" id="phoneNumberInput" onChange={phoneNumberInput} />
        <br />
        <br />
        <label htmlFor="checkInTimeInput">Check In Time: </label>
        <br />
        <input type="text" id="checkInTimeInput" onChange={checkInHandler} />
        <br />
        <br />
        <label htmlFor="checkOutTImeInput">Check Out Time: </label>
        <br />
        <input type="text" id="checkOutTImeInput" onChange={checkOutHandler} />
        <br />
        <br />
        <label htmlFor="amenitiesInput">Amenities: </label>
        <br />
        <input type="text" id="amenitiesInput" onChange={amenitiesHandler} />
        <br />
        <br />
        <label htmlFor="priceInput">Price: </label>
        <select id="priceInput" name="priceRange" onChange={priceHandler}>
          <option value="$$ (11-30)">$$ (11-30)</option>
          <option value="$$$ (31-60)">$$$ (31-60)</option>
          <option value="$$$$ (61+)">$$$$ (61+)</option>
          <option value="Other">Other</option>
        </select>
        <br />
        <br />
        <input
          type="checkbox"
          id="reservationInput"
          onChange={reservationsHandler}
        />
        <label htmlFor="reservationInput">Reservations needed?</label>
        <br />
        <br />
        <input type="checkbox" id="parkingInput" onChange={parkingHandler} />
        <label htmlFor="parkingInput">Is Parking Available?</label>
        <br />
        <br />
        <input type="checkbox" id="wifiInput" onChange={wifiHandler} />
        <label htmlFor="wifiInput">Is Wifi Available?</label>
        <br />
        <br />
        <input type="checkbox" id="poolInput" onChange={poolHandler} />
        <label htmlFor="poolInput">Is Pool Available?</label>
        <br />
        <br />
        <input type="checkbox" id="spaInput" onChange={spaHandler} />
        <label htmlFor="spaInput">Is Spa Available?</label>
        <br />
        <br />
        <input
          type="checkbox"
          id="restaurantAvailable"
          onChange={restaurantHandler}
        />
        <label htmlFor="restaurantAvailable">Is Restaurant Available?</label>
        <br />
        <br />
        <label htmlFor="photosInput">Photos</label>
        <br />
        <input type="text" id="photosInput" onChange={photosHandler} />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default AddHotel;
