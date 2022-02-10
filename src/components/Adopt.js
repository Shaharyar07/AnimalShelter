import { React, useState } from "react";
import adoptpic from "./images/cat.jpeg";
import { Form, Button, Modal, Table } from "react-bootstrap";

import axios from "axios";

const Adopt = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [category, setCategory] = useState("");
  const [breed, setBreed] = useState("");
  const [gender, setGender] = useState("");
  const [loading, setLoading] = useState(false);

  const [animal, setAnimal] = useState([]);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    const res = await axios.get("http://localhost:4000/fetchdata", {
      params: {
        category: category,
        breed: breed,
        gender: gender,
      },
    });
    console.log(res.data.adopt_query.rows);

    setAnimal(
      res.data.adopt_query.rows.map((data, index) => {
        return {
          collarId: data[0],
          nickName: data[1],
          age: data[2],
          category: data[11],
          breedName: data[9],
        };
      })
    );
    // for (let i = 0; i < rows.length; i++) {
    //   console.log(res.data.adopt_query.rows[i][1]);
    //   setAnimal([
    //     ...animal,
    //     {
    //       collarId: res.data.adopt_query.rows[i][0],
    //       nickName: res.data.adopt_query.rows[i][1],
    //       age: res.data.adopt_query.rows[i][2],
    //       category: res.data.adopt_query.rows[i][11],
    //       breedName: res.data.adopt_query.rows[i][9],
    //     },
    //   ]);
    // }

    setLoading(false);
    setShow(true);
  };
  if (loading) {
    return <h1>Loading....</h1>;
  }
  console.log("Data: ", animal);
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
            Adopt Animal
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
              onChange={(e) => setGender(e.target.value)}
              value={gender}
              placeholder="Enter Gender"
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
                <tbody>
                  <tr>
                    <td>CollarID:</td>
                    {animal.map((data, index) => {
                      return <td key={index}>{data.collarId}</td>;
                    })}
                  </tr>
                  <tr>
                    <td>NickName:</td>
                    {animal.map((data, index) => {
                      return <td key={index}>{data.nickName}</td>;
                    })}
                  </tr>
                  <tr>
                    <td>Age:</td>
                    {animal.map((data, index) => {
                      return <td key={index}>{data.age}</td>;
                    })}
                  </tr>
                  <tr>
                    <td>Breed Name:</td>
                    {animal.map((data, index) => {
                      return <td key={index}>{data.breedName}</td>;
                    })}
                  </tr>
                  <tr>
                    <td>category</td>
                    {animal.map((data, index) => {
                      return <td key={index}>{data.category}</td>;
                    })}
                  </tr>
                </tbody>
              </Table>
            </Modal.Body>
            <Modal.Footer></Modal.Footer>
          </Modal>
        </div>
      </div>
    </section>
  );
};

export default Adopt;
