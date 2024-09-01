import React from 'react'

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
                          <small className="font-light">Total Users</small>
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
                          <small className="font-light">New Users</small>
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
                            <small className="font-light">Total Orders</small>
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
                          <small className="font-light">Pending Orders</small>
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
                            <small className="font-light">Online Orders</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="card custom-card m-0">
                  <div className="p-3 custom-card-header"><span>Newest Orders</span></div>
                  <div className="chart-holder">
                    <div className="table-responsive">
                      <table className="table table-styled mb-0">
                        <thead>
                          <tr>
                            <th>
                              <div className="checkbox">
                                <input id="checkbox1" type="checkbox" />
                                <label htmlFor="checkbox1"></label>
                              </div>
                            </th>
                            <th>Order ID</th>
                            <th>Billing Name</th>
                            <th>Date</th>
                            <th>Total</th>
                            <th>Payment Status</th>
                            <th>Payment Method</th>
                            <th>View Details</th>
                          </tr>
                        </thead>
                        <tbody>
  <tr>
    <td>
      <div className="checkbox">
        <input id="checkbox2" type="checkbox" />
        <label htmlFor="checkbox2"></label>
      </div>
    </td>
    <td>#JH2033</td>
    <td>
      <span className="img-thumb">
        <img
          src="https://kamleshyadav.com/html/splashdash/html/b5/light/assets/images/table/1.jpg"
          alt=""
        />
        <span className="ml-2">Emily Arnold</span>
      </span>
    </td>
    <td>22/06/2022</td>
    <td>$600</td>
    <td>
      <label className="mb-0 badge badge-primary" title="Pending">
        Pending
      </label>
    </td>
    <td>
      <span className="img-thumb">
        <i className="fab fa-cc-paypal"></i>
        <span className="ml-2">Paypal</span>
      </span>
    </td>
    <td>
      <label className="mb-0 badge badge-primary" title="View Detail">
        View Detail
      </label>
    </td>
  </tr>
  <tr>
    <td>
      <div className="checkbox">
        <input id="checkbox3" type="checkbox" />
        <label htmlFor="checkbox3"></label>
      </div>
    </td>
    <td>#MK4433</td>
    <td>
      <span className="img-thumb">
        <img
          src="https://kamleshyadav.com/html/splashdash/html/b5/light/assets/images/table/4.jpg"
          alt=""
        />
        <span className="ml-2">Mark Doe</span>
      </span>
    </td>
    <td>14/07/2022</td>
    <td>$700</td>
    <td>
      <label className="mb-0 badge badge-success" title="Success">
        Success
      </label>
    </td>
    <td>
      <span className="img-thumb">
        <i className="fab fa-cc-visa"></i>
        <span className="ml-2">Visa</span>
      </span>
    </td>
    <td>
      <label className="mb-0 badge badge-primary" title="View Detail">
        View Detail
      </label>
    </td>
  </tr>
  <tr>
    <td>
      <div className="checkbox">
        <input id="checkbox4" type="checkbox" />
        <label htmlFor="checkbox4"></label>
      </div>
    </td>
    <td>#MD4578</td>
    <td>
      <span className="img-thumb">
        <img
          src="https://kamleshyadav.com/html/splashdash/html/b5/light/assets/images/table/7.jpg"
          alt=""
        />
        <span className="ml-2">Mark Smith</span>
      </span>
    </td>
    <td>28/08/2022</td>
    <td>$800</td>
    <td>
      <label className="mb-0 badge badge-danger" title="Cancel">
        Cancel
      </label>
    </td>
    <td>
      <span className="img-thumb">
        <i className="fas fa-credit-card"></i>
        <span className="ml-2">Credit Card</span>
      </span>
    </td>
    <td>
      <label className="mb-0 badge badge-primary" title="View Detail">
        View Detail
      </label>
    </td>
  </tr>
  <tr>
    <td>
      <div className="checkbox">
        <input id="checkbox5" type="checkbox" />
        <label htmlFor="checkbox5"></label>
      </div>
    </td>
    <td>#DD1048</td>
    <td>
      <span className="img-thumb">
        <img
          src="https://kamleshyadav.com/html/splashdash/html/b5/light/assets/images/table/1.jpg"
          alt=""
        />
        <span className="ml-2">Mike Wood</span>
      </span>
    </td>
    <td>13/04/2022</td>
    <td>$880</td>
    <td>
      <label className="mb-0 badge badge-primary" title="Pending">
        Pending
      </label>
    </td>
    <td>
      <span className="img-thumb">
        <i className="fab fa-cc-mastercard"></i>
        <span className="ml-2">Mastercard</span>
      </span>
    </td>
    <td>
      <label className="mb-0 badge badge-primary" title="View Detail">
        View Detail
      </label>
    </td>
  </tr>
  <tr>
    <td>
      <div className="checkbox">
        <input id="checkbox6" type="checkbox" />
        <label htmlFor="checkbox6"></label>
      </div>
    </td>
    <td>#JH2033</td>
    <td>
      <span className="img-thumb">
        <img
          src="https://kamleshyadav.com/html/splashdash/html/b5/light/assets/images/table/3.jpg"
          alt=""
        />
        <span className="ml-2">Emily Arnold</span>
      </span>
    </td>
    <td>22/06/2022</td>
    <td>$600</td>
    <td>
      <label className="mb-0 badge badge-success" title="Success">
        Success
      </label>
    </td>
    <td>
      <span className="img-thumb">
        <i className="fab fa-cc-paypal"></i>
        <span className="ml-2">Paypal</span>
      </span>
    </td>
    <td>
      <label className="mb-0 badge badge-primary" title="View Detail">
        View Detail
      </label>
    </td>
  </tr>
  <tr>
    <td>
      <div className="checkbox">
        <input id="checkbox7" type="checkbox" />
        <label htmlFor="checkbox7"></label>
      </div>
    </td>
    <td>#MK4433</td>
    <td>
      <span className="img-thumb">
        <img
          src="https://kamleshyadav.com/html/splashdash/html/b5/light/assets/images/table/1.jpg"
          alt=""
        />
        <span className="ml-2">John Doe</span>
      </span>
    </td>
    <td>14/07/2022</td>
    <td>$700</td>
    <td>
      <label className="mb-0 badge badge-danger" title="Cancel">
        Cancel
      </label>
    </td>
    <td>
      <span className="img-thumb">
        <i className="fab fa-cc-visa"></i>
        <span className="ml-2">Visa</span>
      </span>
    </td>
    <td>
      <label className="mb-0 badge badge-primary" title="View Detail">
        View Detail
      </label>
    </td>
  </tr>
  <tr>
    <td>
      <div className="checkbox">
        <input id="checkbox8" type="checkbox" />
        <label htmlFor="checkbox8"></label>
      </div>
    </td>
    <td>#MD4578</td>
    <td>
      <span className="img-thumb">
        <img
          src="https://kamleshyadav.com/html/splashdash/html/b5/light/assets/images/table/7.jpg"
          alt=""
        />
        <span className="ml-2">Mark Smith</span>
      </span>
    </td>
    <td>28/08/2022</td>
    <td>$800</td>
    <td>
      <label className="mb-0 badge badge-success" title="Success">
        Success
      </label>
    </td>
    <td>
      <span className="img-thumb">
        <i className="fas fa-credit-card"></i>
        <span className="ml-2">Credit Card</span>
      </span>
    </td>
    <td>
      <label className="mb-0 badge badge-primary" title="View Detail">
        View Detail
      </label>
    </td>
  </tr>
  <tr>
    <td>
      <div className="checkbox">
        <input id="checkbox9" type="checkbox" />
        <label htmlFor="checkbox9"></label>
      </div>
    </td>
    <td>#DD1048</td>
    <td>
      <span className="img-thumb">
        <img
          src="https://kamleshyadav.com/html/splashdash/html/b5/light/assets/images/table/4.jpg"
          alt=""
        />
        <span className="ml-2">Mike Wood</span>
      </span>
    </td>
    <td>13/04/2022</td>
    <td>$880</td>
    <td>
      <label className="mb-0 badge badge-danger" title="Cancel">
        Cancel
      </label>
    </td>
    <td>
      <span className="img-thumb">
        <i className="fab fa-cc-mastercard"></i>
        <span className="ml-2">Mastercard</span>
      </span>
    </td>
    <td>
      <label className="mb-0 badge badge-primary" title="View Detail">
        View Detail
      </label>
    </td>
  </tr>
  <tr>
    <td>
      <div className="checkbox">
        <input id="checkbox10" type="checkbox" />
        <label htmlFor="checkbox10"></label>
      </div>
    </td>
    <td>#MD4578</td>
    <td>
      <span className="img-thumb">
        <img
          src="https://kamleshyadav.com/html/splashdash/html/b5/light/assets/images/table/1.jpg"
          alt=""
        />
        <span className="ml-2">Emily Arnold</span>
      </span>
    </td>
    <td>28/08/2022</td>
    <td>$800</td>
    <td>
      <label className="mb-0 badge badge-primary" title="Pending">
        Pending
      </label>
    </td>
    <td>
      <span className="img-thumb">
        <i className="fab fa-cc-visa"></i>
        <span className="ml-2">Visa</span>
      </span>
    </td>
    <td>
      <label className="mb-0 badge badge-primary" title="View Detail">
        View Detail
      </label>
    </td>
  </tr>
</tbody>

                      </table>
                    </div>
                  </div>
              </div>
              </div>
            </div>
          </div>
        </>
    )
}

export default Dashboard;