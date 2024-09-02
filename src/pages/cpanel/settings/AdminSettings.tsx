import React, { useEffect, useState } from "react";
import { getRequest } from "../../../service";

export default function AdminSettings() {
  const [languages, setLanguages] = useState([]);
  const [currencies, setCurrency] = useState([]);

  useEffect(() => {
    getLanguages();
    getCurrencies();
  }, []);

  const getCurrencies = () => {
    getRequest("v1/currency/listing?skip=0&limit=50")
      .then((res) => {
        setCurrency(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getLanguages = () => {
    getRequest("v1/languages/listing?skip=0&limit=50")
      .then((res) => {
        setLanguages(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container-fluid">
      <form className="form-horizontal">
        <div className="row">
          <div className="col-12">
            <h3 className="card-title mb-2">Admin Settings</h3>
          </div>
          <div className="col-md-8 p-0">
            <div className="accordion-item card custom-card">
              <h2 className="accordion-header" id="generalInfoTop">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTop"
                  aria-expanded="true"
                  aria-controls="collapseTop"
                >
                  General Info
                </button>
              </h2>
              <div
                id="collapseTop"
                className="accordion-collapse collapse show"
                aria-labelledby="generalInfoTop"
              >
                <div className="card-body">
                  <div className="form-group row">
                    <label
                      htmlFor="name"
                      className="col-sm-3 control-label col-form-label"
                    >
                      <span>Allow creating new vendor accounts</span>
                    </label>
                    <div className="col-sm-9 align-self-center">
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="allowVendorRegisteration"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="allowVendorRegisteration"
                        >
                          enabled
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      htmlFor="name"
                      className="col-sm-3 control-label col-form-label"
                    >
                      <span>Allow user deletion</span>
                    </label>
                    <div className="col-sm-9 align-self-center">
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="flexSwitchCheckChecked"
                          checked
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexSwitchCheckChecked"
                        >
                          enabled
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item card custom-card">
              <h2 className="accordion-header" id="currencyHeader">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseCurrency"
                  aria-expanded="true"
                  aria-controls="collapseCurrency"
                >
                  Currency
                </button>
              </h2>
              <div
                id="collapseCurrency"
                className="accordion-collapse collapse show"
                aria-labelledby="currencyHeader"
              >
                <div className="card-body">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Currency</th>
                        <th>Symbol</th>
                        <th>Price (In USD)</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currencies &&
                        currencies.map((currency, index) => (
                          <tr key={index}>
                            <td>{currency.currency_name}</td>
                            <td>{currency?.symbol}</td>
                            <td width="250">
                              <input
                                className="form-control"
                                type="number"
                                value={currency.exchange_rate}
                              />
                            </td>
                            <td>
                              <div className="col-12">
                                <div className="form-check form-switch">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name="primary_currency"
                                    id={`current-${currency?.id}`}
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                  <div className="row">
                    <div className="col-md-12 d-flex justify-content-end gap-3">
                      <button
                        type="reset"
                        className="btn btn-secondary text-white"
                      >
                        Reset
                      </button>
                      <button type="submit" className="btn btn-primary">
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4 p-0">
            <div className="accordion-item card custom-card">
              <h2 className="accordion-header" id="languageHeader">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseLanguage"
                  aria-expanded="true"
                  aria-controls="collapseLanguage"
                >
                  Languages
                </button>
              </h2>
              <div id="collapseLanguage" className="accordion-collapse collapse show" aria-labelledby="languageHeader">
                <div className="col-12">
                  <div className="row align-self-center p-3">
                    <table className="table m-0">
                      <thead>
                        <tr>
                          <th className="text-left">Language</th>
                          <th className="text-left">Selected</th>
                          <th className="text-left">Primary</th>
                        </tr>
                      </thead>
                      <tbody>
                        {languages &&
                          languages.map((lang, index) => (
                            <tr key={index}>
                              <td>
                                <label
                                  className="form-check-label"
                                  htmlFor={lang?.language_name}
                                >
                                  {lang?.language_name}
                                </label>
                              </td>
                              <td>
                                <div className="form-check form-switch">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    role="switch"
                                    id={lang?.language_name}
                                  />
                                </div>
                              </td>
                              <td>
                                <div className="form-check form-switch">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="switch"
                                    id={`radio-${lang?.language_name}`}
                                  />
                                </div>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
