import React, { useState, useEffect } from "react";

const CustomerForm = ({ customerToEdit, onSubmit }) => {
  const [customer, setCustomer] = useState({
    name: "",
    dateOfBirth: "",
    memberNumber: "",
    interests: ""
  });

  useEffect(() => {
    if (customerToEdit) {
      setCustomer(customerToEdit);
    }
  }, [customerToEdit]);

  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(customer);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={customer.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Date of Birth</label>
        <input
          type="date"
          name="dateOfBirth"
          value={customer.dateOfBirth}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Member Number</label>
        <input
          type="number"
          name="memberNumber"
          value={customer.memberNumber}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Interests</label>
        <input
          type="text"
          name="interests"
          value={customer.interests}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">{customerToEdit ? "Update" : "Add"} Customer</button>
    </form>
  );
};

export default CustomerForm;
