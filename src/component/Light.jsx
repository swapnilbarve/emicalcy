import React, { useState } from "react";
import { updateData } from "../reducer.jsx";
import { useDispatch } from "react-redux";
import {
  FormControl,
  TextField,
  Select,
  InputLabel,
  MenuItem,
  Button,
} from "@mui/material";
function Light() {
  const [userdata, setUserdata] = useState({
    amount: "",
    rate: "",
    tenure: "3",
  });
  const { amount, rate, tenure } = userdata;

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserdata({ ...userdata, [name]: value });
  };

  const handleClick = () => {
    dispatch(updateData(userdata));
  };

  return (
    <FormControl style={{ width: "400px", marginBottom: "50px" }}>
      <FormControl>
        <TextField
          fullWidth
          label="Amount"
          id="fullWidth"
          style={{ padding: "-10px"}}
          value={amount}
          onChange={handleChange}
          name="amount"
        />
      </FormControl>
      <FormControl
        fullWidth
        style={{ marginTop: "10px", marginBottom: "10px" }}
      >
        <InputLabel id="demo-simple-select-label">Months</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={tenure}
          label="Months"
          name="tenure"
          onChange={handleChange}
        >
          <MenuItem value="3">3 Months</MenuItem>
          <MenuItem value="6">6 Months</MenuItem>
          <MenuItem value="9">9 Months</MenuItem>
          <MenuItem value="12">12 Months</MenuItem>
          <MenuItem value="18">18 Months</MenuItem>
          <MenuItem value="24">24 Months</MenuItem>
          <MenuItem value="24">30 Months</MenuItem>
          <MenuItem value="24">36 Months</MenuItem>
          <MenuItem value="24">42 Months</MenuItem>
          <MenuItem value="24">48 Months</MenuItem>
         
        </Select>
      </FormControl>
      <FormControl>
        <TextField
          fullWidth
          label="Rates%(p.a)"
          id="fullWidth"
          value={rate}
          onChange={handleChange}
          name="rate"
        />
      </FormControl>
      <Button
        variant="contained"
        disableElevation
        style={{ marginTop: "10px" }}
        onClick={handleClick}
      >
        SUBMIT
      </Button>
    </FormControl>
  );
}

export default Light;
