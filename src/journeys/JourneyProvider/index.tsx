// @ts-nocheck
import React, { useEffect, useRef } from 'react';
import { JourneyData } from '../../utils/helpers/JourneyHelper';
import journeyHostingScript from './clientScript';
import './JourneyProvider.scss';

interface Props {
  /**
   * @description unique session id for journey
   */
  sessionId?: string;
  /**
   * company Id
   */
  companyId: string;
  /**
   * @description optional default data for journey
   */
  journeyData?: JourneyData;
  /**
   * @description if session is ready the init function will be called
   * prevents loading with 2 different sessionId
   */
  sessionReady: boolean;
  /**
   * environment hosting form
   */
  host: string;
}

const JourneyProvider: React.FC<Props> = ({ sessionId, companyId, sessionReady, journeyData, host }) => {
  const elRef = useRef<HTMLDivElement>(null);
  console.log(elRef)
  useEffect(() => {
    if (sessionReady) {
      journeyHostingScript(companyId, host);
      window.Journey.init(journeyData?.formId, {
        session: sessionId,
        containerRef: elRef.current,
        data: journeyData?.formDefault,
      });
    }
  }, [elRef, sessionReady]);

  return <div className='journey-provider' ref={elRef} />;
};

export default JourneyProvider;
