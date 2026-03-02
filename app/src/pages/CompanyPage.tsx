import SEO from '../components/SEO';
import CompanyHero from '../sections/company/CompanyHero';
import WhyCompanies from '../sections/landing/WhyCompanies';
import HowItWorks from '../sections/company/HowItWorks';
import ProblemTypes from '../sections/company/ProblemTypes';
import WhyAI from '../sections/company/WhyAI';
import EvalFramework from '../sections/company/EvalFramework';
import WhatYouGain from '../sections/company/WhatYouGain';
import IntakeForm from '../sections/company/IntakeForm';

export default function CompanyPage() {
  return (
    <>
      <SEO
        title="For Companies — Post Real Problems, Hire Proven Builders | VantaX 2026"
        description="Skip resume screening. Post a real business problem at VantaX and receive structured, scored submissions from early-career builders. Hire based on execution, not credentials."
        path="/companies"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'For Companies', path: '/companies' },
        ]}
      />
      <CompanyHero />
      <WhyCompanies />
      <HowItWorks />
      <ProblemTypes />
      <WhyAI />
      <EvalFramework />
      <WhatYouGain />
      <IntakeForm />
    </>
  );
}
