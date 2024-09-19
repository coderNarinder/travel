import React, { useState } from 'react';
import UserList from '../../../components/userlist'
import ReactPaginate from 'react-paginate';

const users = [
    { id: '#USR001', email: 'emily.arnold@example.com', name: 'Emily Arnold', contactNo: '+1234567890', dateOfJoining: '22/06/2022', totalOrders: 5, img: 'https://kamleshyadav.com/html/splashdash/html/b5/light/assets/images/table/1.jpg' },
    { id: '#USR002', email: 'mark.doe@example.com', name: 'Mark Doe', contactNo: '+0987654321', dateOfJoining: '14/07/2022', totalOrders: 3, img: 'https://kamleshyadav.com/html/splashdash/html/b5/light/assets/images/table/4.jpg' },
    { id: '#USR003', email: 'mark.smith@example.com', name: 'Mark Smith', contactNo: '+1122334455', dateOfJoining: '28/08/2022', totalOrders: 7, img: 'https://kamleshyadav.com/html/splashdash/html/b5/light/assets/images/table/7.jpg' },
    { id: '#USR004', email: 'mike.wood@example.com', name: 'Mike Wood', contactNo: '+5566778899', dateOfJoining: '13/04/2022', totalOrders: 8, img: 'https://kamleshyadav.com/html/splashdash/html/b5/light/assets/images/table/1.jpg' },
    { id: '#USR005', email: 'emily.arnold2@example.com', name: 'Emily Arnold', contactNo: '+6677889900', dateOfJoining: '22/06/2022', totalOrders: 2, img: 'https://kamleshyadav.com/html/splashdash/html/b5/light/assets/images/table/3.jpg' },
    { id: '#USR006', email: 'john.doe@example.com', name: 'John Doe', contactNo: '+4433221100', dateOfJoining: '14/07/2022', totalOrders: 6, img: 'https://kamleshyadav.com/html/splashdash/html/b5/light/assets/images/table/1.jpg' },
    { id: '#USR007', email: 'mark.smith2@example.com', name: 'Mark Smith', contactNo: '+9988776655', dateOfJoining: '28/08/2022', totalOrders: 4, img: 'https://kamleshyadav.com/html/splashdash/html/b5/light/assets/images/table/7.jpg' },
    { id: '#USR008', email: 'mike.wood2@example.com', name: 'Mike Wood', contactNo: '+2233445566', dateOfJoining: '13/04/2022', totalOrders: 9, img: 'https://kamleshyadav.com/html/splashdash/html/b5/light/assets/images/table/4.jpg' },
    { id: '#USR009', email: 'emily.arnold3@example.com', name: 'Emily Arnold', contactNo: '+3344556677', dateOfJoining: '28/08/2022', totalOrders: 1, img: 'https://kamleshyadav.com/html/splashdash/html/b5/light/assets/images/table/1.jpg' },
    { id: '#USR010', email: 'john.doe2@example.com', name: 'John Doe', contactNo: '+4455667788', dateOfJoining: '14/07/2022', totalOrders: 10, img: 'https://kamleshyadav.com/html/splashdash/html/b5/light/assets/images/table/3.jpg' }
  ];

export default function Users() {
  const [itemsPerPage, setLimit] = useState(2);
  const [pageCount, setPageCount] = useState(2); 

  const handlePageClick = (event) => {
    
  }
  return (
    <>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 pt-2">
              <h4>All Customers List</h4>
              <UserList users={users} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
                  <ReactPaginate
                    className="pagination justify-content-center mt-4"
                    breakLabel="..."
                    nextLabel="&nbsp;Next&nbsp;"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={itemsPerPage}
                    pageCount={pageCount}
                    previousLabel="Previous"
                    renderOnZeroPageCount={null}
                  />
            </div>
          </div>
        </div>
    </>
  )
}
