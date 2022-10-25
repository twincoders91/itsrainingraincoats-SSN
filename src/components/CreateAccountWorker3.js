import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";

const CreateAccountWorker3 = React.forwardRef((props, ref) => {
  const { register, handleSubmit, watch } = useForm();
  const buttonRef = useRef();
  const watchAll = watch();

  const onSubmit = async (data) => {
    const url = "http://127.0.0.1:5001/profile/create";
    const body = {
      ...ref.current,
      tshirt_size: data.tshirt,
      shoe_size: data.shoe,
      diet: data.diet,
    };

    console.log(body);
    const res = await putNewWorker(url, "PUT", body);
    console.log(res);
    if (res.status === "ok") {
      props.setCurrentPage("worker4");
    }
  };

  const putNewWorker = async (url, method = "GET", body = null) => {
    const res = await fetch(url, {
      method: method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const message = res.json();

    return message;
  };

  useEffect(() => {
    if (watchAll.tshirt && watchAll.shoe && watchAll.diet) {
      buttonRef.current.removeAttribute("disabled", "");
      buttonRef.current.classList.add("button-active");
    } else {
      buttonRef.current.setAttribute("disabled", "");
      buttonRef.current.classList.remove("button-active");
    }
  }, [watchAll]);

  return (
    <form className="col" onSubmit={handleSubmit(onSubmit)}>
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
        T-Shirt size{" "}
        {!watchAll.tshirt && (
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
        {...register("tshirt", {
          required: true,
        })}
      >
        <option value="" selected disabled>
          - Select Size -
        </option>
        <option value="xs">XS</option>
        <option value="s">S</option>
        <option value="m">M</option>
        <option value="l">L</option>
        <option value="xl">XL</option>
        <option value="xxl">XXL</option>
      </select>
      <span className="createAccount-label createAccount-subtitle mb-1">
        Shoe size{" "}
        {!watchAll.shoe && (
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
        {...register("shoe", {
          required: true,
        })}
      >
        <option value="" selected disabled>
          - Select Size -
        </option>
        <option value="36">36</option>
        <option value="37">37</option>
        <option value="38">38</option>
        <option value="39">39</option>
        <option value="40">40</option>
        <option value="41">41</option>
        <option value="42">42</option>
        <option value="43">43</option>
        <option value="44">44</option>
        <option value="45">45</option>
      </select>
      <span className="createAccount-label createAccount-subtitle mb-1">
        Dietary requirement{" "}
        {!watchAll.diet && (
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
        {...register("diet", {
          required: true,
        })}
      >
        <option value="" selected disabled>
          - Select Diet -
        </option>
        <option value="none">None</option>
        <option value="vegetarian">Vegetarian</option>
        <option value="vegan">Vegan</option>
        <option value="kosher">Kosher</option>
        <option value="halal">Halal</option>
        <option value="no seafood">No Seafood</option>
        <option value="no nuts">No Nuts</option>
      </select>

      <button className="createAccount-button mt-2 mb-4" ref={buttonRef}>
        Create Account
      </button>
      <div className="row">
        <svg width="10px" height="10px" className="mr-2">
          <circle cx="5" cy="5" r="5" fill="rgb(var(--blue))" />
        </svg>
        <svg width="10px" height="10px">
          <circle cx="5" cy="5" r="5" fill="rgb(var(--blue))" />
        </svg>
        <svg width="10px" height="10px" className="ml-2">
          <circle cx="5" cy="5" r="5" fill="rgb(var(--blue))" />
        </svg>
      </div>
    </form>
  );
});

export default CreateAccountWorker3;
