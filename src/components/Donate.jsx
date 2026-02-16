import React, { useState } from 'react';
import { FaRupeeSign, FaCreditCard, FaPhone } from 'react-icons/fa';
import { createDonation } from '../services/api'; // FIXED IMPORT

const Donate = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    amount: 500,
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const presetAmounts = [500, 1000, 2000, 5000, 10000];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAmountClick = (amount) => {
    setFormData({
      ...formData,
      amount: amount,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.amount) {
      alert('Please fill all required fields');
      return;
    }

    setLoading(true);
    try {
      const response = await createDonation(formData);
      alert('Donation submitted successfully!');
      console.log('Donation created:', response.data);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        amount: 500,
        message: '',
      });
    } catch (error) {
      alert('Failed to submit donation');
      console.error('Error creating donation:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="donate" className="py-16 bg-gradient-to-b from-white to-primary-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Make a Difference Today
            </h2>
            <p className="text-neutral-600">
              Your donation helps us provide free skill training to disabled individuals and women
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Donation Form */}
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label className="block text-neutral-700 font-medium mb-2">
                    Select Donation Amount (₹)
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
                    {presetAmounts.map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        onClick={() => handleAmountClick(amount)}
                        className={`py-3 rounded-lg border-2 font-medium transition-all ${
                          formData.amount === amount
                            ? 'border-primary-500 bg-primary-50 text-primary-600'
                            : 'border-neutral-300 hover:border-primary-400'
                        }`}
                      >
                        ₹{amount.toLocaleString()}
                      </button>
                    ))}
                    <button
                      type="button"
                      onClick={() => handleAmountClick(0)}
                      className="py-3 rounded-lg border-2 border-neutral-300 hover:border-primary-400 col-span-2 sm:col-span-1"
                    >
                      Custom
                    </button>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                      <FaRupeeSign className="text-neutral-400" />
                    </div>
                    <input
                      type="number"
                      name="amount"
                      value={formData.amount || ''}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 border border-neutral-300 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-300"
                      placeholder="Enter custom amount"
                      min="1"
                    />
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:border-primary-500"
                      placeholder="Full Name *"
                      required
                    />
                  </div>
                  
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:border-primary-500"
                      placeholder="Email Address *"
                      required
                    />
                  </div>
                  
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                      <FaPhone className="text-neutral-400" />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 border border-neutral-300 rounded-lg focus:border-primary-500"
                      placeholder="Phone Number"
                    />
                  </div>
                  
                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:border-primary-500"
                      placeholder="Optional message or dedication"
                      rows="3"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary-500 hover:bg-primary-600 text-white py-4 rounded-lg font-semibold text-lg transition-colors disabled:opacity-50"
                >
                  {loading ? 'Processing...' : 'Donate Now'}
                </button>
                
                <p className="text-sm text-neutral-500 text-center mt-4">
                  All donations are eligible for tax exemption under 80G
                </p>
              </form>
            </div>

            {/* Bank Details */}
            <div className="bg-primary-600 text-white rounded-2xl p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-6">Bank Transfer Details</h3>
              
              <div className="space-y-6">
                <div className="bg-primary-700 rounded-xl p-5">
                  <div className="flex items-center mb-3">
                    <FaCreditCard className="text-xl mr-3" />
                    <h4 className="font-bold text-lg">Bank Information</h4>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-primary-200">Account Name:</span>
                      <span className="font-medium">Culture Foundation</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-primary-200">Account Number:</span>
                      <span className="font-medium">XXXXXX1320</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-primary-200">Bank:</span>
                      <span className="font-medium">ICICI BANK</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-primary-200">Branch:</span>
                      <span className="font-medium">Rajahmundry</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-primary-200">IFSC Code:</span>
                      <span className="font-medium">ICIC0006315</span>
                    </div>
                  </div>
                </div>

                <div className="bg-green-600 rounded-xl p-5">
                  <h4 className="font-bold text-lg mb-3">Tax Benefits</h4>
                  <p className="text-green-100">
                    All donations to Culture Foundation are eligible for 50% tax exemption 
                    under Section 80G of the Income Tax Act, 1961.
                  </p>
                </div>

                <div className="bg-secondary-orange rounded-xl p-5">
                  <h4 className="font-bold text-lg mb-3">How Your Donation Helps</h4>
                  <ul className="space-y-2 text-orange-100">
                    <li>• Provides skill training to 1 disabled individual</li>
                    <li>• Funds vocational tools and equipment</li>
                    <li>• Supports women entrepreneurship programs</li>
                    <li>• Creates sustainable livelihood opportunities</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donate;