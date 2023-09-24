/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import DataTable from "react-data-table-component";
import DivisionModal from "./divisionmodal";
import { BsPencilFill, BsFillTrash3Fill } from "react-icons/bs";
export default function DivisionForm(props) {
   const { api, } = props;
   const [data, setData] = useState([]);

   const [show, setShow] = useState(false);
   const [editBt, setEditBt] = useState(false);



   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   const columns = [
      { name: '#', selector: (row) => row.id }, // Use a selector function
      { name: 'รหัสแผนก', selector: (row) => row.dV_ID },
      { name: 'ชื่อแผนก', selector: (row) => row.dV_Name },
      {
         name: 'จัดการ',
         cell: (row) => (
            <>
               <a onClick={() => {
                  handleEdit(row.id);
               }}><BsPencilFill /></a> &nbsp; &nbsp;
               <a onClick={() => handleDelete(row.id)}><BsFillTrash3Fill /></a>
            </>
         ),
      },
   ];

   const handleEdit = (id) => {

      setEditBt(true); // Set editBt to true
      setShow(true);    // Show the modal
      console.log('Edit clicked for row:', id);
   };

   const handleDelete = (id) => {
      console.log('Delete clicked for row:', id);
   };

   const fetchData = useCallback(async () => {
      try {
         const response = await axios.get(`${api}/DivisionAPI`);
         setData(response.data.result);
      } catch (err) {
         console.log(err.message);
      }
   }, [api])

   useEffect(() => {
      fetchData();
   }, [fetchData]);

   return (
      <>
         <Container>
            <Row className="justify-content-center">

               <Col md={7} className="text-end mb-2">
                  <Button variant="primary" onClick={() => { handleShow(); setEditBt(false) }} >เพิ่ม</Button>
                  <hr />
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
         <DivisionModal show={show} handleClose={handleClose} editBt={editBt} />
      </>
   )
}