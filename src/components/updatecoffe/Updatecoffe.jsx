import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Updatecoffe = () => {

const allInfo=useLoaderData()
console.log(allInfo)
const id=useParams() 
console.log(id)
// const {name, supply, chef, taste, category, details, photourl ,_id}=allInfo
console.log(allInfo._id)

    const handleSubmit = (event) => {
        event.preventDefault();
    
        const form = event.target;
        const name = form.name.value;
        const supply = form.supply.value;
        const chef = form.chef.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photourl = form.photourl.value;
    
        console.log(name, supply, chef, taste, category, details, photourl);
        const CoffeInfo = {
          name,
          supply,
          chef,
          taste,
          category,
          details,
          photourl,
        };
        console.log(CoffeInfo);
        fetch(`http://localhost:5003/coffee/${allInfo._id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(CoffeInfo),
        })
          .then((res) => res.json())
          .then((info) => {
            if (info.acknowledged) {
                Swal.fire({
                    title: 'success!',
                    text: 'Do you want to continue',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
                
            }
          });
      };


    return (
        <div className="bg-[#F4F3F0]  ">
      <h1 className="text-center mb-10">Add New Coffee</h1>
      <p className="text-center w-4/6 mx-auto">
        It is a long established fact that a reader will be distraceted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using Content here.
      </p>
      <section className="p-6  mx-auto    dark:bg-gray-100 dark:text-gray-900">
        <form
          onSubmit={handleSubmit}
          className=" w-full   flex flex-col mx-auto space-y-12"
        >
          <fieldset className=" border-2 w-full gap-6 p-6  mx-auto rounded-md shadow-sm dark:bg-gray-50">
            <div className="grid grid-cols-6  gap-10 col-span-full  lg:col-span-full">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-sm">
                 
                  name
                </label>
                <input
                  id="firstname"
                  type="text"
                  name="name"
                  defaultValue={allInfo.name}
                  placeholder="Enter coffee name"
                  className="w-full h-full  rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="lastname" className="text-sm">
                  chef
                </label>
                <input
                  id="lastname"
                  type="text"
                  name="chef"
                  defaultValue={allInfo.chef}
                  placeholder="Enter coffee chef"
                  className="w-full h-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3 ">
                <label htmlFor="email" className="text-sm">
                  Supplier
                </label>
                <input
                  id="email"
                  type="text"
                  name="supply"
                  defaultValue={allInfo.supply}
                  placeholder="Enter coffee supplier"
                  className="w-full h-full  rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3 ">
                <label htmlFor="email" className="text-sm">
                  Taste
                </label>
                <input
                  id="email"
                  type="text"
                  name="taste"
                  defaultValue={allInfo.taste}
                  placeholder="Enter coffee taste"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 h-full focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3 ">
                <label htmlFor="email" className="text-sm">
                  category
                </label>
                <input
                  id="email"
                  type="text"
                  name="category"
                  defaultValue={allInfo.category}
                  placeholder="Enter coffee category"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50  h-full focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3 ">
                <label htmlFor="email" className="text-sm">
                  Details
                </label>
                <input
                  id="email"
                  type="text"
                  name="details"
                  defaultValue={allInfo.details}
                  placeholder="Enter coffee details"
                  className="w-full rounded-md focus:ring  h-full  focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full  ">
                <label htmlFor="email" className="text-sm">
                  PhotoUrl
                </label>
                <input
                  id="text"
                  type="text"
                  name="photourl"
                  defaultValue={allInfo.photourl}
                  placeholder="Enter photo URL"
                  className="w-full rounded-md focus:ring  h-full  focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
            </div>
          </fieldset>
          <button className="btn btn-block bg-black text-yellow-500">
            Add Coffee
          </button>
        </form>
      </section>
    </div>
    );
};

export default Updatecoffe;