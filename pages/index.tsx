import Header from "./components/header";
import { Carousel } from "react-bootstrap";
import { items } from "./items.json";
import { useState } from "react";
import { Image } from "@nextui-org/react";
import "bootstrap/dist/css/bootstrap.min.css";
import { type } from "os";

type AnnouceItem = {
  imgURL: string;
  text: string;
  time: string;
};

const styles = {
  itemP: "itemP",
  caption: "itemP",
};

const annouceItems = [
  {
    imgURL:
      "https://www.wuxiaworld.com/cdn-cgi/image/fit=scale-down,width=144,quality=75,format=auto/https://cdn.wuxiaworld.com/avatars/jaspaaar.jpg?ver=02f31023e348ff4240d086c413bc990dcdd62e35",
    text: "After Ten Millennia in Hell has launched!",
    time: "2 days ago",
  },
  {
    imgURL:
      "https://www.wuxiaworld.com/cdn-cgi/image/fit=scale-down,width=144,quality=75,format=auto/https://cdn.wuxiaworld.com/avatars/jaspaaar.jpg?ver=02f31023e348ff4240d086c413bc990dcdd62e35",
    text: "Rebirth of the 8th-Circle Mage is here!",
    time: "2 days ago",
  },
  {
    imgURL:
      "https://www.wuxiaworld.com/cdn-cgi/image/fit=scale-down,width=144,quality=75,format=auto/https://cdn.wuxiaworld.com/avatars/jaspaaar.jpg?ver=02f31023e348ff4240d086c413bc990dcdd62e35",
    text: "Rebirth of the 8th-Circle Mage is here!",
    time: "2 days ago",
  },
];

const AnnouceItems = ({ imgURL, text, time }: AnnouceItem) => {
  return (
    <div className="flex bg-[#ffffff14] rounded-lg px-4 py-2 mb-4 last:mb-0">
      <img
        src={imgURL}
        style={{ height: "48px", width: "48px" }}
        className="rounded-lg"
      ></img>
      <div className="text ml-3">
        <p className="mb-0">{text}</p>
        <p className="mb-0">{time}</p>
      </div>
    </div>
  );
};

type FolkBook = {
  title: string;
  imgURL: string;
  bookname: string;
  rate: string;
  description: string;
};

const FolkBook = (props: FolkBook) => {
  return (
    <div className="book">
      <div className="title">{props.title}</div>
      <img src={props.imgURL} alt="" />
      <div className="book-name">{props.bookname}</div>
      <div className="rate">{props.rate}</div>
      <div className="description">{props.description}</div>
    </div>
  );
};

export default function index() {
  const { bootstrap } = items;
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="home bg-[#202020] text-[#fff]">
      <Header username="Wei" description="A frontend developer"></Header>
      <div className="home-container px-20 py-16">
        <div className="section flex justify-between">
          <div className="topics w-3/5 h-[300px]">
            <Carousel activeIndex={index} onSelect={handleSelect}>
              {bootstrap.map((item) => (
                <Carousel.Item
                  key={item.id}
                  className={styles.itemP}
                  interval={4000}
                >
                  <img
                    src={item.imageUrl}
                    alt="slides"
                    style={{ height: "300px", width: "100%" }}
                    className="rounded-3xl"
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
          <div className="annouce w-2/5 h-[300px] pl-10">
            <div className="title text-[24px]">Announcements</div>
            <div className="flex flex-col mt-3">
              {annouceItems.map((item, index) => {
                return <AnnouceItems {...item} key={index} />;
              })}
            </div>
          </div>
        </div>
        <div className="section mt-10">
          <div className="title">
            <h1 className="text-[28px]">First, The Top Series</h1>
            <h2 className="text-[18px]">Let’s read top stories by genre!</h2>
          </div>
          <div className="books"></div>
        </div>
      </div>
    </div>
  );
}
