import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import React from "react";
import Block from "./Block";

function Back() {
  const [show, setShow] = useState(false);
  const [initdata, setInitdata] = useState([]);
  let { history } = useSelector((res) => res);
  useEffect(() => {
    let alldata = JSON.parse(localStorage.getItem("allemidata")) || [];
    setInitdata(alldata);
  }, []);
  return !show ? (
    <Button variant="contained" color="success" onClick={() => setShow(true)}>
       Previous Data
    </Button>
  ) : (
    <div>
      <Button variant="contained" onClick={() => setShow(false)}>
        Hide Previous
      </Button>
      <div className="alldata">
        {!history.length
          ? initdata.map((data) => {
              return <Block history={data} />;
            })
          : history.map((data) => {
              return <Block history={data} />;
            })}
      </div>
    </div>
  );
}

export default Back;
