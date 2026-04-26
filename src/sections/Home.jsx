import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaLinux,
  FaJava,
  FaServer,
  FaTerminal,
  FaBug,
} from "react-icons/fa";
import { SiPostgresql, SiSupabase } from "react-icons/si";

function Home() {
  return (
    <div>
      <div className="section-header">
        <span className="section-label">About Me</span>
        <div className="section-line"></div>
      </div>

      <div className="hero-card">
        <p className="intro-text">
          Software Engineer focused on Embedded Android and Full-Stack Systems.
        </p>

        <h2 className="hero-title">
          I debug Android platforms and build backend-driven applications.
        </h2>

        <p className="hero-description">
          I have professional experience working on Android TV / Set-Top Box
          platforms for Airtel, Verizon, and Telus, using ADB, logcat,
          bugreports, Linux tools, and Bash scripting for system-level analysis.
          I also build full-stack applications such as a Direct Sales Management
          System with sponsor hierarchy, bonus ledger logic, redemption tracking,
          and reporting workflows.
        </p>
      </div>

      <div className="section-header spaced-top">
        <span className="section-label">Tech Stack</span>
        <div className="section-line"></div>
      </div>

      <div className="grid two-col">
        <div className="panel">
          <h3 className="panel-title">Frontend</h3>
          <div className="tag-list">
            <span className="tech-item">
              <FaReact className="tech-icon" /> React
            </span>
            <span className="tech-item">
              <FaJs className="tech-icon" /> JavaScript
            </span>
            <span className="tech-item">
              <FaHtml5 className="tech-icon" /> HTML
            </span>
            <span className="tech-item">
              <FaCss3Alt className="tech-icon" /> CSS
            </span>
          </div>
        </div>

        <div className="panel">
          <h3 className="panel-title">Backend</h3>
          <div className="tag-list">
            <span className="tech-item">
              <FaNodeJs className="tech-icon" /> Node.js
            </span>
            <span className="tech-item">
              <FaServer className="tech-icon" /> Express
            </span>
            <span className="tech-item">
              <FaServer className="tech-icon" /> REST API
            </span>
          </div>
        </div>

        <div className="panel">
          <h3 className="panel-title">Database</h3>
          <div className="tag-list">
            <span className="tech-item">
              <SiPostgresql className="tech-icon" /> PostgreSQL
            </span>
            <span className="tech-item">
              <SiSupabase className="tech-icon" /> Supabase
            </span>
          </div>
        </div>

        <div className="panel">
          <h3 className="panel-title">Android / Systems</h3>
          <div className="tag-list">
            <span className="tech-item">
              <FaJava className="tech-icon" /> Java
            </span>
            <span className="tech-item">
              <FaTerminal className="tech-icon" /> ADB
            </span>
            <span className="tech-item">
              <FaBug className="tech-icon" /> Logcat
            </span>
            <span className="tech-item">
              <FaBug className="tech-icon" /> Bugreport
            </span>
            <span className="tech-item">
              <FaLinux className="tech-icon" /> Linux
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
