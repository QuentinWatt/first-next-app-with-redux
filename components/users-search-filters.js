// import { useUsersActions } from "../state/modules/users-store"

const UserFilters = () => {
  return (
    <div className="mb-3 relative">
      <h3 className="font-bold text-xl mb-3 bg-white absolute top-0 left-0 ml-3 -mt-3 px-1">
        Filters
      </h3>

      <div className="border rounded p-3 pt-6">
        <input 
          type="number"
          className="border rounded p-3 mr-4"
          placeholder="Number of users"
        />
        <input 
          type="text"
          className="border rounded p-3 mr-4"
          placeholder="Gender"
        />
        <input 
          type="text"
          className="border rounded p-3"
          placeholder="Nationality"
        />
      </div>

    </div>
  );
};

export default UserFilters;
