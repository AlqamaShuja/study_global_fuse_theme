import React from 'react';
import { DollarSign, FileText, Shield, Plane, Heart, Info } from 'lucide-react';

interface FinancialDocumentationData {
  funding_source: string;
  sponsor_details: {
    sponsor_name: string;
    sponsor_relation: string;
    sponsor_cnic: string;
    sponsor_annual_income: string;
  };
  budget_constraints: string;
  bank_statements_submitted: boolean;
  financial_affidavit: boolean;
  visa_rejections: boolean;
  travel_history: string;
  police_clearance_certificate: boolean;
  medical_clearance: boolean;
  medical_conditions: string;
  domicile_certificate_submitted: boolean;
  noc_required: boolean;
  additional_info: string;
}

interface FinancialDocumentationFormProps {
  data: FinancialDocumentationData;
  updateData: (data: Partial<FinancialDocumentationData>) => void;
}

const FinancialDocumentationForm: React.FC<FinancialDocumentationFormProps> = ({ data, updateData }) => {
  const handleInputChange = (field: string, value: string | boolean) => {
    updateData({ [field]: value });
  };

  const handleNestedInputChange = (parent: string, field: string, value: string) => {
    updateData({
      [parent]: {
        ...(data as any)[parent],
        [field]: value
      }
    });
  };

  const fundingSources = [
    'self', 'parent', 'family', 'scholarship', 'education_loan', 
    'employer', 'government', 'mixed_funding', 'other'
  ];

  const budgetRanges = [
    'under_5_lakhs', '5_10_lakhs', '10_20_lakhs', '20_30_lakhs', 
    '30_50_lakhs', '50_plus_lakhs'
  ];

  const relations = [
    'Father', 'Mother', 'Brother', 'Sister', 'Uncle', 'Aunt', 
    'Grandfather', 'Grandmother', 'Guardian', 'Spouse', 'Other'
  ];

  return (
    <div className="space-y-8">
      {/* Financial Information */}
      <div className="bg-green-50 rounded-lg p-6">
        <div className="flex items-center mb-4">
          <DollarSign className="text-green-600 mr-2" size={20} />
          <h3 className="text-lg font-semibold text-gray-900">Financial Information</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Primary Funding Source *
            </label>
            <select
              value={data.funding_source}
              onChange={(e) => handleInputChange('funding_source', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="">Select funding source</option>
              <option value="self">Self-funded</option>
              <option value="parent">Parents</option>
              <option value="family">Family Members</option>
              <option value="scholarship">Scholarship</option>
              <option value="education_loan">Education Loan</option>
              <option value="employer">Employer Sponsored</option>
              <option value="government">Government Funding</option>
              <option value="mixed_funding">Mixed Funding</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Budget Range *
            </label>
            <select
              value={data.budget_constraints}
              onChange={(e) => handleInputChange('budget_constraints', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="">Select budget range</option>
              <option value="under_5_lakhs">Under 5 Lakhs PKR</option>
              <option value="5_10_lakhs">5-10 Lakhs PKR</option>
              <option value="10_20_lakhs">10-20 Lakhs PKR</option>
              <option value="20_30_lakhs">20-30 Lakhs PKR</option>
              <option value="30_50_lakhs">30-50 Lakhs PKR</option>
              <option value="50_plus_lakhs">50+ Lakhs PKR</option>
            </select>
          </div>
        </div>

        <div className="mt-4 p-3 bg-green-100 rounded-lg">
          <p className="text-sm text-green-800">
            <strong>Note:</strong> Budget should include tuition fees, living expenses, travel, and other costs for the entire duration of your studies.
          </p>
        </div>
      </div>

      {/* Sponsor Details */}
      {(data.funding_source === 'parent' || data.funding_source === 'family' || data.funding_source === 'other') && (
        <div className="bg-blue-50 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <Heart className="text-blue-600 mr-2" size={20} />
            <h3 className="text-lg font-semibold text-gray-900">Sponsor Details</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sponsor Name *
              </label>
              <input
                type="text"
                value={data.sponsor_details.sponsor_name}
                onChange={(e) => handleNestedInputChange('sponsor_details', 'sponsor_name', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Full name of sponsor"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Relation to Student *
              </label>
              <select
                value={data.sponsor_details.sponsor_relation}
                onChange={(e) => handleNestedInputChange('sponsor_details', 'sponsor_relation', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select relation</option>
                {relations.map(relation => (
                  <option key={relation} value={relation}>{relation}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sponsor CNIC Number *
              </label>
              <input
                type="text"
                value={data.sponsor_details.sponsor_cnic}
                onChange={(e) => handleNestedInputChange('sponsor_details', 'sponsor_cnic', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="12345-1234567-1"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Annual Income (PKR) *
              </label>
              <input
                type="text"
                value={data.sponsor_details.sponsor_annual_income}
                onChange={(e) => handleNestedInputChange('sponsor_details', 'sponsor_annual_income', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., 2,000,000"
              />
            </div>
          </div>
        </div>
      )}

      {/* Financial Documentation */}
      <div className="bg-purple-50 rounded-lg p-6">
        <div className="flex items-center mb-4">
          <FileText className="text-purple-600 mr-2" size={20} />
          <h3 className="text-lg font-semibold text-gray-900">Financial Documentation Status</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={data.bank_statements_submitted}
                  onChange={(e) => handleInputChange('bank_statements_submitted', e.target.checked)}
                  className="mr-2 h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                />
                <span className="text-sm text-gray-700">Bank statements (6 months) ready</span>
              </label>
            </div>

            <div>
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={data.financial_affidavit}
                  onChange={(e) => handleInputChange('financial_affidavit', e.target.checked)}
                  className="mr-2 h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                />
                <span className="text-sm text-gray-700">Financial affidavit prepared</span>
              </label>
            </div>

            <div>
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={data.domicile_certificate_submitted}
                  onChange={(e) => handleInputChange('domicile_certificate_submitted', e.target.checked)}
                  className="mr-2 h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                />
                <span className="text-sm text-gray-700">Domicile certificate available</span>
              </label>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={data.noc_required}
                  onChange={(e) => handleInputChange('noc_required', e.target.checked)}
                  className="mr-2 h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                />
                <span className="text-sm text-gray-700">NOC (No Objection Certificate) required</span>
              </label>
              <p className="text-xs text-gray-500 ml-6">Required for government employees or specific professions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Travel & Visa History */}
      <div className="bg-orange-50 rounded-lg p-6">
        <div className="flex items-center mb-4">
          <Plane className="text-orange-600 mr-2" size={20} />
          <h3 className="text-lg font-semibold text-gray-900">Travel & Visa History</h3>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="flex items-center cursor-pointer mb-3">
              <input
                type="checkbox"
                checked={data.visa_rejections}
                onChange={(e) => handleInputChange('visa_rejections', e.target.checked)}
                className="mr-2 h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
              />
              <span className="text-sm text-gray-700">I have previous visa rejections</span>
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Travel History
            </label>
            <textarea
              value={data.travel_history}
              onChange={(e) => handleInputChange('travel_history', e.target.value)}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
              placeholder="Describe any previous international travel (countries visited, dates, purpose). Write 'None' if no international travel."
            />
          </div>
        </div>
      </div>

      {/* Medical & Security Clearances */}
      <div className="bg-red-50 rounded-lg p-6">
        <div className="flex items-center mb-4">
          <Shield className="text-red-600 mr-2" size={20} />
          <h3 className="text-lg font-semibold text-gray-900">Medical & Security Clearances</h3>
        </div>
        
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={data.police_clearance_certificate}
                    onChange={(e) => handleInputChange('police_clearance_certificate', e.target.checked)}
                    className="mr-2 h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                  />
                  <span className="text-sm text-gray-700">Police clearance certificate obtained</span>
                </label>
              </div>

              <div>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={data.medical_clearance}
                    onChange={(e) => handleInputChange('medical_clearance', e.target.checked)}
                    className="mr-2 h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                  />
                  <span className="text-sm text-gray-700">Medical examination completed</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Medical Conditions
              </label>
              <textarea
                value={data.medical_conditions}
                onChange={(e) => handleInputChange('medical_conditions', e.target.value)}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                placeholder="List any medical conditions or write 'None'. This information is confidential and used only for appropriate support arrangements."
              />
            </div>
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="bg-indigo-50 rounded-lg p-6">
        <div className="flex items-center mb-4">
          <Info className="text-indigo-600 mr-2" size={20} />
          <h3 className="text-lg font-semibold text-gray-900">Additional Information</h3>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Additional Comments or Special Circumstances
          </label>
          <textarea
            value={data.additional_info}
            onChange={(e) => handleInputChange('additional_info', e.target.value)}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
            placeholder="Provide any additional information that might be relevant to your application, such as special circumstances, achievements, or specific requirements..."
          />
        </div>
      </div>

      {/* Document Checklist */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Required Documents Checklist</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h4 className="font-medium text-gray-800 mb-2">Additional Documents</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Statement of Purpose</li>
              <li>• Letters of Recommendation</li>
              <li>• Work Experience Letters</li>
              <li>• NOC (if applicable)</li>
            </ul>
          </div>
        </div>

        <div className="mt-4 p-4 bg-blue-100 rounded-lg">
          <p className="text-sm text-blue-800">
            <strong>Important:</strong> Document requirements may vary by country and university. We'll provide you with a personalized checklist based on your chosen destination and program.
          </p>
        </div>
      </div>

      {/* Final Declaration */}
      <div className="bg-yellow-50 rounded-lg p-6 border-2 border-yellow-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Declaration</h3>
        
        <div className="space-y-3">
          <p className="text-sm text-gray-700">
            By submitting this application, I declare that:
          </p>
          
          <ul className="text-sm text-gray-700 space-y-2 ml-4">
            <li>• All information provided is true and accurate to the best of my knowledge</li>
            <li>• I understand that false information may result in rejection of my application</li>
            <li>• I authorize the use of this information for university application and visa processing</li>
            <li>• I agree to provide additional documentation as requested</li>
            <li>• I understand the financial commitment involved in studying abroad</li>
          </ul>
          
          <div className="mt-6 p-4 bg-yellow-100 rounded-lg">
            <p className="text-sm text-yellow-800 font-medium">
              Please review all sections carefully before submitting your application. Once submitted, you can still make changes during the consultation process.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialDocumentationForm;