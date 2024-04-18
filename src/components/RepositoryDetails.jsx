import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { fetchRepositories } from "../services/fetchGithubApi";

function RepositoryDetails() {
  const { repoId } = useParams();
  const [repo, setRepo] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getRepo = async () => {
      setLoading(true);
      try {
        const repositories = await fetchRepositories("saheedatt");
        const selectedRepo = repositories.filter(
          (repo) => repo.id === parseInt(repoId)
        );
        if (selectedRepo.length > 0) {
          setRepo(selectedRepo[0]);
        } else {
          setRepo(null);
        }
      } catch (error) {
        console.error("Error fetching repository:", error);
      }

      //     const selectedRepo = repositories.find(
      //       (repo) => repo.id === parseInt(repoId)
      //     );
      //     setRepo(selectedRepo);
      //   } catch (error) {
      //     console.error("Error fetching repository:", error);
      //   }
      setLoading(false);
    };
    getRepo();
  }, [repoId]);

  const formatDate = (dateTimeString) => {
    const date = new Date(dateTimeString);
    return date.toLocaleDateString();
  };

  const cardVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  if (loading) return <div>Loading...</div>;
  if (!repo) return <div>Repository not found!</div>;

  return (
    <div className="flex flex-col items-center justify-center font-monteserrat">
      <motion.div
        className="w-full max-w-md bg-white shadow-md rounded-lg p-6"
        variants={cardVariants}
        initial="initial"
        animate="animate"
      >
        <div className="w-full max-w-md bg-black text-white shadow-md rounded-lg p-6">
          <p className="text-xl font-bold mb-2">Name: {repo.name}</p>
          <p>Description: {repo.description} || 'No description available.'</p>
          <div className="flex flex-row justify-between items-center mt-4 border-b border-gray-200 pb-2">
            <div>
              <p>Stars: {repo.stargazers_count}</p>
              <p>Forks: {repo.forks_count}</p>
            </div>
            <div>
              <p>Open issues: {repo.open_issues_count}</p>
              <p>Watchers: {repo.watchers_count}</p>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center mt-4">
            <p>Created at: {formatDate(repo.created_at)}</p>
            <p>Updated at: {formatDate(repo.updated_at)}</p>
          </div>
          <p className="mt-4">Language: {repo.language || "Not specified"}</p>
          <p className="mt-2">
            Link: 
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300"
            >
              Visit Repository
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
export default RepositoryDetails;
