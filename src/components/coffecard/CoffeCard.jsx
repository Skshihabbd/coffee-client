import { FaEye } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeCard = ({ info ,change,setChange }) => {
  console.log(info);

  const handleDelet = (id) => {
    console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `http://localhost:5003/coffee/${info._id}`,

          { method: "DELETE" }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });

              const remain=change.filter(cofs=>cofs._id!==info._id)
              setChange(remain)
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl flex flex-col lg:flex-none lg:flex-row  ">
        <div>
          <figure>
            <img className="h-52 w-60" src={info.photourl} alt="Movie" />
          </figure>
        </div>
        <div className="card-body flex justify-between flex-row ">
          <div>
            <h2 className="card-title">{info.name}</h2>
            <p>{info.details}</p>
            <p>{info.chef}</p>
            <p>{info.supply}</p>
            <p>{info.taste}</p>
          </div>
          <div className="card-actions justify-end ">
            <div className="join join-vertical">
              <button className="btn join-item">
                <FaEye className="text-[30px] text-orange-300" />
              </button>
              <Link to={`/updatecoffee/${info._id}`}>
              <button className="btn join-item">
                <MdModeEdit className="text-[30px] text-black" />
              </button>
              </Link>
              <button
                onClick={() => {
                  handleDelet(info._id);
                }}
                className="btn join-item"
              >
                <MdDelete className="text-[30px] text-red-500 bg-black rounded-lg" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeCard;
