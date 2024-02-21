import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';


function Menu() {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState("");

  const handleClick = (path) => {
    navigate(path);
    setActiveButton(path);
  };

  return (
    <div>
      <Button
        variant="contained"
        sx={{
          mr: 1
        }}
        onClick={() => handleClick("/")}
      >
        Main
      </Button>
      <Button
        variant="outlined"
        sx={{
          mr: 1,
          backgroundColor: activeButton === "/precall" ? "#D8D8D8" : "initial",
          color: activeButton === "/precall" ? "black" : "initial"
        }}
        onClick={() => handleClick("/precall")}
      >
        Pre Call Note
      </Button>
      <Button
        variant="outlined"
        sx={{
          mr: 1,
          backgroundColor: activeButton === "/call" ? "#D8D8D8" : "initial",
          color: activeButton === "/call" ? "black" : "initial"
        }}
        onClick={() => handleClick("/call")}
      >
        Call Script
      </Button>
      <Button
        variant="outlined"
        sx={{
          mr: 1,
          backgroundColor: activeButton === "/aftercall" ? "#D8D8D8" : "initial",
          color: activeButton === "/aftercall" ? "black" : "initial"
        }}
        onClick={() => handleClick("/aftercall")}
      >
        After Call
      </Button>
      <Button
        variant="outlined"
        sx={{
          mr: 1,
          backgroundColor: activeButton === "/email" ? "#D8D8D8" : "initial",
          color: activeButton === "/email" ? "black" : "initial"
        }}
        onClick={() => handleClick("/email")}
      >
        Email Follow up
      </Button>
      <Button
        variant="outlined"
        sx={{
          mr: 1,
          backgroundColor: activeButton === "/transfer" ? "#D8D8D8" : "initial",
          color: activeButton === "/transfer" ? "black" : "initial"
        }}
        onClick={() => handleClick("/transfer")}
      >
        Transfer
      </Button>
      <Button
        variant="outlined"
        sx={{
          backgroundColor: activeButton === "/utm" ? "#D8D8D8" : "initial",
          color: activeButton === "/utm" ? "black" : "initial"
        }}
        onClick={() => handleClick("/utm")}
      >
        UTM
      </Button>
    </div>
  );
}

export default Menu;
