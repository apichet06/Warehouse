import { Container, Image, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Menu() {
    const resulteData = JSON.parse(localStorage.getItem('resulte'));
    console.log(resulteData.imageFile);
    const api = "http://192.168.37.134:8081/WHAPI/api/ImagesPathAPI/";
    return (
        <>
            <Navbar bg="light" data-bs-theme="light" expand="lg" fixed="top" className='shadow  navbar-underline'>
                <Container>
                    <Navbar.Brand href="#home">
                        <Image
                            alt=""
                            src="/img/logo.jpg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}  ระบบคลังสินค้า
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">รายการสินค้าทั้งหมด</Nav.Link>
                            <Link to="/pricing" className="nav-link">รายการรออนุมัติการเบิก</Link>
                        </Nav>
                        <Nav>
                            <NavDropdown title={<Image src={api + resulteData.imageFile} width={25} height={25} roundedCircle />} id="collapsible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">ข้อมูลส่วนตัว</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/logout">ออกจากระบบ</Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >

        </>
    )
}