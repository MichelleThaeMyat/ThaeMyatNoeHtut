import Customer from "@/models/Customer";
import dbConnect from "@/lib/db";

// GET a single customer by ID
export async function GET(req, res) {
  await dbConnect();
  const { id } = req.query; // Access the customer ID from the query params

  try {
    const customer = await Customer.findById(id);
    if (!customer) {
      return new Response(JSON.stringify({ error: "Customer not found" }), { status: 404 });
    }
    return new Response(JSON.stringify(customer), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Error fetching customer" }), { status: 500 });
  }
}
