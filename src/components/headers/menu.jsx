import { Container, Image, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export default function Menu() {
    const resulteData = JSON.parse(localStorage.getItem('resulte'));
    // console.log(resulteData.imageFile);
    const api = "http://192.168.37.134:8081/WHAPI/api/ImagesPathAPI/";
    const navigate = useNavigate();
    const logout = () => {

        localStorage.removeItem('resulte');
        localStorage.removeItem('token');
        navigate('/');
    }
    return (
        <>
            <Navbar bg="light" data-bs-theme="light" expand="lg" fixed="top" className='shadow  navbar-underline'>
                <Container>
                    <Navbar.Brand as={Link} to="/home">
                        <Image
                            alt=""
                            src="/img/logo.jpg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        /> ระบบคลังสินค้า
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home" className="nav-link">หน้าหลัก</Nav.Link>
                            <Link to="/checkapproval" className="nav-link">รายการรออนุมัติการเบิก</Link>
                            <Link to="/incomingstock" className="nav-link">นำเข้าสินค้า</Link>
                            <NavDropdown title="การจัดการ" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/division">ข้อมูลแผนก</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/position">ข้อมูลตำแหน่ง</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/users">ข้อมูลผู้ใช้ระบบ</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} to="/products">ข้อมูลสินค้า</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <NavDropdown title={<Image src={api + resulteData.imageFile} width={25} height={25} roundedCircle />} id="collapsible-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/profile">ข้อมูลส่วนตัว</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={logout}>ออกจากระบบ</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </>
    )
}