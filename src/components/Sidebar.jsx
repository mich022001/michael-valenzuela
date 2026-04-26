function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-inner">
        <div className="profile-block">
	  <div className="avatar">
	    <span>MV</span>
	  </div>
	  <h1 className="sidebar-name">Michael Valenzuela</h1>
	  <p className="sidebar-role">Full-Stack Developer</p>

	  <div className="status-badge">
	    <span className="status-dot"></span>
	    Open to work.
	  </div>
	</div>
	
	<nav className="sidebar-nav">
	  <a href="#home" className="nav-link">Home</a>
	  <a href="#experience" className="nav-link">Experience</a>
	  <a href="#projects" className="nav-link">Projects</a>
	  <a href="#contact" className="nav-link">Contact</a>
        </nav>

	<div className="sidebar-meta">
	  <div className="meta-row">
	    <span>Based</span>
	    <strong>Philippines</strong>
	  </div>
	  <div className="meta-row">
	    <span>Focus</span>
	    <strong>Full-Stack / Android</strong>
	  </div>
	  <div className="meta-row">
	    <span>Professional Experience</span>
	    <strong>2+ Years</strong>
	  </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
