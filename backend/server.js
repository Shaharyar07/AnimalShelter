const express = require("express");
const cors = require("cors");
const oracledb = require("oracledb");
var bodyParser = require("body-parser");
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
oracledb.outFormat = oracledb.ARRAY;

app.get("/fetchdata", async (req, res) => {
  let connection;

  try {
    connection = await oracledb.getConnection({
      user: "animal",
      password: "animal",
      connectionString: "localhost:1521/CDB1",
    });

    console.log("Successfully connected to Oracle Database");
    console.log("breed", req.query.breed, req.query.category, req.query.gender);

    const adopt_query = await connection.execute(
      `Select * from animal Inner join category on (category.category_id=animal.category_id) Inner join breed on (animal.breed_id=breed.breed_id) Inner join gender on (gender.gender_id=animal.gender_id) where category.category_name= '${req.query.category}' and
    breed_name= '${req.query.breed}' and gender.gender = '${req.query.gender}'`
    );
    console.log("Adopt: ", adopt_query);
    res.send({ adopt_query });
  } catch (err) {
    console.error(err);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
});
app.post("/drop", async (req, res) => {
  let connection,
    success = false;

  try {
    connection = await oracledb.getConnection({
      user: "animal",
      password: "animal",
      connectionString: "localhost:1521/CDB1",
    });

    console.log("Successfully connected to Oracle Database");

    let drop_query = await connection.execute(
      `INSERT INTO Person (first_name,last_name,address,email,mobile_number,cnic) VALUES(:first_name, :last_name, :address, :email, :mobile_number, :cnic)`,
      [
        req.body.first_name,
        req.body.last_name,
        req.body.address,
        req.body.email,
        req.body.mobile_number,
        req.body.cnic,
      ],
      { autoCommit: true }
    );
    console.log("Drop Person: ", drop_query);
    drop_query = await connection.execute(
      `INSERT INTO DROPANIMAL (cnic,dropping_reason,category) VALUES(:cnic,:dropping_reason,:category)`,
      [req.body.cnic, req.body.dropping_reason, req.body.category],
      { autoCommit: true }
    );
    console.log("Drop: ", drop_query);

    success = true;
    res.send({ success, drop_query });
  } catch (err) {
    console.error(err);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
});
app.post("/donate", async (req, res) => {
  let connection,
    success = false;

  try {
    connection = await oracledb.getConnection({
      user: "animal",
      password: "animal",
      connectionString: "localhost:1521/CDB1",
    });

    console.log("Successfully connected to Oracle Database");

    let donate_query = await connection.execute(
      `INSERT INTO Person (first_name,last_name,address,email,mobile_number,cnic) VALUES(:first_name, :last_name, :address, :email, :mobile_number, :cnic)`,
      [
        req.body.first_name,
        req.body.last_name,
        req.body.address,
        req.body.email,
        req.body.mobile_number,
        req.body.cnic,
      ],
      { autoCommit: true }
    );
    console.log("Donate: ", donate_query);
    donate_query = await connection.execute(
      `INSERT INTO DONATE (cnic,donation_id,amount) VALUES(:cnic,:donation_id,:amount)`,
      [req.body.cnic, req.body.donation_id, req.body.amount],
      { autoCommit: true }
    );
    console.log("Donation: ", donate_query);

    success = true;
    res.send({ success, donate_query });
  } catch (err) {
    console.error(err);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
});
app.post("/report", async (req, res) => {
  let connection;

  try {
    connection = await oracledb.getConnection({
      user: "animal",
      password: "animal",
      connectionString: "localhost:1521/CDB1",
    });

    console.log("Successfully connected to Oracle Database");

    const report_query = await connection.execute(
      `INSERT INTO INCIDENT (incident_type,incident_address,reporter_contact) VALUES(:incident_type,:incident_address,:reporter_contact)`,
      [
        req.body.incident_type,
        req.body.incident_address,
        req.body.reporter_contact,
      ],
      { autoCommit: true }
    );
    console.log("Report: ", report_query);
    res.send({ report_query });
  } catch (err) {
    console.error(err);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
});
app.get("/find", async (req, res) => {
  let connection;

  try {
    connection = await oracledb.getConnection({
      user: "animal",
      password: "animal",
      connectionString: "localhost:1521/CDB1",
    });

    console.log("Successfully connected to Oracle Database /Find");
    console.log(req.query.collarid, req.query.category);
    const find_query = await connection.execute(
      `Select * from animal
Inner join breed on (animal.breed_id=breed.breed_id)
Inner join category on (animal.category_id=category.category_id)
Where animal.collar_id=${req.query.collarid} and category.category_name='${req.query.category}'`
    );
    console.log("Test: ", find_query);
    res.send({ find_query });
  } catch (err) {
    console.error(err);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
});

app.listen(4000, () => {
  console.log("Running on port  4000");
});
