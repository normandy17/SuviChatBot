export interface JourneyData {
  formId: string;
  formDefault?: object;
}

/* eslint-disable no-unused-expressions */
const loadJourneyData = (journeyName: string): JourneyData | null => {
  const journeyData = {
    formId: journeyName,
  };
  return journeyData;
};

export { loadJourneyData };
