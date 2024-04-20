import React from "react";
import "../index.css";

function Overview() {
  return (
    <div className="p-4 font-monteserrat overview">
      <h1 className="text-4xl font-bold mb-4 text-center heading">
        Github Repository Web App
      </h1>
      <p className="flex intro">
        Hello! My name is Saheedat Afolabi. This project is my submission for
        the second semester exam at AltSchool Africa(Frontend Engineering).
      </p>
      <span className="intro">
        The task was to create a web application that interacts with the GitHub
        API to fetch and display a list of my repositories. We were given a list
        of functionalities/features to implement using React.js. Styling is
        fully based on the creator's discretion.
      </span>

      <h2 className="pt-4 text-2xl font-bold features">- Features Implemented</h2>
      <ol className="p-4 custom-list ol">
        <li>
          <strong>404 Page</strong>- An Error(404) page was created for when
          users try to navigate to undefined routes.
          See: <a className="text-blue-500 underline" href="https://repowebapp.vercel.app/*">Error Page</a>
        </li>
        <li>
          <strong>Error Boundary</strong>- An error page shows when an error
          occurs within the defined boundary. The error boundary component
          catches errors in the application. See:
          <span className="text-bold text-red-700"> Random.jsx. (<a className="text-blue-500 underline" href="https://repowebapp.vercel.app/random">ErrorBoundary Page</a>)</span>
        </li>
        <li>
          <strong>Repository Listing</strong>- Implemented a page that fetches
          data of user's repository using the Github API. It lists all the
          available Repositories.
        </li>
        <li>
          <strong>Pagination</strong>- Pagination is implemented on fetching the
          data. 5 repositories per page are displayed. A "Next" button is
          available that goes to the next page onClick.
        </li>
        <li>
          <strong>Nested Routing</strong>- Nested Routing is used to display all
          the repository and the other available pages.
        </li>
        <li>
          <strong>Search and Filter Repositories</strong>- A search
          functionality is added to filter repositories based on value entered
          into the search bar.
        </li>
        <li>
          <strong>View Selected Repository Details</strong>- Nested routing is
          also used to display detailed information for selected repositories
          e.g Name, Description, Languages, Forks, Stars etc.
        </li>
        <li>
          <strong>Layout and Design</strong>- Chakra UI and Tailwind CSS are used
          to build the user interface. Chakra UI is built according to the
          WAI-ARIA guideline, making my webapp more accessible.
        </li>
      </ol>
      <h2 className="pt-4 text-2xl font-bold features">- Technologies used</h2>
      <ol className="p-4 custom-list ol">
        <li>
          <strong>React</strong>- Used for building the frontend components and
          managing application state.
        </li>
        <li>
          <strong>Tailwind CSS</strong>-Used to style user interfaces using
          utility classes.
        </li>
        <li>
          <strong>Chakra UI</strong>- Implemented for reusable UI components and
          enhanced accessibility.
        </li>
        <li>
          <strong>React Rounter</strong>- Important for routing and navigation
          within the application.
        </li>
        <li>
          <strong>Axios</strong>- Used for making HTTP requests to the GitHub API.
        </li>
      </ol>
      <h2 className="pt-4 text-2xl font-bold features">- Acknowledgements</h2>
      <p className="ol">Mr Setemi Ojo.</p>
    </div>
  );
}
export default Overview;
