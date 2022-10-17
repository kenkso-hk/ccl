import {
  Lucide,
  Tippy,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownContent,
  DropdownItem,
  Litepicker,
  TinySlider,
} from "@/base-components";
import { faker as $f } from "@/utils";
import * as $_ from "lodash";
import classnames from "classnames";
import ReportLineChart from "@/components/report-line-chart/Main";
import ReportPieChart from "@/components/report-pie-chart/Main";
import ReportDonutChart from "@/components/report-donut-chart/Main";
import ReportDonutChart1 from "@/components/report-donut-chart-1/Main";
import SimpleLineChart1 from "@/components/simple-line-chart-1/Main";
import ReportMap from "@/components/report-map/Main";
import { useRef, useState } from "react";
import './mainTest.css';
// import 'bootstrap/dist/css/bootstrap.css';

function Main() {
  const [salesReportFilter, setSalesReportFilter] = useState();
  const importantNotesRef = useRef();
  const prevImportantNotes = () => {
    importantNotesRef.current.tns.goTo("prev");
  };
  const nextImportantNotes = () => {
    importantNotesRef.current.tns.goTo("next");
  };

  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      
        <div className="card rounded overflow-hidden shadow-lg ">

          <div className="tab-selection"></div>

          <div className="px-6 py-4 ">

            <div className="flex justify-center mt-2">
                <div className="font-bold text-xl text-gray-500 mb-2">Action Log Alerts</div>
            </div>
            
            <div className="flex flex-row  mt-6">
              <div className="self-center">
                <span className="text-6xl text-success" >67</span>
                <h6 className="text-gray-500">Total</h6>
              </div>
            </div>
           
          </div>

        </div>
      

      <div className="card rounded overflow-hidden shadow-lg">
        <div className="tab-selection"></div>
        <div className="px-6 py-4">
          <div className="flex justify-center mt-2">
            <div className="font-bold text-xl text-gray-500 mb-2">Work In Progress</div>
          </div>

          <div className="flex flex-row  mt-6">
              <div className="self-center">
                <span className="text-6xl text-success" >33</span>
                <h6 className="text-gray-500 ">Total</h6>
              </div>
            </div>
        </div>
               
      </div>

      <div className="card rounded overflow-hidden shadow-lg">
        <div className="tab-selection"></div>
        <div className="px-6 py-4">
          <div className="flex justify-center mt-2">
            <div className="font-bold text-xl text-gray-500 mb-2">Provider Requests Info</div>
          </div>

          <div className="flex flex-row mt-6">
            <div className="self-center">
              <span className="text-6xl text-success" >0</span>              
              <h6 className="text-gray-500">Total</h6>
            </div>
          </div>
        </div>
               
      </div>

      <div className="card rounded overflow-hidden shadow-lg">
        <div className="tab-selection"></div>
        <div className="px-6 py-4">
          <div className="flex  place-items-center place-content-center items-center content-center justify-items-center justify-center self-center mt-2">
            <p className="content-center justify-center self-center font-bold text-xl text-gray-500 mb-2">Expired or Expiring Licenses, Certificates, Exemptions And Approvals</p>
          </div>

          <div className="flex flex-row  mt-6">
              <div className="self-center">
                <span className="text-6xl text-success" >14</span>
                <h6 className="text-gray-500 ">Total</h6>
              </div>
              <div className="ml-12">
                <h5 className="mb-0  text-lg text-warning" >Expiring: 6</h5>
                <h5 className="mb-0  text-lg text-danger" >Expired: 8</h5>
            </div>
          </div>
        </div>
               
      </div>

      
      <div className="card rounded overflow-hidden shadow-lg">
        <div className="tab-selection"></div>
        <div className="px-6 py-4">
          <div className="flex justify-center mt-2">
            <div className="font-bold text-xl text-gray-500 mb-2">DWS Expiring Eligibility</div>
          </div>

          <div className="flex flex-row  mt-6">
              <div className="self-center">
                <span className="text-6xl text-success" >6</span>
                <h6 className="text-gray-500 ">Total</h6>
              </div>
            </div>
        </div>
               
      </div>
      
      <div className="card rounded overflow-hidden shadow-lg">
        <div className="tab-selection"></div>
        <div className="px-6 py-4">
          <div className="flex justify-center mt-2">
            <div className="font-bold text-xl text-gray-500 mb-2">Announced Inspections Needed</div>
          </div>

          <div className="flex flex-row  mt-6">
            <div className="self-center">
              <span className="text-6xl text-success" >0</span>
              <h6 className="text-gray-500 ">Total</h6>
            </div>
            <div className="ml-12">
              <h5 className="mb-0 text-lg text-danger" >High Priority: 0</h5>
              <h5 className="mb-0 text-lg text-warning" >Medium Priority: 0</h5>
              <h5 className="mb-0 text-lg text-dark" >Low Priority: 0</h5>
            </div>
          </div>
        </div>
               
      </div>

      <div className="card rounded overflow-hidden shadow-lg">
        <div className="tab-selection"></div>
        <div className="px-6 py-4">
          <div className="flex justify-center mt-2">
            <div className="font-bold text-xl text-gray-500 mb-2">Unannounced Inspections Needed</div>
          </div>

          <div className="flex flex-row  mt-6">
              <div className="self-center">
                <span className="text-6xl text-success" >0</span>
                <h6 className="text-gray-500 ">Total</h6>
              </div>
              <div className="ml-12">
              <h5 className="mb-0 text-lg text-danger" >High Priority: 0</h5>
              <h5 className="mb-0 text-lg text-warning" >Medium Priority: 0</h5>
              <h5 className="mb-0 text-lg text-dark" >Low Priority: 0</h5>
            </div>
            </div>
        </div>
               
      </div>
      
      <div className="card rounded overflow-hidden shadow-lg">
        <div className="tab-selection"></div>
        <div className="px-6 py-4">
          <div className="flex justify-center mt-2">
            <div className="font-bold text-xl text-gray-500 mb-2">Follow Up Inspections Needed</div>
          </div>

          <div className="flex flex-row  mt-6">
            <div className="self-center">
              <span className="text-6xl text-success" >3</span>
              <h6 className="text-gray-500 ">Total</h6>
            </div>
            <div className="ml-12">
            <h5 className="mb-0 text-lg text-danger" >High Priority: 0</h5>
              <h5 className="mb-0 text-lg text-warning" >Medium Priority: 2</h5>
              <h5 className="mb-0 text-lg text-dark" >Low Priority: 1</h5>
            </div>
          </div>
        </div>
               
      </div>
      
      <div className="card rounded overflow-hidden shadow-lg">
        <div className="tab-selection"></div>
        <div className="px-6 py-4">
          <div className="flex justify-center mt-2">
            <div className="font-bold text-xl text-gray-500 mb-2">Pending Provider Applications</div>
          </div>
          <div className="flex flex-row  mt-5">
            <div className="self-center">
              <span className="text-6xl text-success" >7</span>
              <h6 className="text-gray-500 ">Total</h6>
            </div>
            <div className="ml-12">
              <h5 className="mb-0 text-lg text-danger" >Center Based: 0</h5>
              <h5 className="mb-0 text-lg text-warning" >Home Based: 3</h5>
              <h5 className="mb-0 text-lg text-dark" >Exempt Home Based: 0</h5>
              <h5 className="mb-0 text-lg text-info" >Exempt Center Based: 4</h5>
              <h5 className="mb-0 text-lg text-success" >Unknown: 0</h5>
          </div>
          </div>
        </div>
               
      </div>

      <div className="card rounded overflow-hidden shadow-lg">
        <div className="tab-selection"></div>
        <div className="px-6 py-4">
          <div className="flex justify-center mt-2">
            <div className="font-bold text-xl text-gray-500 mb-2">Online Payment Notification</div>
          </div>

          <div className="flex flex-row  mt-6">
              <div className="self-center">
                <span className="text-6xl text-success" >1</span>
                <h6 className="text-gray-500 ">Total</h6>
              </div>
            </div>
        </div>
               
      </div>

      <div className="card rounded overflow-hidden shadow-lg">
        <div className="tab-selection"></div>
        <div className="px-6 py-4">
          <div className="flex justify-center mt-2">
            <div className="font-bold text-xl text-gray-500 mb-2">Complaint Intakes</div>
          </div>

          <div className="flex flex-row  mt-6">
              <div className="self-center">
                <span className="text-6xl text-success" >8</span>
                <h6 className="text-gray-500 ">Total</h6>
              </div>
            </div>
        </div>
               
      </div>

      <div className="card rounded overflow-hidden shadow-lg">
        <div className="tab-selection"></div>
        <div className="px-6 py-4">
          <div className="flex justify-center mt-2">
            <div className="font-bold text-xl text-gray-500 mb-2">Manager Approval Needed</div>
          </div>

          <div className="flex flex-row  mt-6">
              <div className="self-center">
                <span className="text-6xl text-success" >0</span>
                <h6 className="text-gray-500 ">Total</h6>
              </div>
            </div>
        </div>
               
      </div>

      <div className="card rounded overflow-hidden shadow-lg">
        <div className="tab-selection"></div>
        <div className="px-6 py-4">
          <div className="flex justify-center mt-2">
            <div className="font-bold text-xl text-gray-500 mb-2">Serious Noncompliance</div>
          </div>

          <div className="flex flex-row  mt-6">
              <div className="self-center">
                <span className="text-6xl text-success" >0</span>
                <h6 className="text-gray-500 ">Total</h6>
              </div>
            </div>
        </div>
               
      </div>

      <div className="card rounded overflow-hidden shadow-lg">
        <div className="tab-selection"></div>
        <div className="px-6 py-4">
          <div className="flex justify-center mt-2">
            <div className="font-bold text-xl text-gray-500 mb-2">Outstanding Balances</div>
          </div>

          <div className="flex flex-row  mt-6">
              <div className="self-center">
                <span className="text-6xl text-success" >36</span>
                <h6 className="text-gray-500 ">Total</h6>
              </div>
            </div>
        </div>
               
      </div>

      <div className="card rounded overflow-hidden shadow-lg">
        <div className="tab-selection"></div>
        <div className="px-6 py-4">
          <div className="flex justify-center mt-2">
            <div className="font-bold text-xl text-gray-500 mb-2">Assigned Checks</div>
          </div>

          <div className="flex flex-row  mt-6">
              <div className="self-center">
                <span className="text-6xl text-success" >0</span>
                <h6 className="text-gray-500 ">Total</h6>
              </div>
            </div>
        </div>
               
      </div>

      <div className="card rounded overflow-hidden shadow-lg">
        <div className="tab-selection"></div>
        <div className="px-6 py-4">
          <div className="flex justify-center mt-2">
            <div className="font-bold text-xl text-gray-500 mb-2">Temporary Cleared/In Process Checks</div>
          </div>

          <div className="flex flex-row  mt-6">
              <div className="self-center">
                <span className="text-6xl text-success" >17</span>
                <h6 className="text-gray-500 ">Total</h6>
              </div>
            </div>
        </div>
               
      </div>
    
      <div className="card rounded overflow-hidden shadow-lg">
        <div className="tab-selection"></div>
        <div className="px-6 py-4">
          <div className="flex justify-center mt-2">
            <div className="font-bold text-xl text-gray-500 mb-2">Background Screening Forms with Unknown Facilities</div>
          </div>

          <div className="flex flex-row  mt-6">
              <div className="self-center">
                <span className="text-6xl text-success" >0</span>
                <h6 className="text-gray-500 ">Total</h6>
              </div>
            </div>
        </div>
               
      </div>

      <div className="card rounded overflow-hidden shadow-lg">
        <div className="tab-selection"></div>
        <div className="px-6 py-4">
          <div className="flex justify-center mt-2">
            <div className="font-bold text-xl text-gray-500 mb-2">Newly Authorized Background Checks</div>
          </div>

          <div className="flex flex-row  mt-6">
              <div className="self-center">
                <span className="text-6xl text-success" >10</span>
                <h6 className="text-gray-500 ">Total</h6>
              </div>
            </div>
        </div>
               
      </div>

      <div className="card rounded overflow-hidden shadow-lg">
        <div className="tab-selection"></div>
        <div className="px-6 py-4">
          <div className="flex justify-center mt-2">
            <div className="font-bold text-xl text-gray-500 mb-2">Incomplete Screening Forms</div>
          </div>

          <div className="flex flex-row  mt-6">
              <div className="self-center">
                <span className="text-6xl text-success" >53</span>
                <h6 className="text-gray-500 ">Total</h6>
              </div>
            </div>
        </div>
               
      </div>

      <div className="card rounded overflow-hidden shadow-lg">
        <div className="tab-selection"></div>
        <div className="px-6 py-4">
          <div className="flex justify-center mt-2">
            <div className="font-bold text-xl text-gray-500 mb-2">Coming soon...</div>
          </div>

          <div className="flex flex-row  mt-6">
              <div className="self-center">
                <span className="text-6xl text-success" >0</span>
                <h6 className="text-gray-500 ">Total</h6>
              </div>
            </div>
        </div>
               
      </div>
      <div className="card rounded overflow-hidden shadow-lg">
        <div className="tab-selection"></div>
        <div className="px-6 py-4">
          <div className="flex justify-center mt-2">
            <div className="font-bold text-xl text-gray-500 mb-2">Coming soon...</div>
          </div>

          <div className="flex flex-row  mt-6">
              <div className="self-center">
                <span className="text-6xl text-success" >0</span>
                <h6 className="text-gray-500 ">Total</h6>
              </div>
            </div>
        </div>
               
      </div>     
      

    </div>
  );
}

export default Main;
