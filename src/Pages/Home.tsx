import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, Box } from "@mui/material";
import { ImportExport } from "@mui/icons-material";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import React from "react";

import { Carousel } from "react-bootstrap";
export default function Homepage() {
  const [userlist, setuserlist] = useState<any>([]);
  const navigate = useNavigate();
  const [datalodaing, setdatalodaing] = useState(true);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setuserlist([...res.data]);
        setdatalodaing(false);
        console.log("All ok", res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let shifter = (y: any) => {
    navigate(`/SingleProduct/${y}`);
  };

  return (
    <>
      <Box>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid ">
            <a className="navbar-brand text-light" href="#">
              EcoBazaar
            </a>
            <button
              className="navbar-toggler bg-light"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="true"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li className="nav-item">
                  <a
                    className="nav-link active text-light"
                    aria-current="page"
                    href=""
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="">
                    About
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle text-light"
                      href="dropdown-menu"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="true"
                  >
                    Category
                  </a>  
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item text-light bg-gray" href="">
                        Man
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item text-light" href="">
                        Woman
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item text-light" href="">
                      Jewelery
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link disabled text-light"
                    aria-disabled="false"
                  >
                    Contect
                  </a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  type="search"
                  className="form-control me-2 rounded-5"
                  placeholder="Search"
                  aria-label="Search"
                  style={{ width: 130, height: 40 }}
                />
                <Button variant="outlined">Search</Button>
              </form>
            </div>
          </div>
        </nav>
      </Box>

      <Carousel className="Slider">
      <Carousel.Item >
        <img
          className="d-block w-100"
          src="https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>      
      <div className="row card-div justify-content-center flex-wrap">
        {datalodaing ? (
          <h1 className="text-center text-primary">Loading...</h1>
        ) : (
          userlist.map((val: any, ind: any) => (
            <div
              className="card  col-8 col-sm-6 col-md-6 bg-secondary col-lg-6 m-3"
              style={{ width: 150, height: 175 }}
              key={ind}
            >
              <img
                src={val.image}
                className="card-img-top m-3 flex-wrap"
                alt=""
                style={{ width: 90 ,justifyContent: "center" }}
              />
              <div className="card-body rounded-2">
               <p className="text-center text-white mt-3">{val.title}</p>
                <button
                  className="c-btn mb-1"
                  color="primary"
                  onClick={() => {
                    shifter(val.id);
                  }}
                >
                  Next page
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}
