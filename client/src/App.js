import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import EditInterview from "./components/EditInterview/EditInterview";
import ScheduleInterview from "./components/ScheduleInterview/ScheduleInterview";
import UpcomingInterviews from "./components/UpcomingInterview/UpcomingInterviews";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schedule" element={<ScheduleInterview />} />
        <Route path="/upcoming" element={<UpcomingInterviews />} />
        <Route path="/edit/:interviewId" element={<EditInterview />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
