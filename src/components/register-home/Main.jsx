import React from "react";


function HomeBased() {
    return <div>

        <div className="flex">
        <input id="radio-switch-3" className="ml-2 form-check-input" type="radio" name="vertical_radio_button" value="vertical-radio-exempt-center-base" />
            <h1 className="ml-3" style={{color:'teal'}}><b>LICENSED FAMILY</b></h1>
        </div>
        <p className="ml-10">Licensed care is in the provider's home and the children have regular schedules or care. 
        The maximum capacity is determined by the home's total square footage and may be for up to 16 children, unless restricted by the 
        city. Two qualified caregivers are required when there are more than 8 children in care, or when there are more than 2 children 
        younger than 2-years-old in care. 
        With two caregivers, a licensed family provider can care for up to (but not more than) 4 children younger than 2-years-old.</p>

        <div className="flex mt-2">
        <input id="radio-switch-3" className="ml-2 form-check-input" type="radio" name="vertical_radio_button" value="vertical-radio-exempt-center-base" />
            <h1 className="ml-3" style={{color:'teal'}}><b>RESIDENTIAL CERTIFICATE</b></h1>
        </div>
        <p className="ml-10">Licensed care is in the provider's home and the children have regular schedules of care. 
        The maximum capacity is determined by the home's total square footage and may be for up to 8 children, unless restricted by the city. 
        The provider can care for up to 8 children, with no more than 2 children younger than the 2-years-old.</p>

  </div> 
};

export default HomeBased;
