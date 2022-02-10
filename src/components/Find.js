import { React, useState } from "react";
import adoptpic from "./images/cat2.jpeg";
import { Form, Button, Modal, Table } from "react-bootstrap";

const Find = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [category, setCategory] = useState("");
  const [breed, setBreed] = useState("");
  const [collarId, setcollarId] = useState("");

  const [found, setFound] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("HandleSumit");
    console.log(category, collarId);

    const data = await fetch(
      `http://localhost:4000/find?collarid=${collarId}&category=${category}&breed=${breed}`
    );
    const response = await data.json();
    console.log(response.find_query.rows);
    if (response.find_query.rows.length > 0) {
      setFound(true);
    }
    setShow(true);

    // setAnimal(
    //   res.data.adopt_query.rows.map((data, index) => {
    //     return {
    //       collarId: data[0],
    //       nickName: data[1],
    //       age: data[2],
    //       category: data[11],
    //       breedName: data[9],
    //     };
    //   })
    // );
  };

  return (
    <section>
      <img
        src={adoptpic}
        alt=""
        id="adoptpic"
        className="adoptpic img-fluid w-100 "
      />
      <div className="form container px-5 py-24 mx-auto flex">
        <div className="lg:w-1/3 md:w-1/2  rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <h2 className="text-light text-lg mb-1 font-medium title-font">
            Find your Animal
          </h2>
          <div className="my-2  w-50 ">
            <Form.Control
              type="text"
              onChange={(e) => setCategory(e.target.value)}
              value={category}
              placeholder="Enter Category"
              className="my-2"
            />
            <Form.Control
              className="my-2"
              type="text"
              onChange={(e) => setBreed(e.target.value)}
              value={breed}
              placeholder="Enter Breed"
            />
            <Form.Control
              className="my-2"
              type="text"
              onChange={(e) => setcollarId(e.target.value)}
              value={collarId}
              placeholder="Enter CollarID"
            />
          </div>

          <Button
            variant="success"
            size="lg"
            className="ms-5 search"
            onClick={handleSubmit}
          >
            Search
          </Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Data Available</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Table striped bordered hover>
                <thead>
                  {found ? (
                    <h1>Your Animal has been found by one of our rescuer!!!</h1>
                  ) : (
                    <h1>Not found</h1>
                  )}
                </thead>
              </Table>
            </Modal.Body>
            <Modal.Footer></Modal.Footer>
          </Modal>
        </div>
      </div>
    </section>
  );
};

export default Find;
