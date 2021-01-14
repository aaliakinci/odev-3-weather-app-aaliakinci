import {useContext} from 'react'
import CityContext from '../../Contexts/CityContext'

function SelectBox() {
	const { city,setSelectedCity,selectedCity }  = useContext(CityContext)
	const handleChange = (e) => {
	 const value =JSON.parse(e.target.value);
	 setSelectedCity(value);
	}
	return (
		<div className="form-group">
    <label className="text-white lead" htmlFor="listCity">Choose City</label>
    <select className="form-control" id="listCity" onChange={(e)=>handleChange(e)}>
      {city.map(cityItem => (
				<option name={cityItem.name} value={JSON.stringify(cityItem)} key={cityItem.id}>{cityItem.name}</option>
			))
			}
    </select>
  </div>
	)
}

export default SelectBox
