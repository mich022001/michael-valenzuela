function Experience() {
  return (
    <div>
      <div className="section-header">
        <span className="section-label">Experience</span>
        <div className="section-line"></div>
      </div>

      <div className="experience-card">
        <p className="experience-duration">
          2024 – 2026
        </p>

        <h3 className="experience-role">
          Software Engineer — Embedded Android
        </h3>

        <p className="experience-company">
          Sercomm Philippines
        </p>

        <p className="experience-description">
          Worked on Android TV / Set-Top Box platforms for Airtel, Verizon, and Telus.
          Focused on system-level debugging, firmware validation, and root cause analysis.
        </p>
	
	<p className="experience-description">
          Investigated platform issues involving launcher behavior,
          connectivity states, UI transitions, and Android system services
          using ADB, logcat, bugreport, dumpsys, and Linux-based diagnostic
          tools. Utilized Bash scripting to automate log extraction, filtering,
          and repetitive debugging tasks to improve analysis efficiency.
        </p>

	<p className="experience-description">
          Managed defects and tracked development tasks using JIRA,
          collaborating with cross-functional teams through Agile workflows,
          including ticket creation, prioritization, and status reporting.
        </p>

	<div className="experience-highlight-box">
          <h4>Airtel Onsite Support — India</h4>
          <p className="experience-highlight">
            Provided onsite support in India for Airtel project, handling coding,
            testing, and coordination with Realtek (platform issues) and Airtel team (launcher issues).
          </p>
	</div>

        <div className="tag-list">
          <span className="tag">Java</span>
          <span className="tag">ADB</span>
          <span className="tag">Logcat</span>
          <span className="tag">Bugreport</span>
          <span className="tag">Linux</span>
	  <span className="tag">Bash</span>
          <span className="tag">JIRA</span>
        </div>
      </div>
    </div>
  );
}

export default Experience;
