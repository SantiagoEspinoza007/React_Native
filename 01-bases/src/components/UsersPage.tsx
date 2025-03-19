import UserRow from "./UserRow";
import useUsers from "../hooks/useUsers";

const UsersPage = () => {
  const {users, nextPage, prevPage} = useUsers();
  console.log(users);
  
    return (
    <>
      <h1>Usuarios:</h1>
      <table className="w-[500px] bg-black rounded-xl text-white">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
            {users.map(user => (
                <UserRow key={user.id} user={user} />
            ))}
          
        </tbody>
      </table>

      <div className="flex justify-between w-[500px] mt-2">
        <button
            onClick={ prevPage}
            className="p-2 bg-blue-500 text-white rounded-[5px]">
          Anteriores
        </button>
        <button 
            onClick={nextPage}
            className="p-2 bg-blue-500 text-white rounded-[5px]">
          Siguientes
        </button>
      </div>
    </>
  );
};

export default UsersPage;
