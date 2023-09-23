/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import DataTable from 'react-data-table-component';
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import axios from 'axios';

export default function DivisionForm(props) {
   const { api } = props;

   const columns = [
      { name: '#', selector: 'id' },
      { name: 'รหัสแผนก', selector: 'title' },
      { name: 'ชื่อแผนก', selector: 'year' },
   ];

   const data = [
      { id: 1, title: 'Beetlejuice', year: '1988' },
      { id: 2, title: 'Ghostbusters', year: '1984' },
   ];

   const handleData = async (data) => {
      try {
         await axios.get(api + '/DivisionAPI');
      } catch (err) {
         console.log(err.message);
      }
   }






   return (
      <>
         <Container>
            <Row className="justify-content-center">

               <Col md={7} className="text-end mb-2">
                  <Button variant="primary">เพิ่ม</Button>
               </Col>
               <Col md={7}>
                  <Card className="shadow">
                     <Card.Body>
                        <Card.Title>ข้อมูลแผนกทั้งหมด</Card.Title>
                        <DataTable
                           columns={columns}
                           data={data}
                           pagination
                        />
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
         </Container>

      </>
   )
}