import { createBrowserRouter } from "react-router-dom";
import VoterList from "../pages/voters/VoterList";
import CandidateList from "../pages/candidates/CandidateList";
import VoteCastList from "../pages/vote_casts/VoteCastList";
import Dashboard from "../layout/Dashboard.tsx";
import ErrorPage from "../layout/ErrorPage";
import Content from "../layout/Content";
import CreateVoter from "../pages/voters/CreateVoter";
import EditVoter from "../pages/voters/EditVoter.tsx";
import Login from "../auth/Login.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Content />,
      },
      {
        path: "/voters",
        element: <VoterList />,
      },
      {
        path: "/voters/create",
        element: <CreateVoter />,
      },
      {
        path: "/voters/:id",
        element: <EditVoter />,
      },
      {
        path: "/candidates",
        element: <CandidateList/>,
      },
      {
        path: "/vote-casts",
        element: <VoteCastList/>,
      },
    ],
  },
    {
        path: "/login",
        element: <Login />
    },
]);

export default router;
