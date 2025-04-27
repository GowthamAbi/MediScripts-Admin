// MedicineManagement.jsx
import React, { useEffect, useState } from 'react';
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
  const [medicineList, setMedicineList] = useState([]);

  const fetchMedicines = async () => {
    try {
      const response = await api.get('/api/v1/medicine/inventory/list');
      const list = response.data.inventory; // Access the 'inventory' field from the response
  
      if (Array.isArray(list)) {
        setMedicineList(list); // Update state with the inventory array
      } else {
        console.error('Fetched data is not an array:', list);
        setMedicineList([]);  // Optionally set an empty list if data is not in expected format
      }
  
      console.log('Fetched Medicine List:', list);
    } catch (error) {
      console.error('Error fetching medicines:', error);
      setMedicineList([]);  // Set empty list in case of error
    }
  };
  
  

useEffect(() => {
  console.log('Updated Medicine List:', medicineList); // Log updated state
}, [medicineList]); // Triggered whenever medicineList changes



  useEffect(() => {
    fetchMedicines();
  }, []);

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
      medicineId: Date.now().toString(),
    };

    try {
      const response = await api.post('/api/v1/medicine/inventory/add', newMedicine);
      console.log('Add Success:', response.data);
      await fetchMedicines(); // Re-fetch updated medicine list from server
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
          {console.log({"medicne list": medicineList})}
          {Array.isArray(medicineList) ? (
              medicineList.map((medicine, index) => (
                <tr key={medicine.medicineId || index}>
                  <td>{medicine.medicineName}</td>
                  <td>{medicine.medicineType}</td>
                  <td>₹{medicine.medicinePrice}</td>
                  <td className="max-w-[150px] truncate">{medicine.medicineDescription}</td>
                  <td>{medicine.medicineCompany}</td>
                  <td>
                    <img src={medicine.medicineImage} alt="medicine" width="50" />
                  </td>
                  <td>{medicine.medicineQuantity}</td>
                  <td>{new Date(medicine.medicineExpiryDate).toLocaleDateString()}</td>
                  <td>{new Date(medicine.medicineManufactureDate).toLocaleDateString()}</td>
                  <td>{medicine.medicineCategory}</td>
                  <td>{medicine.medicineSubCategory}</td>
                  <td>{medicine.medicineId}</td>
                  <td>{medicine.medicineWtg}</td>
                </tr>
              ))
  ) : (
    <tr><td colSpan="12">No medicines found</td></tr>
  )}
</tbody>



        </table>
      </div>
    </div>
  );
}
