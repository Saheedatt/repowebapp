# Github Repository Web App
The task was to create a web application that interacts with the GitHub API to fetch and display a list of my repositories. We were given a list of functionalities/features to implement using React.js and things learnt from the first semester.

## Features Implemented
- 404 Page: An Error(404) page was created for when users try to navigate to undefined routes and when there are navigation errors.
        
- Error Boundary: An error page shows when an error occurs within the defined boundary. The error boundary component catches errors in the application. See: `Random.jsx.` If an error is thrown during rendering, the `ErrorBoundary` will display a fallback UI to inform users that something went wrong.
        
- Repository Listing: Implemented a page that fetches data of user's repository using the Github API. It lists all the available Repositories.
       
- Pagination: Pagination is implemented on fetching the data. 5 repositories per page are displayed. A "Next" button is available that goes to the next oage onClick.   
   
- Nested Routing: Nested Routing is used to display all the repository and the other available pages.
      
- Search and Filter Repositories: A search functionality is added to filter repositories based on value entered into the search bar.
   
- View Selected Repository Details: Nested routing is also used to display detailed information for selected repositories
e.g Name, Description, Languages, Forks, Stars etc.
  
- Layout and Design<- Chakra UI and Tailwind CSS are used to build the user interface. Chakra UI is build according to the
WAI-ARIA guideline, making my webapp more accessible.
        
## Technologies used
- React- Used for building the frontend components and managing application state.
        
- Tailwind CSS- Used to style user interfaces using utility classes.
        
- Chakra UI- Implemented for reusable UI components andenhanced accessibility.
            
- React Rounter- Important for routing and navigation within the application.   
        
- Axios- Used for making HTTP requests to the GitHub API.
        
## Problems Faced
- I had issues with making my app fully responsive using TaiwlindCSS.For some reason it wasn't working. I am new to TailwindCSS and will look into fixing the problem. In the meantime, Plain CSS was used alongside Tailwind to make the app responsive.
- Chakra UI has built-in styles and I am still finding it difficult to navigate overriding it's style: This is in respect with making the modal.
- I had issues implementing the search and filter functionality. It is working partially now.
- Failed to implement the functionality for creating a new repository, updating it and deleting it.

## Project Screenshot
![RepositoryDetails](/public/Screenshot.png)

## Live Link
- https://saheedatrepo.netlify.app/

### Acknowledgments
- Mr Setemi Ojo
-  AltSchool Africa
