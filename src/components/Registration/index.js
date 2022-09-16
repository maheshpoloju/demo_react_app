import { useState } from "react";

import "./index.css"

const medicalHistoryOptions = [
  { id:1,isSelected: false,value: "diabetes", label: "Diabetes" },
  { id:2,isSelected: false,value: "htn", label: "HTN" },
  { id:3,isSelected: false,value: "hypothyroidism", label: "Hypothyroidism" },
  { id:4,isSelected: false,value: "hyperlipidemia", label: "Hyperlipidemia" },
  { id:5,isSelected: false,value: "sleep_apnea", label: "Sleep apnea" },
  { id:6,isSelected: false,value: "anxiety", label: "Anxiety" },
  { id:7,isSelected: false,value: "depression", label: "Depression" },
 ]

const statesData = [
	{ name: 'State', abbrev: '' },
    { name: 'Alabama', abbrev: 'AL' },
    { name: 'Alaska', abbrev: 'AK' },
    { name: 'Arizona', abbrev: 'AZ' },
    { name: 'Arkansas', abbrev: 'AR' },
    { name: 'California', abbrev: 'CA' },
    { name: 'Colorado', abbrev: 'CO' },
    { name: 'Connecticut', abbrev: 'CT' },
    { name: 'Delaware', abbrev: 'DE' },
    { name: 'Florida', abbrev: 'FL' },
    { name: 'Georgia', abbrev: 'GA' },
    { name: 'Hawaii', abbrev: 'HI' },
    { name: 'Idaho', abbrev: 'ID' },
    { name: 'Illinois', abbrev: 'IL' },
    { name: 'Indiana', abbrev: 'IN' },
    { name: 'Iowa', abbrev: 'IA' },
    { name: 'Kansas', abbrev: 'KS' },
    { name: 'Kentucky', abbrev: 'KY' },
    { name: 'Louisiana', abbrev: 'LA' },
    { name: 'Maine', abbrev: 'ME' },
    { name: 'Maryland', abbrev: 'MD' },
    { name: 'Massachusetts', abbrev: 'MA' },
    { name: 'Michigan', abbrev: 'MI' },
    { name: 'Minnesota', abbrev: 'MN' },
    { name: 'Mississippi', abbrev: 'MS' },
    { name: 'Missouri', abbrev: 'MO' },
    { name: 'Montana', abbrev: 'MT' },
    { name: 'Nebraska', abbrev: 'NE' },
    { name: 'Nevada', abbrev: 'NV' },
    { name: 'New Hampshire', abbrev: 'NH' },
    { name: 'New Jersey', abbrev: 'NJ' },
    { name: 'New Mexico', abbrev: 'NM' },
    { name: 'New York', abbrev: 'NY' },
    { name: 'North Carolina', abbrev: 'NC' },
    { name: 'North Dakota', abbrev: 'ND' },
    { name: 'Ohio', abbrev: 'OH' },
    { name: 'Oklahoma', abbrev: 'OK' },
    { name: 'Oregon', abbrev: 'OR' },
    { name: 'Pennsylvania', abbrev: 'PA' },
    { name: 'Rhode Island', abbrev: 'RI' },
    { name: 'South Carolina', abbrev: 'SC' },
    { name: 'South Dakota', abbrev: 'SD' },
    { name: 'Tennessee', abbrev: 'TN' },
    { name: 'Texas', abbrev: 'TX' },
    { name: 'Utah', abbrev: 'UT' },
    { name: 'Vermont', abbrev: 'VT' },
    { name: 'Virginia', abbrev: 'VA' },
    { name: 'Washington', abbrev: 'WA' },
    { name: 'West Virginia', abbrev: 'WV' },
    { name: 'Wisconsin', abbrev: 'WI' },
    { name: 'Wyoming', abbrev: 'WY' }
];
const genderOptions = [
	{
		id:1,
		name:'Sex',
	},
	{
		id:2,
		name:'Male',
	},
	{
		id:3,
		name:'Female',
	}
]

