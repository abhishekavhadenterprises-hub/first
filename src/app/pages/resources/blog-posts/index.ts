import { CompleteGuideUK2026 } from './CompleteGuideUK2026';
import { USStudentVisaGuide } from './USStudentVisaGuide';
import { ScholarshipsGuide } from './ScholarshipsGuide';
import { CulturalAdjustmentGuide } from './CulturalAdjustmentGuide';
import { IELTSPreparationGuide } from './IELTSPreparationGuide';
import { PartTimeJobsGuide } from './PartTimeJobsGuide';
import { CanadaStudyPermitGuide } from './CanadaStudyPermitGuide';
import { MastersVsPhDGuide } from './MastersVsPhDGuide';

export const blogPostComponents: Record<string, React.ComponentType> = {
  'complete-guide-studying-uk-2026': CompleteGuideUK2026,
  'us-student-visa-f1-complete-guide': USStudentVisaGuide,
  '10-scholarships-international-students': ScholarshipsGuide,
  'cultural-adjustment-international-students': CulturalAdjustmentGuide,
  'ielts-preparation-complete-guide': IELTSPreparationGuide,
  'part-time-jobs-international-students': PartTimeJobsGuide,
  'canada-study-permit-guide-2026': CanadaStudyPermitGuide,
  'masters-vs-phd-which-choose': MastersVsPhDGuide,
};

export {
  CompleteGuideUK2026,
  USStudentVisaGuide,
  ScholarshipsGuide,
  CulturalAdjustmentGuide,
  IELTSPreparationGuide,
  PartTimeJobsGuide,
  CanadaStudyPermitGuide,
  MastersVsPhDGuide,
};
