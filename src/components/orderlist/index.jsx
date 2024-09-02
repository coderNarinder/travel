
import React from 'react';

const OrdersList = ({ title = 'Newest Orders', orders }) => {
  return (
    <div className="card custom-card m-0">
      <div className="p-3 custom-card-header">
        <span>{title}</span>
      </div>
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
              {orders.map((order, index) => (
                <tr key={index}>
                  <td>
                    <div className="checkbox">
                      <input id={`checkbox${index}`} type="checkbox" />
                      <label htmlFor={`checkbox${index}`}></label>
                    </div>
                  </td>
                  <td>{order.id}</td>
                  <td>
                    <span className="img-thumb">
                      <img src={order.img} alt="" />
                      <span className="ms-2">{order.name}</span>
                    </span>
                  </td>
                  <td>{order.date}</td>
                  <td>{order.total}</td>
                  <td>
                    <label className={`mb-0 badge ${order.status === 'Pending' ? 'badge-primary' : order.status === 'Success' ? 'badge-success' : 'badge-danger'}`} title={order.status}>
                      {order.status}
                    </label>
                  </td>
                  <td>
                    <span className="img-thumb">
                    <i className={order.method.toLowerCase() === 'credit card' ? 'fas fa-credit-card' : `fab fa-cc-${order.method.toLowerCase()}`}></i>
                      <span className="ms-2">{order.method}</span>
                    </span>
                  </td>
                  <td>
                    <a href="#!" className="mb-0 badge badge-primary" title="View Detail">
                      View Detail
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrdersList;
