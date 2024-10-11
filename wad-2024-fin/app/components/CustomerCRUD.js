import React, { useState } from "react";
import axios from "axios";
import CustomerList from "./CustomerList";
import CustomerForm from "./CustomerForm";

const CustomerCRUD = () => {
  const [customerToEdit, setCustomerToEdit] = useState(null);

  const handleAddOrUpdateCustomer = (customer) => {
    if (customer._id) {
      axios.put(`/api/customer/${customer._id}`, customer)
        .then(() => alert("Customer updated!"))
        .catch((error) => console.error("Error updating customer:", error));
    } else {
      axios.post("/api/customer", customer)
        .then(() => alert("Customer added!"))
        .catch((error) => console.error("Error adding customer:", error));
    }
    setCustomerToEdit(null);
  };

  const handleEditCustomer = (customer) => {
    setCustomerToEdit(customer);
  };

  const handleDeleteCustomer = (id) => {
    axios.delete(`/api/customer/${id}`)
      .then(() => alert("Customer deleted!"))
      .catch((error) => console.error("Error deleting customer:", error));
  };

  return (
    <div>
      <CustomerList onEdit={handleEditCustomer} onDelete={handleDeleteCustomer} />
      <CustomerForm customerToEdit={customerToEdit} onSubmit={handleAddOrUpdateCustomer} />
    </div>
  );
};

export default CustomerCRUD;
