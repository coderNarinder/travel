import React, { useState } from 'react';

const currencies = [
  { name: 'Indian Rupee', symbol: 'rs', price: 82, status: 'Active' },
  { name: 'USD', symbol: '$', price: 1, status: 'Active' }
];

const languages = [
  { name: 'English', selected: true, primary: true },
  { name: 'Hindi', selected: false, primary: false }
];

const initialVendors = [
  { id: 'V001', email: 'vendor1@example.com', contactNo: '+1234567890', dateOfJoining: '01/01/2023', totalOrders: 10 },
  { id: 'V002', email: 'vendor2@example.com', contactNo: '+0987654321', dateOfJoining: '15/02/2023', totalOrders: 5 },
  { id: 'V003', email: 'vendor3@example.com', contactNo: '+1122334455', dateOfJoining: '20/03/2023', totalOrders: 8 }
];

const businessDetails = {
  name: 'Tech Solutions Inc.',
  contactInfo: '+1234567890',
  address: '789 Innovation Blvd, Tech City, Country',
  totalEarnings: '$15000'
};

const BusinessProfile = () => {
  const [vendors, setVendors] = useState(initialVendors);

  const handleDeleteVendor = (id) => {
    setVendors(vendors.filter(vendor => vendor.id !== id));
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12 pt-2">
          <div className="card custom-card m-0">
            <div className="p-3 custom-card-header">
              <span>Business Details</span>
            </div>
            <div className="p-3">
              <h5>Contact Details</h5>
              <table className="table table-bordered table-striped m-0">
                <tbody>
                  <tr>
                    <th>Business Name</th>
                    <td>{businessDetails.name}</td>
                  </tr>
                  <tr>
                    <th>Contact Info</th>
                    <td>{businessDetails.contactInfo}</td>
                  </tr>
                  <tr>
                    <th>Address</th>
                    <td>{businessDetails.address}</td>
                  </tr>
                  <tr>
                    <th>Total Earnings</th>
                    <td>{businessDetails.totalEarnings}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Currency Settings */}
            <div className="p-3">
              <h5>Currency Settings</h5>
              <table className="table table-bordered table-striped m-0">
                <thead>
                  <tr>
                    <th>Currency</th>
                    <th>Symbol</th>
                    <th>Price (In USD)</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {currencies.map((currency, index) => (
                    <tr key={index}>
                      <td>{currency.name}</td>
                      <td>{currency.symbol}</td>
                      <td>{currency.price}</td>
                      <td>{currency.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Language Settings */}
            <div className="p-3">
              <h5>Language Settings</h5>
              <table className="table table-bordered table-striped m-0">
                <thead>
                  <tr>
                    <th>Language</th>
                    <th>Selected</th>
                    <th>Primary</th>
                  </tr>
                </thead>
                <tbody>
                  {languages.map((language, index) => (
                    <tr key={index}>
                      <td>{language.name}</td>
                      <td>{language.selected ? 'Yes' : 'No'}</td>
                      <td>{language.primary ? 'Yes' : 'No'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Vendor List */}
            <div className="p-3">
              <h5>Vendors List</h5>
              {vendors.map((vendor) => (
                <div key={vendor.id} className="mb-3 p-3 border rounded">
                  <div className="d-flex align-items-center">
                    <img src="https://via.placeholder.com/50" alt="Vendor Profile" className="img-thumbnail me-3" style={{ width: '50px', height: '50px' }} />
                    <div>
                      <div><strong>Vendor ID:</strong> {vendor.id}</div>
                      <div><strong>Email:</strong> {vendor.email}</div>
                      <div><strong>Contact No.:</strong> {vendor.contactNo}</div>
                      <div><strong>Date of Joining:</strong> {vendor.dateOfJoining}</div>
                      <div><strong>Total Orders:</strong> {vendor.totalOrders}</div>
                    </div>
                    <button className="btn btn-danger ms-auto" onClick={() => handleDeleteVendor(vendor.id)}>Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessProfile;
