import React from 'react'
import { Row,Col } from 'react-bootstrap'
import AdminLinkComponent from '../components/admin/AdminLinkComponent'
import AdminChatRoomComponents from '../components/admin/AdminChatRoomComponents'

const AdminChatPage = () => {
  return (
    <div className='container mt-5'>
      <Row>
        <Col md={2}>
        <AdminLinkComponent/>
        </Col>
        
        <Col md={8}>
        <AdminChatRoomComponents/>
        </Col>
      </Row>
    </div>
  )
}

export default AdminChatPage