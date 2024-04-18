import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import RespositoryList from "./components/RepositoryList.jsx";
import RepositoryDetails from "./components/RepositoryDetails.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import Error404 from "./components/Error404.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Header from "./components/Header.jsx";
import Overview from "./components/Overview.jsx";
import Projects from "./components/Projects.jsx";
import "./index.css";
import Random from "./components/Random.jsx";

function Layout({ user }) {
  return (
    <div className="flex h-full">
      <Sidebar user={user} />
      <div className="container h-screen flex-1 flex flex-col shadow-lg">
        <Header />
        <div className="main flex-1 p-10 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
function App() {
  const username = "saheedatt";

  const user = {
    name: "Saheedat Afolabi",
    username: "saheedatt",
    bio: "Building in an attempt to solve important issues. Attempting technical writing. Physiotherapy student.",
    avatarUrl:
      "https://avatars.githubusercontent.com/u/104633466?s=400&u=b88cebf8586db7687d5cb875244891137d7135c9&v=4",
    location: "Lagos, Nigeria",
    socialLinks: [
      { name: "GitHub", url: "https://github.com/Saheedatt" },
      { name: "X(Twitter)", url: "https://twitter.com/idontseemyselff" },
      { name: "Email", url: "mailto:afolabisaheedat1@gmail.com" },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/saheedat-afolabi-1a91b5221/",
      },
    ],
  };
  return(
    <Routes>
      <Route path="/" element={<Layout user={user} />}>
      <Route index element={<RespositoryList username={username} />} />
        <Route path="overview" element={<Overview />} />
        <Route path="repository/:repoId" element={<RepositoryDetails />} />
        <Route path="random" element={
          <ErrorBoundary>
            <Random />
          </ErrorBoundary>
        } />
        <Route path="projects" element={<Projects />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  )
}
export default App;
// function App() {
//   const username = "saheedatt";

//   const user = {
//     name: "Saheedat Afolabi",
//     username: "saheedatt",
//     bio: "Building in an attempt to solve important issues. Attempting technical writing. Physiotherapy student.",
//     avatarUrl:
//       "https://avatars.githubusercontent.com/u/104633466?s=400&u=b88cebf8586db7687d5cb875244891137d7135c9&v=4",
//     location: "Lagos, Nigeria",
//     socialLinks: [
//       { name: "GitHub", url: "https://github.com/Saheedatt" },
//       { name: "X(Twitter)", url: "https://twitter.com/idontseemyselff" },
//       { name: "Email", url: "mailto:afolabisaheedat1@gmail.com" },
//       {
//         name: "LinkedIn",
//         url: "https://www.linkedin.com/in/saheedat-afolabi-1a91b5221/",
//       },
//     ],
//   };

//   return (
//     <div className="flex h-full">
//       <Sidebar user={user} />
//       <div className="container h-screen flex-1 flex flex-col shadow-lg">
//         <Header />
//         <div className="main flex-1 p-10 overflow-y-auto">
//           <Routes>
//             <Route path="/" element={<RespositoryList username={username} />} />
//             <Route path="/overview" element={<Overview />} />
//             <Route path="/repository/:repoId" element={<RepositoryDetails />} />
//             <Route
//               path="/random"
//               element={
//                 <ErrorBoundary>
//                   <Random />
//                 </ErrorBoundary>
//               }
//             />
//             <Route path="/projects" element={<Projects />} />
//             <Route path="*" element={<Error404 />} />
//           </Routes>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
