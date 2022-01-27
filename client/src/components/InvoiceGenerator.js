import { useEffect, useState } from "react";
import { Form, Row, Col, Modal } from "react-bootstrap";
import {
  getByBussinessId,
  createCustomer,
  fecthListOfProducs,
  createInvoice,
  fecthData,
  createProduct,
} from "../graphQL";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function InvoiceGenerator() {
  const [projectSum, setProjectSum] = useState("");
  const [projectSumError, setProjectSumError] = useState(false);
  const [client, setClient] = useState("");
  const [clientContactEmail, setClientContactEmail] = useState("");
  const [contactEmailError, setContactEmailError] = useState(false);
  const [invoiceData1, setInvoiceDate1] = useState("");
  const [date1Error, setDate1Error] = useState(false);
  const [invoiceData2, setInvoiceDate2] = useState("");
  const [date2Error, setDate2Error] = useState(false);
  const [total, setTotal] = useState("");
  const [totalError, setTotalError] = useState(false);
  const [deposit, setDeposit] = useState("");
  const [depositError, setDepositError] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [address, setAddress] = useState("");
  const [address2, setAddress2] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [modalError, setModalError] = useState("");
  const [clientDropValues, setClientDropValues] = useState([]);
  const [loader, setLoader] = useState(false);
  const [loader2, setLoader2] = useState(false);

  //15 Days Add Funnction
  function addDays(theDate, days) {
    return new Date(theDate.getTime() + days * 24 * 60 * 60 * 1000);
  }
 
  const addNew = () => {
    setModalShow(true);
    setModalError("");
  };
  const fetchCustomers = async () => {
    try {
      let res = await getByBussinessId();

      if (res?.data?.business?.customers?.edges?.length) {
        setClientDropValues(res?.data?.business?.customers?.edges);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fecthData();
    fetchCustomers();
    // fecthProductsIncomeId()
    fecthListOfProducs();
  }, []);

  const addNewClient = async () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (!companyName.length) {
      return setModalError("Name cannot be empty");
    } else if (!companyEmail.length) {
      return setModalError("Email cannot be empty");
    }
    if (reg.test(companyEmail) === false) {
      return setModalError("Email is Invalid");
    } else {
      setModalError("");
      try {
        let create = await createCustomer(
          companyName,
          companyEmail,
          city,
          zipCode,
          address,
          address2
        );

        if (create?.data?.customerCreate?.inputErrors?.length) {
          toast.error("Something went wrong with your input fields!");
        } else {
          setModalShow(false);
          toast.success("Client Added Successfully!");
          setCompanyEmail("");
          setCompanyName("");
          setCity("");
          setZipCode("");
          setAddress("");
          setAddress2("");
          fetchCustomers();
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const generateInvoice1 = async () => {
    if (!total) {
      setTotalError(true);
    }
    if (!projectSum) {
      setProjectSumError(true);
    }
    if (!clientContactEmail) {
      setContactEmailError(true);
    }
    if (!deposit) {
      setDepositError(true);
    }
    if (!client) {
      return toast.error("Please Select Client");
    }
    if (!invoiceData1) {
      return toast.error("Invoice 1 Issued Date Cannot Empty");
    }
    if (!invoiceData2) {
      return toast.error("Invoice 2 Issued Date Cannot Empty");
    }

    if (
      projectSum.length &&
      client.length &&
      clientContactEmail.length &&
      invoiceData1.length &&
      invoiceData2.length &&
      total.length &&
      deposit.length
    ) {
      try {
        setLoader(true);

        const date1 = new Date(invoiceData1);
        let isoDate = date1?.toISOString();
        let forInvoiceDate = isoDate?.substr(0, 10);

        let i = date1.toISOString().substring(0, 10);
        let isplit = i.split("-");
        let invoiceNumber =
          isplit[1] + isplit[2] + "-" + isplit[0].slice(2, 4) + "-" + "A";

        let dep1 = deposit.slice(0, 2);
        let dep2 = deposit.slice(4, 7);
        // let percentValue = deposit.slice(0, 2);

        let dueDate = new Date(invoiceData1);
        let dueDateWithAdd15 = addDays(dueDate, 15);
        let forInvoiceDueDate = dueDateWithAdd15
          ?.toISOString()
          .substring(0, 10);

        let invoiceDate1Due = new Date(invoiceData1);
        let dueDateWithAdd15s = addDays(invoiceDate1Due, 15);
        let forInvoiceDueDate1 = dueDateWithAdd15s
          ?.toISOString()
          .substring(0, 10);

        let invoiceDate2Due = new Date(invoiceData2);
        let dueDateWithAdd15s2 = addDays(invoiceDate2Due, 15);
        let forInvoiceDueDate2 = dueDateWithAdd15s2
          ?.toISOString()
          .substring(0, 10);

        let depositPerc = (total / 100) * deposit.substring(0, 2);

        let createProducts = await createProduct(projectSum, depositPerc);
        if (
          createProducts?.data?.productCreate?.inputErrors?.length ||
          createProducts?.errors?.length
        ) {
          let errors =
            createProducts?.errors ||
            createProducts?.data?.productCreate?.inputErrors;
          errors?.map((err) => {
            toast.warn(err?.message);
          });
          setLoader(false);
          return false;
        }
        //create Invoice
        let inv = await createInvoice(
          client,
          forInvoiceDate,
          forInvoiceDueDate,
          projectSum,
          depositPerc,
          invoiceNumber,
          total,
          dep1,
          dep2,
          forInvoiceDueDate1,
          forInvoiceDueDate2,
          createProducts?.data?.productCreate?.product?.id
        );
        if (inv?.data?.invoiceCreate?.didSucceed) {
          toast.success("Invoice Created Successfully!");
          setLoader(false);
          let win = window.open(
            inv?.data?.invoiceCreate?.invoice?.pdfUrl,
            "_blank"
          );
          win.focus();
        } else if (inv?.data?.invoiceCreate?.inputErrors?.length) {
          setLoader(false);
          inv?.data?.invoiceCreate?.inputErrors?.map((err) => {
            toast.warn(err?.message);
          });
        } else if (inv?.errors?.length) {
          setLoader(false);
          inv?.errors?.map((err) => {
            toast.warn(err?.message);
          });
        } else {
          toast.warn("Something Went Wrong");
          setLoader(false);
        }
      } catch (error) {
        console.log(error);
        setLoader(false);
      }
    }
  };

  const generateInvoice2 = async () => {
    if (!total) {
      setTotalError(true);
    }
    if (!projectSum) {
      setProjectSumError(true);
    }
    if (!clientContactEmail) {
      setContactEmailError(true);
    }
    if (!deposit) {
      setDepositError(true);
    }
    if (!client) {
      return toast.error("Please Select Client...");
    }
    if (!invoiceData1) {
      return toast.error("Invoice 1 Issued Date Cannot Empty");
    }
    if (!invoiceData2) {
      return toast.error("Invoice 2 Issued Date Cannot Empty");
    }

    if (
      projectSum.length &&
      client.length &&
      clientContactEmail.length &&
      invoiceData1.length &&
      invoiceData2.length &&
      total.length &&
      deposit.length
    ) {
      try {
        setLoader2(true);
        const date2 = new Date(invoiceData2);
        const date1 = new Date(invoiceData1);
        let isoDate2 = date2?.toISOString();
        let forInvoiceDate2 = isoDate2?.substr(0, 10);

        let dep1 = deposit.slice(0, 2);
        let dep2 = deposit.slice(4, 7);

        let dueDate = new Date(invoiceData2);
        let dueDateWithAdd15 = addDays(dueDate, 15);

        let forInvoiceDueDate = dueDateWithAdd15
          ?.toISOString()
          .substring(0, 10);

        let i = date1.toISOString().substring(0, 10);
        let isplit = i.split("-");
        let invoiceNumber2 =
          isplit[1] + isplit[2] + "-" + isplit[0].slice(2, 4) + "-" + "B";

        let depositPerc = (total / 100) * deposit.slice(4, 7);

        let invoiceDate1Due = new Date(invoiceData1);
        let dueDateWithAdd15_l = addDays(invoiceDate1Due, 15);
        let forInvoiceDueDate1 = dueDateWithAdd15_l
          ?.toISOString()
          .substring(0, 10);

        let invoiceDate2Due = new Date(invoiceData2);
        let dueDateWithAdd15_2 = addDays(invoiceDate2Due, 15);
        let forInvoiceDueDate2 = dueDateWithAdd15_2
          ?.toISOString()
          .substring(0, 10);

        let createProducts = await createProduct(projectSum, depositPerc);
        if (
          createProducts?.data?.productCreate?.inputErrors?.length ||
          createProducts?.errors?.length
        ) {
          let errors =
            createProducts?.errors ||
            createProducts?.data?.productCreate?.inputErrors;
          errors?.map((err) => {
            toast.warn(err?.message);
          });
          setLoader2(false);
          return false;
        }
        let inv = await createInvoice(
          client,
          forInvoiceDate2,
          forInvoiceDueDate,
          projectSum,
          depositPerc,
          invoiceNumber2,
          total,
          dep1,
          dep2,
          forInvoiceDueDate1,
          forInvoiceDueDate2,
          createProducts?.data?.productCreate?.product?.id
        );

        if (inv?.data?.invoiceCreate?.didSucceed) {
          setLoader2(false);
          toast.success("Invoice Created Successfully!");
          let win = window.open(
            inv?.data?.invoiceCreate?.invoice?.pdfUrl,
            "_blank"
          );
          win.focus();
        } else if (inv?.data?.invoiceCreate?.inputErrors?.length) {
          setLoader2(false);
          inv?.data?.invoiceCreate?.inputErrors?.map((err) => {
            toast.warn(err?.message);
          });
        } else if (inv?.errors?.length) {
          setLoader2(false);
          inv?.errors?.map((err) => {
            toast.warn(err?.message);
          });
        } else {
          toast.warn("Something Went Wrong");
          setLoader2(false);
        }
      } catch (error) {
        setLoader2(false);
        console.log(error);
      }
    }
  };

  const handleProjetcError = (e) => {
    setProjectSum(e);
    if (!e.length) {
      setProjectSumError(true);
    } else {
      setProjectSumError(false);
    }
  };

  const handleClientEmail = (e) => {
    if (!e.length) {
      setContactEmailError(true);
    } else {
      setContactEmailError(false);
    }
  };
  const handleDate1 = (e) => {
    setInvoiceDate1(e);
    if (!e.length > 0) {
      setDate1Error(true);
    } else {
      setDate1Error(false);
    }
  };
  const handleDate2 = (e) => {
    setInvoiceDate2(e);
    if (!e.length > 0) {
      setDate2Error(true);
    } else {
      setDate2Error(false);
    }
  };
  const handleTotalAmount = (e) => {
    setTotal(e);
    if (!e.length) {
      setTotalError(true);
    } else {
      setTotalError(false);
    }
  };

  const handleDeposit = (e) => {
    setDeposit(e);
    if (!e.length) {
      setDepositError(true);
    } else {
      setDepositError(false);
    }
  };

  const onCientChangeHandler = (value) => {
    if (value) {
      setClient(value.split("-")[0]);
      setClientContactEmail(value.split("-")[1]);
    }
  };

  return (
    <div className="container" id="project_view">
      <ToastContainer />
      <div className="d-flex align-items-baseline">
        <h1>Invoice Generator</h1>
        {/* <button className="edit">Edit</button> */}
      </div>
      <hr />
      <div
        className="row justify-content-md-center"
        style={{ marginTop: "55px" }}
      >
        <div className="col-sm-12 col-md-8">
          <div>
            <h2 className="mt-3">Project Information</h2>

            <Form.Group as={Row} className="mb-3 align-items-center">
              <Form.Label column lg="3">
                Project Summary:
              </Form.Label>
              <Col lg="9">
                <Form.Control
                  type="text"
                  id="p_Sm"
                  value={projectSum}
                  onChange={(e) => handleProjetcError(e.target.value)}
                />
                {projectSumError ? (
                  <span className="text-danger">
                    Project summary field required
                  </span>
                ) : (
                  ""
                )}
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3 align-items-center">
              <Form.Label column lg="3">
                Client:
              </Form.Label>
              <Col lg="9">
                <div className="d-flex align-items-center">
                  <select
                    className="form-control select_cl"
                    onChange={(e) => onCientChangeHandler(e.target.value)}
                  >
                    <option value="">Select Client</option>
                    {clientDropValues?.map((i, ind) => {
                      return (
                        <option
                          value={`${i?.node?.id}-${i?.node?.email}`}
                          key={ind}
                        >
                          {i?.node?.name}
                        </option>
                      );
                    })}
                  </select>
                  <button className="addCl_btn" onClick={addNew}>
                    Add New
                  </button>
                </div>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3 align-items-center">
              <Form.Label column lg="3">
                Client Contact Email:
              </Form.Label>
              <Col lg="9">
                <Form.Control
                  type="email"
                  value={clientContactEmail}
                  onChange={(e) => handleClientEmail(e.target.value)}
                  disabled
                />
                {contactEmailError && (
                  <span className="text-danger">
                    Client contact email field required
                  </span>
                )}
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3 align-items-center">
              <Form.Label column lg="3">
                Invoice 1 Issued Date:
              </Form.Label>
              <Col lg="9">
                <Form.Control
                  type="date"
                  value={invoiceData1}
                  onChange={(e) => handleDate1(e.target.value)}
                />
                {date1Error && (
                  <span className="text-danger">
                    Invoice 1 Issued Date field required
                  </span>
                )}
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3 align-items-center">
              <Form.Label column lg="3">
                Invoice 2 Issued Date:
              </Form.Label>
              <Col lg="9">
                <Form.Control
                  type="date"
                  value={invoiceData2}
                  onChange={(e) => handleDate2(e.target.value)}
                />
                {date2Error && (
                  <span className="text-danger">
                    Invoice 2 Issued Date field required
                  </span>
                )}
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3 align-items-center">
              <Form.Label column lg="3">
                Total Amount:
              </Form.Label>
              <Col lg="9">
                <Form.Control
                  type="number"
                  value={total}
                  onChange={(e) => handleTotalAmount(e.target.value)}
                />
                {totalError && (
                  <span className="text-danger">
                    Total Amount field required
                  </span>
                )}
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3 align-items-center">
              <Form.Label column lg="3">
                Deposit percentage:
              </Form.Label>
              <Col lg="9">
                <select
                  className="form-control select_cl"
                  value={deposit}
                  onChange={(e) => handleDeposit(e.target.value)}
                >
                  <option value="" disabled>
                    %
                  </option>
                  <option>40%, 60%</option>
                  <option>50%, 50%</option>
                </select>
                {depositError && (
                  <span className="text-danger">Please select one</span>
                )}
              </Col>
            </Form.Group>
          </div>
          <hr className="bottom_hr" />
          <div className="btn-grp">
            <button
              className="btn btn-primary"
              style={{ whiteSpace: "nowrap" }}
              onClick={generateInvoice1}
              disabled={loader ? true : false}
            >
              Generate Invoice 1
              {loader ? (
                <span className="spinner-border spinner-border-sm ml-2"></span>
              ) : (
                ""
              )}
            </button>

            <button
              className="ml-4 btn btn-primary"
              style={{ whiteSpace: "nowrap" }}
              onClick={generateInvoice2}
              disabled={loader2 ? true : false}
            >
              Generate Invoice 2
              {loader2 ? (
                <span className="spinner-border spinner-border-sm ml-2"></span>
              ) : (
                ""
              )}
            </button>
          </div>
        </div>
      </div>
      <Modal
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={modalShow}
        onHide={() => setModalShow(false)}
        id="addNewClient"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h1>Add a new client</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modalError && <div class="alert alert-warning">{modalError}</div>}
          <p>Company Name</p>
          <input
            className="form-control"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
          <p>Email</p>
          <input
            className="form-control"
            value={companyEmail}
            onChange={(e) => setCompanyEmail(e.target.value)}
          />
          <p>Address Line 1</p>
          <input
            className="form-control"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <p>Address Line 2</p>
          <input
            className="form-control"
            value={address2}
            onChange={(e) => setAddress2(e.target.value)}
          />
          <p>State</p>
          <input
            className="form-control"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
          <p>City</p>
          <input
            className="form-control"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <p>Zip Code</p>
          <input
            className="form-control"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
          />
          <button className="btn btn-success" onClick={addNewClient}>
            Add New Client
          </button>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default InvoiceGenerator;
