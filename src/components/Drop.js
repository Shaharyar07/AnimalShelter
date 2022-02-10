import React, { useState } from "react";
import droppic from "./images/drop.jpeg";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
const Drop = () => {
  const [first_name, setfirst_name] = useState("");
  const [last_name, setlast_name] = useState("");
  const [address, setaddress] = useState("");
  const [mobile_number, setmobile_number] = useState("");
  const [email, setemail] = useState("");
  const [cnic, setcnic] = useState("");
  const [category, setcategory] = useState("");
  const [dropping_reason, setdropping_reason] = useState("");
  const [show, setShow] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:4000/drop", {
      first_name: first_name,
      last_name: last_name,
      address: address,
      mobile_number: mobile_number,
      cnic: cnic,
      email: email,
      category: category,
      dropping_reason: dropping_reason,
    });
    console.log("data:", first_name);
    setShow(true);
    document.getElementById("input").value = "";
  };
  return (
    <section className="papa">
      <img
        src={droppic}
        alt=""
        id="droppic"
        className="droppic img-fluid w-100 "
      />
      <div className="formdrop  container px-5 py-24 mx-auto flex" id="hello">
        <div
          id="hehe"
          className="lg:w-1/3 md:w-1/2   rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md"
        >
          {show && (
            <div
              className="alert alert-success alert-dismissible fade show"
              role="alert"
            >
              <strong>Data has been added successfully</strong>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              ></button>
            </div>
          )}
          <h2 className="text-light ms-5 text-lg mb-1 font-medium title-font">
            Drop Animal
          </h2>
          <div className="  my-2">
            <Form.Control
              id="input"
              type="text"
              onChange={(e) => setfirst_name(e.target.value)}
              value={first_name}
              placeholder="Enter First name: "
              className="my-2"
            />
            <Form.Control
              id="input"
              type="text"
              onChange={(e) => setlast_name(e.target.value)}
              value={last_name}
              placeholder="Enter Last name: "
              className="my-2"
            />
            <Form.Control
              id="input"
              type="text"
              onChange={(e) => setaddress(e.target.value)}
              value={address}
              placeholder="Enter address: "
              className="my-2"
            />
            <Form.Control
              id="input"
              type="text"
              onChange={(e) => setmobile_number(e.target.value)}
              value={mobile_number}
              placeholder="Enter mobile_number"
              className="my-2"
            />
            <Form.Control
              id="input"
              type="text"
              onChange={(e) => setcnic(e.target.value)}
              value={cnic}
              placeholder="Enter your cnic number"
              className="my-2"
            />
            <Form.Control
              id="input"
              type="text"
              onChange={(e) => setemail(e.target.value)}
              value={email}
              placeholder="Enteremailr"
              className="my-2"
            />
            <Form.Control
              id="input"
              type="text"
              onChange={(e) => setcategory(e.target.value)}
              value={category}
              placeholder="Enter category of the animal: "
              className="my-2"
            />
            <Form.Control
              id="input"
              type="text"
              onChange={(e) => setdropping_reason(e.target.value)}
              value={dropping_reason}
              placeholder="Enter dropping_reason of the animal: "
              className="my-2"
            />
          </div>

          <Button
            variant="success fw-bold"
            onClick={handleSubmit}
            className="drop"
          >
            Drop Animal
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Drop;
