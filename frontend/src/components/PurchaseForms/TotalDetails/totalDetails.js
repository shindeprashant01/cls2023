import React from "react";
import { CgCalculator } from "react-icons/cg";

const TotalDetails = () => {

  // const [endAmount, setEndAmount] = useState()
  // const[subdetails, setSubdetails]= useState('');

  // const calculate = () => {
  //   const selected = parseFloat(subdetails);
  //   const input = parseFloat(total);
  
  //   if (!isNaN(selected) && !isNaN(input)) {
  //     const calculatedResult = (selected/100) * input;
  //     const totalCalculatedResult = calculatedResult + input ;
  //     setSubdetails(totalCalculatedResult);
  //   } else {
  //     setSubdetails('Please enter valid values.');
  //   }
  // };
  const totalCalculate =()=>{

}

  return (
    <React.Fragment>
      <div className="input-container-total-detail">
        <label className="label-pforms-total-detail"
   
        >Sub Total(Without Tax):</label>
        <input
          type="text"
          className="form-control input-details-total-detail-unique"
          placeholder="sub Total"
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
  
        />
        <span>
          <CgCalculator onClick={totalCalculate} className="various-icon" />
        </span>
      </div>

      <div className="input-container-total-detail">
        <label className="label-pforms-total-detail">Total(GST/IGST+OTHER):</label>
        <input
          type="text"
          className="form-control input-details-total-detail-unique"
          placeholder="Total(GST/IGST+OTHER)"
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
        />
        <span>
          <CgCalculator className="various-icon" />
        </span>
      </div>

      <div className="input-container-total-detail">
        <label className="label-pforms-total-detail">Warranty:</label>
        <div>
          <input
            type="text"
            className="form-control input-details-total-detail"
            placeholder="Warranty"
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
          />
        </div>
      </div>

      <div className="input-container-total-detail">
        <label className="label-pforms-total-detail"> Delivery Terms:</label>
        <div>
          <input
            type="text"
            className="form-control input-details-total-detail"
            placeholder="Delivery Terms."
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
          />
        </div>
      </div>

      <div className="input-container-total-detail">
        <label className="label-pforms-total-detail">Other Value:</label>

        <input
          type="text"
          className="form-control input-details-total-detail"
          placeholder="Other Value"
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
        />
      </div>

      <div className="input-container-total-detail">
        <label className="label-pforms-total-detail">Other Terms:</label>

        <input
          type="text"
          className="form-control input-details-total-detail"
          placeholder="Other Terms"
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
        />
      </div>

      <div className="input-container-total-detail">
        <label className="label-pforms-total-detail">Payment Terms:</label>

        <input
          type="text"
          className="form-control input-details-total-detail"
          placeholder="Payment Terms"
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
        />
      </div>
    </React.Fragment>
  );
};

export default TotalDetails;

// {/* <div className='container-total-details'>

//             <div className='total-details'>
//             <div className='icon-label'>
//             <label className='label-pforms'>Sub Total(Without Tax):</label>
//            <input type="number" className='input-details-total-details-unique'/>
//            <span>
//            <CgCalculator className='various-icon'/>
//            </span>

//             </div>
//             <div className='icon-label'>
//             <label className='label-pforms'>Total(GST/IGST+OTHER):</label>
//            <input type="number" className='input-details-pforms-unique'/>
//            <span>
//            <CgCalculator className='various-icon'/>
//            </span>

//             </div>

//             <div>
//             <label className='label-pforms'>Warranty:</label>
//            <input type="text" className='input-details-pforms'/>
//             </div>
//             <div>
//             <label className='label-pforms'>Delivery Terms:</label>
//             <input type='text' className='input-details-pforms' />
//             </div>
//             <div>
//                 <label className='label-pforms'>Other Value:</label>
//                 <input type='text' className='input-details-pforms'/>
//             </div>
//             <div>
//                 <label className='label-pforms'>Other Terms:</label>
//                 <input type='text'className='input-details-pforms'/>
//             </div>
//             <div>
//                 <label className='label-pforms'>Payment Terms:</label>
//                 <input type='text' className='input-details-pforms'/>
//             </div><hr/>
//             </div>

//     </div> */}
