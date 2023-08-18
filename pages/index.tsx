
import { Button } from "@nextui-org/react";
import Layout from "./components/Layout";
import Header from "./components/header";

export default function index() {
    return(
        <Layout>
            <Header username="Wei" description="A frontend developer"></Header>
            <div className="container">
                <Button>Click me</Button>
            </div>
        </Layout>
    )
}