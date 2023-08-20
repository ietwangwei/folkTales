import Search from "./Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Avatar, User } from "@nextui-org/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import { LOGIN } from "../apis/user";

type props = {
  username: string;
  description: string;
};

const LoginModal = ({ isOpen }: any) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const login = async () => {
    const queryData = {
      name,
      password
    };
    const res = await fetch(LOGIN, {
      method: 'post',
      body: JSON.stringify(queryData)
    });
    console.log(res);
  }
  return (
    <Modal isOpen={isOpen}>
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">Login</ModalHeader>
        <ModalBody>
          <Input
            type="email"
            label="name"
            variant="bordered"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="max-w-xs"
          />
          <Input
            type="password"
            label="Email"
            variant="bordered"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="max-w-xs"
          />
          <Button onClick={login}>Login</Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

const menus = [
  {
    label: "UserInfo",
    value: "UserInfo",
  },
  {
    label: "Manager",
    value: "Manager",
  },
  {
    label: "Settings",
    value: "Settings",
  },
];

export default function Header(props: props) {
  const [isOpen, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const router = useRouter();
  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.keyCode === 13) {
      console.log(value);
    }
  };
  const handleClick = () => {
    router.push("/");
  };
  return (
    <div className="h-16 flex items-center bg-[#131415] justify-between text-white px-20 text-[18px]">
      <div className="logo cursor-pointer" onClick={handleClick}>
        Folktale
      </div>
      <div className="user flex items-center justify-between">
        <Search
          style={{ width: "120px", color: "#000" }}
          className="header-search"
          placeholder="Search"
          isClearable
          startContent={
            <FontAwesomeIcon
              icon={faSearch}
              className="text-[16px] text-[#000] cursor-pointer"
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
        <LoginModal isOpen={isOpen} />
        <Dropdown>
          <DropdownTrigger>
            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            {isOpen ? (
              menus.map((menu) => {
                return (
                  <DropdownItem key={menu.value}>{menu.label}</DropdownItem>
                );
              })
            ) : (
              <DropdownItem key="login" onClick={() => setOpen(true)}>
                Login
              </DropdownItem>
            )}
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  );
}
