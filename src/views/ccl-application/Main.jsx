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
      <h1 className="text-lg text-white mr-auto"><b>CCL APPLICATION</b></h1>
        <h1 className="text-lg text-white mr-auto"><b>CHILD CARE LICENSING APPLICATION</b></h1>
        <p className="text-md text-white">Please allow at least two weeks for our program to process this application.</p>
        <p className="text-md text-white">You will receive an email to let you know the status of this application.</p>
        <p className="text-md text-white">Submitting this application does not guarantee its approval.</p>
        <br />
        <p className="text-md text-white">Boxes shaded blue are for required information.</p>
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

                <div className="flex flex-col sm:flex-row items-center p-5">
                  <h1 className="font-medium text-base mr-auto">
                    GENERAL INFORMATION
                  </h1>
                </div>

                <div className="p-5">
                  <Preview>
                    {/* BEGIN: Validation Form */}
                    <form className="validate-form" onSubmit={onSubmit}>
                      <div className="input-form flex flex-row">
                        <label htmlFor="validation-form-1"
                          className="form-label w-full flex flex-col sm:flex-row xs=6 md=8" >
                          <b> Name (name on the License/Certificate/Exemption/Approval) </b>
                        </label>
                        <label htmlFor="validation-form-1"
                          className="form-label w-full flex flex-col sm:flex-row xs=4 md=4" >
                          <b> dba Name (Home-Based only): </b>
                        </label>
                      </div>

                    
                       <div className="flex flex-col">
                        <div className="grid grid-cols-2">
                          <input
                            {...register("name")}
                            id="validation-form-1"
                            type="text"
                            name="name"
                            className={classnames({
                              "form-control": true,
                              "border-danger": errors.name,
                            },
                              "bg-sky-100"                      
                            )}
                            placeholder="Name"
                          />
                            </div>      
                            <span className="grid grid-cols-6 flex flex-col">         
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
                    
                      <div className="input-form mt-3">
                        <label
                          htmlFor="validation-form-2"
                          className="form-label w-full flex flex-col sm:flex-row"
                        >
                          <b> Email </b>
                        </label>
                        <input
                          {...register("email")}
                          id="validation-form-2"
                          type="email"
                          name="email"
                          className={classnames({
                            "form-control": true,
                            "border-danger": errors.email,
                          },
                            "bg-sky-100"
                          )}
                          placeholder="example@gmail.com"
                        />
                        {errors.email && (
                          <div className="text-danger mt-2">
                            {errors.email.message}
                          </div>
                        )}
                      </div>
                      <div className="input-form mt-3">
                        <label
                          htmlFor="validation-form-3"
                          className="form-label w-full flex flex-col sm:flex-row"
                        >
                          <b> Address where care will be provided: </b>
                        </label>
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
                              },
                                "bg-sky-100"
                              )}
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
                              },
                                "bg-sky-100"
                              )}
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
                              },
                                "bg-sky-100"
                              )}
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
                              },
                                "bg-sky-100"
                              )}
                              placeholder="Zip Code"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="input-form mt-3">
                        <label
                          htmlFor="validation-form-4"
                          className="form-label w-full flex flex-col sm:flex-row">
                          <b> Mailing Address: </b>
                        </label>
                      </div>

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
                            },
                              "bg-sky-100"
                            )}
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
                            },
                              "bg-sky-100"
                            )}
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
                            },
                              "bg-sky-100"
                            )}
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
                            },
                              "bg-sky-100"
                            )}
                            placeholder="Zip Code"
                          /></div>
                      </div>

                      <div className="input-form mt-3 grid grid-col-12">
                        <label
                          htmlFor="validation-form-5"
                          className="form-label w-full flex flex-col sm:flex-row "
                        >
                          <b> Requested capacity (# of children): </b>
                        </label>
                      </div>

                      <div className="grid grid-cols-12">
                        <input
                          {...register("capacity")}
                          id="validation-form-5"
                          type="text"
                          name="capacity"
                          className={classnames({
                            "form-control": true,
                            "border-danger": errors.url,
                          },
                            "bg-sky-100"
                          )}
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

                      <button type="submit" className="btn btn-primary mt-5">
                        Submit
                      </button>

                      <button type="submit" className="btn btn-secondary ml-5">
                        Cancel
                      </button>

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
