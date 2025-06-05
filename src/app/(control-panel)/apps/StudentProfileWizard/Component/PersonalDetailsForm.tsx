import React from "react";
import { User, Phone, Mail, MapPin, AlertCircle } from "lucide-react";

interface PersonalDetailsData {
  full_name: { first_name: string; last_name: string };
  father_name: string;
  date_of_birth: string;
  gender: string;
  cnic_number: string;
  phone: string;
  email: string;
  permanent_address: {
    street: string;
    city: string;
    province_of_domicile: string;
    postal_code: string;
  };
  emergency_contact: {
    name: string;
    relation: string;
    phone: string;
  };
  residence_country: string;
  passport_details: {
    passport_country: string;
    passport_number: string;
    passport_expiry: string;
  };
}

interface PersonalDetailsFormProps {
  data: PersonalDetailsData;
  updateData: (data: Partial<PersonalDetailsData>) => void;
}

const PersonalDetailsForm: React.FC<PersonalDetailsFormProps> = ({
  data,
  updateData,
}) => {
  const handleInputChange = (field: string, value: string) => {
    if (field.includes(".")) {
      const [parent, child] = field.split(".");
      updateData({
        [parent]: {
          ...(data as any)[parent],
          [child]: value,
        },
      });
    } else {
      updateData({ [field]: value });
    }
  };

  const handleNestedInputChange = (
    parent: string,
    field: string,
    value: string
  ) => {
    updateData({
      [parent]: {
        ...(data as any)[parent],
        [field]: value,
      },
    });
  };

  const provinces = [
    "Punjab",
    "Sindh",
    "Khyber Pakhtunkhwa",
    "Balochistan",
    "Gilgit-Baltistan",
    "Azad Kashmir",
    "Islamabad Capital Territory",
  ];

  const countries = [
    "Pakistan",
    "India",
    "Bangladesh",
    "Afghanistan",
    "Iran",
    "China",
    "Saudi Arabia",
    "UAE",
    "Other",
  ];

  return (
    <div className="space-y-8">
      {/* Basic Information */}
      <div className="bg-blue-50 rounded-lg p-6">
        <div className="flex items-center mb-4">
          <User className="text-blue-600 mr-2" size={20} />
          <h3 className="text-lg font-semibold text-gray-900">
            Basic Information
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              First Name *
            </label>
            <input
              type="text"
              value={data.full_name.first_name}
              onChange={(e) =>
                handleNestedInputChange(
                  "full_name",
                  "first_name",
                  e.target.value
                )
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter first name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Last Name *
            </label>
            <input
              type="text"
              value={data.full_name.last_name}
              onChange={(e) =>
                handleNestedInputChange(
                  "full_name",
                  "last_name",
                  e.target.value
                )
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter last name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Father's Name *
            </label>
            <input
              type="text"
              value={data.father_name}
              onChange={(e) => handleInputChange("father_name", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter father's name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Date of Birth *
            </label>
            <input
              type="date"
              value={data.date_of_birth}
              onChange={(e) =>
                handleInputChange("date_of_birth", e.target.value)
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Gender *
            </label>
            <select
              value={data.gender}
              onChange={(e) => handleInputChange("gender", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              CNIC Number *
            </label>
            <input
              type="text"
              value={data.cnic_number}
              onChange={(e) => handleInputChange("cnic_number", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="12345-1234567-1"
            />
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-green-50 rounded-lg p-6">
        <div className="flex items-center mb-4">
          <Phone className="text-green-600 mr-2" size={20} />
          <h3 className="text-lg font-semibold text-gray-900">
            Contact Information
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              value={data.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="+92 300 1234567"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              value={data.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="example@email.com"
            />
          </div>
        </div>
      </div>

      {/* Permanent Address */}
      <div className="bg-purple-50 rounded-lg p-6">
        <div className="flex items-center mb-4">
          <MapPin className="text-purple-600 mr-2" size={20} />
          <h3 className="text-lg font-semibold text-gray-900">
            Permanent Address
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Street Address *
            </label>
            <input
              type="text"
              value={data.permanent_address.street}
              onChange={(e) =>
                handleNestedInputChange(
                  "permanent_address",
                  "street",
                  e.target.value
                )
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="House No, Street Name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              City *
            </label>
            <input
              type="text"
              value={data.permanent_address.city}
              onChange={(e) =>
                handleNestedInputChange(
                  "permanent_address",
                  "city",
                  e.target.value
                )
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Enter city"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Province of Domicile *
            </label>
            <select
              value={data.permanent_address.province_of_domicile}
              onChange={(e) =>
                handleNestedInputChange(
                  "permanent_address",
                  "province_of_domicile",
                  e.target.value
                )
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="">Select Province</option>
              {provinces.map((province) => (
                <option key={province} value={province}>
                  {province}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Postal Code
            </label>
            <input
              type="text"
              value={data.permanent_address.postal_code}
              onChange={(e) =>
                handleNestedInputChange(
                  "permanent_address",
                  "postal_code",
                  e.target.value
                )
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="12345"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Residence Country *
            </label>
            <select
              value={data.residence_country}
              onChange={(e) =>
                handleInputChange("residence_country", e.target.value)
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Emergency Contact */}
      <div className="bg-orange-50 rounded-lg p-6">
        <div className="flex items-center mb-4">
          <AlertCircle className="text-orange-600 mr-2" size={20} />
          <h3 className="text-lg font-semibold text-gray-900">
            Emergency Contact
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Contact Name *
            </label>
            <input
              type="text"
              value={data.emergency_contact.name}
              onChange={(e) =>
                handleNestedInputChange(
                  "emergency_contact",
                  "name",
                  e.target.value
                )
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="Full name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Relation *
            </label>
            <select
              value={data.emergency_contact.relation}
              onChange={(e) =>
                handleNestedInputChange(
                  "emergency_contact",
                  "relation",
                  e.target.value
                )
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            >
              <option value="">Select Relation</option>
              <option value="Father">Father</option>
              <option value="Mother">Mother</option>
              <option value="Brother">Brother</option>
              <option value="Sister">Sister</option>
              <option value="Uncle">Uncle</option>
              <option value="Aunt">Aunt</option>
              <option value="Guardian">Guardian</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              value={data.emergency_contact.phone}
              onChange={(e) =>
                handleNestedInputChange(
                  "emergency_contact",
                  "phone",
                  e.target.value
                )
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="+92 300 1234567"
            />
          </div>
        </div>
      </div>

      {/* Passport Details */}
      <div className="bg-indigo-50 rounded-lg p-6">
        <div className="flex items-center mb-4">
          <Mail className="text-indigo-600 mr-2" size={20} />
          <h3 className="text-lg font-semibold text-gray-900">
            Passport Details
          </h3>
          <span className="ml-2 text-sm text-gray-500">
            (Required for international students)
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Passport Country
            </label>
            <select
              value={data.passport_details.passport_country}
              onChange={(e) =>
                handleNestedInputChange(
                  "passport_details",
                  "passport_country",
                  e.target.value
                )
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              <option value="">Select Country</option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Passport Number
            </label>
            <input
              type="text"
              value={data.passport_details.passport_number}
              onChange={(e) =>
                handleNestedInputChange(
                  "passport_details",
                  "passport_number",
                  e.target.value
                )
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="X1234567"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Passport Expiry Date
            </label>
            <input
              type="date"
              value={data.passport_details.passport_expiry}
              onChange={(e) =>
                handleNestedInputChange(
                  "passport_details",
                  "passport_expiry",
                  e.target.value
                )
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetailsForm;