const Registration = () => {
	const [showMedicalForm, setShowMedicalForm] = useState(false)
	const [selectedMedicalHistoryData, setSelectedMedicalHistoryData] = useState([])
	

	const handleFormSubmit = (e) => {
		e.preventDefault()
	}
	
	

	const handleRegister = () => {
		setShowMedicalForm(true)
	}

	const handleMedicalHistory = (value) => {
		
		let tempData = [...medicalHistoryOptions]
	    tempData.map(each => {
            if(each.id === value.id){
                each.isSelected = !value.isSelected
            }
            return each
        })
	    setSelectedMedicalHistoryData(tempData.filter(each => each.isSelected === true))
	}
	
	
	return(
		<div className='register_container'>
		{!showMedicalForm ? 

		(
        <form className='register-form-container' onClick={handleFormSubmit}>

          <h1 className='register-here-heading'>Register Here</h1>
          <div className='input-fields-container'>
          
	          <div className="input-field">
	          	<input
	            type="text"
	            placeholder="Name"
	            name="name"
	            required
	            className='input'
	          	/>
	          </div>
	          <div className="input-field">
	          	<input
	            type="text"
	            placeholder="DOB"
	            name="dob"
	            required
	            className='input'
	          	/>
	          </div>
          </div>
          <div className='input-fields-container'>
          	<div className="input-field">
          		<input
	            type="text"
	            placeholder="Age"
	            name="age"
	            required
	            className='input'
	          	/>
          	</div>
          	<div className="input-field">
          		<select className='input'>
				    {genderOptions.map(each => {
				    	return (
				    		<option value={each.name} key={each.id}>{each.name}</option>
				    	)
				    })}
				</select>
	         
          	</div>
          </div>
          <div className='input-fields-container'>
          	<div className="input-field">
          		<input
	            type="email"
	            placeholder="Email"
	            name="email"
	            required
	            className='input'
	          />
          	</div>
          	<div className="input-field">
          		<input
	            type="text"
	            placeholder="Phone"
	            name="number"
	            required
	            className='input'
	          	/>
          	</div>
          </div>
          
          
          <div className='input-fields-container'>
          	<div className="input-field">
          		<select className='input'>
				    {statesData.map(each => {
				    	return (
				    		<option value={each.name} key={each.name}>{each.name}</option>
				    	)
				    })}
				</select>
          	</div>
          </div>
           
          <button type="submit" className='register-button' onClick={handleRegister}>
            Register
          </button>
        </form>
        ) : (
        	<div>
        		<h1 className='medical-history-heading'>Enter Medical History</h1>
        		<div className='medical-history-form-container'>
        			<div className='medical-history-checkbox-container'>
				      	{medicalHistoryOptions.map((each) => {
				          return (
				            	<div key={each.id} onChange={() => handleMedicalHistory(each)}>
					            	<input type="checkbox" id={each.id} />
						              <label
						                className="label-container"
						                htmlFor={each.id}
						                // onChange={(e) => handleFilter(each)}
						              >
						               {each.label}
						              </label>  
					            </div>
				          	);
				       	})}
			  		</div>
			      	<div className='input-fields-container'>
				      	<div className="input-field">
				          	<input
				            type="text"
				            placeholder="Last Blood test date"
				            name="blood_test"
				            required
				            className='input'
				          	/>
				        </div>
				        <div className="input-field">
				          	<select className='input'>
					           	<option value="" className='select-option-label'>Types of allergies</option>
							    <option value="state1">Type 1</option>
							    <option value="state2">Type 2</option>
							    <option value="state3">Type 3</option>

							</select>
				        </div>
			        </div>
			        <div className='input-fields-container'>
			          	<div className="input-field">
			          		<input
				            type="text"
				            placeholder="Pharmacy Name"
				            name="pharmacy_name"
				            required
				            className='input'
				          />
			          	</div>
			          	<div className="input-field">
			          		<input
				            type="text"
				            placeholder="Address"
				            name="address"
				            required
				            className='input'
				          	/>
			          	</div>
				    </div>
				    <div className='input-fields-container'>
			          	<div className="input-field">
			          		<input
				            type="text"
				            placeholder="Phone"
				            name="phone"
				            required
				            className='input'
				          />
			          	</div>
			          	<div className="input-field">
			          		<input
				            type="text"
				            placeholder="Zip Code"
				            name="zip_code"
				            required
				            className='input'
				          	/>
			          	</div>
				    </div>
			        <div>
			        	<div className='upload-container'>
			        		<label htmlFor="myfile1" className='upload-label-text'>Upload ID: </label>
	  						<input type="file" id="myfile1" name="myfile1" className='upload-label' />
			        	</div>
			        	<div className='upload-container'>
			        		<label htmlFor="myfile2" className='upload-label-text'>Upload Medical report: </label>
	  						<input type="file" id="myfile2" name="myfile2" className='upload-label' />
			        	</div>

			        </div>
			        <div>
			        	<button type="submit" className='submit-button'>
			            	Submit
			          	</button>
			        </div>
				     
        		</div>

        	</div>
        )}
    </div>
	)
}

export default Registration