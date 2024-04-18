import axios from "axios";

const githubApi = axios.create({
  baseURL: "https://api.github.com",
});

export const fetchRepositories = async (username) => {
  try {
    const response = await githubApi.get(`/users/${username}/repos`);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 403) {
      console.error("GitHub API rate limit exceeded or unauthorized request:", error);
    } else {
      console.error("Error fetching repositories:", error);
    }
    throw error;
    // console.error("Error fetching repositories:", error);
    // throw error;
  }
};