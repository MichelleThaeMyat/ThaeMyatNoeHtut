"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/router"; // To access the route params

export default function CustomerDetailPage({ params }) {
  const [customer, setCustomer] = useState(null);
  const APIBASE = process.env.NEXT_PUBLIC_API_URL; // Base API URL

  // Fetch customer details based on the ID in the URL
  useEffect(() => {
    async function fetchCustomer() {
      const response = await fetch(`${APIBASE}/customer/${params.id}`);
      const data = await response.json();
      setCustomer(data);
    }

    if (params.id) {
      fetchCustomer();
    }
  }, [params.id]);

  if (!customer) {
    return <p>Loading customer details...</p>;
  }

  return (
    <div className="container mx-auto py-10 px-5">
      <h1 className="text-3xl font-bold text-blue-800 mb-5">Customer Details</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <p className="text-xl"><strong>Name:</strong> {customer.name}</p>
        <p className="text-lg"><strong>Date of Birth:</strong> {new Date(customer.dateOfBirth).toLocaleDateString()}</p>
        <p className="text-lg"><strong>Member Number:</strong> {customer.memberNumber}</p>
        <p className="text-lg"><strong>Interests:</strong> {customer.interests}</p>
      </div>
    </div>
  );
}
