import React from 'react'
import OrdersList from '../../components/orderlist';
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

const Dashboard = () => {
    return (
        <>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="rightContentWrapper">
                  <div className="row mb-4">
                    <div className="col">
                      <div className="bg-dark p-10 text-white text-center m-0 custom-card">
                        <div className="myIcon">
                          <i className="mdi mdi-account fs-3 mb-1 font-16" />
                        </div>
                        <div className="boardCont">
                          <h5 className="mb-0">2540</h5>
                          <a href="/cpanel/users" className="font-light">Total Users</a>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="bg-dark p-10 text-white text-center m-0 custom-card">
                      <div className="myIcon">
                        <i className="mdi mdi-plus fs-3 font-16" />
                        </div>
                        <div className="boardCont">
                          <h5 className="mb-0">120</h5>
                          <a href="/cpanel/users" className="font-light">New Users</a>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="bg-dark p-10 text-white text-center m-0 custom-card">
                      <div className="myIcon">
                        <i className="mdi mdi-tag fs-3 mb-1 font-16" />
                        </div>
                        <div className="boardCont">
                            <h5 className="mb-0">9540</h5>
                            <a href="/cpanel/orders" className="font-light">Total Orders</a>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="bg-dark p-10 text-white text-center m-0 custom-card">
                      <div className="myIcon">
                        <i className="mdi mdi-table fs-3 mb-1 font-16" />
                        </div>
                        <div className="boardCont">
                          <h5 className="mb-0">100</h5>
                          <a href="/cpanel/orders" className="font-light">Pending Orders</a>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="bg-dark p-10 text-white text-center m-0 custom-card">
                      <div className="myIcon">
                        <i className="mdi mdi-web fs-3 mb-1 font-16" />
                        </div>
                        <div className="boardCont">
                            <h5 className="mb-0">8540</h5>
                            <a href="/cpanel/orders" className="font-light">Online Orders</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <OrdersList orders={orders} />
              </div>
            </div>
          </div>
        </>
    )
}

export default Dashboard;