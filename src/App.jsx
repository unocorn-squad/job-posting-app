import JobCardComponent from "./components/JobCardComponent";

const data = {
  company: "Scoot",
  logo: "./assets/images/logos/scoot.svg",
  logoBackground: "hsl(36, 87%, 49%)",
  position: "Senior Software Engineer",
  postedAt: "5h ago",
  contract: "Full Time",
  location: "United Kingdom",
};
function App() {
  return (
     <JobCardComponent {...data} />
   
  );
}

export default App;
