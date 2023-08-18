import Search from "./Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FormEventHandler, useState } from "react";

export default function Header() {
  const [value, setValue] = useState("", );
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
          className="header-search"
          isClearable
          startContent={
            <FontAwesomeIcon
              icon={faSearch}
              style={{ fontSize: 16, color: "#000", cursor: "pointer" }}
            />
          }
          onKeyDown={handleKeyDown}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setValue(e.currentTarget.value)
          }}
          onClear={() => {
            setValue('')
          }}
        ></Search>
      </div>
    </div>
  );
}
