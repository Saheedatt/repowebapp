import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchRepositories } from "../services/fetchGithubApi.js";
import { Input, Button, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

function RespositoryList({ username }) {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchItem, setSearchItem] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const reposPerPage = 5;

  useEffect(() => {
    const getRepos = async () => {
      setLoading(true);
      try {
        const data = await fetchRepositories(username);
        setRepos(data);
      } catch (error) {
        console.error("Error fetching repositories:", error);
      }
      setLoading(false);
    };
    getRepos();
  }, [username]);

  const filteredRepos = repos.filter((repo) =>
    repo.name.toLowerCase().includes(searchItem.toLowerCase())
  );

  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepos = filteredRepos.slice(indexOfFirstRepo, indexOfLastRepo);

  const nextPage = () => {
    setCurrentPage((prevPage) =>
      prevPage === Math.ceil(filteredRepos.length / reposPerPage)
        ? 1
        : prevPage + 1
    );
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="font-monteserrat">
      <InputGroup mt={4}>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.900" className="mt-4" />
        </InputLeftElement>
        <Input
          placeholder="Search repositories..."
          value={searchItem}
          onChange={(event) => setSearchItem(event.target.value)}
          mb={4}
          className="border-b-2 w-full border-black focus:outline-none focus:border-gray-500 py-2 pl-10"
        />
      </InputGroup>

      {filteredRepos.length > 0 ? (
        <div className="mt-6">
          {currentRepos.map((repo) => (
            <div
              key={repo.id}
              className="mb-8 border-b border-solid border-gray-200"
            >
              <Link to={`/repository/${repo.id}`}>
                <h3>{repo.name}</h3>
              </Link>
            </div>
          ))}
          {filteredRepos.length > reposPerPage && (
            <div className="flex justify-center">
              <Button
                className="bg-black text-white px-4 py-2 rounded-full mb-4 w-1/6 hover:bg-gray-900"
                onClick={nextPage}
                mt={4}
              >
                Next
              </Button>
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center h-screen">
          <p className="text-2xl">No repositories found.</p>
          <p className="text-xl">You can try checking your spellings...</p>
        </div>
      )}
    </div>
  );
}

export default RespositoryList;
