import React from "react";
import {
  Heart,
  Target,
  Globe,
  University,
  Calendar,
  Users,
} from "lucide-react";

interface PreferencesData {
  preferred_course: string;
  specialization: string;
  preferred_country: string;
  preferred_universities: string[];
  intended_intake: {
    season: string;
    year: number;
  };
  study_reason: string;
  career_goals: string;
  scholarship_interest: boolean;
  co_op_interest: boolean;
  family_abroad: boolean;
  accommodation_support: boolean;
}

interface PreferencesFormProps {
  data: PreferencesData;
  updateData: (data: Partial<PreferencesData>) => void;
}

const PreferencesForm: React.FC<PreferencesFormProps> = ({
  data,
  updateData,
}) => {
  const handleInputChange = (
    field: string,
    value: string | number | boolean
  ) => {
    updateData({ [field]: value });
  };

  const handleNestedInputChange = (
    parent: string,
    field: string,
    value: string | number
  ) => {
    updateData({
      [parent]: {
        ...(data as any)[parent],
        [field]: value,
      },
    });
  };

  const handleUniversityChange = (index: number, value: string) => {
    const newUniversities = [...data.preferred_universities];
    newUniversities[index] = value;
    updateData({ preferred_universities: newUniversities });
  };

  const countries = [
    "Canada",
    "USA",
    "UK",
    "Australia",
    "Germany",
    "Netherlands",
    "Sweden",
    "Norway",
    "Denmark",
    "France",
    "Ireland",
    "New Zealand",
    "Switzerland",
    "Austria",
    "Belgium",
    "Finland",
    "Other",
  ];

  const courses = [
    "Computer Science",
    "Software Engineering",
    "Data Science",
    "Artificial Intelligence",
    "Information Technology",
    "Cybersecurity",
    "Computer Engineering",
    "Electrical Engineering",
    "Mechanical Engineering",
    "Civil Engineering",
    "Chemical Engineering",
    "Biomedical Engineering",
    "Business Administration",
    "Economics",
    "Finance",
    "Accounting",
    "Marketing",
    "Medicine",
    "Dentistry",
    "Pharmacy",
    "Nursing",
    "Public Health",
    "Psychology",
    "International Relations",
    "Political Science",
    "Law",
    "Architecture",
    "Design",
    "Fine Arts",
    "Media Studies",
    "Other",
  ];

  const seasons = ["Fall", "Spring", "Summer", "Winter"];
  const years = [2025, 2026, 2027, 2028];

  return (
    <div className="space-y-8">
      {/* Course Preferences */}
      <div className="bg-blue-50 rounded-lg p-6">
        <div className="flex items-center mb-4">
          <Target className="text-blue-600 mr-2" size={20} />
          <h3 className="text-lg font-semibold text-gray-900">
            Course Preferences
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Preferred Course *
            </label>
            <select
              value={data.preferred_course}
              onChange={(e) =>
                handleInputChange("preferred_course", e.target.value)
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select a course</option>
              {courses.map((course) => (
                <option key={course} value={course}>
                  {course}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Specialization
            </label>
            <input
              type="text"
              value={data.specialization}
              onChange={(e) =>
                handleInputChange("specialization", e.target.value)
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="e.g., Machine Learning, Software Development"
            />
          </div>
        </div>
      </div>

      {/* Country and University Preferences */}
      <div className="bg-green-50 rounded-lg p-6">
        <div className="flex items-center mb-4">
          <Globe className="text-green-600 mr-2" size={20} />
          <h3 className="text-lg font-semibold text-gray-900">
            Country & University Preferences
          </h3>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Preferred Country *
            </label>
            <select
              value={data.preferred_country}
              onChange={(e) =>
                handleInputChange("preferred_country", e.target.value)
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="">Select a country</option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Preferred Universities (up to 3)
            </label>
            <div className="space-y-3">
              {data.preferred_universities.map((university, index) => (
                <div key={index}>
                  <input
                    type="text"
                    value={university}
                    onChange={(e) =>
                      handleUniversityChange(index, e.target.value)
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder={`University ${index + 1} (optional)`}
                  />
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-2">
              List your top university choices in order of preference
            </p>
          </div>
        </div>
      </div>

      {/* Intake Preferences */}
      <div className="bg-purple-50 rounded-lg p-6">
        <div className="flex items-center mb-4">
          <Calendar className="text-purple-600 mr-2" size={20} />
          <h3 className="text-lg font-semibold text-gray-900">
            Intended Intake
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Season *
            </label>
            <select
              value={data.intended_intake.season}
              onChange={(e) =>
                handleNestedInputChange(
                  "intended_intake",
                  "season",
                  e.target.value
                )
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="">Select season</option>
              {seasons.map((season) => (
                <option key={season} value={season}>
                  {season}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Year *
            </label>
            <select
              value={data.intended_intake.year}
              onChange={(e) =>
                handleNestedInputChange(
                  "intended_intake",
                  "year",
                  parseInt(e.target.value)
                )
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="">Select year</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-4 p-3 bg-purple-100 rounded-lg">
          <p className="text-sm text-purple-800">
            <strong>Note:</strong> Application deadlines vary by country and
            university. Fall intake typically has more options and funding
            opportunities.
          </p>
        </div>
      </div>

      {/* Study Motivation */}
      <div className="bg-orange-50 rounded-lg p-6">
        <div className="flex items-center mb-4">
          <Heart className="text-orange-600 mr-2" size={20} />
          <h3 className="text-lg font-semibold text-gray-900">
            Study Motivation & Goals
          </h3>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Why do you want to study abroad? *
            </label>
            <textarea
              value={data.study_reason}
              onChange={(e) =>
                handleInputChange("study_reason", e.target.value)
              }
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
              placeholder="Describe your motivation for studying abroad, what you hope to achieve, and how it aligns with your academic and career goals..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Career Goals *
            </label>
            <textarea
              value={data.career_goals}
              onChange={(e) =>
                handleInputChange("career_goals", e.target.value)
              }
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
              placeholder="Describe your short-term and long-term career objectives, how this degree will help you achieve them..."
            />
          </div>
        </div>
      </div>

      {/* Additional Preferences */}
      <div className="bg-indigo-50 rounded-lg p-6">
        <div className="flex items-center mb-4">
          <University className="text-indigo-600 mr-2" size={20} />
          <h3 className="text-lg font-semibold text-gray-900">
            Additional Preferences
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={data.scholarship_interest}
                  onChange={(e) =>
                    handleInputChange("scholarship_interest", e.target.checked)
                  }
                  className="mr-2 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <span className="text-sm text-gray-700">
                  Interested in scholarships
                </span>
              </label>
              <p className="text-xs text-gray-500 ml-6">
                We'll help you find scholarship opportunities
              </p>
            </div>

            <div>
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={data.co_op_interest}
                  onChange={(e) =>
                    handleInputChange("co_op_interest", e.target.checked)
                  }
                  className="mr-2 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <span className="text-sm text-gray-700">
                  Interested in co-op programs
                </span>
              </label>
              <p className="text-xs text-gray-500 ml-6">
                Work-study programs that provide practical experience
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={data.family_abroad}
                  onChange={(e) =>
                    handleInputChange("family_abroad", e.target.checked)
                  }
                  className="mr-2 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <span className="text-sm text-gray-700">
                  I have family abroad
                </span>
              </label>
              <p className="text-xs text-gray-500 ml-6">
                This may help with your visa application
              </p>
            </div>

            <div>
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={data.accommodation_support}
                  onChange={(e) =>
                    handleInputChange("accommodation_support", e.target.checked)
                  }
                  className="mr-2 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <span className="text-sm text-gray-700">
                  Need accommodation support
                </span>
              </label>
              <p className="text-xs text-gray-500 ml-6">
                Help finding housing options near your university
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Support Services */}
      <div className="bg-yellow-50 rounded-lg p-6">
        <div className="flex items-center mb-4">
          <Users className="text-yellow-600 mr-2" size={20} />
          <h3 className="text-lg font-semibold text-gray-900">
            Available Support Services
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg border border-yellow-200">
            <h4 className="font-medium text-gray-800 mb-2">
              University Selection
            </h4>
            <p className="text-sm text-gray-600">
              Personalized university recommendations based on your profile and
              preferences
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg border border-yellow-200">
            <h4 className="font-medium text-gray-800 mb-2">
              Application Assistance
            </h4>
            <p className="text-sm text-gray-600">
              Help with application essays, document preparation, and submission
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg border border-yellow-200">
            <h4 className="font-medium text-gray-800 mb-2">Visa Guidance</h4>
            <p className="text-sm text-gray-600">
              Complete visa application support and interview preparation
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg border border-yellow-200">
            <h4 className="font-medium text-gray-800 mb-2">
              Financial Planning
            </h4>
            <p className="text-sm text-gray-600">
              Budget planning, scholarship search, and loan assistance
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg border border-yellow-200">
            <h4 className="font-medium text-gray-800 mb-2">Test Preparation</h4>
            <p className="text-sm text-gray-600">
              IELTS, TOEFL, GRE, and other test preparation resources
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg border border-yellow-200">
            <h4 className="font-medium text-gray-800 mb-2">
              Pre-Departure Support
            </h4>
            <p className="text-sm text-gray-600">
              Accommodation, travel arrangements, and orientation guidance
            </p>
          </div>
        </div>
      </div>

      {/* Country-Specific Information */}
      {data.preferred_country && (
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Quick Facts: {data.preferred_country}
          </h3>

          {data.preferred_country === "Canada" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-gray-800 mb-2">
                  Popular Intakes
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Fall (September) - Most programs available</li>
                  <li>• Winter (January) - Limited programs</li>
                  <li>• Summer (May) - Few programs</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-2">
                  Work Opportunities
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 20 hours/week during studies</li>
                  <li>• Full-time during breaks</li>
                  <li>• 3-year work permit post-graduation</li>
                </ul>
              </div>
            </div>
          )}

          {data.preferred_country === "USA" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-gray-800 mb-2">
                  Popular Intakes
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Fall (August/September) - Primary intake</li>
                  <li>• Spring (January) - Secondary intake</li>
                  <li>• Summer (May) - Limited programs</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-2">
                  Work Opportunities
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• On-campus work allowed</li>
                  <li>• CPT/OPT for practical training</li>
                  <li>• H1-B visa for post-graduation work</li>
                </ul>
              </div>
            </div>
          )}

          {data.preferred_country === "UK" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-gray-800 mb-2">
                  Popular Intakes
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• September - Main intake</li>
                  <li>• January - Secondary intake</li>
                  <li>• May - Limited programs</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-2">
                  Work Opportunities
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 20 hours/week during studies</li>
                  <li>• Full-time during holidays</li>
                  <li>• 2-year Graduate Route visa</li>
                </ul>
              </div>
            </div>
          )}

          {data.preferred_country === "Australia" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-gray-800 mb-2">
                  Popular Intakes
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• February - Main intake</li>
                  <li>• July - Secondary intake</li>
                  <li>• November - Limited programs</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-2">
                  Work Opportunities
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 48 hours/fortnight during studies</li>
                  <li>• Full-time during breaks</li>
                  <li>• Post-study work visa available</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PreferencesForm;
