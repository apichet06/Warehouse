/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Menu from "../headers/menu"
import Footer from "../footer/footer"
import DivisionForm from "./divisionForm";
export default function Division(props) {
    const { api } = props;
    return (
        <>
            <Menu />
            <DivisionForm />
            <Footer />
        </>
    )
}