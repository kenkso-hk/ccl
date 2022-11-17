import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownContent,
    DropdownItem,
} from "@/base-components";
import React, {useState} from "react";
import Select from "react-select";

function DropdownTime() {

     const [selectedOptions, setSelectedOptions] = useState();

    const timeList = [
        {value: "6", label: "6:00 AM"},
        {value: "6", label: "6:15 AM"},
        {value: "6", label: "6:30 AM"},
        {value: "6", label: "6:45 AM"},
        {value: "7", label: "7:00 AM"},
        {value: "7", label: "7:15 AM"},
        {value: "7", label: "7:30 AM"},
        {value: "7", label: "7:45 AM"},
        {value: "", label: "8:00 AM"},
        {value: "", label: "8:15 AM"},
        {value: "", label: "8:30 AM"},
        {value: "", label: "8:45 AM"},
        {value: "", label: "9:00 AM"},
        {value: "", label: "9:15 AM"},
        {value: "", label: "9:30 AM"},
        {value: "", label: "9:45 AM"},
        {value: "", label: "10:00 AM"},
        {value: "", label: "10:15 AM"},
        {value: "", label: "10:30 AM"},
        {value: "", label: "10:45 AM"},
        {value: "", label: "11:00 AM"},
        {value: "", label: "11:15 AM"},
        {value: "", label: "11:30 AM"},
        {value: "", label: "11:45 AM"},
        {value: "", label: "12:00 PM"},
        {value: "", label: "12:15 PM"},
        {value: "", label: "12:30 PM"},
        {value: "", label: "12:45 PM"},
        {value: "", label: "1:00 PM"},
        {value: "", label: "1:15 PM"},
        {value: "", label: "1:30 PM"},
        {value: "", label: "1:45 PM"},
        {value: "", label: "2:00 PM"},
        {value: "", label: "2:15 PM"},
        {value: "", label: "2:30 PM"},
        {value: "", label: "2:45 PM"},
        {value: "", label: "3:00 PM"},
        {value: "", label: "3:15 PM"},
        {value: "", label: "3:30 PM"},
        {value: "", label: "3:45 PM"},
        {value: "", label: "4:00 PM"},
        {value: "", label: "4:15 PM"},
        {value: "", label: "4:30 PM"},
        {value: "", label: "4:45 PM"},
        {value: "", label: "5:00 PM"},
        {value: "", label: "5:15 PM"},
        {value: "", label: "5:30 PM"},
        {value: "", label: "5:45 PM"},
        {value: "", label: "6:00 PM"},
        {value: "", label: "6:15 PM"},
        {value: "", label: "6:30 PM"},
        {value: "", label: "6:45 PM"},
        {value: "", label: "7:00 PM"},
        {value: "", label: "7:15 PM"},
        {value: "", label: "7:30 PM"},
        {value: "", label: "7:45 PM"},
        {value: "", label: "8:00 PM"},
        {value: "", label: "8:15 PM"},
        {value: "", label: "8:30 PM"},
        {value: "", label: "8:45 PM"},
        {value: "", label: "9:00 PM"},
        {value: "", label: "9:15 PM"},
        {value: "", label: "9:30 PM"},
        {value: "", label: "9:45 PM"},
        {value: "", label: "10:00 PM"},
        {value: "", label: "10:15 PM"},
        {value: "", label: "10:30 PM"},
        {value: "", label: "10:45 PM"},
        {value: "", label: "11:00 PM"},
        {value: "", label: "11:15 PM"},
        {value: "", label: "11:30 PM"},
        {value: "", label: "11:45 PM"},
        {value: "", label: "12:00 AM"},
        {value: "", label: "12:15 AM"},
        {value: "", label: "12:30 AM"},
        {value: "", label: "12:45 AM"},
        {value: "", label: "1:00 AM"},
        {value: "", label: "1:15 AM"},
        {value: "", label: "1:30 AM"},
        {value: "", label: "1:45 AM"},
        {value: "", label: "2:00 AM"},
        {value: "", label: "2:15 AM"},
        {value: "", label: "2:30 AM"},
        {value: "", label: "2:45 AM"},
        {value: "", label: "3:00 AM"},
        {value: "", label: "3:15 AM"},
        {value: "", label: "3:30 AM"},
        {value: "", label: "3:45 AM"},
        {value: "", label: "4:00 AM"},
        {value: "", label: "4:15 AM"},
        {value: "", label: "4:30 AM"},
        {value: "", label: "4:45 AM"},
        {value: "", label: "5:00 AM"},
        {value: "", label: "5:15 AM"},
        {value: "", label: "5:30 AM"},
        {value: "", label: "5:45 AM"}

    ];

    function handleSelect(data){
        setSelectedOptions(data);
    }

    return (

        <Select
            className='form-select form-select-md sm:mt-2 sm:mr-2 mb-3'
            aria-label='.form-select-lg example'
            options={timeList}
            placeholder="--Select Time--"
            value={selectedOptions}
            onChange={handleSelect}
            isSearchable={true}
            
        />


    );
}

export default DropdownTime;
