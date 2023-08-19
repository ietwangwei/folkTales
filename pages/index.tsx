import Header from "./components/header";
import { Carousel } from "react-bootstrap";
import { items } from "./items.json";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

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
  id: number;
  title: string;
  imgURL: string;
  bookname: string;
  rate: number;
  description: string;
};

const book: FolkBook = {
  id: 0,
  title: "Sports",
  imgURL:
    "https://www.wuxiaworld.com/cdn-cgi/image/fit=scale-down,quality=75,format=auto/https://cdn.wuxiaworld.com/images/covers/so.jpg?ver=d7ad422d2f029cc2401cb4f0822af3d2616b804d",
  bookname: "踏星",
  rate: 80,
  description:
    "Author's Synopsis: A blade and a corpse on the ground. When humans first stepped foot on Neptune in the year 2200, they unlocked a vast and boundless universe ruled by different families, filled with magnificent battle techniques and ten arbiters who controlled it all!",
};

const fillLength = 8;
let i = 0;
function genreBooks(len: number, books: FolkBook[][]) {
  var dist: FolkBook[] = [];
  while (i < len) {
    book.id = i;
    dist.push(book);
    i++;
  }
  len += len;
  len = Math.min(len, fillLength);
  books.push(dist);
  if (i < fillLength) {
    return genreBooks(len, books);
  }
  return books;
}

const books = genreBooks(4, []);
console.log(books);

const FolkBook = (props: FolkBook) => {
  return (
    <div className="book flex w-1/4 h-full flex-col items-center bg-slate-300 rounded-md p-4 text-[#000] cursor-pointer">
      <div className="title text-xl">{props.title}</div>
      <img src={props.imgURL} alt="" style = { { height: "100px", width: "80px", marginTop: '12px' } } />
      <div className="book-name mt-1">{props.bookname}</div>
      <div className="rate mt-1">{props.rate}%</div>
      <p className="description text-ellipsis overflow-hidden text-sm">{props.description}</p>
    </div>
  );
};

export default function index() {
  const { bootstrap } = items;
  const [index, setIndex] = useState(0);
  const [bookIndex, setBookIndex] = useState(0);
  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };
  const handleBookSelect = (index: number) => {
    setBookIndex(index);
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
        <div className="section mt-12">
          <div className="title">
            <h1 className="text-[28px]">First, The Top Series</h1>
            <h2 className="text-[18px]">Let’s read top stories by genre!</h2>
          </div>
          <div className="books mt-6 h-[400px]">
            <Carousel activeIndex={bookIndex} onSelect={handleBookSelect} pause="hover" prevIcon={<>test</>}>
              {books.map((item: FolkBook[], index: number) => {
                return (
                  <Carousel.Item key={index}>
                    <div className="flex h-[320px] space-x-4">
                      {item.map((book: FolkBook) => {
                        return <FolkBook {...book} />;
                      })}
                    </div>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}
