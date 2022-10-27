import React from "react";


function ExemptHome() {
    return <div>

        <div className="flex">
        <input id="radio-switch-3" className="ml-2 form-check-input" type="radio" name="vertical_radio_button" value="vertical-radio-exempt-center-base" />
            <h1 className="ml-3" style={{color:'teal'}}><b>DWS APPROVED, FFN IN CHILD'S HOME</b></h1>
        </div>
        <p className="ml-10">This is a Family, Friend, & Neighbor Approval to be eligible for child care payments from the DWS. 
        Child care is in the home of the provider and is for children of parents approved for child care subsidy from DWS. 
        No more than four unrelated children can be in care, unless they all are siblings.</p>

        <div className="flex mt-2">
        <input id="radio-switch-3" className="ml-2 form-check-input" type="radio" name="vertical_radio_button" value="vertical-radio-exempt-center-base" />
            <h1 className="ml-3" style={{color:'teal'}}><b>DWS APPROVED, FFN IN PROVIDER'S HOME</b></h1>
        </div>
        <p className="ml-10">This is a Family, Friend, & Neighbor Approval to be eligible for child care payments from the DWS. 
        Child care is in the home of the provider and is for children of parents approved for child care subsidy from DWS. 
        No more than four unrelated children can be in care, unless they all are siblings.</p>

        <div className="flex mt-2">
        <input id="radio-switch-3" className="ml-2 form-check-input" type="radio" name="vertical_radio_button" value="vertical-radio-exempt-center-base" />
            <h1 className="ml-3" style={{color:'teal'}}><b>EXEMPT HOME / TRIBE</b></h1>
        </div>
        <p className="ml-10">Care is in the home of the provider or in the home of the children and is NOT FOR DWS CHILD CARE PAYMENTS. 
        A Family License or a Residential Certificate is not required or is not available but a registration is required. 
        For a tribe, Please indicate the tribe's name.</p> 
  </div> 
};

export default ExemptHome;
