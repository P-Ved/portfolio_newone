import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer Intern</h4>
                <h5>BISAG-N, Gandhinagar</h5>
              </div>
              <h3 className="career-period">Jan 2026 - Present</h3>
            </div>
            <p>
              Led development of ITRA to digitize 100% of manual issue/resource
              workflows across 5+ departments, implemented 3-tier RBAC
              approvals with zero unauthorized access incidents, and delivered
              10+ secure APIs with MongoDB optimization and real-time sync to
              reduce query latency by around 30%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI / ML Intern</h4>
                <h5>NXON</h5>
              </div>
              <h3 className="career-period">Jun - Aug 2025</h3>
            </div>
            <p>
              Built a real-time fall detection system using pre-trained deep
              learning with CPU-only inference, removing GPU dependency to cut
              infrastructure cost while maintaining over 90% classification
              accuracy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
