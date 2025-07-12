import React, { useState } from 'react';

const App = () => {
  const [occupation, setOccupation] = useState('');
  const [income, setIncome] = useState('');
  const [result, setResult] = useState(null);

const occupations = [
  "চিকিৎসক",
  "শিক্ষক",
  "ইঞ্জিনিয়ার",
  "আইনজীবী",
  "ব্যবসায়ী",
  "কর্মচারী",
  "শিল্পী",
  "রাজনৈতিক ব্যক্তিত্ব",
  "অন্যান্য"
];

  const calculateTenPercent = () => {
    const incomeNum = parseFloat(income);
    if (!isNaN(incomeNum) && incomeNum > 0) {
      const tenPercent = incomeNum * 0.1;
      const remaining = incomeNum - tenPercent;
      setResult({
        tenPercent,
        remaining
      });
    } else {
      setResult(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white">
          <h1 className="text-3xl font-bold text-center">দেশ নেতার ১০%</h1>
          <p className="text-center text-indigo-100 mt-2">আপনার আয়ের ১০% দিয়ে দেশ গড়ার পথে হাঁটুন</p>
        </div>

        <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label className="block text-gray-700 font-medium mb-2">আপনার পেশা</label>
            <select
              value={occupation}
              onChange={(e) => setOccupation(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition duration-200"
            >
              <option value="">পেশা নির্বাচন করুন</option>
              {occupations.map((occ, index) => (
                <option key={index} value={occ}>{occ}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">মাসিক আয় (টাকা)</label>
            <input
              type="number"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
              placeholder="মাসিক আয় লিখুন"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition duration-200"
            />
          </div>
        </div>

        <div className="px-6 pb-6">
          <button
            onClick={calculateTenPercent}
            disabled={!occupation || !income}
            className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition duration-300 transform hover:scale-105 ${
              occupation && income
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700'
                : 'bg-gray-400 cursor-not-allowed'
            }`}
          >
            হিসাব করুন
          </button>
        </div>

        {result && (
          <div className="bg-indigo-50 border-t-2 border-indigo-500 p-6 animate-fade-in">
            <h2 className="text-xl font-bold text-indigo-800 mb-4">ধন্যবাদ!</h2>
       <p className="text-red-600 text-xl md:text-2xl font-bold text-center">
  "দেশ নেতা ১০% কেটে নিয়েছে"
</p>
            <div className="mt-4 space-y-2">
              <p className="flex justify-between">
                <span>আপনার মাসিক আয়:</span>
                <span className="font-medium">{parseFloat(income).toLocaleString()} TK</span>
              </p>
              <p className="flex justify-between">
                <span>১০% দান:</span>
                <span className="font-medium text-red-600">{result.tenPercent.toLocaleString()} TK</span>
              </p>
              <p className="flex justify-between font-bold text-lg pt-2 border-t border-gray-200">
                <span>আপনার কাছে থাকবে:</span>
                <span className="text-green-600">{result.remaining.toLocaleString()} TK</span>
              </p>
            </div>
          </div>
        )}

        <div className="bg-gray-50 px-6 py-4 text-center text-sm text-gray-500">
          <p>2025 সালের দেশ নেতা ১০% প্রোগ্রাম</p>
        </div>
      </div>
    </div>
  );
};

export default App;