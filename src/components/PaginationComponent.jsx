import React from 'react'
import Pagination from 'react-bootstrap/Pagination';


const PaginationComponent = () => {
  return (
    <div><Pagination>
    <Pagination.Prev />
    <Pagination.Item>{1}</Pagination.Item>

    <Pagination.Item>{10}</Pagination.Item>
    <Pagination.Item>{11}</Pagination.Item>
    <Pagination.Item active>{12}</Pagination.Item>
    <Pagination.Item>{13}</Pagination.Item>
    <Pagination.Item disabled>{14}</Pagination.Item>

    <Pagination.Item>{20}</Pagination.Item>
    <Pagination.Next />
  </Pagination></div>
  )
}

export default PaginationComponent