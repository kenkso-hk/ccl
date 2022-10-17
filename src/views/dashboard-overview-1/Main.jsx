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
    <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      
      
        
        <div class="card rounded overflow-hidden shadow-lg">
          <div className="tab-selection"></div>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Action Log Alerts</div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 py-4">
            <div className="align-self-center">
                <span className="display-6 text-success" ></span>
                <h6 className="text-gray-500">Total: 60</h6>
            </div>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-red-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">12</span>
            <span class="inline-block bg-yellow-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">9</span>
            <span class="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">6</span>
            <span class="inline-block bg-green-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">33</span>
          </div>
        </div>
      

      <div class="card rounded overflow-hidden shadow-lg">
        <div className="tab-selection"></div>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Work In Progress</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div class="px-6 py-4">
          <div className="align-self-center">
              <span className="display-6 text-success" ></span>
              <h6 className="text-gray-500">Total</h6>
          </div>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#summer</span>
        </div>
      </div>

      <div class="card rounded overflow-hidden shadow-lg">
        <div className="tab-selection"></div>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Provider Requests Info</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div class="px-6 py-4">
          <div className="align-self-center">
              <span className="display-6 text-success" ></span>
              <h6 className="text-gray-500">Total</h6>
          </div>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#fall</span>
        </div>
      </div>

      <div class="card rounded overflow-hidden shadow-lg">
        <div className="tab-selection"></div>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Expired or Expiring Licenses, Certificates, Exemptions And Approvals</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div class="px-6 py-4">
          <div className="align-self-center">
              <span className="display-6 text-success" ></span>
              <h6 className="text-gray-500">Total</h6>
          </div>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
        </div>
      </div>
      
      <div class="card rounded overflow-hidden shadow-lg">
        <div className="tab-selection"></div>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">DWS Expiring Eligibility</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div class="px-6 py-4">
          <div className="align-self-center">
              <span className="display-6 text-success" ></span>
              <h6 className="text-gray-500">Total</h6>
          </div>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#summer</span>
        </div>
      </div>

      <div class="card rounded overflow-hidden shadow-lg">
        <div className="tab-selection"></div>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Announced Inspections Needed</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div class="px-6 py-4">
          <div className="align-self-center">
              <span className="display-6 text-success" ></span>
              <h6 className="text-gray-500">Total</h6>
          </div>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#fall</span>
        </div>
      </div>

      <div class="card rounded overflow-hidden shadow-lg">
        <div className="tab-selection"></div>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Unannounced Inspections Needed</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div class="px-6 py-4">
          <div className="align-self-center">
              <span className="display-6 text-success" ></span>
              <h6 className="text-gray-500">Total</h6>
          </div>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
        </div>
      </div>
      
      <div class="card rounded overflow-hidden shadow-lg">
        <div className="tab-selection"></div>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Follow Up Inspections Needed</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div class="px-6 py-4">
          <div className="align-self-center">
              <span className="display-6 text-success" ></span>
              <h6 className="text-gray-500">Total</h6>
          </div>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#summer</span>
        </div>
      </div>

      <div class="card rounded overflow-hidden shadow-lg">
        <div className="tab-selection"></div>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Pending Provider Applications</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div class="px-6 py-4">
          <div className="align-self-center">
              <span className="display-6 text-success" ></span>
              <h6 className="text-gray-500">Total</h6>
          </div>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#fall</span>
        </div>
      </div>

      <div class="card rounded overflow-hidden shadow-lg">
        <div className="tab-selection"></div>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Online Payment Notification</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div class="px-6 py-4">
          <div className="align-self-center">
              <span className="display-6 text-success" ></span>
              <h6 className="text-gray-500">Total</h6>
          </div>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
        </div>
      </div>
      
      <div class="card rounded overflow-hidden shadow-lg">
        <div className="tab-selection"></div>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Complaint Intakes</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div class="px-6 py-4">
          <div className="align-self-center">
              <span className="display-6 text-success" ></span>
              <h6 className="text-gray-500">Total</h6>
          </div>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#summer</span>
        </div>
      </div>

      <div class="card rounded overflow-hidden shadow-lg">
        <div className="tab-selection"></div>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Manager Approval Needed</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div class="px-6 py-4">
          <div className="align-self-center">
              <span className="display-6 text-success" ></span>
              <h6 className="text-gray-500">Total</h6>
          </div>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#fall</span>
        </div>
      </div>

      <div class="card rounded overflow-hidden shadow-lg">
        <div className="tab-selection"></div>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Serious Noncompliance</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div class="px-6 py-4">
          <div className="align-self-center">
              <span className="display-6 text-success" ></span>
              <h6 className="text-gray-500">Total</h6>
          </div>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
        </div>
      </div>
      
      <div class="card rounded overflow-hidden shadow-lg">
        <div className="tab-selection"></div>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Outstanding Balances</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div class="px-6 py-4">
          <div className="align-self-center">
              <span className="display-6 text-success" ></span>
              <h6 className="text-gray-500">Total</h6>
          </div>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#summer</span>
        </div>
      </div>

      <div class="card rounded overflow-hidden shadow-lg">
        <div className="tab-selection"></div>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Assigned Checks</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div class="px-6 py-4">
          <div className="align-self-center">
              <span className="display-6 text-success" ></span>
              <h6 className="text-gray-500">Total</h6>
          </div>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#fall</span>
        </div>
      </div>

      <div class="card rounded overflow-hidden shadow-lg">
        <div className="tab-selection"></div>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Temporary Cleared/In Process Checks</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div class="px-6 py-4">
          <div className="align-self-center">
              <span className="display-6 text-success" ></span>
              <h6 className="text-gray-500">Total</h6>
          </div>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
        </div>
      </div>
      
      <div class="card rounded overflow-hidden shadow-lg">
        <div className="tab-selection"></div>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Background Screening Forms with Unknown Facilities</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div class="px-6 py-4">
          <div className="align-self-center">
              <span className="display-6 text-success" ></span>
              <h6 className="text-gray-500">Total</h6>
          </div>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#summer</span>
        </div>
      </div>

      <div class="card rounded overflow-hidden shadow-lg">
        <div className="tab-selection"></div>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Newly Authorized Background Checks</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div class="px-6 py-4">
          <div className="align-self-center">
              <span className="display-6 text-success" ></span>
              <h6 className="text-gray-500">Total</h6>
          </div>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#fall</span>
        </div>
      </div>

      <div class="card rounded overflow-hidden shadow-lg">
        <div className="tab-selection"></div>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Incomplete Screening Forms</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div class="px-6 py-4">
          <div className="align-self-center">
              <span className="display-6 text-success" ></span>
              <h6 className="text-gray-500">Total</h6>
          </div>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
        </div>
      </div>
      
      <div class="card rounded overflow-hidden shadow-lg">
        <div className="tab-selection"></div>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Coming soon...</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div class="px-6 py-4">
          <div className="align-self-center">
              <span className="display-6 text-success" ></span>
              <h6 className="text-gray-500">Total</h6>
          </div>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#summer</span>
        </div>
      </div>

      <div class="card rounded overflow-hidden shadow-lg">
        <div className="tab-selection"></div>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Coming soon...</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div class="px-6 py-4">
          <div className="align-self-center">
              <span className="display-6 text-success" ></span>
              <h6 className="text-gray-500">Total</h6>
          </div>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#fall</span>
        </div>
      </div>

    </div>
  );
}

export default Main;
