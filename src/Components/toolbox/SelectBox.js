import {useContext,useState} from 'react'
import CityContext from '../../Contexts/CityContext'

function SelectBox() {
	const { city,setSelectedCity,selectedCity }  = useContext(CityContext);
	const [counter, setcounter] = useState(0)
	const handleChange = (e) => {
	 const value =JSON.parse(e.target.value);
	 setSelectedCity(value);
	 setcounter(1);
	}
 
	return (
		<div className="form-group">
    <label className="text-white lead" htmlFor="listCity" style={{fontWeight:'800'}}>Choose City</label>
    <select className="form-control" id="listCity" onChange={(e)=>handleChange(e)}>
			{counter>0?'':<option className="border" name={selectedCity.name} value={JSON.stringify(selectedCity)}>{selectedCity.name}</option>}
      {city.map(cityItem => (
				<option name={cityItem.name} value={JSON.stringify(cityItem)} key={cityItem.id}>{cityItem.name}</option>
			))
			}
    </select>
  </div>
	)
}

export default SelectBox
