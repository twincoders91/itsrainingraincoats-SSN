import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";

import { countries } from "../datasets/countries";

const CreateAccountWorker2 = React.forwardRef((props, ref) => {
  const { register, handleSubmit, watch, getValues } = useForm();
  const buttonRef = useRef();
  const watchAll = watch();

  const onSubmit = async (data) => {
    ref.current = {
      account_id: props.userId,
      salutation: data.salutation,
      full_name: data.name,
      nationality: data.nationality,
      resident_status: data.residency,
      address: data.address,
      address_unitnumber: data.unitNumber,
      address_postcode: data.postcode,
      address_dormitory: data.dormitory,
      contact_number: data.contactNumber,
    };

    props.setCurrentPage("worker3");
  };

  useEffect(() => {
    if (
      watchAll.salutation &&
      watchAll.name &&
      watchAll.nationality &&
      watchAll.residency &&
      watchAll.address &&
      watchAll.postcode &&
      watchAll.contactNumber
    ) {
      buttonRef.current.removeAttribute("disabled", "");
      buttonRef.current.classList.add("button-active");
    } else {
      buttonRef.current.setAttribute("disabled", "");
      buttonRef.current.classList.remove("button-active");
    }
  }, [watchAll]);

  return (
    <form className="col" onClick={handleSubmit(onSubmit)}>
      <span className="createAccount-label createAccount-title mb-1 fw-700">
        Account Created
      </span>
      <span className="createAccount-label createAccount-subtitle fw-300 mb-2">
        Welcome to ItsRainningRaincoats! Your account has been created.
      </span>
      <span className="createAccount-label createAccount-subsubtitle mb-4">
        Step 2 of 3
      </span>
      <span className="createAccount-label createAccount-title mb-2 fw-700">
        Profile Details
      </span>
      <span className="createAccount-label createAccount-subtitle mb-1">
        Salutation{" "}
        {!watchAll.salutation && (
          <span
            className="createAccount-label fw-300 mb-2"
            style={{ color: "red", fontSize: "11px" }}
          >
            *required
          </span>
        )}
      </span>
      <select
        className="createAccount-dropdown mb-2"
        {...register("salutation", {
          required: true,
        })}
      >
        <option value="" selected disabled>
          - Select Salutation -
        </option>
        <option value="mr">Mr</option>
        <option value="ms">Ms</option>
        <option value="mrs">Mrs</option>
        <option value="dr">Dr</option>
      </select>
      <span className="createAccount-label createAccount-subtitle mb-1">
        Name (as per NRIC/FIN/Passport){" "}
        {!watchAll.name && (
          <span
            className="createAccount-label fw-300 mb-2"
            style={{ color: "red", fontSize: "11px" }}
          >
            *required
          </span>
        )}
      </span>
      <input
        className="mb-2"
        type="text"
        autoComplete="off"
        {...register("name", {
          required: true,
        })}
      />

      <span className="createAccount-label createAccount-subtitle mb-1">
        Nationality{" "}
        {!watchAll.nationality && (
          <span
            className="createAccount-label fw-300 mb-2"
            style={{ color: "red", fontSize: "11px" }}
          >
            *required
          </span>
        )}
      </span>
      <select
        className="createAccount-dropdown mb-2"
        {...register("nationality", {
          required: true,
        })}
      >
        <option value="" selected disabled>
          - Select Country -
        </option>
        {countries.map((element, index) => {
          return (
            <option value={element.toLowerCase()} key={index}>
              {element}
            </option>
          );
        })}
      </select>
      <span className="createAccount-label createAccount-subtitle mb-1">
        Resident Status{" "}
        {!watchAll.residency && (
          <span
            className="createAccount-label fw-300 mb-2"
            style={{ color: "red", fontSize: "11px" }}
          >
            *required
          </span>
        )}
      </span>
      <select
        className="createAccount-dropdown mb-2"
        {...register("residency", {
          required: true,
        })}
      >
        <option value="" selected disabled>
          - Select Status -
        </option>
        <option value="work permit">Work Permit</option>
        <option value="s pass">S Pass</option>
        <option value="employment pass">Employment Pass</option>
        <option value="permanent resident">Permanent Resident</option>
        <option value="citizen">Citizen</option>
      </select>
      <span className="createAccount-label createAccount-subtitle mb-1">
        NRIC/FIN/Passport No.
      </span>
      <input
        className="mb-2"
        type="text"
        placeholder="DISABLED"
        autoComplete="off"
        disabled
        {...register("nric", {})}
      />
      <span className="createAccount-label createAccount-subtitle mb-1">
        Address{" "}
        {!watchAll.address && (
          <span
            className="createAccount-label fw-300 mb-2"
            style={{ color: "red", fontSize: "11px" }}
          >
            *required
          </span>
        )}
      </span>
      <input
        className="mb-2"
        type="text"
        autoComplete="off"
        {...register("address", {
          required: true,
        })}
      />
      <div className="grid gc-2">
        <div className="col">
          <span className="createAccount-label createAccount-subtitle mb-1">
            Unit No.
          </span>
          <input
            className="mb-2"
            type="text"
            autoComplete="off"
            {...register("unitNumber", {})}
          />
        </div>
        <div className="col">
          <span className="createAccount-label createAccount-subtitle mb-1">
            Postcode{" "}
            {!watchAll.postcode && (
              <span
                className="createAccount-label fw-300 mb-2"
                style={{ color: "red", fontSize: "11px" }}
              >
                *required
              </span>
            )}
          </span>
          <input
            className="mb-2"
            type="number"
            autoComplete="off"
            {...register("postcode", {
              required: true,
            })}
          />
        </div>
      </div>
      <span className="createAccount-label createAccount-subtitle mb-1">
        Dormitory Name
      </span>
      <input
        className="mb-2"
        type="text"
        autoComplete="off"
        {...register("dormitory", {})}
      />
      <span className="createAccount-label createAccount-subtitle mb-1">
        Contact No.{" "}
        {!watchAll.contactNumber && (
          <span
            className="createAccount-label fw-300 mb-2"
            style={{ color: "red", fontSize: "11px" }}
          >
            *required
          </span>
        )}
      </span>
      <input
        className="mb-2"
        type="number"
        autoComplete="off"
        {...register("contactNumber", {
          required: true,
        })}
      />
      <button className="createAccount-button mt-2 mb-4" ref={buttonRef}>
        Next
      </button>
      <div className="row">
        <svg width="10px" height="10px" className="mr-2">
          <circle cx="5" cy="5" r="5" fill="rgb(var(--blue))" />
        </svg>
        <svg width="10px" height="10px">
          <circle cx="5" cy="5" r="5" fill="rgb(var(--blue))" />
        </svg>
        <svg width="10px" height="10px" className="ml-2">
          <circle cx="5" cy="5" r="5" fill="rgb(var(--grey1))" />
        </svg>
      </div>
    </form>
  );
});

export default CreateAccountWorker2;
