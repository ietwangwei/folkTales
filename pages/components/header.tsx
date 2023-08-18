import Search from "./Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { User } from "@nextui-org/react";
import { useState } from "react";
import { type } from "os";

type props = {
  username: string;
  description: string;
};

export default function Header(props: props) {
  const [value, setValue] = useState("");
  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.keyCode === 13) {
      console.log(value);
    }
  };
  return (
    <div className="header">
      <div className="logo">Folktale</div>
      <div className="user">
        <Search
          style={{ width: "120px" }}
          className="header-search"
          placeholder="Search"
          isClearable
          startContent={
            <FontAwesomeIcon
              icon={faSearch}
              style={{ fontSize: 16, color: "#000", cursor: "pointer" }}
            />
          }
          onKeyDown={handleKeyDown}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setValue(e.currentTarget.value);
          }}
          onClear={() => {
            setValue("");
          }}
        ></Search>
        <User
          className="user"
          name={props.username}
          description={props.description}
          avatarProps={{
            size: "sm",
            src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
          }}
        />
      </div>
    </div>
  );
}
