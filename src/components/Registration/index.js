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
    { name: 'Arizona*', abbrev: 'AZ' },
    { name: 'Arkansas', abbrev: 'AR' },
    { name: 'California*', abbrev: 'CA' },
    { name: 'Colorado*', abbrev: 'CO' },
    { name: 'Connecticut', abbrev: 'CT' },
    { name: 'Delaware', abbrev: 'DE' },
    { name: 'Florida*', abbrev: 'FL' },
    { name: 'Georgia*', abbrev: 'GA' },
    { name: 'Hawaii', abbrev: 'HI' },
    { name: 'Idaho', abbrev: 'ID' },
    { name: 'Illinois', abbrev: 'IL' },
    { name: 'Indiana', abbrev: 'IN' },
    { name: 'Iowa', abbrev: 'IA' },
    { name: 'Kansas', abbrev: 'KS' },
    { name: 'Kentucky', abbrev: 'KY' },
    { name: 'Louisiana', abbrev: 'LA' },
    { name: 'Maine', abbrev: 'ME' },
    { name: 'Maryland*', abbrev: 'MD' },
    { name: 'Massachusetts', abbrev: 'MA' },
    { name: 'Michigan', abbrev: 'MI' },
    { name: 'Minnesota', abbrev: 'MN' },
    { name: 'Mississippi', abbrev: 'MS' },
    { name: 'Missouri', abbrev: 'MO' },
    { name: 'Montana', abbrev: 'MT' },
    { name: 'Nebraska', abbrev: 'NE' },
    { name: 'Nevada*', abbrev: 'NV' },
    { name: 'New Hampshire', abbrev: 'NH' },
    { name: 'New Jersey', abbrev: 'NJ' },
    { name: 'New Mexico', abbrev: 'NM' },
    { name: 'New York', abbrev: 'NY' },
    { name: 'North Carolina', abbrev: 'NC' },
    { name: 'North Dakota', abbrev: 'ND' },
    { name: 'Ohio', abbrev: 'OH' },
    { name: 'Oklahoma', abbrev: 'OK' },
    { name: 'Oregon*', abbrev: 'OR' },
    { name: 'Pennsylvania', abbrev: 'PA' },
    { name: 'Rhode Island', abbrev: 'RI' },
    { name: 'South Carolina', abbrev: 'SC' },
    { name: 'South Dakota', abbrev: 'SD' },
    { name: 'Tennessee', abbrev: 'TN' },
    { name: 'Texas*', abbrev: 'TX' },
    { name: 'Utah*', abbrev: 'UT' },
    { name: 'Vermont', abbrev: 'VT' },
    { name: 'Virginia*', abbrev: 'VA' },
    { name: 'Washington*', abbrev: 'WA' },
    { name: 'West Virginia*', abbrev: 'WV' },
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
	
	const handleSubmit = () => {
		alert("Thank You, we would contact you at your email or Phone.")
	}
	
	return(
		<section id="register" className="registration-main-container p-3">
      {!showMedicalForm ? (

      <div>
        <div className="row mt-4">
        	<h1 className='register-here-heading mb-3'>Register Here</h1>
          <div className="col-lg-12">
            <form role="form">
              <div className="row">
                <div className="col-md-6 form-group mt-md-0">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" />
                </div>
               	<div className="col-md-6 form-group mt-3 mt-md-0">
                  <input type="text" name="dob" className="form-control" id="dob" placeholder="Your DOB(mm/dd/yyyy)" />
                </div>
              </div>
              <div className="row">
	              <div className="col-md-6 form-group mt-3">
	                <input type="text" className="form-control" name="age" id="age" placeholder="Age" />
	              </div>
	              <div className="col-md-6 form-group mt-3">
	                <select className="form-select">
								    {genderOptions.map(each => {
								    	return (
								    		<option value={each.name} key={each.id}>{each.name}</option>
								    	)
								    })}
									</select>
	              </div>
              </div>
              <div className="row">
                <div className="col-md-6 form-group mt-3">
                  <input type="text" name="name" className="form-control" id="text" placeholder="Your Email" />
                </div>
                <div className="col-md-6 form-group mt-3">
                  <input type="phone" className="form-control" name="phone" id="phone" placeholder="Your Phone" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 form-group mt-3">
                	<select className='form-select'>
								    {statesData.map(each => {
								    	return (
								    		<option value={each.name} key={each.name}>{each.name}</option>
								    	)
								    })}
								</select>
                </div>
              </div>
              <button type="submit" className='register-button' onClick={handleRegister}>
		            Next
		          </button>
            </form>
          </div>
        </div>
      </div>
     ) : (
     			<div className='d-flex flex-column align-center'>
        		<h1 className='medical-history-heading'>Enter Medical History</h1>

        		{medicalHistoryOptions.map((each) => {
			          return (
			            	<div className='d-flex' key={each.id} onChange={() => handleMedicalHistory(each)}>
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
        		<div className="row">
              <div className="col-md-6 form-group mt-3">
                  <input type="text" name="blood_test_date" className="form-control" id="blood_test_date" placeholder="Last Blood test date(mm/dd/yyyy)" />
                </div>
              <div className="col-md-6 form-group mt-3">
                <select class="form-select">
								  <option selected>Types of allergies</option>
								  <option value="state1">Type 1</option>
							    <option value="state2">Type 2</option>
							    <option value="state3">Type 3</option>
								</select>
              </div>
            </div>
            <div className="row">
                <div className="col-md-6 form-group mt-3">
                  <input type="text" name="pharmacy_ame" className="form-control" id="pharmacy_name" placeholder="Pharmacy Name" />
                </div>
                <div className="col-md-6 form-group mt-3">
                  <input type="text" className="form-control" name="Address" id="address" placeholder="Address" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 form-group mt-3">
                  <input type="text" name="pharmacy_ame" className="form-control" id="pharmacy_phnone" placeholder="Phone" />
                </div>
                <div className="col-md-6 form-group mt-3">
                  <input type="text" className="form-control" name="zip" id="zip" placeholder="Zip code" />
                </div>
            </div>
            <div className="row">
            	<div className="col-md-6 form-group mt-3">
            		<label htmlFor="myfile1" className='upload-label-heading'>Upload ID: </label>
            	</div>
            	<div className="col-md-6 form-group mt-3">
                  <input type="file" id="myfile1" name="myfile1" className='upload-label-input' />
               </div>
            </div>
            <div className="row">
            	<div className="col-md-6 form-group mt-3">
            		<label htmlFor="myfile1" className='upload-label-heading'>Upload Medical report: </label>
            	</div>
            	<div className="col-md-6 form-group mt-3">
                  <input type="file" id="myfile1" name="myfile1" className='upload-label-input' />
               </div>
            </div>
					  
			        	
	        <div>
	        	<button type="submit" className='submit-button' onClick={handleSubmit}>
	            	Submit
	          	</button>
	        </div>
        </div>
     	)}
    </section>
		)
}

export default Registration