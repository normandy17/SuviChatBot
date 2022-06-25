import React, { useState, useEffect } from 'react';
import { FORM_HOST } from '../utils/constants/JourneyConstants';
import JourneyProvider from '../journeys/JourneyProvider';
import { loadJourneyData } from '../utils/helpers/JourneyHelper';
// import { useJourneyData as getJourneysData } from '../hooks/useJourneyData';

const JourneyContainer = ({ journeyName, sessionId, companyId, sessionReady }) => {
  // const journeys = getJourneysData();
  const [journeyData, setJourneyData] = useState(null);

  useEffect(() => {
    (async () => {
      // loadJourneyData can be overridden / shadowed with any async function to get journey default data or just return an empty object
      const data = loadJourneyData(journeyName);
      setJourneyData(data);
    })();
  }, [journeyName]);
console.log("host:",FORM_HOST)
  return (
    <>
      {journeyData ? (
        <JourneyProvider
          sessionId={sessionId}
          sessionReady={sessionReady}
          companyId={companyId}
          journeyData={journeyData}
          host={FORM_HOST}
        />
      ) : (
        <h3>Journey not Found</h3>
      )}
    </>
  );
};

export default JourneyContainer;
