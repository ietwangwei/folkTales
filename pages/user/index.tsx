// app/page.tsx
import { useEffect, useState } from "react";
import { GET_USERS } from "../apis/user";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

const heads = [
  {
    label: "name",
  },
  {
    label: "desc",
  },
  {
    label: "role",
  },
];


type User = {
  name: string;
  description: string;
  role: number
};

export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(GET_USERS);
      const result = await response.json();
      setData(result);
    };

    fetchData().catch((e) => {
      // handle the error as needed
      console.error("An error occurred while fetching the data: ", e);
    });
  }, []);

  return (
    <main>
      <Table aria-label="Example table with dynamic content">
        <TableHeader>
          {heads.map((column) => (
            <TableColumn key={column.label}>{column.label}</TableColumn>
          ))}
        </TableHeader>
        <TableBody>
          {data.map((row: User, index: number) => (
            <TableRow key={index}>
              {(prop: any) => <TableCell key={index}>{ row[prop] }</TableCell>}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </main>
  );
}
