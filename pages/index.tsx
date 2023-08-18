import Layout from "./components/Layout";
import Header from "./components/header";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { items } from "./items.json";
import { useState } from "react";

const styles = {
    itemP: 'itemP',
    caption: 'itemP'
};

export default function index() {
  const { bootstrap } = items;
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Layout>
      <Header username="Wei" description="A frontend developer"></Header>
      <div className="px-10">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {bootstrap.map((item) => (
            <Carousel.Item
              key={item.id}
              className={styles.itemP}
              interval={4000}
            >
              <img src={item.imageUrl} alt="slides" />
              <Carousel.Caption className={styles.caption}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <button className="btn btn-danger">Visit Docs</button>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </Layout>
  );
}
