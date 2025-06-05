import React, { useState } from "react";
import { GraduationCap, Plus, Trash2, BookOpen, Award } from "lucide-react";

interface AcademicBackgroundData {
  study_level: string;
  admission_year: number;
  matriculation: {
    year: number;
    board: string;
    score_percentage: number;
  };
  intermediate: {
    year: number;
    board: string;
    score_percentage: number;
    pre_engineering_or_pre_medical: string;
  };
  additional_certification: boolean;
  diploma: {
    program: string;
    specialization: string;
    institution: string;
    country: string;
    start_date: string;
    end_date: string;
    cgpa_percentage: number;
  };
  bachelor_degree: {
    program_name: string;
    specialization: string;
    institution: string;
    country: string;
    start_date: string;
    end_date: string;
    cgpa_percentage: string;
  };
  hec_equivalence_status: {
    applied: boolean;
    obtained_date: string;
  };
  educational_gap: string;
}

interface AcademicBackgroundFormProps {
  data: AcademicBackgroundData;
  updateData: (data: Partial<AcademicBackgroundData>) => void;
}

const AcademicBackgroundForm: React.FC<AcademicBackgroundFormProps> = ({
  data,
  updateData,
}) => {
  const [additionalDegrees, setAdditionalDegrees] = useState<any[]>([]);

  const handleInputChange = (
    field: string,
    value: string | number | boolean
  ) => {
    updateData({ [field]: value });
  };

  const handleNestedInputChange = (
    parent: string,
    field: string,
    value: string | number | boolean
  ) => {
    updateData({
      [parent]: {
        ...(data as any)[parent],
        [field]: value,
      },
    });
  };

  const addAdditionalDegree = () => {
    setAdditionalDegrees([
      ...additionalDegrees,
      {
        id: Date.now(),
        degree_type: "",
        program_name: "",
        institution: "",
        country: "",
        start_date: "",
        end_date: "",
        cgpa_percentage: "",
      },
    ]);
  };

  const removeAdditionalDegree = (id: number) => {
    setAdditionalDegrees(
      additionalDegrees.filter((degree) => degree.id !== id)
    );
  };

  const updateAdditionalDegree = (id: number, field: string, value: string) => {
    setAdditionalDegrees(
      additionalDegrees.map((degree) =>
        degree.id === id ? { ...degree, [field]: value } : degree
      )
    );
  };

  const boards = [
    "Federal Board (FBISE)",
    "Punjab Board",
    "Sindh Board",
    "KPK Board",
    "Balochistan Board",
    "AJK Board",
    "CBSE",
    "ICSE",
    "State Board",
    "Other",
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
    "Canada",
    "USA",
    "UK",
    "Other",
  ];

  const studyLevels = [
    "matriculation",
    "intermediate",
    "bachelors",
    "masters",
    "phd",
  ];

  return (
    <div className="space-y-8">
      {/* Study Level and Admission Year */}
      <div className="bg-blue-50 rounded-lg p-6">
        <div className="flex items-center mb-4">
          <GraduationCap className="text-blue-600 mr-2" size={20} />
          <h3 className="text-lg font-semibold text-gray-900">
            General Academic Information
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Study Level *
            </label>
            <select
              value={data.study_level}
              onChange={(e) => handleInputChange("study_level", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select Level</option>
              {studyLevels.map((level) => (
                <option key={level} value={level}>
                  {level.charAt(0).toUpperCase() + level.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Admission Year *
            </label>
            <input
              type="number"
              value={data.admission_year}
              onChange={(e) =>
                handleInputChange(
                  "admission_year",
                  parseInt(e.target.value) || 2025
                )
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              min="2020"
              max="2030"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Educational Gap
            </label>
            <select
              value={data.educational_gap}
              onChange={(e) =>
                handleInputChange("educational_gap", e.target.value)
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="none">No Gap</option>
              <option value="1_year">1 Year</option>
              <option value="2_years">2 Years</option>
              <option value="3_years">3 Years</option>
              <option value="more_than_3">More than 3 Years</option>
            </select>
          </div>
        </div>
      </div>

      {/* Matriculation */}
      <div className="bg-green-50 rounded-lg p-6">
        <div className="flex items-center mb-4">
          <BookOpen className="text-green-600 mr-2" size={20} />
          <h3 className="text-lg font-semibold text-gray-900">
            Matriculation (Grade 10)
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Year of Completion *
            </label>
            <input
              type="number"
              value={data.matriculation.year}
              onChange={(e) =>
                handleNestedInputChange(
                  "matriculation",
                  "year",
                  parseInt(e.target.value) || 0
                )
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              min="2000"
              max="2030"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Board *
            </label>
            <select
              value={data.matriculation.board}
              onChange={(e) =>
                handleNestedInputChange(
                  "matriculation",
                  "board",
                  e.target.value
                )
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="">Select Board</option>
              {boards.map((board) => (
                <option key={board} value={board}>
                  {board}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Score Percentage *
            </label>
            <input
              type="number"
              value={data.matriculation.score_percentage}
              onChange={(e) =>
                handleNestedInputChange(
                  "matriculation",
                  "score_percentage",
                  parseFloat(e.target.value) || 0
                )
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              min="0"
              max="100"
              step="0.1"
              placeholder="85.5"
            />
          </div>
        </div>
      </div>

      {/* Intermediate */}
      <div className="bg-purple-50 rounded-lg p-6">
        <div className="flex items-center mb-4">
          <Award className="text-purple-600 mr-2" size={20} />
          <h3 className="text-lg font-semibold text-gray-900">
            Intermediate (Grade 12)
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Year of Completion *
            </label>
            <input
              type="number"
              value={data.intermediate.year}
              onChange={(e) =>
                handleNestedInputChange(
                  "intermediate",
                  "year",
                  parseInt(e.target.value) || 0
                )
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              min="2000"
              max="2030"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Board *
            </label>
            <select
              value={data.intermediate.board}
              onChange={(e) =>
                handleNestedInputChange("intermediate", "board", e.target.value)
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="">Select Board</option>
              {boards.map((board) => (
                <option key={board} value={board}>
                  {board}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Score Percentage *
            </label>
            <input
              type="number"
              value={data.intermediate.score_percentage}
              onChange={(e) =>
                handleNestedInputChange(
                  "intermediate",
                  "score_percentage",
                  parseFloat(e.target.value) || 0
                )
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              min="0"
              max="100"
              step="0.1"
              placeholder="88.2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Stream
            </label>
            <select
              value={data.intermediate.pre_engineering_or_pre_medical}
              onChange={(e) =>
                handleNestedInputChange(
                  "intermediate",
                  "pre_engineering_or_pre_medical",
                  e.target.value
                )
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="">Select Stream</option>
              <option value="Pre-Engineering">Pre-Engineering</option>
              <option value="Pre-Medical">Pre-Medical</option>
              <option value="General Science">General Science</option>
              <option value="Commerce">Commerce</option>
              <option value="Arts">Arts</option>
            </select>
          </div>
        </div>
      </div>

      {/* Additional Certifications Toggle */}
      <div className="bg-orange-50 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">
            Additional Certifications
          </h3>
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={data.additional_certification}
              onChange={(e) =>
                handleInputChange("additional_certification", e.target.checked)
              }
              className="mr-2 h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
            />
            <span className="text-sm text-gray-700">
              I have additional certifications
            </span>
          </label>
        </div>

        {data.additional_certification && (
          <div className="space-y-6">
            {/* Diploma Section */}
            <div className="border border-orange-200 rounded-lg p-4">
              <h4 className="text-md font-medium text-gray-800 mb-4">
                Diploma
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Program
                  </label>
                  <input
                    type="text"
                    value={data.diploma.program}
                    onChange={(e) =>
                      handleNestedInputChange(
                        "diploma",
                        "program",
                        e.target.value
                      )
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Computer Applications"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Specialization
                  </label>
                  <input
                    type="text"
                    value={data.diploma.specialization}
                    onChange={(e) =>
                      handleNestedInputChange(
                        "diploma",
                        "specialization",
                        e.target.value
                      )
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="AI"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Institution
                  </label>
                  <input
                    type="text"
                    value={data.diploma.institution}
                    onChange={(e) =>
                      handleNestedInputChange(
                        "diploma",
                        "institution",
                        e.target.value
                      )
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="NIIT"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Country
                  </label>
                  <select
                    value={data.diploma.country}
                    onChange={(e) =>
                      handleNestedInputChange(
                        "diploma",
                        "country",
                        e.target.value
                      )
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
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
                    Start Date
                  </label>
                  <input
                    type="date"
                    value={data.diploma.start_date}
                    onChange={(e) =>
                      handleNestedInputChange(
                        "diploma",
                        "start_date",
                        e.target.value
                      )
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    End Date
                  </label>
                  <input
                    type="date"
                    value={data.diploma.end_date}
                    onChange={(e) =>
                      handleNestedInputChange(
                        "diploma",
                        "end_date",
                        e.target.value
                      )
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <div className="md:col-span-2 lg:col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    CGPA/Percentage
                  </label>
                  <input
                    type="number"
                    value={data.diploma.cgpa_percentage}
                    onChange={(e) =>
                      handleNestedInputChange(
                        "diploma",
                        "cgpa_percentage",
                        parseFloat(e.target.value) || 0
                      )
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    min="0"
                    max="100"
                    step="0.1"
                    placeholder="75.3"
                  />
                </div>
              </div>
            </div>

            {/* Additional Degrees Section */}
            <div className="border border-orange-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-md font-medium text-gray-800">
                  Additional Degrees
                </h4>
                <button
                  type="button"
                  onClick={addAdditionalDegree}
                  className="flex items-center px-3 py-1 text-sm bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
                >
                  <Plus size={16} className="mr-1" />
                  Add Degree
                </button>
              </div>

              {additionalDegrees.map((degree, index) => (
                <div
                  key={degree.id}
                  className="border border-gray-200 rounded-lg p-4 mb-4 bg-white"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h5 className="text-sm font-medium text-gray-700">
                      Additional Degree {index + 1}
                    </h5>
                    <button
                      type="button"
                      onClick={() => removeAdditionalDegree(degree.id)}
                      className="text-red-600 hover:text-red-800 transition-colors"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Degree Type
                      </label>
                      <select
                        value={degree.degree_type}
                        onChange={(e) =>
                          updateAdditionalDegree(
                            degree.id,
                            "degree_type",
                            e.target.value
                          )
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      >
                        <option value="">Select Type</option>
                        <option value="Certificate">Certificate</option>
                        <option value="Diploma">Diploma</option>
                        <option value="Associate Degree">
                          Associate Degree
                        </option>
                        <option value="Bachelor">Bachelor</option>
                        <option value="Master">Master</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Program Name
                      </label>
                      <input
                        type="text"
                        value={degree.program_name}
                        onChange={(e) =>
                          updateAdditionalDegree(
                            degree.id,
                            "program_name",
                            e.target.value
                          )
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="Program name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Institution
                      </label>
                      <input
                        type="text"
                        value={degree.institution}
                        onChange={(e) =>
                          updateAdditionalDegree(
                            degree.id,
                            "institution",
                            e.target.value
                          )
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="Institution name"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Bachelor's Degree (if applicable) */}
      <div className="bg-indigo-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Bachelor's Degree (if started/completed)
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Program Name
            </label>
            <input
              type="text"
              value={data.bachelor_degree.program_name}
              onChange={(e) =>
                handleNestedInputChange(
                  "bachelor_degree",
                  "program_name",
                  e.target.value
                )
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="Computer Science"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Specialization
            </label>
            <input
              type="text"
              value={data.bachelor_degree.specialization}
              onChange={(e) =>
                handleNestedInputChange(
                  "bachelor_degree",
                  "specialization",
                  e.target.value
                )
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="Software Engineering"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Institution
            </label>
            <input
              type="text"
              value={data.bachelor_degree.institution}
              onChange={(e) =>
                handleNestedInputChange(
                  "bachelor_degree",
                  "institution",
                  e.target.value
                )
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="University name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Country
            </label>
            <select
              value={data.bachelor_degree.country}
              onChange={(e) =>
                handleNestedInputChange(
                  "bachelor_degree",
                  "country",
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
              Start Date
            </label>
            <input
              type="date"
              value={data.bachelor_degree.start_date}
              onChange={(e) =>
                handleNestedInputChange(
                  "bachelor_degree",
                  "start_date",
                  e.target.value
                )
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              End Date
            </label>
            <input
              type="date"
              value={data.bachelor_degree.end_date}
              onChange={(e) =>
                handleNestedInputChange(
                  "bachelor_degree",
                  "end_date",
                  e.target.value
                )
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>

          <div className="md:col-span-2 lg:col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              CGPA/Percentage
            </label>
            <input
              type="text"
              value={data.bachelor_degree.cgpa_percentage}
              onChange={(e) =>
                handleNestedInputChange(
                  "bachelor_degree",
                  "cgpa_percentage",
                  e.target.value
                )
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="3.5 or 75%"
            />
          </div>
        </div>
      </div>

      {/* HEC Equivalence */}
      <div className="bg-yellow-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          HEC Equivalence Status
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Required for Pakistani students with foreign degrees
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={data.hec_equivalence_status.applied}
                onChange={(e) =>
                  handleNestedInputChange(
                    "hec_equivalence_status",
                    "applied",
                    e.target.checked
                  )
                }
                className="mr-2 h-4 w-4 text-yellow-600 focus:ring-yellow-500 border-gray-300 rounded"
              />
              <span className="text-sm text-gray-700">
                Applied for HEC Equivalence
              </span>
            </label>
          </div>

          {data.hec_equivalence_status.applied && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date Obtained (if completed)
              </label>
              <input
                type="date"
                value={data.hec_equivalence_status.obtained_date}
                onChange={(e) =>
                  handleNestedInputChange(
                    "hec_equivalence_status",
                    "obtained_date",
                    e.target.value
                  )
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AcademicBackgroundForm;
