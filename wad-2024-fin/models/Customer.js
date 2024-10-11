import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  memberNumber: {
    type: Number,
    required: true,
    unique: true // Ensure that each member has a unique number
  },
  interests: {
    type: String,
    required: true
  }
});

// Check if the model already exists; if not, create a new model
const Customer = mongoose.models.customer || mongoose.model("customer", customerSchema);

export default Customer;
