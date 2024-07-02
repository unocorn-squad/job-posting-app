import scootLogo from "./assets/logos/scoot.svg";
import JobCard from "./components/JobCard";
import "./App.css";

function App() {
  return (
    <JobCard
      location="United Kingdom"
      title="Senior Software Engineer"
      companyName="Scoot"
      jobType="Full Time"
      companyLogo={scootLogo}
      time="5h ago"
    />
  );
}

export default App;
