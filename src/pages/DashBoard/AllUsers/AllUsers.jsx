import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });

  const handleMakeAdmin = id => {
    
  }

    const handleDelete = (user) => {
    
    }

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | All Users</title>
      </Helmet>
      <h3 className="text-3xl font-semibold my-4">Total users: {users.length}</h3>
      <div className="overflow-x-auto">
  <table className="table table-zebra">
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
    {
        users.map((user,index) => <tr
        key={user._id}

        >
            <th>{index+1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role === 'admin' ? 'admin' : 
            <button onClick={() => handleMakeAdmin(user._id)} className="btn btn-ghost text-white bg-orange-600"><FaUserShield/></button>
            
                }</td>
            <td>   <button onClick={() => handleDelete(user)} className="btn btn-ghost text-white bg-red-600"><FaTrashAlt/></button></td>
          </tr>
         )
    }

      
    </tbody>
  </table>
</div>
    </div>
  );
};

export default AllUsers;