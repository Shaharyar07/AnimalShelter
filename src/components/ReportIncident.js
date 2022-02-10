import React, { useState } from "react";
import axios from "axios";
import report from "./images/report.jpeg";
import { Form, Button } from "react-bootstrap";

const ReportIncident = () => {
  const [incident_address, setincident_address] = useState("");
  const [incident_type, setincident_type] = useState("");
  const [reporter_contact, setreporter_contact] = useState("");
  const [show, setShow] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.post("http://localhost:4000/report", {
      incident_address: incident_address,
      incident_type: incident_type,
      reporter_contact: reporter_contact,
    });
    console.log("incident:", incident_address);
    setShow(true);
    document.getElementById("input").value = "";
  };

  return (
    <div>
      <section>
        <img
          src={report}
          alt=""
          id="adoptpic"
          className="adoptpic img-fluid w-100 "
        />

        <div className="formreport my-5 text-light container px-5 py-24 mx-auto flex">
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
          <h2 className="text-light text-lg mb-1 font-medium title-font">
            Report Incident
          </h2>
          <div className="lg:w-1/3 md:w-1/2  rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <div className="my-2  w-50 ">
              <Form.Control
                id="input"
                type="text"
                onChange={(e) => setincident_address(e.target.value)}
                value={incident_address}
                placeholder="Enter address of the incident: "
                className="my-2"
              />
              <Form.Control
                id="input"
                className="my-2"
                type="text"
                onChange={(e) => setincident_type(e.target.value)}
                value={incident_type}
                placeholder="Enter incident type: "
              />
              <Form.Control
                id="input"
                className="my-2"
                type="text"
                onChange={(e) => setreporter_contact(e.target.value)}
                value={reporter_contact}
                placeholder="Enter your reporter_contact"
              />
            </div>

            <Button
              variant="success"
              size="lg"
              className="report"
              onClick={handleSubmit}
            >
              Report
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReportIncident;
