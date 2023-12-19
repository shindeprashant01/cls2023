import React,{useState} from "react";
import { CgCalculator } from "react-icons/cg";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// import './productDetails.css';

const ProductDetails = () => {

const[product, setProduct] = useState([
  {    
    address:"",
    hsncode:'',
    model:'',
    description:'',
    uom:'',
    make:'',
    quntity:'',
    rate:'',
    value:'',
    gst:'',
    gstpercentage:'',
    productValue:'',
}])
const [number, setNumber]= useState();
const [number2, setNumber2]= useState();
const [total, setTotal]= useState(number*number2);
const[selectedValue, setSelectedValue]= useState();
const [result, setResult] = useState(total + selectedValue);
// const [final,setFinal]= useState(total + product.gstpercentage)
// const [number3, setNumber3]= useState();
// const [result, setResult] = useState(0);



const handleInputChange = (e,index) => {
  const { name, value } = e.target;
  const productList = [...product];
  productList[index][name] = value;
  setProduct(productList);

};
const handleAddClick = () => {
  const abcd =[...product,[{
    address:"",
    hsncode:'',
    model:'',
    description:'',
    uom:'',
    make:'',
    quntity:'',
    rate:'',
    value:'',
    gst:'',
    gstpercentage:'',
    productValue:'',
  }]]
  setProduct(abcd);
  // setResult('');
  setTotal('');
};

const addTotal=()=>{
  setTotal(number*number2)
}

const handleSelectChange = (e) => {
  setSelectedValue(parseInt(e.target.value));
};

const calculate = () => {
  const selected = parseFloat(selectedValue);
  const input = parseFloat(total);

  if (!isNaN(selected) && !isNaN(input)) {
    const calculatedResult = (selected/100) * input;
    const totalCalculatedResult = calculatedResult + input ;
    setResult(totalCalculatedResult);
  } else {
    setResult('Please enter valid values.');
  }
};
// const addFinal=()=>{

// setFinal(total + product.gstpercentage)
// }

// const calculatedSum = () => {
//   Convert input values to numbers (you can also validate input here)
//   const num1 = parseFloat(number);
//   const num2 = parseFloat(number2);
//   const num3 = parseFloat(number3);

//   Calculate the sum with percentages (adjust percentages as needed)
//   const result = num1 + num2 + (num3 * 0.10);  Example: 10% of number3 is added to value1

//   Update the state with the result
//   setResult(result);
// };
// console.log(result)

  return (
    <>
    <div>
      <div className="tags">
        <h2>Products</h2>
        <hr />    
      </div>
      {product.map((data,i)=>{
        return(
      <div>
      <div className="product-details">
        <div className="product-sub-details">
          <div className="input-container-vendor-detail">
            <label className="label-pforms">Product Details:</label>
            <input
              type="text"
              className="form-control input-details-vendor-detail"
              placeholder="Address"
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
              name="address"
              onChange={(e) => handleInputChange(e, i)}
            
          
            />
          </div>
          <div className="input-container-vendor-detail">
            <label className="label-pforms">HSN/SAC Codes:</label>
            <input
              type="text"
              className="form-control input-details-vendor-detail"
              placeholder="HSN/SAC Codes"
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
              name="hsncode"
              onChange={(e) => handleInputChange(e, i)}
            />
          </div>
          <div className="input-container-vendor-detail">
            <label className="label-pforms">Model:</label>
            <input
              type="text"
              className="form-control input-details-vendor-detail"
              placeholder="Model"
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
              name="model"
              onChange={(e) => handleInputChange(e, i)}
            />
          </div>
          <div className="input-container-vendor-detail">
            <label className="label-pforms">Description:</label>
            <input
              type="text"
              className="form-control input-details-vendor-detail"
              placeholder="Description"
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
              name="description"
              onChange={(e) => handleInputChange(e, i)}
            />
          </div>
          <div className="input-container-vendor-detail">
            <label className="label-pforms">UOM:</label>
            <input
              type="text"
              className="form-control input-details-vendor-detail"
              placeholder="UOM"
              aria-label="Large"
              name="uom"
              id="uom"
              aria-describedby="inputGroup-sizing-sm"
              onChange={(e) => handleInputChange(e, i)}
            />
          </div>
          <div className="input-container-vendor-detail">
            <label className="label-pforms">Make:</label>
            <input
              type="text"
              className="form-control input-details-vendor-detail"
              placeholder="Make"
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
              name="make"
              id="make"
              onChange={(e) => handleInputChange(e, i)}
            />
          </div>
          <div className="input-container-vendor-detail">
            <label className="label-pforms">Qunatity:</label>
            <input
              type="number"
              className="form-control input-details-vendor-detail"
              placeholder="Quantity"
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
              name="quntity"
              id="quntity"
         onChange={e=>setNumber(+e.target.value)}
              value={data.number}
            />
          </div>
          <div className="input-container-vendor-detail">
            <label className="label-pforms">Rate:</label>
            <input
              type="number"
              className="form-control input-details-vendor-detail"
              placeholder="Rate"
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
              name="rate"
              id="rate"
              onChange={e=>setNumber2(+e.target.value)}
              value={data.number2}
            />
          </div>
          <div className="input-container-vendor-detail">
            <label className="label-pforms">Value:</label>
            <input
              type="number"
              className="form-control input-details-vendor-detail"
              placeholder="Value"
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
              name="value"
              id="value"
              // onChange={(e) => handleInputChange(e, i)}
              value={total}
               onKeyUp={addTotal}
            />
          </div>

          <div className="input-container-vendor-detail">
            <label className="labels-pforms-unique">GST Type:</label>
            <div className="input-div-pforms">
              <Form.Select aria-label="Default select example input-div-pforms-label" 
                            name="gst"
                            onChange={(e) => handleInputChange(e, i)}>
                <option>Open this select menu</option>
                <option value="1">GST</option>
                <option value="2">IGST</option>
              </Form.Select>
            </div>
          </div>

          <div className="input-container-vendor-detail">
            <label className="labels-pforms-unique">GST %:</label>
            <div className="input-div-pforms">
              <Form.Select aria-label="Default select example input-div-pforms-label"
              name="gstpercentage"
              id="gstpercentage"
              value={selectedValue}
              onChange={handleSelectChange }
             >
                <option>Open this select menu</option>
                <option value="5">5%</option>
                <option value="8">8%</option>
                <option value="10">10%</option>
                <option value="18">18%</option>
                <option value="23">23%</option>
              </Form.Select>
            </div>
          </div>

          <div className="input-container-vendor-detail">
                      <label className="label-pforms">Product Value:</label>
                      <input
                        type="text"
                        className="form-control input-details-vendor-detail-unique"
                        placeholder="Product Value"
                        aria-label="Large"
                        aria-describedby="inputGroup-sizing-sm"
                        name="productValue"
                        id="productValue"
                    value={result}
                    
              // onKeyDown={addFinal}
                      
                      />
                      <span>
                      <CgCalculator 
                      onClick={calculate} 
                      className="various-icon" />
                      </span>
                    </div>
        </div>
        
  
      </div>
    
   
    
      </div>
      )
    } )}
    </div>
       <div className="btn-submit-pform">
       <Button variant="primary" onClick={handleAddClick}> Add Products</Button>
     </div>
     </>
   
  );
};

export default ProductDetails;

