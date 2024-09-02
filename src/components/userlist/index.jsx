import React from 'react';

const UserList = ({ title = 'User Details', users }) => {
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
                <th><span className="ps-3">User ID</span></th>
                <th>Name</th>
                <th>Email</th>
                <th>Contact No.</th>
                <th>Date of Joining</th>
                <th>Total Orders</th>
                <th>View More</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td><span className="ps-3">{user.id}</span></td>
                  <td>
                    <span className="img-thumb">
                        <img src={user.img} alt={user.name} />
                      <span className="ms-2">{user.name}</span>
                    </span>
                  </td>
                  <td>{user.email}</td>
                  <td>{user.contactNo}</td>
                  <td>{user.dateOfJoining}</td>
                  <td>{user.totalOrders}</td>
                  <td>
                    {/* <a href="" className="btn btn-primary">View More</a> */}
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

export default UserList;
