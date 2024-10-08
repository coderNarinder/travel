import React, { useCallback, useEffect, useState } from 'react';
import "./subscription.css";
import { getRequestGod } from '../../../service';

const Subscription = () => {
  const [subscription, setSubscription] = useState([]);
  const [duration, setDuration] = useState('monthly');

  const getPackages = useCallback(() => {
    getRequestGod('v1/packages/listing')
      .then((res) => {
        setSubscription(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    getPackages();
  }, [getPackages]);

  return (
    <>
      <div className="subcriptionSec">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="subcriptionWrpr">
                <div className="text-center">
                  <h2>Transform Your Business <span>with Our Subscription Packages</span></h2>
                  <p>Empower Your Store, Expand Your Reach, Increase Your Wealth</p>
                  <form action="">
                    <ul>
                      <li>
                        <label htmlFor="Weekly">
                          <input
                            id="Weekly"
                            type="radio"
                            value="weekly"
                            checked={duration === 'weekly'}
                            onChange={() => setDuration('weekly')}
                          />
                          <span className="switchCTA">Weekly</span>
                        </label>
                      </li>
                      <li>
                        <label htmlFor="Monthly">
                          <input
                            id="Monthly"
                            type="radio"
                            value="monthly"
                            onChange={() => setDuration('monthly')}
                            checked={duration === 'monthly'}
                          />
                          <span className="switchCTA">Monthly</span>
                        </label>
                      </li>
                      <li>
                        <label htmlFor="Yearly">
                          <input
                            id="Yearly"
                            type="radio"
                            value="yearly"
                            onChange={() => setDuration('yearly')}
                            checked={duration === 'yearly'}
                          />
                          <span className="switchCTA">Yearly</span>
                        </label>
                      </li>
                    </ul>
                  </form>
                </div>
                <div className="subcriptionOuter">
                  {subscription
                    .filter((p) => p.duration === duration)
                    .map((item, index) => (
                      <div className="subcriptionInner" key={index}>
                        <div className="subscriptionBox">
                          <div className="packageTitle text-center">
                            <h4>
                              {item.type === '1'
                                ? 'Basic'
                                : item.type === '2'
                                ? 'Advance'
                                : 'Business'}
                            </h4>
                            <h5>{item?.title}</h5>
                            <p>{item?.tagline}</p>
                          </div>
                          <div className="packageIcon">
                            <i className="mdi mdi-package-variant"></i>
                          </div>
                          <div className="packagePrice text-center">
                            <h5>
                              $.{item?.actual_price}{' '}
                              <del>${item?.price}</del> / {item?.duration}
                            </h5>
                          </div>
                          <ul className="list-unstyled">
                            <li>
                              <i className="mdi mdi-checkbox-marked-circle"></i>
                              <span>
                                {item?.default_member}{' '}
                                {item?.default_member === 1 ? 'Store' : 'Stores'}
                              </span>
                            </li>
                            <li>
                              <i className="mdi mdi-checkbox-marked-circle"></i>
                              <span>
                                ${item?.extra_per_member_rate} Additional charge/Store
                              </span>
                            </li>
                            <li>
                              <i className="mdi mdi-checkbox-marked-circle"></i>
                              <span>{item?.order_limit_per_month} orders/month</span>
                            </li>
                            <li>
                              <i className="mdi mdi-checkbox-marked-circle"></i>
                              <span>
                                ${item?.addional_rate_per_order} Additional
                                charge/order
                              </span>
                            </li>
                          </ul>
                          <div className="packageCta">
                            {item.type === '1' 
                            ? <a href="#" className="btn btn-primary bg-black">Subscribe</a> 
                            : <a href="#" className="btn btn-primary">Upgrade</a>}
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscription;
