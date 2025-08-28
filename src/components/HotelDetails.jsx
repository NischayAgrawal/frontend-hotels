import useFetch from "../useFetch";

const HotelDetails = (props) => {
  const { data, loading, error } = useFetch(
    `http://localhost:3000/hotels/${props.name}`
  );
  // console.log(data);

  return (
    <>
      <h1>{data?.name}</h1>
      <strong>Location: </strong>
      {data?.location} <br />
      <br />
      <strong>Rating: </strong>
      {data?.rating} <br />
      <br />
      <strong>Price Range: </strong>
      {data?.priceRange} <br />
      <br />
    </>
  );
};

export default HotelDetails;
