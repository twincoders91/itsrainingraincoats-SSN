import React, { useEffect, useRef, useState } from "react";

export default function CreateAccountWorker2(props) {
  const [tshirt, setTshirt] = useState("");
  const [shoe, setShoe] = useState("");
  const [diet, setDiet] = useState("");
  const buttonRef = useRef();

  const handleTshirtChange = (event) => {
    setTshirt(event.target.value);
  };

  const handleShoeChange = (event) => {
    setShoe(event.target.value);
  };

  const handleDietChange = (event) => {
    setDiet(event.target.value);
  };

  useEffect(() => {
    if (tshirt && shoe && diet) {
      buttonRef.current.removeAttribute("disabled", "");
      buttonRef.current.classList.add("button-active");
    } else {
      buttonRef.current.setAttribute("disabled", "");
      buttonRef.current.classList.remove("button-active");
    }
  }, [tshirt, shoe, diet]);

  return (
    <div className="col">
      <span className="createAccount-label createAccount-title mb-1 fw-700">
        Account Created
      </span>
      <span className="createAccount-subtitle mb-2">
        Welcome to ItsRainningRaincoats! Your account has been created.
      </span>
      <span className="createAccount-label createAccount-subsubtitle mb-4">
        Step 2 of 3
      </span>
      <span className="createAccount-label createAccount-title mb-2 fw-700">
        Profile Details
      </span>
      <span className="createAccount-label createAccount-subtitle mb-1">
        T-Shirt size
      </span>
      <select
        className="createAccount-dropdown mb-2"
        onChange={handleTshirtChange}
      >
        <option value="0" selected disabled>
          - Select Size -
        </option>
        <option>XS</option>
        <option>S</option>
        <option>M</option>
        <option>L</option>
        <option>XL</option>
        <option>XXL</option>
        <option>XXXL</option>
        <option>XXXXL</option>
        <option>XXXXXL</option>
        <option>XXXXXXL</option>
      </select>
      <span className="createAccount-label createAccount-subtitle mb-1">
        Shoe size
      </span>
      <select
        className="createAccount-dropdown mb-2"
        onChange={handleShoeChange}
      >
        <option value="0" selected disabled>
          - Select Size -
        </option>
        <option>36</option>
        <option>37</option>
        <option>38</option>
        <option>39</option>
        <option>40</option>
        <option>41</option>
        <option>42</option>
        <option>43</option>
        <option>44</option>
        <option>45</option>
      </select>
      <span className="createAccount-label createAccount-subtitle mb-1">
        Dietary requirement
      </span>
      <select
        className="createAccount-dropdown mb-2"
        onChange={handleDietChange}
      >
        <option value="0" selected disabled>
          None
        </option>
        <option>Vegan</option>
        <option>Kosher</option>
        <option>No Seafood</option>
        <option>No Vegetable</option>
        <option>No Food</option>
      </select>

      <button
        className="createAccount-button mt-2 mb-4"
        onClick={() => props.setCurrentPage("worker4")}
        ref={buttonRef}
      >
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
    </div>
  );
}
