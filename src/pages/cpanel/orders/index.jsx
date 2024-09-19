import React, { useState } from 'react';
import OrdersList from '../../../components/orderlist';
import ReactPaginate from 'react-paginate';

const orders = [
  { id: '#JH2033', name: 'Emily Arnold', date: '22/06/2022', total: '$600', status: 'Pending', method: 'Paypal', img: 'https://kamleshyadav.com/html/splashdash/html/b5/light/assets/images/table/1.jpg' },
  { id: '#MK4433', name: 'Mark Doe', date: '14/07/2022', total: '$700', status: 'Success', method: 'Visa', img: 'https://kamleshyadav.com/html/splashdash/html/b5/light/assets/images/table/4.jpg' },
  { id: '#MD4578', name: 'Mark Smith', date: '28/08/2022', total: '$800', status: 'Cancel', method: 'Credit Card', img: 'https://kamleshyadav.com/html/splashdash/html/b5/light/assets/images/table/7.jpg' },
  { id: '#DD1048', name: 'Mike Wood', date: '13/04/2022', total: '$880', status: 'Pending', method: 'Mastercard', img: 'https://kamleshyadav.com/html/splashdash/html/b5/light/assets/images/table/1.jpg' },
  { id: '#JH2033', name: 'Emily Arnold', date: '22/06/2022', total: '$600', status: 'Success', method: 'Paypal', img: 'https://kamleshyadav.com/html/splashdash/html/b5/light/assets/images/table/3.jpg' },
  { id: '#MK4433', name: 'John Doe', date: '14/07/2022', total: '$700', status: 'Cancel', method: 'Visa', img: 'https://kamleshyadav.com/html/splashdash/html/b5/light/assets/images/table/1.jpg' },
  { id: '#MD4578', name: 'Mark Smith', date: '28/08/2022', total: '$800', status: 'Success', method: 'Credit Card', img: 'https://kamleshyadav.com/html/splashdash/html/b5/light/assets/images/table/7.jpg' },
  { id: '#DD1048', name: 'Mike Wood', date: '13/04/2022', total: '$880', status: 'Cancel', method: 'Mastercard', img: 'https://kamleshyadav.com/html/splashdash/html/b5/light/assets/images/table/4.jpg' },
  { id: '#MD4578', name: 'Emily Arnold', date: '28/08/2022', total: '$800', status: 'Pending', method: 'Visa', img: 'https://kamleshyadav.com/html/splashdash/html/b5/light/assets/images/table/1.jpg' }
];

const Orders = () => {
  const [itemsPerPage, setLimit] = useState(2);
  const [pageCount, setPageCount] = useState(2); 

  const handlePageClick = (event) => {
    
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12 pt-2">
          <h4>All Orders List</h4>
          <OrdersList title={'All orders list'} orders={orders} />
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
  );
};

export default Orders;
