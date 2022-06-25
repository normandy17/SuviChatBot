import React, { useEffect, useState } from "react";
import queryString from 'query-string';
import { JourneyContainer } from "../containers";
import { COMPANY } from "../utils/constants/JourneyConstants";

const Journey = (props) => {
  const [sessionId, setSessionId] = useState("");
  const [sessionReady, setSessionReady] = useState(false);

  useEffect(() => {
    const parsed = queryString.parse(window.location.search);
    setSessionId(parsed.sessionId);
    setSessionReady(true);
    return () => setSessionReady(false);
  }, []);

  const {
    location: { pathname },
  } = props;

  const journeyName = pathname.substring(pathname.lastIndexOf("/") + 1);
  return (
    <>
      <a
        href={`/`}
      >
        asd
      </a>
      <JourneyContainer
        sessionId={'eyJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwiYWxnIjoiUlNBLU9BRVAiLCJraWQiOiJ4cUprMGktWUdkS3czMkoxTXZpNHFXS25VdTBCQ0Y4eDBfQTY1T2ZuMDJVIn0.gVr3YDhhqdG9f9_O-58rCkQE9AOn8WrtRRRybXmRFMOmBXOOvlAea2IezrB23czoslBPvczkCRzSoY0zB1vGf2pTrklJ0wzvU2qAKJWCzP7aWtDLjAdCyavjl3h44hlRvPe_7aJJ9PfW4kwvTV1bIwm6gVk-9QO5Mz7ZQfTrprA.82p1fUohTaSzCDDHyQZXiA.3RMKJLL2B5tzkVY_5nqcl5PFwiL5UWGoXC2MzBPjpt1PCCN9gvdLJj_ayOFFWGQpbCzQOpOgmZ5QxXnR1DqW5-D53bqButwWtsoeiH1lE0goqtfmcOszGHaHU9mLLwGRYSLi0Upbc4p1V0WhCLu2fhltVN-rN0mCWpUogwwrKNumW8rt6CIvNW-l9wrqhuOq4_ksbfAeXvAW9oRUpO_dXq-R4O9T8uR8xMCvncFLiepv2sQ7Frqfobo7r-8EfXDyC_yaGjCAeCGwM23nlb6i8i7N8Nw8Ap005fXBucFrpOwEUJHkRcb6QQCfSzmxj_3Ms1jAZLE73J9NxAWDdihFueyZXW5emIP21ZMZV5MD9fIHvzvq6ZnN8OB9EsQntk4IDjLJyEdd6ljVUrXRBrCV0htdT1GUBBYpLEzttb1dvf4qKZQsCcYrfXA9cXYXnisFTddEo3Zu39MNzYm2idH9hdETauWoWbtzDrKTflR_09rYRHfTOx3-I354yMhGJWKQ7edz2krQuSJG0obFYwTq2Q.SWfHXOu1L9NVVHc_mV-l1g'}
        sessionReady={sessionReady}
        journeyName={journeyName}
        companyId='f9e48b6e-645e-4580-bdcd-ea4c4a6664ad'
      />
    </>
  );
};

export default Journey;
