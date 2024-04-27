const Usercard = ({ info, setUData, data }) => {
  console.log(info);

  const handleDelete = () => {
    fetch(`http://localhost:5003/user/${info._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((infos) => {
        console.log(infos);
        if (infos.deletedCount > 0) {
          console.log("user delete");
          const remain = data.filter((datas) => datas._id !== info._id);
          setUData(remain);
        }
      });
  };

  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>email</th>
            <th>time</th>
            <th>password</th>
            <th>id</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>1</th>
            <td>{info.email}</td>
            <td>Quality Control Specialist</td>
            <td>{info.password || "no password"}</td>
            <td>{info._id}</td>
            <td>
              <button onClick={handleDelete} className="btn btn-accent">
                delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Usercard;
