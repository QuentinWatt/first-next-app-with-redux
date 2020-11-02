import { useUsersActions } from "../state/modules/users"
import { useUsersFiltersActions, useUsersFiltersGetters } from "../state/modules/users-search-filters"

const UserFilters = () => {
  const { setNationality, setGender, setResults } = useUsersFiltersActions()
  const { getNationality, getGender, getResults } = useUsersFiltersGetters()
  const { fetchUsers } = useUsersActions()
  const nationalities = ["AU", "BR", "CA", "CH", "DE", "DK", "ES", "FI", "FR", "GB", "IE", "IR", "NL", "NZ", "TR", "US"]
  const natOptions = nationalities.map((nat) => (
    <option key={nat} value={nat}>
      { nat }
    </option>
  ));


  return (
    <div className="mb-3 relative">
      <h3 className="font-bold text-xl mb-3 bg-white absolute top-0 left-0 ml-3 -mt-3 px-1">
        Filters
      </h3>

      <div className="border rounded p-3 pt-6">
        <div className="mb-3">
        <input 
          type="number"
          className="border rounded p-3 mr-4"
          placeholder="Number of results"
          onChange={setResults}
          value={getResults}
        />
        <select onChange={setGender} className="border rounded p-3 mr-4">
          <option disabled>
            select
          </option>
          <option 
            value="male"
          >
            Male
          </option>
          <option 
            value="female"
          >
            Female
          </option>
        </select>

        
        <select onChange={setNationality} className="border rounded p-3 mr-4">
          <option disabled>
            select
          </option>
          { natOptions }
        </select>
        </div>

        <button 
          className="btn rounded"
          onClick={fetchUsers}
        >
          Search
        </button>
      </div>


      <div>
        nationality: {getNationality} <br/>
        gender: {getGender} <br/>
        results: {getResults}
      </div>

    </div>
  );
};

export default UserFilters;
