// MedicineManagement.jsx
import React, { useState } from 'react';
import api from '../../../services/authService';

export default function Outward() {
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
      medicineId: Date.now().toString(), // Always generate new ID on submit
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
    <div style={{ padding: '20px' }} >
      <h2>Add New Medicine</h2>
      <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center'>
      
        <table border="1" width="100%" cellPadding="10" > 
          <thead>
            <tr className='border-2 border-black'>
              {medicineFields.map((item, index) => (
                <th key={index} className='border-2 border-black ' >{item.label}</th>
              ))}
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-2 border-black'>
              {medicineFields.map((item, index) => (
                <td key={index} className='border-2 border-black'>
                  <input
                    type={item.type}
                    name={item.name}
                    value={formData[item.name]}
                    onChange={handleChange}
                    placeholder={item.placeholder}
                    required={item.required}
                  />
                </td>
              ))}
              <td>
                <button type="submit">Add</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>

      <h2>Medicine List</h2>
      <table border="1" width="100%" cellPadding="10">
        <thead>
          <tr>
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
                <td>{med.medicineDescription}</td>
                <td>{med.medicineCompany}</td>
                <td><img src={med.medicineImage} alt="medicine" width="50" /></td>
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
              <td colSpan="13" align="center">No Medicines Available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
