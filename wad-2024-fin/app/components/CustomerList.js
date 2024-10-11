import React from "react";
import Link from "next/link";

const CustomerList = ({ customers = [], onEdit, onDelete }) => {
  // Ensure customers is an array by providing a default value of an empty array
  return (
    <div className="customer-list">
      <h2 className="text-2xl font-bold mb-4">Customer List</h2>
      <ul>
        {/* Safely map over customers if it's an array */}
        {customers.length > 0 ? (
          customers.map((customer) => (
            <li key={customer._id} className="mb-2 flex items-center">
              {/* Link to the customer detail page */}
              <Link href={`/customer/${customer._id}`}>
                <a className="text-blue-600 hover:underline mr-4">
                  {customer.name} - {customer.interests}
                </a>
              </Link>

              {/* Edit Button */}
              <button
                onClick={() => onEdit(customer)}
                className="ml-auto bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-1 px-3 rounded"
              >
                Edit
              </button>

              {/* Delete Button */}
              <button
                onClick={() => onDelete(customer._id)}
                className="ml-4 bg-red-500 hover:bg-red-400 text-white font-semibold py-1 px-3 rounded"
              >
                Delete
              </button>
            </li>
          ))
        ) : (
          <p>No customers available</p> // Display this when there are no customers
        )}
      </ul>
    </div>
  );
};

export default CustomerList;
