import { useState } from "react";
import useFetch from "../useFetch";

const Hotels = () => {
  const { data, loading, error } = useFetch(
    "https://backend-hotels-two.vercel.app/hotels"
  );
  const [msg, setMsg] = useState("");

  const deleteHandler = async (id) => {
    try {
      const response = await fetch(
        `https://backend-hotels-two.vercel.app/hotels/id/${id}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) throw "Failed to delete hotel.";

      const data = await response.json();
      if (data) {
        setMsg("Hotel deleted successfully.");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h1>All Hotels</h1>
      <ul>
        {data?.map((x) => (
          <li key={x._id}>
            {x.name}{" "}
            <button onClick={() => deleteHandler(x._id)}>Delete</button>
          </li>
        ))}
      </ul>
      <p>{msg}</p>
    </>
  );
};

export default Hotels;
