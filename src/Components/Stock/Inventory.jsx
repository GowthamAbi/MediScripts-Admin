// MedicineManagement.jsx
import React, { useState } from 'react';
import api from '../../services/authService';

export default function Inventory() {
  const [medicines, setMedicines] = useState([]);
  const [formData, setFormData] = useState({
    medicineName: '',
    medicineType: '',
    medicinePrice: '',
    medicineDescription: '',
    medicineCompany: '',
    medicineImage: 'https://example.com/default-image.png',
    medicineQuantity: '',
    medicineExpiryDate: '',
    medicineManufactureDate: '',
    medicineCategory: '',
    medicineSubCategory: '',
    medicineId: Date.now().toString(),
    medicineWtg: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newMedicine = {
      ...formData,
      medicineId: Date.now().toString(), // Always generate new ID
    };

    setMedicines([...medicines, newMedicine]);

    try {
      const response = await api.post('/api/v1/medicine/inventory/add', newMedicine);
      console.log('Add Success:', response.data);
    } catch (error) {
      console.error('Error adding medicine:', error);
    }

    setFormData({
      medicineName: '',
      medicineType: '',
      medicinePrice: '',
      medicineDescription: '',
      medicineCompany: '',
      medicineImage: 'https://example.com/default-image.png',
      medicineQuantity: '',
      medicineExpiryDate: '',
      medicineManufactureDate: '',
      medicineCategory: '',
      medicineSubCategory: '',
      medicineId: Date.now().toString(),
      medicineWtg: '',
    });
  };

  const medicineFields = [
    { name: "medicineName", label: 'Medicine Name', type: 'text', placeholder: "Medicine Name", required: true },
    { name: "medicineType", label: 'Medicine Type', type: 'text', placeholder: "Medicine Type", required: true },
    { name: "medicineCategory", label: 'Category', type: 'text', placeholder: "Category", required: true },
    { name: "medicineSubCategory", label: 'Sub-Category', type: 'text', placeholder: "Sub-Category", required: true },
    { name: "medicineWtg", label: 'Weight', type: 'text', placeholder: "Weight", required: true },
    { name: "medicineImage", label: 'Image URL', type: 'text', placeholder: "Image URL", required: true },
    { name: "medicinePrice", label: 'Price', type: 'number', placeholder: "Price", required: true },
    { name: "medicineDescription", label: 'Description', type: 'text', placeholder: "Description", required: true },
    { name: "medicineCompany", label: 'Company Name', type: 'text', placeholder: "Company Name", required: true },
    { name: "medicineQuantity", label: 'Quantity', type: 'number', placeholder: "Quantity", required: true },
    { name: "medicineManufactureDate", label: 'Manufacture Date', type: 'date', placeholder: "Manufacture Date", required: true },
    { name: "medicineExpiryDate", label: 'Expiry Date', type: 'date', placeholder: "Expiry Date", required: true },
  ];

  return (
    <div className='h-screen pt-20 font-serif mx-auto px-4'>
      <h2 className="text-2xl font-bold mb-4 text-center">Add New Medicine</h2>

      {/* Form Section */}
      <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center'>
        <div className="overflow-x-auto w-full">
          <table className="min-w-full border-collapse text-sm" border="1" cellPadding="10">
            <thead>
              <tr className='border-2 border-black bg-gray-100'>
                {medicineFields.map((item, index) => (
                  <th key={index} className='border-2 border-black p-2'>{item.label}</th>
                ))}
                <th className='border-2 border-black p-2'>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className='border-2 border-black'>
                {medicineFields.map((item, index) => (
                  <td key={index} className='border-2 border-black '>
                    <input
                      type={item.type}
                      name={item.name}
                      value={formData[item.name]}
                      onChange={handleChange}
                      placeholder={item.placeholder}
                      required={item.required}
                      className="border rounded px-4 py-2 w-full"
                    />
                  </td>
                ))}
                <td className='p-2'>
                  <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                    Add
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </form>

      {/* Medicine List Section */}
      <h2 className="text-2xl font-bold my-6 text-center">Medicine List</h2>

      <div className="overflow-x-auto w-full">
        <table className="min-w-full border-collapse text-sm" border="1" cellPadding="10">
          <thead>
            <tr className="bg-gray-100">
              <th>Medicine Name</th>
              <th>Type</th>
              <th>Price</th>
              <th>Description</th>
              <th>Company</th>
              <th>Image</th>
              <th>Quantity</th>
              <th>Expiry Date</th>
              <th>Manufacture Date</th>
              <th>Category</th>
              <th>Sub-Category</th>
              <th>Medicine ID</th>
              <th>Weight</th>
            </tr>
          </thead>
          <tbody>
            {medicines.length > 0 ? (
              medicines.map((med, index) => (
                <tr key={index}>
                  <td>{med.medicineName}</td>
                  <td>{med.medicineType}</td>
                  <td>₹{med.medicinePrice}</td>
                  <td className="max-w-[150px] truncate">{med.medicineDescription}</td>
                  <td>{med.medicineCompany}</td>
                  <td>
                    <img src={med.medicineImage} alt="medicine" width="50" />
                  </td>
                  <td>{med.medicineQuantity}</td>
                  <td>{new Date(med.medicineExpiryDate).toLocaleDateString()}</td>
                  <td>{new Date(med.medicineManufactureDate).toLocaleDateString()}</td>
                  <td>{med.medicineCategory}</td>
                  <td>{med.medicineSubCategory}</td>
                  <td>{med.medicineId}</td>
                  <td>{med.medicineWtg}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="13" className="text-center py-4">No Medicines Available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
