import React from 'react';
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import {  Row, } from 'react-bootstrap';
import './vendorRegister.css';
// import {useFormik} from 'formik';
import * as formik from 'formik';
import * as yup from 'yup';

const initialValues ={
   name:"",
   vendorAddress:"",
   contact:"",
}
function TableForm() {
    const { Formik } = formik;

    const schema = yup.object().shape({
        vendorName: yup.string().required(),
        vendorAddress: yup.string().required(),
        username: yup.string().required(),
        contact: yup.string().required(),
        email: yup.string().required(),
        bankName: yup.string().required(),
        accountNumber: yup.string().required(),
        terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
      });
    console.log('prashant ', Formik)
 return (
    <>
    <div>
    
    <Formik
    
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        vendorID: "",
        vendorName: "",
        vendorAddress: "",
        vendorContactPersonName: "",
        vendorContactNumber: "",
        alternateNumber: "",
        vendorEmail: "",
        alternateEmail: "",
        bankName: "",
        bankAccountNumber: "",
        ifscCode: "",
        // state: '',
        // zip: '',
        terms: false,
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <div
          style={{
            padding: "70px 100px",
            border: "1px solid grey",
            margin: "30px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h3>Vendor Registration Form</h3>
          </div>

          <Form noValidate onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Col>
                <table className="table-form">
                  <tbody>
                    <tr className="table-form-body">
                      {/* <Form.Group as={Col} md="4" controlId="validationFormik01"> */}
                      <td className="vertical-line">
                        <Form.Label>Vendor ID:</Form.Label>
                      </td>
                      <td>
                        {" "}
                        <Form.Control
                          type="text"
                          name="vendorID"
                          value={values.vendorID}
                          onChange={handleChange}
                          // isValid={touched.vendorID && !errors.vendorID}
                        />
                      </td>
                    </tr>
                    {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                    {/* </Form.Group> */}
                    {/* <Form.Group as={Col} md="4" controlId="validationFormik02"> */}

                    <tr className="table-form-body">
                      <td className="vertical-line">
                        <Form.Label>Vendor Name :</Form.Label>
                      </td>
                      <td>
                        <Form.Control
                          type="text"
                          name="vendorName"
                          value={values.vendorName}
                          onChange={handleChange}
                          isValid={touched.vendorName && !errors.vendorName}
                        />
                      </td>
                    </tr>

                    {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                    {/* </Form.Group> */}
                    {/* <Form.Group as={Col} md="4" controlId="validationFormikUsername"> */}
                    <tr className="table-form-body">
                      <td className="vertical-line">
                        <Form.Label>Vendor Address:</Form.Label>
                      </td>
                      <td>
                        <InputGroup hasValidation>
                          <Form.Control
                            type="text"
                            placeholder="Vendor Address"
                            aria-describedby="inputGroupPrepend"
                            name="vendorAddress"
                            value={values.vendorAddress}
                            onChange={handleChange}
                            isInvalid={!!errors.vendorAddress}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.vendorAddress}
                          </Form.Control.Feedback>
                        </InputGroup>
                      </td>
                    </tr>

                    <tr className="table-form-body">
                      <td className="vertical-line">
                        <Form.Label>Vendor Contact Person Name:</Form.Label>
                      </td>
                      <td>
                        <InputGroup hasValidation>
                          <Form.Control
                            type="text"
                            placeholder="Vendor Contact Person Name"
                            aria-describedby="inputGroupPrepend"
                            name="vendorContactPersonName"
                            value={values.vendorContactPersonName}
                            onChange={handleChange}
                            isInvalid={!!errors.vendorContactPersonName}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.vendorContactPersonName}
                          </Form.Control.Feedback>
                        </InputGroup>
                      </td>
                    </tr>

                    {/* <div  className='vendor-details'> */}

                    {/* <div className='vendor-details-1'> */}

                    <tr className="table-form-body">
                      <td className="vertical-line">
                        <Form.Label>Vendor Contact Number:</Form.Label>
                      </td>
                      <td>
                        <InputGroup hasValidation>
                          <Form.Control
                            type="number"
                            placeholder="Vendor Contact Number"
                            aria-describedby="inputGroupPrepend"
                            name="vendorContactNumber"
                            value={values.vendorContactNumber}
                            onChange={handleChange}
                            isInvalid={!!errors.vendorContactNumber}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.vendorContactNumber}
                          </Form.Control.Feedback>
                        </InputGroup>
                      </td>
                    </tr>

                    <tr className="table-form-body">
                      <td className="vertical-line">
                        <Form.Label>Vendor Email:</Form.Label>
                      </td>
                      <td>
                        <InputGroup hasValidation>
                          <Form.Control
                            type="email"
                            placeholder="Vendor Email"
                            aria-describedby="inputGroupPrepend"
                            name="vendorEmail"
                            value={values.vendorEmail}
                            onChange={handleChange}
                            isInvalid={!!errors.vendorEmail}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.vendorEmail}
                          </Form.Control.Feedback>
                        </InputGroup>
                      </td>
                    </tr>
                    {/* </div> */}
                    {/* <div className='vendor-details-2'> */}
                    <tr className="table-form-body">
                      <td className="vertical-line">
                        <Form.Label>Alternate No.:</Form.Label>
                      </td>
                      <td>
                        {" "}
                        <Form.Control
                          type="number"
                          name="alternateNumber"
                          value={values.alternateNumber}
                          onChange={handleChange}
                          // isValid={touched.vendorID && !errors.vendorID}
                        />
                      </td>
                    </tr>

                    <tr className="table-form-body">
                      <td className="vertical-line">
                        <Form.Label>Alternate Email.:</Form.Label>
                      </td>
                      <td>
                        {" "}
                        <Form.Control
                          type="email"
                          name="alternateEmail"
                          value={values.alternateEmail}
                          onChange={handleChange}
                          // isValid={touched.vendorID && !errors.vendorID}
                        />
                      </td>
                    </tr>
                    {/* </div> */}
                    {/* </div> */}

                    <tr className="table-form-body">
                      <td className="vertical-line">
                        <Form.Label>Bank Name:</Form.Label>
                      </td>
                      <td>
                        <InputGroup hasValidation>
                          <Form.Control
                            type="text"
                            placeholder="Bank Name"
                            aria-describedby="inputGroupPrepend"
                            name="bankName"
                            value={values.bankName}
                            onChange={handleChange}
                            isInvalid={!!errors.bankName}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.bankName}
                          </Form.Control.Feedback>
                        </InputGroup>
                      </td>
                    </tr>

                    <tr className="table-form-body">
                      <td className="vertical-line">
                        <Form.Label>Bank Acc No:</Form.Label>
                      </td>
                      <td>
                        <InputGroup hasValidation>
                          <Form.Control
                            type="number"
                            placeholder="Bank Acc No."
                            aria-describedby="inputGroupPrepend"
                            name="bankAccountNumber"
                            value={values.bankAccountNumber}
                            onChange={handleChange}
                            isInvalid={!!errors.bankAccountNumber}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.bankAccountNumber}
                          </Form.Control.Feedback>
                        </InputGroup>
                      </td>
                    </tr>

                    <tr className="table-form-body">
                      <td className="vertical-line">
                        <Form.Label>IFSC CODE:</Form.Label>
                      </td>
                      <td>
                        <InputGroup hasValidation>
                          <Form.Control
                            type="text"
                            placeholder="IFSC NO."
                            aria-describedby="inputGroupPrepend"
                            name="ifscCode"
                            value={values.ifscCode}
                            onChange={handleChange}
                            isInvalid={!!errors.ifscCode}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.ifscCode}
                          </Form.Control.Feedback>
                        </InputGroup>
                      </td>
                    </tr>
                    <tr className="table-form-body">
                      <td className="vertical-line">
                        <label for="exampleFormControlFile1">
                          Pan Card:
                        </label>
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Pan No."
                          name="panCard"
                        />
                        <input
                          type="file"
                          className="mx-2"
                          id="exampleFormControlFile1"
                        />
                        {/* form-control-file */}
                      </td>
                    </tr>

                    <tr className="table-form-body">
                      <td className="vertical-line">
                        <label for="exampleFormControlFile1">
                          GST Certificate:
                        </label>
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="GSTIN No."
                          name="gstIn"
                        />
                        <input
                          type="file"
                          className="mx-2"
                          id="exampleFormControlFile1"
                        />
                      </td>
                    </tr>
                    <tr className="table-form-body">
                      <td className="vertical-line">
                        <label for="exampleFormControlFile1">
                          Incorporation Certificate:
                        </label>
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Incorporation Certificate"
                          name="incorporationCertificate"
                        />
                        <input
                          type="file"
                          className="mx-2"
                          id="exampleFormControlFile1"
                        />
                      </td>
                    </tr>
                    <tr className="table-form-body">
                      <td className="vertical-line">
                        <label for="exampleFormControlFile1">
                          Cancelled Cheque :
                        </label>
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Cancelled Cheque No."
                          name="cancelledCheque"
                        />
                        <input
                          type="file"
                          className="mx-2"
                          id="exampleFormControlFile1"
                        />
                      </td>
                    </tr>
                    <tr className="table-form-body">
                      <td className="vertical-line">
                        <label for="exampleFormControlFile1">MOA:</label>
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="MOA No."
                          name="moaNo"
                        />
                        <input
                          type="file"
                          className="mx-2"
                          id="exampleFormControlFile1"
                        />
                      </td>
                    </tr>
                    <tr className="table-form-body">
                      <td className="vertical-line">
                        <label for="exampleFormControlFile1">AOA:</label>
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="AOA No."
                          name="aoaNo"
                        />
                        <input
                          type="file"
                          className="mx-2"
                          id="exampleFormControlFile1"
                        />
                      </td>
                    </tr>
                    <tr className="table-form-body">
                      <td className="vertical-line">
                        <label for="exampleFormControlFile1">
                          Company Profile:
                        </label>
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Company Profile"
                          name="companyProfile"
                        />
                        <input
                          type="file"
                          className="mx-2"
                          id="exampleFormControlFile1"
                        />
                      </td>
                    </tr>
                    <tr className="table-form-body">
                      <td className="vertical-line">
                        <label for="exampleFormControlFile1">
                          MSME File:
                        </label>
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="MEME File No."
                          name="memeNo"
                        />
                        <input
                          type="file"
                          className="mx-2"
                          id="exampleFormControlFile1"
                        />
                      </td>
                    </tr>
                    {/* </Form.Group> */}
                  </tbody>
                </table>
              </Col>
            </Row>
            {/* <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationFormik03">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            placeholder="City"
            name="city"
            value={values.city}
            onChange={handleChange}
            isInvalid={!!errors.city}
          />

          <Form.Control.Feedback type="invalid">
            {errors.city}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationFormik04">
          <Form.Label>State</Form.Label>
          <Form.Control
            type="text"
            placeholder="State"
            name="state"
            value={values.state}
            onChange={handleChange}
            isInvalid={!!errors.state}
          />
          <Form.Control.Feedback type="invalid">
            {errors.state}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationFormik05">
          <Form.Label>Zip</Form.Label>
          <Form.Control
            type="text"
            placeholder="Zip"
            name="zip"
            value={values.zip}
            onChange={handleChange}
            isInvalid={!!errors.zip}
          />

          <Form.Control.Feedback type="invalid">
            {errors.zip}
          </Form.Control.Feedback>
        </Form.Group>
      </Row> */}
            {/* <Form.Group className="mb-3">
              <Form.Check
                required
                name="terms"
                label="Agree to terms and conditions"
                onChange={handleChange}
                isInvalid={!!errors.terms}
                feedback={errors.terms}
                feedbackType="invalid"
                id="validationFormik0"
              />
            </Form.Group> */}
            <div className="btn">
            <Button type="submit">Save</Button>
            </div>
          </Form>
        </div>
      )}
    
    </Formik>
    </div>
 </>
  );
}

export default TableForm;




