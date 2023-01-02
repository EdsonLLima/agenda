import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalCloseButton,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useState } from "react";

const ModalComp = ({ data, setData, dataEdit, isOpen, onClose }) => {
  const [name, setName] = useState(dataEdit.name || "");
  const [email, setEmail] = useState(dataEdit.email || "");
  return (
    <>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader></ModalHeader>
      </ModalContent>
    </>
  );
};
