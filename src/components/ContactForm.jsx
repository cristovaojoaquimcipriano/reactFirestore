import React, { useState, useEffect } from "react";

const ContactForm = ({ addOrEdit, currentId, contacts }) => {
  const [values, setValues] = useState({
    fullname: "",
    mobile: "",
    email: "",
    address: "",
  });
  useEffect(() => {
    if (!currentId) {
      setValues({
        fullname: "",
        mobile: "",
        email: "",
        address: "",
      });
    } else
      setValues({ ...contacts.find((contact) => contact.id === currentId) });
  }, [currentId, contacts]);

  const handleChange = ({ currentTarget: input }) => {
    const { name, value } = input;
    setValues({ ...values, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addOrEdit(values);
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">
            <i className="fa fa-user"></i>
          </span>
        </div>
        <input
          type="text"
          name="fullname"
          className="form-control"
          value={values.fullname}
          placeholder="Full Name"
          onChange={handleChange}
        />
      </div>

      <div className="form-row">
        <div className="input-group mb-3 col-md-6">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              <i className="fa fa-mobile"></i>
            </span>
          </div>
          <input
            type="text"
            name="mobile"
            value={values.mobile}
            className="form-control"
            placeholder="Mobile"
            onChange={handleChange}
          />
        </div>

        <div className="input-group mb-3 col-md-6">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              <i className="fa fa-envelope"></i>
            </span>
          </div>
          <input
            type="text"
            name="email"
            value={values.email}
            className="form-control"
            placeholder="Email"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="form-group">
        <textarea
          className="form-control"
          placeholder="Address"
          value={values.address}
          name="address"
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="form-group">
        <input
          type="submit"
          value={currentId ? "Update" : "save"}
          className="btn btn-primary btn-block"
        />
      </div>
    </form>
  );
};

export default ContactForm;
