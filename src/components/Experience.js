import React from 'react'

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>experiece</h1>
      </div>
      <div className="container experience-wraper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Head of Coffee Program | Dropbox | 2015-2021</h3>
            <p>
            Accountable for fully operational coffee program development, including managing budget for machine buying operations and successfully trained a staff of 25 across 6 locations globally for optimal coffee operations.
            Anticipated and managed wholesale operations, utilizing skilled negotiation skills as head green coffee buyer on a weekly basis, developed strategic business relationships with stakeholders; reduced company’s wholesale budget by 10%.<br />
            Sourced, hired, and trained baristas in each coffee location, trained in-depth with espresso machines, roast blends, inventory, and the entire process of coffee for optimal Q/A.
            Presenter and speaker in-class presentations for over 6 years, experienced answering questions, and communicating full scope of the coffee process for employees within various departments.
            </p>
          </div>
        </div>
        {/* - */}
          <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Owner | 2Girl Roaster | 2011-2014</h3>
            <p>
            Led and managed a fully functional coffee roasting-only operation in a versatile role, responsible for all operations from farm to cup in a dynamic and collaborative business partnership.
            Innovated and implemented client-focused branding strategies, successfully developed the company’s vision and implementation with collaboration from skilled graphic designers and marketing strategists.
            Led the entire production of coffee process, negotiated best prices for wholesale international coffee; increased profit margins and strategies each succeeding year.
            </p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Manager | CIBO | 2009-2013</h3>
            <p>
            Head barista made accountable for managing and leading a team, included training 4-5 staff successfully in all coffee operations and procedures. 
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Experience; 