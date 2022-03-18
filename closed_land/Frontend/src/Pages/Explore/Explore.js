import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
// import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./Explore.css";
import axios from "axios";
import Collection from "../Collection/Collection";
import Ethcall from "../../Components/CombNav/Ethcall";
import { FaEthereum } from "react-icons/fa";
import "animate.css";

const Explore = () => {
  let bannerData;
  let imageData;
  let nameData;
  let descData;
  let statsfloorData;
  let statscountData;
  let collectionsExample = [];

  const [data, setData] = useState([]);

  useEffect(() => {
    for (let i = 1; i < 7; i++) {
      axios.get(`http://10.5.0.4:4561/${i}`, options).then((res) => {
        //console.log(res.data);
        if (i === 1) {
          bannerData = res.data;
        } else if (i === 2) {
          imageData = res.data;
        } else if (i === 3) {
          nameData = res.data;
        } else if (i === 4) {
          descData = res.data;
        } else if (i === 5) {
          statsfloorData = res.data;
        } else if (i === 6) {
          statscountData = res.data;
        }
      });
    }
    collectionsExample = [
      {
        banner_image_url: bannerData[0],
        image_url: imageData[0],
        name: nameData[0],
        description: descData[0],
        stats: {
          floor_price: statsfloorData[0],
          count: statscountData[0],
        },
      },
    ];
    setData[collectionsExample];
  }, []);

  const options = {
    headers: {
      Accept: "application/json",
      "X-API-KEY": "e5d251b38832420abaf8fa88b085aafc",
    },
  };

  return (
    <div>
      {/* <Navbar></Navbar> */}
      <Ethcall />
      <div className="explore">
        <Row className="h1Row gx-0 animate__animated animate__fadeIn animate__delay-1s">
          <h1 className="buttonTitle">Explore Collections</h1>
        </Row>
        <Row className="gx-0 animate__animated animate__fadeIn animate__delay-2s">
          <Col className="px-0">
            <Button className="exploreButton">Trending</Button>
          </Col>
          <Col className="px-0">
            <Button className="exploreButton">24hrs</Button>
          </Col>
          <Col className="px-0">
            <Button className="exploreButton">7days</Button>
          </Col>
          <Col className="px-0">
            <Button className="exploreButton">Top</Button>
          </Col>
          <Col className="px-0">
            <Button className="exploreButton">New</Button>
          </Col>
        </Row>
        <Row className="exploreCardsRow gx-0">
          {collectionsExample.map((col, index) => {
            return (
              <Card
                className="exploreCards animate__animated animate__bounceIn animate__delay-2s"
                key={index}
              >
                <Card.Img variant="top" src={col.banner_image_url} />
                <img src={col.image_url} alt="" className="explorePFP" />
                <Card.Body>
                  <Card.Title>{col.name}</Card.Title>
                  <Card.Text>{col.description}</Card.Text>
                  <Card.Text id="explorePrices">
                    <p id="exploreFloorPrice">
                      <FaEthereum className="eth" />
                      {col.stats.floor_price}
                    </p>
                    <p id="exploreItems">{col.stats.count} items</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </Row>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Explore;
