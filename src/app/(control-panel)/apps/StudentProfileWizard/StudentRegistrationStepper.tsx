import React, { useState } from "react";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import PersonalDetailsForm from "./Component/PersonalDetailsForm";
import AcademicBackgroundForm from "./Component/AcademicBackgroundForm";
import TestScoresForm from "./Component/TestScoresForm";
import PreferencesForm from "./Component/PreferencesForm";
import FinancialDocumentationForm from "./Component/FinancialDocumentationForm";

export interface StudentRegistrationData {
  step1_personal_details: {
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
  };
  step2_academic_background: {
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
  };
  step3_test_scores_and_profile: {
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
  };
  step4_preferences_and_goals: {
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
  };
  step5_financial_and_documentation: {
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
  };
}

const StudentRegistrationStepper: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [formData, setFormData] = useState<StudentRegistrationData>({
    step1_personal_details: {
      full_name: { first_name: "", last_name: "" },
      father_name: "",
      date_of_birth: "",
      gender: "",
      cnic_number: "",
      phone: "",
      email: "",
      permanent_address: {
        street: "",
        city: "",
        province_of_domicile: "",
        postal_code: "",
      },
      emergency_contact: {
        name: "",
        relation: "",
        phone: "",
      },
      residence_country: "Pakistan",
      passport_details: {
        passport_country: "",
        passport_number: "",
        passport_expiry: "",
      },
    },
    step2_academic_background: {
      study_level: "bachelors",
      admission_year: 2025,
      matriculation: {
        year: 0,
        board: "",
        score_percentage: 0,
      },
      intermediate: {
        year: 0,
        board: "",
        score_percentage: 0,
        pre_engineering_or_pre_medical: "",
      },
      additional_certification: false,
      diploma: {
        program: "",
        specialization: "",
        institution: "",
        country: "",
        start_date: "",
        end_date: "",
        cgpa_percentage: 0,
      },
      bachelor_degree: {
        program_name: "",
        specialization: "",
        institution: "",
        country: "",
        start_date: "",
        end_date: "",
        cgpa_percentage: "",
      },
      hec_equivalence_status: {
        applied: false,
        obtained_date: "",
      },
      educational_gap: "none",
    },
    step3_test_scores_and_profile: {
      ielts_scores: {
        listening: 0,
        reading: 0,
        writing: 0,
        speaking: 0,
        total: 0,
      },
      toefl_score: "",
      sat_score: 0,
      gre_score: 0,
      gmat_score: 0,
      neet_score: 0,
      backlogs: "none",
      work_experience: "none",
      part_time_work: false,
      profile_completion_status: false,
    },
    step4_preferences_and_goals: {
      preferred_course: "",
      specialization: "",
      preferred_country: "",
      preferred_universities: ["", "", ""],
      intended_intake: {
        season: "",
        year: 2025,
      },
      study_reason: "",
      career_goals: "",
      scholarship_interest: false,
      co_op_interest: false,
      family_abroad: false,
      accommodation_support: false,
    },
    step5_financial_and_documentation: {
      funding_source: "",
      sponsor_details: {
        sponsor_name: "",
        sponsor_relation: "",
        sponsor_cnic: "",
        sponsor_annual_income: "",
      },
      budget_constraints: "",
      bank_statements_submitted: false,
      financial_affidavit: false,
      visa_rejections: false,
      travel_history: "",
      police_clearance_certificate: false,
      medical_clearance: false,
      medical_conditions: "",
      domicile_certificate_submitted: false,
      noc_required: false,
      additional_info: "",
    },
  });

  const steps = [
    {
      id: 1,
      title: "Personal Details",
      description: "Basic information and contact details",
    },
    {
      id: 2,
      title: "Academic Background",
      description: "Educational qualifications and history",
    },
    {
      id: 3,
      title: "Test Scores",
      description: "Language and standardized test scores",
    },
    {
      id: 4,
      title: "Preferences & Goals",
      description: "Study preferences and career objectives",
    },
    {
      id: 5,
      title: "Financial & Documentation",
      description: "Financial details and required documents",
    },
  ];

  const updateFormData = (
    stepKey: keyof StudentRegistrationData,
    data: any
  ) => {
    setFormData((prev) => ({
      ...prev,
      [stepKey]: { ...prev[stepKey], ...data },
    }));
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCompletedSteps((prev) => [...new Set([...prev, currentStep])]);
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleStepClick = (stepIndex: number) => {
    setCurrentStep(stepIndex);
  };

  const handleSubmit = async () => {
    try {
      // Add your API call here
      console.log("Final form data:", formData);
      alert("Form submitted successfully!");
      setCompletedSteps((prev) => [...new Set([...prev, currentStep])]);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please try again.");
    }
  };

  const isStepCompleted = (stepIndex: number) =>
    completedSteps.includes(stepIndex);
  const isCurrentStep = (stepIndex: number) => currentStep === stepIndex;
  const isStepAccessible = (stepIndex: number) =>
    stepIndex <= currentStep || isStepCompleted(stepIndex);

  const getStepDataKey = (stepIndex: number): keyof StudentRegistrationData => {
    const stepKeys: (keyof StudentRegistrationData)[] = [
      "step1_personal_details",
      "step2_academic_background",
      "step3_test_scores_and_profile",
      "step4_preferences_and_goals",
      "step5_financial_and_documentation",
    ];
    return stepKeys[stepIndex];
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <PersonalDetailsForm
            data={formData.step1_personal_details}
            updateData={(data: any) =>
              updateFormData("step1_personal_details", data)
            }
          />
        );
      case 1:
        return (
          <AcademicBackgroundForm
            data={formData.step2_academic_background}
            updateData={(data: any) =>
              updateFormData("step2_academic_background", data)
            }
          />
        );
      case 2:
        return (
          <TestScoresForm
            data={formData.step3_test_scores_and_profile}
            updateData={(data: any) =>
              updateFormData("step3_test_scores_and_profile", data)
            }
          />
        );
      case 3:
        return (
          <PreferencesForm
            data={formData.step4_preferences_and_goals}
            updateData={(data: any) =>
              updateFormData("step4_preferences_and_goals", data)
            }
          />
        );
      case 4:
        return (
          <FinancialDocumentationForm
            data={formData.step5_financial_and_documentation}
            updateData={(data: any) =>
              updateFormData("step5_financial_and_documentation", data)
            }
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-900 mb-2">
            Student Registration
          </h1>
          <p className="text-blue-700">
            Complete your application in {steps.length} simple steps
          </p>
        </div>

        {/* Stepper Navigation */}
        <div className="bg-white rounded-xl shadow-sm border border-blue-200 p-3 sm:p-6 mb-6">
          {/* Mobile Stepper - Show only current step info */}
          <div className="block md:hidden">
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm text-blue-700">
                Step {currentStep + 1} of {steps.length}
              </div>
              <div className="text-sm text-blue-600">
                {Math.round(((currentStep + 1) / steps.length) * 100)}% Complete
              </div>
            </div>

            {/* Progress bar */}
            <div className="w-full bg-blue-100 rounded-full h-3 mb-4">
              <div
                className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-300 shadow-sm"
                style={{
                  width: `${((currentStep + 1) / steps.length) * 100}%`,
                }}
              ></div>
            </div>

            {/* Current step info */}
            <div className="text-center">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-semibold mx-auto mb-3 shadow-lg ${
                  isStepCompleted(currentStep)
                    ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white"
                    : "bg-gradient-to-r from-blue-500 to-blue-600 text-white"
                }`}
              >
                {isStepCompleted(currentStep) ? (
                  <Check size={18} />
                ) : (
                  currentStep + 1
                )}
              </div>
              <h3 className="font-semibold text-blue-900">
                {steps[currentStep].title}
              </h3>
              <p className="text-sm text-blue-600 mt-1">
                {steps[currentStep].description}
              </p>
            </div>
          </div>

          {/* Desktop Stepper - Full horizontal layout */}
          <div className="hidden md:block">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  {/* Step Circle */}
                  <div className="flex flex-col items-center">
                    <button
                      onClick={() =>
                        isStepAccessible(index) && handleStepClick(index)
                      }
                      disabled={!isStepAccessible(index)}
                      className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-200 ${
                        isStepCompleted(index)
                          ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg scale-110 ring-2 ring-blue-200"
                          : isCurrentStep(index)
                            ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg scale-110 ring-2 ring-blue-200"
                            : isStepAccessible(index)
                              ? "bg-blue-100 text-blue-700 hover:bg-blue-200 cursor-pointer border-2 border-blue-200 hover:border-blue-300"
                              : "bg-gray-100 text-gray-400 cursor-not-allowed border-2 border-gray-200"
                      }`}
                    >
                      {isStepCompleted(index) ? <Check size={20} /> : step.id}
                    </button>
                    <div className="mt-2 text-center">
                      <p
                        className={`text-sm font-medium ${
                          isCurrentStep(index)
                            ? "text-blue-700"
                            : "text-blue-600"
                        }`}
                      >
                        {step.title}
                      </p>
                      <p className="text-xs text-blue-500 max-w-24">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div
                      className={`w-8 lg:w-16 h-1 mx-2 lg:mx-4 rounded transition-colors duration-200 ${
                        isStepCompleted(index)
                          ? "bg-gradient-to-r from-blue-400 to-blue-500"
                          : "bg-blue-200"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-white rounded-xl shadow-sm border border-blue-200 overflow-hidden">
          <div className="p-6 border-b border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50">
            <h2 className="text-xl font-semibold text-blue-900">
              {steps[currentStep].title}
            </h2>
            <p className="text-blue-700 text-sm mt-1">
              {steps[currentStep].description}
            </p>
          </div>

          <div className="p-6">{renderCurrentStep()}</div>

          {/* Navigation Buttons */}
          <div className="px-6 py-4 bg-gradient-to-r from-blue-50 to-indigo-50 border-t border-blue-100 flex justify-between">
            <button
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className="flex items-center px-4 py-2 text-blue-700 bg-white border border-blue-300 rounded-lg hover:bg-blue-50 hover:border-blue-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft size={20} className="mr-1" />
              Previous
            </button>

            <div className="flex space-x-3">
              <button className="px-6 py-2 text-blue-700 bg-white border border-blue-300 rounded-lg hover:bg-blue-50 hover:border-blue-400 transition-colors">
                Save Draft
              </button>

              {currentStep === steps.length - 1 ? (
                <button
                  onClick={handleSubmit}
                  className="px-6 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-200 font-medium shadow-lg"
                >
                  Submit Application
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className="flex items-center px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-medium shadow-lg"
                >
                  Next
                  <ChevronRight size={20} className="ml-1" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentRegistrationStepper;

// import React, { useState } from "react";
// import { Check, ChevronLeft, ChevronRight } from "lucide-react";
// import PersonalDetailsForm from "./Component/PersonalDetailsForm";
// import AcademicBackgroundForm from "./Component/AcademicBackgroundForm";
// import TestScoresForm from "./Component/TestScoresForm";
// import PreferencesForm from "./Component/PreferencesForm";
// import FinancialDocumentationForm from "./Component/FinancialDocumentationForm";

// export interface StudentRegistrationData {
//   step1_personal_details: {
//     full_name: { first_name: string; last_name: string };
//     father_name: string;
//     date_of_birth: string;
//     gender: string;
//     cnic_number: string;
//     phone: string;
//     email: string;
//     permanent_address: {
//       street: string;
//       city: string;
//       province_of_domicile: string;
//       postal_code: string;
//     };
//     emergency_contact: {
//       name: string;
//       relation: string;
//       phone: string;
//     };
//     residence_country: string;
//     passport_details: {
//       passport_country: string;
//       passport_number: string;
//       passport_expiry: string;
//     };
//   };
//   step2_academic_background: {
//     study_level: string;
//     admission_year: number;
//     matriculation: {
//       year: number;
//       board: string;
//       score_percentage: number;
//     };
//     intermediate: {
//       year: number;
//       board: string;
//       score_percentage: number;
//       pre_engineering_or_pre_medical: string;
//     };
//     additional_certification: boolean;
//     diploma: {
//       program: string;
//       specialization: string;
//       institution: string;
//       country: string;
//       start_date: string;
//       end_date: string;
//       cgpa_percentage: number;
//     };
//     bachelor_degree: {
//       program_name: string;
//       specialization: string;
//       institution: string;
//       country: string;
//       start_date: string;
//       end_date: string;
//       cgpa_percentage: string;
//     };
//     hec_equivalence_status: {
//       applied: boolean;
//       obtained_date: string;
//     };
//     educational_gap: string;
//   };
//   step3_test_scores_and_profile: {
//     ielts_scores: {
//       listening: number;
//       reading: number;
//       writing: number;
//       speaking: number;
//       total: number;
//     };
//     toefl_score: string;
//     sat_score: number;
//     gre_score: number;
//     gmat_score: number;
//     neet_score: number;
//     backlogs: string;
//     work_experience: string;
//     part_time_work: boolean;
//     profile_completion_status: boolean;
//   };
//   step4_preferences_and_goals: {
//     preferred_course: string;
//     specialization: string;
//     preferred_country: string;
//     preferred_universities: string[];
//     intended_intake: {
//       season: string;
//       year: number;
//     };
//     study_reason: string;
//     career_goals: string;
//     scholarship_interest: boolean;
//     co_op_interest: boolean;
//     family_abroad: boolean;
//     accommodation_support: boolean;
//   };
//   step5_financial_and_documentation: {
//     funding_source: string;
//     sponsor_details: {
//       sponsor_name: string;
//       sponsor_relation: string;
//       sponsor_cnic: string;
//       sponsor_annual_income: string;
//     };
//     budget_constraints: string;
//     bank_statements_submitted: boolean;
//     financial_affidavit: boolean;
//     visa_rejections: boolean;
//     travel_history: string;
//     police_clearance_certificate: boolean;
//     medical_clearance: boolean;
//     medical_conditions: string;
//     domicile_certificate_submitted: boolean;
//     noc_required: boolean;
//     additional_info: string;
//   };
// }

// const StudentRegistrationStepper: React.FC = () => {
//   const [currentStep, setCurrentStep] = useState(0);
//   const [completedSteps, setCompletedSteps] = useState<number[]>([]);
//   const [formData, setFormData] = useState<StudentRegistrationData>({
//     step1_personal_details: {
//       full_name: { first_name: "", last_name: "" },
//       father_name: "",
//       date_of_birth: "",
//       gender: "",
//       cnic_number: "",
//       phone: "",
//       email: "",
//       permanent_address: {
//         street: "",
//         city: "",
//         province_of_domicile: "",
//         postal_code: "",
//       },
//       emergency_contact: {
//         name: "",
//         relation: "",
//         phone: "",
//       },
//       residence_country: "Pakistan",
//       passport_details: {
//         passport_country: "",
//         passport_number: "",
//         passport_expiry: "",
//       },
//     },
//     step2_academic_background: {
//       study_level: "bachelors",
//       admission_year: 2025,
//       matriculation: {
//         year: 0,
//         board: "",
//         score_percentage: 0,
//       },
//       intermediate: {
//         year: 0,
//         board: "",
//         score_percentage: 0,
//         pre_engineering_or_pre_medical: "",
//       },
//       additional_certification: false,
//       diploma: {
//         program: "",
//         specialization: "",
//         institution: "",
//         country: "",
//         start_date: "",
//         end_date: "",
//         cgpa_percentage: 0,
//       },
//       bachelor_degree: {
//         program_name: "",
//         specialization: "",
//         institution: "",
//         country: "",
//         start_date: "",
//         end_date: "",
//         cgpa_percentage: "",
//       },
//       hec_equivalence_status: {
//         applied: false,
//         obtained_date: "",
//       },
//       educational_gap: "none",
//     },
//     step3_test_scores_and_profile: {
//       ielts_scores: {
//         listening: 0,
//         reading: 0,
//         writing: 0,
//         speaking: 0,
//         total: 0,
//       },
//       toefl_score: "",
//       sat_score: 0,
//       gre_score: 0,
//       gmat_score: 0,
//       neet_score: 0,
//       backlogs: "none",
//       work_experience: "none",
//       part_time_work: false,
//       profile_completion_status: false,
//     },
//     step4_preferences_and_goals: {
//       preferred_course: "",
//       specialization: "",
//       preferred_country: "",
//       preferred_universities: ["", "", ""],
//       intended_intake: {
//         season: "",
//         year: 2025,
//       },
//       study_reason: "",
//       career_goals: "",
//       scholarship_interest: false,
//       co_op_interest: false,
//       family_abroad: false,
//       accommodation_support: false,
//     },
//     step5_financial_and_documentation: {
//       funding_source: "",
//       sponsor_details: {
//         sponsor_name: "",
//         sponsor_relation: "",
//         sponsor_cnic: "",
//         sponsor_annual_income: "",
//       },
//       budget_constraints: "",
//       bank_statements_submitted: false,
//       financial_affidavit: false,
//       visa_rejections: false,
//       travel_history: "",
//       police_clearance_certificate: false,
//       medical_clearance: false,
//       medical_conditions: "",
//       domicile_certificate_submitted: false,
//       noc_required: false,
//       additional_info: "",
//     },
//   });

//   const steps = [
//     {
//       id: 1,
//       title: "Personal Details",
//       description: "Basic information and contact details",
//     },
//     {
//       id: 2,
//       title: "Academic Background",
//       description: "Educational qualifications and history",
//     },
//     {
//       id: 3,
//       title: "Test Scores",
//       description: "Language and standardized test scores",
//     },
//     {
//       id: 4,
//       title: "Preferences & Goals",
//       description: "Study preferences and career objectives",
//     },
//     {
//       id: 5,
//       title: "Financial & Documentation",
//       description: "Financial details and required documents",
//     },
//   ];

//   const updateFormData = (
//     stepKey: keyof StudentRegistrationData,
//     data: any
//   ) => {
//     setFormData((prev) => ({
//       ...prev,
//       [stepKey]: { ...prev[stepKey], ...data },
//     }));
//   };

//   const handleNext = () => {
//     if (currentStep < steps.length - 1) {
//       setCompletedSteps((prev) => [...new Set([...prev, currentStep])]);
//       setCurrentStep((prev) => prev + 1);
//     }
//   };

//   const handlePrevious = () => {
//     if (currentStep > 0) {
//       setCurrentStep((prev) => prev - 1);
//     }
//   };

//   const handleStepClick = (stepIndex: number) => {
//     setCurrentStep(stepIndex);
//   };

//   const handleSubmit = async () => {
//     try {
//       // Add your API call here
//       console.log("Final form data:", formData);
//       alert("Form submitted successfully!");
//       setCompletedSteps((prev) => [...new Set([...prev, currentStep])]);
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       alert("Error submitting form. Please try again.");
//     }
//   };

//   const isStepCompleted = (stepIndex: number) =>
//     completedSteps.includes(stepIndex);
//   const isCurrentStep = (stepIndex: number) => currentStep === stepIndex;
//   const isStepAccessible = (stepIndex: number) =>
//     stepIndex <= currentStep || isStepCompleted(stepIndex);

//   const getStepDataKey = (stepIndex: number): keyof StudentRegistrationData => {
//     const stepKeys: (keyof StudentRegistrationData)[] = [
//       "step1_personal_details",
//       "step2_academic_background",
//       "step3_test_scores_and_profile",
//       "step4_preferences_and_goals",
//       "step5_financial_and_documentation",
//     ];
//     return stepKeys[stepIndex];
//   };

//   const renderCurrentStep = () => {
//     switch (currentStep) {
//       case 0:
//         return (
//           <PersonalDetailsForm
//             data={formData.step1_personal_details}
//             updateData={(data: any) =>
//               updateFormData("step1_personal_details", data)
//             }
//           />
//         );
//       case 1:
//         return (
//           <AcademicBackgroundForm
//             data={formData.step2_academic_background}
//             updateData={(data: any) =>
//               updateFormData("step2_academic_background", data)
//             }
//           />
//         );
//       case 2:
//         return (
//           <TestScoresForm
//             data={formData.step3_test_scores_and_profile}
//             updateData={(data: any) =>
//               updateFormData("step3_test_scores_and_profile", data)
//             }
//           />
//         );
//       case 3:
//         return (
//           <PreferencesForm
//             data={formData.step4_preferences_and_goals}
//             updateData={(data: any) =>
//               updateFormData("step4_preferences_and_goals", data)
//             }
//           />
//         );
//       case 4:
//         return (
//           <FinancialDocumentationForm
//             data={formData.step5_financial_and_documentation}
//             updateData={(data: any) =>
//               updateFormData("step5_financial_and_documentation", data)
//             }
//           />
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4">
//       <div className="max-w-6xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-8">
//           <h1 className="text-3xl font-bold text-gray-900 mb-2">
//             Student Registration
//           </h1>
//           <p className="text-gray-600">
//             Complete your application in {steps.length} simple steps
//           </p>
//         </div>

//         {/* Stepper Navigation */}
//         <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-3 sm:p-6 mb-6">
//           {/* Mobile Stepper - Show only current step info */}
//           <div className="block md:hidden">
//             <div className="flex items-center justify-between mb-4">
//               <div className="text-sm text-gray-600">
//                 Step {currentStep + 1} of {steps.length}
//               </div>
//               <div className="text-sm text-gray-500">
//                 {Math.round(((currentStep + 1) / steps.length) * 100)}% Complete
//               </div>
//             </div>

//             {/* Progress bar */}
//             <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
//               <div
//                 className="bg-blue-500 h-2 rounded-full transition-all duration-300"
//                 style={{
//                   width: `${((currentStep + 1) / steps.length) * 100}%`,
//                 }}
//               ></div>
//             </div>

//             {/* Current step info */}
//             <div className="text-center">
//               <div
//                 className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold mx-auto mb-2 ${
//                   isStepCompleted(currentStep)
//                     ? "bg-green-500 text-white"
//                     : "bg-blue-500 text-white"
//                 }`}
//               >
//                 {isStepCompleted(currentStep) ? (
//                   <Check size={16} />
//                 ) : (
//                   currentStep + 1
//                 )}
//               </div>
//               <h3 className="font-medium text-gray-900">
//                 {steps[currentStep].title}
//               </h3>
//               <p className="text-xs text-gray-500 mt-1">
//                 {steps[currentStep].description}
//               </p>
//             </div>
//           </div>

//           {/* Desktop Stepper - Full horizontal layout */}
//           <div className="hidden md:block">
//             <div className="flex items-center justify-between">
//               {steps.map((step, index) => (
//                 <div key={step.id} className="flex items-center">
//                   {/* Step Circle */}
//                   <div className="flex flex-col items-center">
//                     <button
//                       onClick={() =>
//                         isStepAccessible(index) && handleStepClick(index)
//                       }
//                       disabled={!isStepAccessible(index)}
//                       className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-200 ${
//                         isStepCompleted(index)
//                           ? "bg-green-500 text-white shadow-lg scale-110"
//                           : isCurrentStep(index)
//                             ? "bg-blue-500 text-white shadow-lg scale-110"
//                             : isStepAccessible(index)
//                               ? "bg-gray-200 text-gray-700 hover:bg-gray-300 cursor-pointer"
//                               : "bg-gray-100 text-gray-400 cursor-not-allowed"
//                       }`}
//                     >
//                       {isStepCompleted(index) ? <Check size={20} /> : step.id}
//                     </button>
//                     <div className="mt-2 text-center">
//                       <p
//                         className={`text-sm font-medium ${
//                           isCurrentStep(index)
//                             ? "text-blue-600"
//                             : "text-gray-600"
//                         }`}
//                       >
//                         {step.title}
//                       </p>
//                       <p className="text-xs text-gray-500 max-w-24">
//                         {step.description}
//                       </p>
//                     </div>
//                   </div>

//                   {/* Connector Line */}
//                   {index < steps.length - 1 && (
//                     <div
//                       className={`w-8 lg:w-16 h-1 mx-2 lg:mx-4 rounded transition-colors duration-200 ${
//                         isStepCompleted(index) ? "bg-green-500" : "bg-gray-200"
//                       }`}
//                     />
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Form Content */}
//         <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
//           <div className="p-6 border-b border-gray-200">
//             <h2 className="text-xl font-semibold text-gray-900">
//               {steps[currentStep].title}
//             </h2>
//             <p className="text-gray-600 text-sm mt-1">
//               {steps[currentStep].description}
//             </p>
//           </div>

//           <div className="p-6">{renderCurrentStep()}</div>

//           {/* Navigation Buttons */}
//           <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-between">
//             <button
//               onClick={handlePrevious}
//               disabled={currentStep === 0}
//               className="flex items-center px-4 py-2 text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
//             >
//               <ChevronLeft size={20} className="mr-1" />
//               Previous
//             </button>

//             <div className="flex space-x-3">
//               <button className="px-6 py-2 text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
//                 Save Draft
//               </button>

//               {currentStep === steps.length - 1 ? (
//                 <button
//                   onClick={handleSubmit}
//                   className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
//                 >
//                   Submit Application
//                 </button>
//               ) : (
//                 <button
//                   onClick={handleNext}
//                   className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
//                 >
//                   Next
//                   <ChevronRight size={20} className="ml-1" />
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StudentRegistrationStepper;
