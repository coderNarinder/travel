import React from 'react'

const DayPlanItem = ({
    plans
}) => {
  return (
    <>
       <table className="table">
           <tr>
              <th>Sr.no</th>
              <th>Title</th>
              <th>Timing</th>
              <th>Location</th>
            </tr> 
            {
                plans && plans.map((p,index) => (
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td>{p?.type == "2" && p?.product ? p?.product?.name : p.title}</td>
                    <td>{p.start_time} - {p.end_time}</td>
                    <td>{p?.type == "2" && p?.product ? p?.product?.address : p.address}</td>
                  </tr>
                ))
            }
       </table>
    </>
  )
}
export default DayPlanItem;