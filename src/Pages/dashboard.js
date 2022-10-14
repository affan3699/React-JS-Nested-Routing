import { Route, Routes } from "react-router-dom";
import Feedback from "./dashboard_screens/feedback";
import Message from "./dashboard_screens/messages";
import Notification from "./dashboard_screens/notification";

function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>

      <Routes>
        <Route path="message" element={<Message />} />
        <Route path="feedback" element={<Feedback />} />
        <Route path="notification" element={<Notification />} />
      </Routes>
    </>
  );
}
export default Dashboard;
