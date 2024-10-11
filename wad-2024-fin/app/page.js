"use client";
import * as React from 'react';
import CustomerCRUD from './components/CustomerCRUD'; // Import the CustomerCRUD component

export default function HomeV2() {
  return (
    <main className="min-h-screen bg-gray-100">
      {/* Main container with padding */}
      <div className="container mx-auto py-10 px-5">
        {/* Header Section */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-blue-800 mb-2 text-center">
            Stock Management App
          </h1>
          <p className="text-center text-lg text-gray-700">
            A simple stock and customer management system.
          </p>
        </header>

        {/* Customer Management Section */}
        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Customer Management
          </h2>
          <p className="text-gray-600 mb-6">
            Manage your customer records: add, update, or delete customers.
          </p>

          {/* CustomerCRUD Component */}
          <div className="mt-6">
            <CustomerCRUD />
          </div>
        </section>

        {/* Footer Section */}
        <footer className="mt-12 text-center text-gray-500">
          <p>&copy; 2024 Stock Management System</p>
        </footer>
      </div>
    </main>
  );
}
