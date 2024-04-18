import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

function CreateModal({ isOpen, onClose }) {
  const [repoName, setRepoName] = useState("");
  const [createdRepo, setCreatedRepo] = useState(null);

  const handleRepoCreation = () => {
    const newRepo = {
      name: repoName,
      createdAt: new Date().toLocaleString(),
    };

    setCreatedRepo(newRepo);

    console.log("Creating repository:", repoName);

    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <div
        className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 font-monteserrat"
        onClick={onClose}
      >
        <ModalContent className="flex  items-center justify-center bg-white p-6 rounded-lg shadow-lg">
          <ModalHeader className="text-2xl font-bold">
            Create New Repository
          </ModalHeader>

          <ModalBody pb={6}>
            <FormControl className="flex m-10">
              <FormLabel className="font-bold ">Repository Name: </FormLabel>
              <Input
                placeholder="Enter repository name"
                value={repoName}
                onChange={(event) => setRepoName(event.target.value)}
                className="border-b border-solid border-black pl-2"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter pb={20} className="flex items-center justify-center">
            <div>
            <Button
              className="text-white bg-black rounded-lg p-2 "
              mr={6}
              onClick={handleRepoCreation}
              disabled={!repoName} 
            >
              Create
            </Button>
            </div>
            <Button
              className="text-white bg-black rounded-lg  p-2"
              onClick={onClose}
            >
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </div>
    </Modal>
  );
}
export default CreateModal;
