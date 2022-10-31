import {
  Lucide,
  PreviewComponent,
  Preview,
  Source,
  Highlight,
  Dropdown,
  DropdownToggle,
} from "@/base-components";
import { useForm } from "react-hook-form";
import Toastify from "toastify-js";
import dom from "@left4code/tw-starter/dist/js/dom";
import classnames from "classnames";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import logoUrl from "@/assets/images/ccl-logo.png";
//import { useState } from "preact/hooks";
import { useState, useEffect } from "react";
import ExemptCenter from "../../components/register-exempt-center/Main";
import CenterBased from "../../components/register-center/Main";
import ExemptHome from "../../components/register-exempt-home/Main";
import HomeBased from "../../components/register-home/Main";
import DropdownTime from "../../components/register-dropdown-time/Main";


function Main() {
  const schema = yup
    .object({
      name: yup.string().required().min(2),
      email: yup.string().required().email(),
      password: yup.string().required().min(6),
      age: yup
        .number()
        .required()
        .test(
          "len",
          "age must be less than or equal to 3",
          (val) => val.toString().length <= 3
        ),
      url: yup.string().url(),
      comment: yup.string().required().min(10),
    })
    .required();

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const onSubmit = async (event) => {
    event.preventDefault();
    const result = await trigger();
    if (!result) {
      Toastify({
        node: dom("#failed-notification-content")
          .clone()
          .removeClass("hidden")[0],
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
      }).showToast();
    } else {
      Toastify({
        node: dom("#success-notification-content")
          .clone()
          .removeClass("hidden")[0],
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
      }).showToast();
    }
  };

  let [facilityType, setfacilityType] = useState("");

  function radioOnTest(event) {
    let facilityTypeOptions = event.target.value;

    if (facilityTypeOptions === "home-based") {
      setfacilityType(<HomeBased />)
    } if (facilityTypeOptions === "exempt-home-based") {
      setfacilityType(<ExemptHome />)
    } if (facilityTypeOptions === "center-based") {
      setfacilityType(<CenterBased />);
    } if (facilityTypeOptions === "exempt-center-based") {
      setfacilityType(<ExemptCenter />);
    }
  }


  function onClickTime() {
    <DropdownTime />
  }

  return (
    <>
      <div className="top-bar-boxed h-[70px] z-[51] relative border-b border-white/[0.08] mt-15 md:-mt-15 -mx-3 sm:-mx-8 px-3 sm:px-8 md:pt-0 mb-4" >
        <div className="w-72 p-2 rounded bg-white">
          <img
            alt="Icewall Tailwind HTML Admin Template"
            className="w-64"
            src={logoUrl}
          />
        </div>
      </div>

      <div className="intro-y items-center mt-4">
        <h1 className="text-lg text-white mr-auto"><b>CHILD CARE LICENSING APPLICATION</b></h1>
        <p className="text-md text-white"> Please allow at least two weeks for our program to process this application.<br />
          You will receive an email to let you know the status of this application.<br />
          Submitting this application does not guarantee its approval.</p>
      </div>

      <div className="mt-5 grid grid-cols-1">
        <div className="intro-y ">
          {/* BEGIN: Form Validation */}
          <PreviewComponent className="intro-y box">
            {({ toggle }) => (
              <>
                <div className="items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto mb-2">PURPOSE</h2>
                  <p className="mb-2">This is a formal request to process a new child care application.</p>
                  <div className="flex ml-5">
                    <div className="mr-12"> <input type="checkbox" /> This is a new application.</div>
                    <div className="mr-12"><input type="checkbox" /> This is a change of location. </div>
                    <div className="mr-12"><input type="checkbox" /> This is a change of ownership.</div>
                  </div>
                </div>
              </>
            )}
          </PreviewComponent>

          <PreviewComponent className="intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 mt-4">
                  <h1 className="font-medium text-base mr-auto">
                    GENERAL INFORMATION
                  </h1>
                </div>

                <div className="p-5">
                  <Preview>
                    {/* BEGIN: Validation Form */}
                    <form className="validate-form" onSubmit={onSubmit}>

                      <div className="input-form flex grid-cols-12">
                        <div className="sm:flex-row grid-cols-8 mr-12">
                          <label htmlFor="validation-form-1"
                            className="form-label w-full" >
                            <b> Name (name on the License/Certificate/Exemption/Approval) </b><br></br>
                            <span className="sm:ml-auto mt-1 sm:mt-0 text-xs text-slate-500" style={{ color: 'red' }}>
                              *Required
                            </span>
                          </label>
                        </div>
                        <div className="sm:flex-row grid-cols-4 ml-12">
                          <label htmlFor="validation-form-1"
                            className="form-label w-full" >
                            <b> dba Name (Home-Based only): </b>
                          </label>
                        </div>
                      </div>

                      <div className="flex grid-cols-12">
                        <div className="w-96 mr-4">
                          <input
                            {...register("name")}
                            id="validation-form-1"
                            type="text"
                            name="name"
                            className={classnames({
                              "form-control": true,
                              "border-danger": errors.name,
                            })}
                            placeholder="Name"
                          />
                        </div>
                        <div className="ml-16 w-64">
                          <span >
                            <input
                              {...register("dba")}
                              id="validation-form-1a"
                              type="text"
                              name="dba"
                              className={classnames({
                                "form-control": true,
                                "border-danger": errors.dba,
                              })}
                            />
                          </span>
                        </div>
                      </div>

                      <div className="input-form flex">
                        <div className="sm:flex-row mt-5 mr-12 w-96">
                          <label htmlFor="validation-form-1"
                            className="form-label w-full" >
                            <b> Email </b><br></br>
                            <span className="sm:ml-auto mt-1 sm:mt-0 text-xs text-slate-500" style={{ color: 'red' }}>
                              *Required
                            </span>
                          </label>
                        </div>
                        <div className="sm:flex-row mt-5 ml-12">
                          <label htmlFor="validation-form-1"
                            className="form-label w-full" >
                            <b> Phone </b><br></br>
                            <span className="sm:ml-auto mt-1 sm:mt-0 text-xs text-slate-500" style={{ color: 'red' }}>
                              *Required
                            </span>
                          </label>
                        </div>
                      </div>

                      <div className="flex grid-cols-12">
                        <div className="w-96 mr-4">
                          <input
                            {...register("email")}
                            id="validation-form-2"
                            type="email"
                            name="email"
                            className={classnames({
                              "form-control": true,
                              "border-danger": errors.email,
                            })}
                            placeholder="example@gmail.com"
                          />
                        </div>
                        <div className="ml-16 w-64">
                          <input
                            {...register("email")}
                            id="validation-form-2"
                            type="email"
                            name="email"
                            className={classnames({
                              "form-control": true,
                              "border-danger": errors.email,
                            },
                            )}
                            placeholder="(___)-___-____"
                          />
                        </div>
                      </div>

                      <div className="input-form flex">
                        <div className="sm:flex-row mt-5 mr-12 ">
                          <label htmlFor="validation-form-1"
                            className="form-label w-full" >
                            <b> Address where care will be provided: </b><br></br>
                            <span className="sm:ml-auto mt-1 sm:mt-0 text-xs text-slate-500 " style={{ color: 'red' }}>
                              *Required
                            </span>
                          </label>
                        </div></div>

                      <div className="flex gap-1">
                        <div className="grid grid-cols-1">
                          <input
                            {...register("address")}
                            id="validation-form-3"
                            type="password"
                            name="address"
                            className={classnames({
                              "form-control": true,
                              "border-danger": errors.password,
                            })}
                            placeholder="Street Address"
                          />
                        </div>
                        <div className="grid grid-cols-1">
                          <input
                            {...register("address2")}
                            id="validation-form-3"
                            type="password"
                            name="address2"
                            className={classnames({
                              "form-control": true,
                              "border-danger": errors.password,
                            })}
                            placeholder="Apt #, Suite #, etc.."
                          />
                        </div>
                        <div className="grid grid-cols-1">
                          <input
                            {...register("addressCity")}
                            id="validation-form-3"
                            type="password"
                            name="addressCity"
                            className={classnames({
                              "form-control": true,
                              "border-danger": errors.password,
                            })}
                            placeholder="City"
                          />
                        </div>
                        <div className="grid grid-cols-1">
                          <input
                            {...register("addressState")}
                            id="validation-form-3"
                            type="password"
                            name="addressState"
                            className={classnames({
                              "form-control": true,
                              "border-danger": errors.password,
                            })}
                            placeholder="State"
                          />
                        </div>
                        <div className="grid grid-cols-1">
                          <input
                            {...register("addressZip")}
                            id="validation-form-3"
                            type="password"
                            name="addressZip"
                            className={classnames({
                              "form-control": true,
                              "border-danger": errors.password,
                            })}
                            placeholder="Zip Code"
                          />
                        </div>
                      </div>

                      <div className="input-form flex">
                        <div className="sm:flex-row mt-5 mr-12 ">
                          <label htmlFor="validation-form-1"
                            className="form-label w-full" >
                            <b> Mailing Address: </b><br></br>
                            <span className="sm:ml-auto mt-1 sm:mt-0 text-xs text-slate-500 " style={{ color: 'red' }}>
                              *Required
                            </span>
                          </label>
                        </div></div>

                      <div className="gap-2 flex">
                        <div className="grid grid-cols-1" >
                          <input
                            {...register("mailingAddress")}
                            id="validation-form-"
                            type="number"
                            name="mailingAddress"
                            className={classnames({
                              "form-control": true,
                              "border-danger": errors.age,
                            })}
                            placeholder="Address"
                          />
                        </div>
                        <div className="grid grid-cols-1" >
                          <input
                            {...register("mailingAddress2")}
                            id="validation-form-4"
                            type="number"
                            name="mailingAddress2"
                            className={classnames({
                              "form-control": true,
                              "border-danger": errors.age,
                            })}
                            placeholder="Apt #, Suite #, etc..."
                          /></div>
                        <div className="grid grid-cols-1" >
                          <input
                            {...register("mailingCity")}
                            id="validation-form-4"
                            type="number"
                            name="mailingCity"
                            className={classnames({
                              "form-control": true,
                              "border-danger": errors.age,
                            })}
                            placeholder="City"
                          /></div>
                        <div className="grid grid-cols-1" >
                          <input
                            {...register("mailingState")}
                            id="validation-form-4"
                            type="number"
                            name="mailingState"
                            className={classnames({
                              "form-control": true,
                              "border-danger": errors.age,
                            })}
                            placeholder="State"
                          /></div>
                        <div className="grid grid-cols-1" >
                          <input
                            {...register("mailingZip")}
                            id="validation-form-4"
                            type="number"
                            name="mailingZip"
                            className={classnames({
                              "form-control": true,
                              "border-danger": errors.age,
                            })}
                            placeholder="Zip Code"
                          /></div>
                      </div>

                      <div className="input-form flex">
                        <div className="sm:flex-row mt-5 mr-12 ">
                          <label htmlFor="validation-form-1"
                            className="form-label w-full" >
                            <b> Requested capacity (# of children): </b><br></br>
                            <span className="sm:ml-auto mt-1 sm:mt-0 text-xs text-slate-500 " style={{ color: 'red' }}>
                              *Required
                            </span>
                          </label>
                        </div></div>

                      <div className="grid grid-cols-12">
                        <input
                          {...register("capacity")}
                          id="validation-form-5"
                          type="text"
                          name="capacity"
                          className={classnames({
                            "form-control": true,
                            "border-danger": errors.url,
                          })}
                        />
                        {errors.url && (
                          <div className="text-danger mt-2">
                            {errors.url.message}
                          </div>
                        )}
                      </div>

                      <p className="mt-5">For licenses and certificates, the maximum capacity will be determined by the facility total square footage.
                        You must follow your city ordinances for approved capacity.
                        If your city allows for less than the approved capacity, you must follow the stricter rule. </p>

                      <div className="input-form mt-3">
                        <label
                          htmlFor="validation-form-6"
                          className="form-label w-full flex flex-col sm:flex-row"
                        >
                          <b> Food Program Sponsor (if any): </b>
                        </label>
                        <input
                          {...register("comment")}
                          id="validation-form-6"
                          type="text"
                          name="sponsor"
                          className={classnames({
                            "form-control": true,
                            "border-danger": errors.url,
                          })}
                        />
                      </div>

                      <div className="mr-12 mt-3"> <input type="checkbox" className="mr-3" /><b>Check if you will be providing care as part of an American Indian tribe.</b></div>
                    </form>

                    <form className="validate-form" onSubmit={onSubmit}>
                    </form>

                  


                    {/* END: Validation Form */}
                  </Preview>
                  <Source>
                    <Highlight type="javascript">
                      {`
                      const schema = yup
                      .object({
                        name: yup.string().required().min(2),
                        email: yup.string().required().email(),
                        password: yup.string().required().min(6),
                        age: yup
                          .number()
                          .required()
                          .test(
                            "len",
                            "age must be less than or equal to 3",
                            (val) => val.toString().length <= 3
                          ),
                        url: yup.string().url(),
                        comment: yup.string().required().min(10),
                      })
                      .required();
                  
                    const {
                      register,
                      trigger,
                      formState: { errors },
                    } = useForm({
                      mode: "onChange",
                      resolver: yupResolver(schema),
                    });
                    const onSubmit = async (event) => {
                      event.preventDefault();
                      const result = await trigger();
                      if (!result) {
                        Toastify({
                          node: dom("#failed-notification-content")
                            .clone()
                            .removeClass("hidden")[0],
                          duration: 3000,
                          newWindow: true,
                          close: true,
                          gravity: "top",
                          position: "right",
                          stopOnFocus: true,
                        }).showToast();
                      } else {
                        Toastify({
                          node: dom("#success-notification-content")
                            .clone()
                            .removeClass("hidden")[0],
                          duration: 3000,
                          newWindow: true,
                          close: true,
                          gravity: "top",
                          position: "right",
                          stopOnFocus: true,
                        }).showToast();
                      }
                    };
                      `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>

          <PreviewComponent className="intro-y box mt-4">
            {({ toggle }) => (
              <>
                <div className="items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto mb-2">CONTACT PERSON</h2>
                  <p className="mb-2">Enter the contact details of the person responsible for financial information.</p>
                  <div className="flex">
                    <label className="w-1/3"><b>Name:</b></label>
                    <label className="mr-5"><b>Phone # where you can be reached:</b></label>
                    <label className="ml-12"><b>E-mail address:</b></label>
                  </div>
                  <div className="flex">
                    <div>
                      <input
                        {...register("contactName")}
                        id="validation-form-6"
                        type="text"
                        name="contactName"
                        className={classnames({
                          "form-control": true,
                          "border-danger": errors.url,
                        }, "w-80 mr-12")}
                      />
                    </div>

                    <div>
                      <input
                        {...register("contactPhone")}
                        id="validation-form-6"
                        type="text"
                        name="contactPhone"
                        className={classnames({
                          "form-control": true,
                          "border-danger": errors.url,
                        }, "w-48 ml-2 mr-12")}
                        placeholder="(___) ___ - ____"
                      />
                    </div>

                    <div>
                      <input
                        {...register("contactEmail")}
                        id="validation-form-6"
                        type="text"
                        name="contactEmail"
                        className={classnames({
                          "form-control": true,
                          "border-danger": errors.url,
                        }, "w-64 ml-12")}
                      />
                    </div>
                  </div>
                </div>
              </>
            )}
          </PreviewComponent>

          <PreviewComponent className="intro-y box mt-4 pb-4">
            {({ toggle }) => (
              <>
                <div className="items-center p-5">
                  <h2 className="font-medium text-base mr-auto mb-2">PLEASE PROVIDE THE FOLLOWING INFORMATION</h2>
                </div>
                <table className="ml-5 mr-5" style={{ background: "whitesmoke" }}>
                  <tr className="" style={{ background: "lightseagreen", color: "white" }}>
                    <th className="p-4" >Day</th>
                    <th className="p-4" >Start Time</th>
                    <th className="p-4" >End Time</th>
                    <th className="p-4" >Day</th>
                    <th className="p-4" >Start Time</th>
                    <th className="p-4" >End Time</th>
                  </tr>
                  <tr>
                    <td colSpan={3} className="border-b border-slate-200/60 dark:border-darkmode-400">Check the days and select the times you will provide child care:</td>
                    <td colSpan={3} className="border-b border-slate-200/60 dark:border-darkmode-400">Check any additional days and select any additional times you will provide child care
                      (for example, you will provide child care before school and then after school):</td>
                  </tr>
                  <tr className="border-b border-slate-200/60 dark:border-darkmode-400">
                    <td><input type="checkbox" className="" /><b className="ml-2">Monday</b></td>
                    <td><DropdownTime /></td>
                    <td><DropdownTime /></td>
                    <td><input type="checkbox" className="" /><b className="ml-2">Monday</b></td>
                    <td><DropdownTime /></td>
                    <td><DropdownTime /></td>
                  </tr>
                  <tr className="border-b border-slate-200/60 dark:border-darkmode-400">
                    <td><input type="checkbox" className="" /><b className="ml-2">Tuesday</b></td>
                    <td><DropdownTime /></td>
                    <td><DropdownTime /></td>
                    <td><input type="checkbox" className="" /><b className="ml-2">Tuesday</b></td>
                    <td><DropdownTime /></td>
                    <td><DropdownTime /></td>
                  </tr>
                  <tr className="border-b border-slate-200/60 dark:border-darkmode-400">
                    <td><input type="checkbox" className="" /><b className="ml-2">Wednesday</b></td>
                    <td><DropdownTime /></td>
                    <td><DropdownTime /></td>
                    <td><input type="checkbox" className="" /><b className="ml-2">Wednesday</b></td>
                    <td><DropdownTime /></td>
                    <td><DropdownTime /></td>
                  </tr>
                  <tr className="border-b border-slate-200/60 dark:border-darkmode-400">
                    <td><input type="checkbox" className="" /><b className="ml-2">Thursday</b></td>
                    <td><DropdownTime /></td>
                    <td><DropdownTime /></td>
                    <td><input type="checkbox" className="" /><b className="ml-2">Thursday</b></td>
                    <td><DropdownTime /></td>
                    <td><DropdownTime /></td>
                  </tr>
                  <tr className="border-b border-slate-200/60 dark:border-darkmode-400">
                    <td><input type="checkbox" className="" /><b className="ml-2">Friday</b></td>
                    <td><DropdownTime /></td>
                    <td><DropdownTime /></td>
                    <td><input type="checkbox" className="" /><b className="ml-2">Friday</b></td>
                    <td><DropdownTime /></td>
                    <td><DropdownTime /></td>
                  </tr>
                  <tr className="border-b border-slate-200/60 dark:border-darkmode-400">
                    <td><input type="checkbox" className="" /><b className="ml-2">Saturday</b></td>
                    <td><DropdownTime /></td>
                    <td><DropdownTime /></td>
                    <td><input type="checkbox" className="" /><b className="ml-2">Saturday</b></td>
                    <td><DropdownTime /></td>
                    <td><DropdownTime /></td>
                  </tr>
                  <tr className="border-b border-slate-200/60 dark:border-darkmode-400">
                    <td><input type="checkbox" className="" /><b className="ml-2">Sunday</b></td>
                    <td><DropdownTime /></td>
                    <td><DropdownTime /></td>
                    <td><input type="checkbox" className="" /><b className="ml-2">Sunday</b></td>
                    <td><DropdownTime /></td>
                    <td><DropdownTime /></td>
                  </tr>
                </table>
                <div className="ml-5 mt-3"><input type="checkbox" className="mr-1" />
                  <b>Check here if the days and times you provide child care are different each week.</b></div>
                <div className="mt-3 mr-10">
                  <label className="ml-5"><b>Additional information about when child care is provided: </b></label>
                  <textarea
                    {...register("comment")}
                    id="validation-form-6"
                    name="comment"
                    className={classnames({
                      "form-control": true,
                      "border-danger": errors.comment,
                    }, "ml-4")}
                    placeholder="Type your comments"
                  ></textarea>
                  <p className="ml-5">(2000 characters remaining)</p>
                  <p className="mt-3 ml-5">Please notify your licensor if these hours change.</p>
                </div>
              </>
            )}
          </PreviewComponent>

          <PreviewComponent className="intro-y box mt-4 pb-4">
            {({ toggle }) => (
              <>
                <div className="items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto mb-2">CHILD CARE SCHEDULE</h2>
                  <label><b>What ages of children will you accept?</b></label>
                </div>
                <div className="flex ml-5 mt-3">
                  <div className="mr-12"><input type="checkbox" className="rounded-full mr-1" />0-12 years</div>
                  <div className="mr-12"><input type="checkbox" className="rounded-full mr-1" />2-5 years</div>
                  <div className="mr-12"><input type="checkbox" className="rounded-full mr-1" />5 and older</div>
                  <div className="mr-12"><input type="checkbox" className="rounded-full mr-1" />13-18 years</div>
                  <div className="mr-12"><input type="checkbox" className="rounded-full mr-1" />0-18 years</div>
                  <div className="mr-12"><input type="checkbox" className="rounded-full mr-1" />Other</div>
                </div>
              </>
            )}
          </PreviewComponent>


          <PreviewComponent className="intro-y box mt-4 pb-4">
            {({ toggle }) => (
              <>
                <div className="items-center p-5 border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">COVERED INDIVIDUALS</h2>
                </div>
                <div className="flex ml-5">
                  <p className="pr-5">For each covered individual, we must receive a background screening form, fingerprints (when required),
                    and all required fees as part of this application.<br></br>
                    Covered individual means: providers; owners; members of the governing body; employees; caregivers,
                    volunteers, excluding parents of children enrolled in the program; individuals age 12 years and older
                    residing in a facility where child care is provided; and anyone who has unsupervised contact with any child in care.
                    This information will be used to screen covered individuals for criminal convictions and child abuse/neglect.</p>
                </div>
              </>
            )}
          </PreviewComponent>

          <PreviewComponent className="intro-y box mt-4 pb-4">
            {({ toggle }) => (
              <>
                <div className="items-center p-5 border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto mb-1">SELECT DESIRED FACILITY TYPE</h2>
                </div>
                <div className="ml-5 border-b-8 border-teal-600 mr-5 mb-2">
                  <div>
                    <div className="form-check mt-2">
                      <input id="home-based" className="form-check-input" type="radio" name="vertical_radio_button" value="home-based" onChange={radioOnTest} />
                      <label className="form-check-label" htmlFor="radio-switch-1"><b>HOME-BASED</b> (Licensed Family; Residential Certificate)</label>
                    </div>
                    <div className="form-check mt-2">
                      <input id="exempt-home-based" className="form-check-input" type="radio" name="vertical_radio_button" value="exempt-home-based" onChange={radioOnTest} />
                      <label className="form-check-label" htmlFor="radio-switch-2"><b>EXEMPT HOME-BASED</b> (DWS Approved, FFN in Child's Home; DWS Approved, FFN in Provider's Home; Exempt Home / Tribe)</label>
                    </div>
                    <div className="form-check mt-2">
                      <input id="center-based" className="form-check-input" type="radio" name="vertical_radio_button" value="center-based" onChange={radioOnTest} />
                      <label className="form-check-label" htmlFor="radio-switch-3"><b>CENTER-BASED</b> (Center; Commercial Preschool; Hourly Center; Out of School Time Program)</label>
                    </div>
                    <div className="form-check mt-2 mb-3">
                      <input id="exempt-center-based" className="form-check-input" type="radio" name="vertical_radio_button" value="exempt-center-based" onChange={radioOnTest} />
                      <label className="form-check-label" htmlFor="radio-switch-4"><b>EXEMPT CENTER-BASED </b> (Licensing Exempt Programs)</label>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  {facilityType}
                </div>
              </>
            )}
          </PreviewComponent>

          <PreviewComponent className="intro-y box mt-4 pb-4">
            {({ toggle }) => (
              <>
                <div className="items-center p-5 border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto mb-1">DOCUMENTS REQUIRED</h2>
                  <p className="mr-10">You can upload a copy of any document by clicking the "Select File" button. Uploaded documents will be
                    submitted with this application. Only documents in PDF format are accepted.</p>
                </div>
                <ul className="ml-10 mr-10">
                  <li><b style={{ color: 'teal' }} className="mr-2">{'\u2022'}</b>A copy of your current fire clearance or a copy of a document from the local fire
                    authority stating a fire clearance is not needed. (Contact your local fire authority for this.)</li>
                  <button type="submit" className="btn btn-primary mt-1 mb-3">Select File</button>
                  <li><b style={{ color: 'teal' }} className="mr-2">{'\u2022'} </b>A copy of your current business license or a copy of a receipt verifying application or a
                    copy of a document from a city/county employee stating a business license is not required. (Contact your city/county for this.)</li>
                  <button type="submit" className="btn btn-primary mt-1 mb-3">Select File</button>
                  <li><b style={{ color: 'teal' }} className="mr-2">{'\u2022'}</b>  copy of your current local health department kitchen inspection.
                    (Contact your local health department for this.</li>
                  <button type="submit" className="btn btn-primary mt-1">Select File</button>
                </ul>
                <p className="ml-5 mr-5 mb-3 mt-4">You can also email, mail, or hand deliver required documents.</p>
                <p className="ml-5 mr-10">You can submit required documentation at any time. However, your application will not be complete
                  until Child Care Licensing has received all required documents, background checks, and all required fees.
                  You have 6 months from the date of your application to submit all required documents and fees or your
                  application will be denied.</p>
              </>
            )}
          </PreviewComponent>

          <PreviewComponent className="intro-y box mt-4 pb-4">
            {({ toggle }) => (
              <>
                <div className="items-center p-5 border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">FEES</h2>
                  <div className="mt-2 mr-10 ml-5">
                    <ul>
                      <li><b style={{ color: 'teal' }} className="mr-2">{'\u2022'}</b> $62.00 License fee.</li>
                      <li><b style={{ color: 'teal' }} className="mr-2">{'\u2022'}</b> $20.00 Background Screening fee (1 form and fee per covered individual).</li>
                      <li><b style={{ color: 'teal' }} className="mr-2">{'\u2022'}</b> $33.25 Fingerprint fee (1 set of fingerprints and fee per covered individual
                        who is at least 18 years of age).</li>
                    </ul>
                  </div>
                </div>
                <p className="ml-5 mr-5 mb-3"><b>Credit/Debit</b> card payments can be made through our website.</p>
                <p className="ml-5 mr-10"><b>Checks</b> or <b>money orders</b> made payable to "Utah Department of Health" can be mailed to
                  PO Box 142003, Salt Lake City UT 84114-2003.</p>

              </>
            )}
          </PreviewComponent>

          <PreviewComponent className="intro-y box mt-4 pb-4">
            {({ toggle }) => (
              <>
                <h2 className="font-medium text-base mr-auto items-center p-5 border-slate-200/60 dark:border-darkmode-400">
                  INFORMATION SHARING ACKNOWLEDGEMENT</h2>
                <input className="ml-5 mr-2 mb-3" type="checkbox" />Acknowledged
                <p className="ml-5 mr-10">If you receive or plan to receive CCDF (Child Care and Development Funds) money from DWS,
                  Child Care Licensing will share your personal identifying information (Name, Address, Phone number, Date of birth,
                  Email Address, etc.) with the Department of Workforce Services(DWS). This information will be shared and used only for
                  verification purposes related to processing payments from DWS.</p>

              </>
            )}
          </PreviewComponent>

          <PreviewComponent className="intro-y box mt-4 pb-4">
            {({ toggle }) => (
              <>
                <h2 className="font-medium text-base mr-auto items-center p-5 border-slate-200/60 dark:border-darkmode-400">
                  CERTIFICATION OF UNDERSTANDING</h2>
                <p className="ml-5 mr-10">You must check the box to certify your understanding and agreement of the conditions below.</p>
                <p className="ml-5 mr-10 mt-2">If you receive or plan to receive CCDF (Child Care and Development Funds) money from DWS,
                  Child Care Licensing will share your personal identifying information (Name, Address, Phone number, Date of birth, Email
                  Address, etc.) with the Department of Workforce Services(DWS). This information will be shared and used only for verification
                  purposes related to processing payments from DWS.</p>
                <p className="ml-5 mr-10 mt-2">I agree, for the purpose of determining compliance with child care licensing rules
                  established by the Department of Health and Utah State licensing laws, to allow authorized Department of Health
                  representatives with proper identification to:</p>
                <div className="mt-2 mr-10 ml-10">
                  <ul>
                    <li><b style={{ color: 'teal' }} className="mr-2">{'\u2022'}</b>Enter and inspect any part of the home, property, and premises without a warrant at any time children are in care.</li>
                    <li><b style={{ color: 'teal' }} className="mr-2">{'\u2022'}</b>Review child care documents.</li>
                    <li><b style={{ color: 'teal' }} className="mr-2">{'\u2022'}</b>Interview caregivers, children, employees, household members and others as necessary.</li>
                  </ul>
                </div>
                <p className="ml-5 mr-10 mt-2"><b>I agree</b> to read and follow the child care rules and laws established by the State of Utah.</p>
                <p className="ml-5 mr-10 mt-2"><b>I authorize</b>  investigation of all statements contained herein and understand that
                  misrepresentation or omission of facts may result in denial of my application.</p>
                <p className="ml-5 mr-10 mt-2">I do hereby state that, based on my best information and belief, that neither myself,
                  any employee or volunteer in my child care program, or any individual residing in my home has ever been convicted of
                  a felony or a misdemeanor, had a supported finding of child abuse or neglect from the Department of Human Services,
                  had a substantiated finding from a juvenile court of abuse or neglect of a child, or is currently listed on the sex
                  offender registry.</p>
                <div className="ml-5 mr-10 mt-2">
                  <input className="mr-2" type="checkbox" /><b>I do hereby state that I understand the statements above and that
                    the information provided on this application is true and correct to the best of my knowledge.</b>
                </div>
                <h1 className="font-medium text-base mr-auto ml-5 mr-10 mt-2">
                  An application is considered complete when all required documents and fees are received by Child Care Licensing.</h1>
              </>
            )}
          </PreviewComponent>
          <div className="mb-5">
            <button type="submit" className="btn btn-primary btn-lg active mt-5 solTest" style={{color: 'teal', background: 'white'}}>
              Submit
            </button>

            <button type="submit" className="btn btn-secondary btn-lg active ml-5" style={{ color: 'gray', background: 'lightgray' }}>
              Cancel
            </button>
          </div>

          {/* END: Form Validation */}
          {/* BEGIN: Success Notification Content */}
          <div
            id="success-notification-content"
            className="toastify-content hidden flex"
          >
            <Lucide icon="CheckCircle" className="text-success" />
            <div className="ml-4 mr-4">
              <div className="font-medium">Registration success!</div>
              <div className="text-slate-500 mt-1">
                Please check your e-mail for further info!
              </div>
            </div>
          </div>
          {/* END: Success Notification Content */}
          {/* BEGIN: Failed Notification Content */}
          <div
            id="failed-notification-content"
            className="toastify-content hidden flex"
          >
            <Lucide icon="XCircle" className="text-danger" />
            <div className="ml-4 mr-4">
              <div className="font-medium">Registration failed!</div>
              <div className="text-slate-500 mt-1">
                Please check the fileld form.
              </div>
            </div>
          </div>
          {/* END: Failed Notification Content */}
        </div>
      </div>
    </>
  );
}

export default Main;
