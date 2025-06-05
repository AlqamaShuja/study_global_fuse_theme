import React from "react";
import { Target, Globe, Award, Briefcase, CheckCircle } from "lucide-react";

interface TestScoresData {
  ielts_scores: {
    listening: number;
    reading: number;
    writing: number;
    speaking: number;
    total: number;
  };
  toefl_score: string;
  sat_score: number;
  gre_score: number;
  gmat_score: number;
  neet_score: number;
  backlogs: string;
  work_experience: string;
  part_time_work: boolean;
  profile_completion_status: boolean;
}

interface TestScoresFormProps {
  data: TestScoresData;
  updateData: (data: Partial<TestScoresData>) => void;
}

const TestScoresForm: React.FC<TestScoresFormProps> = ({
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
    value: number
  ) => {
    updateData({
      [parent]: {
        ...(data as any)[parent],
        [field]: value,
      },
    });
  };

  // Calculate IELTS total automatically
  const calculateIELTSTotal = () => {
    const { listening, reading, writing, speaking } = data.ielts_scores;
    if (listening && reading && writing && speaking) {
      const total = (listening + reading + writing + speaking) / 4;
      handleNestedInputChange(
        "ielts_scores",
        "total",
        Math.round(total * 2) / 2
      ); // Round to nearest 0.5
    }
  };

  React.useEffect(() => {
    calculateIELTSTotal();
  }, [
    data.ielts_scores.listening,
    data.ielts_scores.reading,
    data.ielts_scores.writing,
    data.ielts_scores.speaking,
  ]);

  return (
    <div className="space-y-8">
      {/* IELTS Scores */}
      <div className="bg-blue-50 rounded-lg p-6">
        <div className="flex items-center mb-4">
          <Globe className="text-blue-600 mr-2" size={20} />
          <h3 className="text-lg font-semibold text-gray-900">IELTS Scores</h3>
          <span className="ml-2 text-sm text-gray-500">
            (International English Language Testing System)
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Listening
            </label>
            <input
              type="number"
              value={data.ielts_scores.listening || ""}
              onChange={(e) =>
                handleNestedInputChange(
                  "ielts_scores",
                  "listening",
                  parseFloat(e.target.value) || 0
                )
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              min="0"
              max="9"
              step="0.5"
              placeholder="8.0"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Reading
            </label>
            <input
              type="number"
              value={data.ielts_scores.reading || ""}
              onChange={(e) =>
                handleNestedInputChange(
                  "ielts_scores",
                  "reading",
                  parseFloat(e.target.value) || 0
                )
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              min="0"
              max="9"
              step="0.5"
              placeholder="7.5"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Writing
            </label>
            <input
              type="number"
              value={data.ielts_scores.writing || ""}
              onChange={(e) =>
                handleNestedInputChange(
                  "ielts_scores",
                  "writing",
                  parseFloat(e.target.value) || 0
                )
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              min="0"
              max="9"
              step="0.5"
              placeholder="7.0"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Speaking
            </label>
            <input
              type="number"
              value={data.ielts_scores.speaking || ""}
              onChange={(e) =>
                handleNestedInputChange(
                  "ielts_scores",
                  "speaking",
                  parseFloat(e.target.value) || 0
                )
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              min="0"
              max="9"
              step="0.5"
              placeholder="7.5"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Overall Band
            </label>
            <input
              type="number"
              value={data.ielts_scores.total || ""}
              readOnly
              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-600"
              placeholder="7.5"
            />
            <p className="text-xs text-gray-500 mt-1">Auto-calculated</p>
          </div>
        </div>

        <div className="mt-4 p-3 bg-blue-100 rounded-lg">
          <p className="text-sm text-blue-800">
            <strong>Note:</strong> IELTS scores range from 0-9 in 0.5
            increments. The overall band score is automatically calculated as
            the average of all four skills.
          </p>
        </div>
      </div>

      {/* Other Language Tests */}
      <div className="bg-green-50 rounded-lg p-6">
        <div className="flex items-center mb-4">
          <Target className="text-green-600 mr-2" size={20} />
          <h3 className="text-lg font-semibold text-gray-900">
            Other Language Tests
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              TOEFL Score
            </label>
            <input
              type="text"
              value={data.toefl_score}
              onChange={(e) => handleInputChange("toefl_score", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="110 (out of 120)"
            />
            <p className="text-xs text-gray-500 mt-1">
              Test of English as a Foreign Language (0-120)
            </p>
          </div>
        </div>
      </div>

      {/* Standardized Test Scores */}
      <div className="bg-purple-50 rounded-lg p-6">
        <div className="flex items-center mb-4">
          <Award className="text-purple-600 mr-2" size={20} />
          <h3 className="text-lg font-semibold text-gray-900">
            Standardized Test Scores
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              SAT Score
            </label>
            <input
              type="number"
              value={data.sat_score || ""}
              onChange={(e) =>
                handleInputChange("sat_score", parseInt(e.target.value) || 0)
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              min="400"
              max="1600"
              placeholder="1450"
            />
            <p className="text-xs text-gray-500 mt-1">
              Scholastic Assessment Test (400-1600)
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              GRE Score
            </label>
            <input
              type="number"
              value={data.gre_score || ""}
              onChange={(e) =>
                handleInputChange("gre_score", parseInt(e.target.value) || 0)
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              min="260"
              max="340"
              placeholder="320"
            />
            <p className="text-xs text-gray-500 mt-1">
              Graduate Record Examination (260-340)
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              GMAT Score
            </label>
            <input
              type="number"
              value={data.gmat_score || ""}
              onChange={(e) =>
                handleInputChange("gmat_score", parseInt(e.target.value) || 0)
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              min="200"
              max="800"
              placeholder="650"
            />
            <p className="text-xs text-gray-500 mt-1">
              Graduate Management Admission Test (200-800)
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              NEET Score
            </label>
            <input
              type="number"
              value={data.neet_score || ""}
              onChange={(e) =>
                handleInputChange("neet_score", parseInt(e.target.value) || 0)
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              min="0"
              max="720"
              placeholder="650"
            />
            <p className="text-xs text-gray-500 mt-1">
              National Eligibility cum Entrance Test (0-720)
            </p>
          </div>
        </div>

        <div className="mt-4 p-3 bg-purple-100 rounded-lg">
          <p className="text-sm text-purple-800">
            <strong>Note:</strong> Enter only the scores you have taken. Leave
            blank if not applicable to your program.
          </p>
        </div>
      </div>

      {/* Academic Performance */}
      <div className="bg-orange-50 rounded-lg p-6">
        <div className="flex items-center mb-4">
          <CheckCircle className="text-orange-600 mr-2" size={20} />
          <h3 className="text-lg font-semibold text-gray-900">
            Academic Performance
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Backlogs Status
            </label>
            <select
              value={data.backlogs}
              onChange={(e) => handleInputChange("backlogs", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            >
              <option value="none">No Backlogs</option>
              <option value="1">1 Backlog</option>
              <option value="2">2 Backlogs</option>
              <option value="3">3 Backlogs</option>
              <option value="4_or_more">4 or More Backlogs</option>
              <option value="cleared">Had Backlogs (Now Cleared)</option>
            </select>
            <p className="text-xs text-gray-500 mt-1">
              Pending or failed subjects in your current/previous degree
            </p>
          </div>
        </div>
      </div>

      {/* Work Experience */}
      <div className="bg-indigo-50 rounded-lg p-6">
        <div className="flex items-center mb-4">
          <Briefcase className="text-indigo-600 mr-2" size={20} />
          <h3 className="text-lg font-semibold text-gray-900">
            Work Experience & Profile
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Work Experience
            </label>
            <select
              value={data.work_experience}
              onChange={(e) =>
                handleInputChange("work_experience", e.target.value)
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              <option value="none">No Work Experience</option>
              <option value="less_than_1">Less than 1 Year</option>
              <option value="1_to_2">1-2 Years</option>
              <option value="2_to_3">2-3 Years</option>
              <option value="3_to_5">3-5 Years</option>
              <option value="5_plus">5+ Years</option>
              <option value="internship_only">Internship Only</option>
            </select>
          </div>

          <div className="space-y-4">
            <div>
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={data.part_time_work}
                  onChange={(e) =>
                    handleInputChange("part_time_work", e.target.checked)
                  }
                  className="mr-2 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <span className="text-sm text-gray-700">
                  I have part-time work experience
                </span>
              </label>
            </div>

            <div>
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={data.profile_completion_status}
                  onChange={(e) =>
                    handleInputChange(
                      "profile_completion_status",
                      e.target.checked
                    )
                  }
                  className="mr-2 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <span className="text-sm text-gray-700">
                  Profile completion status confirmed
                </span>
              </label>
              <p className="text-xs text-gray-500 mt-1">
                Check this to confirm that all information provided is accurate
                and complete
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Score Interpretation Guide */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Score Interpretation Guide
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <h4 className="font-medium text-gray-800 mb-2">IELTS Bands</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• 9.0: Expert User</li>
              <li>• 8.0-8.5: Very Good User</li>
              <li>• 7.0-7.5: Good User</li>
              <li>• 6.0-6.5: Competent User</li>
              <li>• 5.0-5.5: Modest User</li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-gray-800 mb-2">TOEFL Scores</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• 110-120: Excellent</li>
              <li>• 100-109: Very Good</li>
              <li>• 90-99: Good</li>
              <li>• 80-89: Fair</li>
              <li>• Below 80: Needs Improvement</li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-gray-800 mb-2">GRE Scores</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• 330-340: Excellent</li>
              <li>• 320-329: Very Good</li>
              <li>• 310-319: Good</li>
              <li>• 300-309: Average</li>
              <li>• Below 300: Below Average</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestScoresForm;
