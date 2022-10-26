import {
  Lucide,
  PreviewComponent,
  Preview,
  Source,
  Highlight,
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
import {ExemptBased, CenterBased} from "@/components/register-facility-type/ExemptCenter";


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

  let [test, setTest] = useState('');
function radioOnChange(){

setTest (<ExemptBased/>);
}

function radioOnChange1(){
  setTest (<CenterBased/>);
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



                    <button type="submit" className="btn btn-primary mt-5">
                      Submit
                    </button>

                    <button type="submit" className="btn btn-secondary ml-5">
                      Cancel
                    </button>


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
                <div className="items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto mb-2">PLEASE PROVIDE THE FOLLOWING INFORMATION</h2>
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
                      <input id="radio-switch-1" className="form-check-input" type="radio" name="vertical_radio_button" value="vertical-radio-home-base"/>
                      <label className="form-check-label" htmlFor="radio-switch-1"><b>HOME-BASED</b> (Licensed Family; Residential Certificate)</label>
                    </div>
                    <div className="form-check mt-2">
                      <input id="radio-switch-2" className="form-check-input" type="radio" name="vertical_radio_button" value="vertical-radio-exempt-home-base" />
                      <label className="form-check-label" htmlFor="radio-switch-2"><b>EXEMPT HOME-BASED</b> (DWS Approved, FFN in Child's Home; DWS Approved, FFN in Provider's Home; Exempt Home / Tribe)</label>
                    </div>
                    <div className="form-check mt-2">
                      <input id="radio-switch-3" className="form-check-input" type="radio" name="vertical_radio_button" value="vertical-radio-center-base" onChange={radioOnChange1}/>
                      <label className="form-check-label" htmlFor="radio-switch-3"><b>CENTER-BASED</b> (Center; Commercial Preschool; Hourly Center; Out of School Time Program)</label>
                    </div>
                    <div className="form-check mt-2 mb-3">
                      <input id="radio-switch-3" className="form-check-input" type="radio" name="vertical_radio_button" value="vertical-radio-exempt-center-base" onChange={radioOnChange} />
                      <label className="form-check-label" htmlFor="radio-switch-4"><b>EXEMPT CENTER-BASED </b> (Licensing Exempt Programs)</label>
                    </div>
                  </div>
          
               <div>
                <h1>{test}</h1>
               </div>
            
                </div>
              </>
            )}
          </PreviewComponent>

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
