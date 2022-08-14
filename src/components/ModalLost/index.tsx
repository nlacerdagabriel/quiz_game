import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useControllableState,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../contexts/AppContext";
import { theme } from "../../theme";
import { useNavigate } from "react-router-dom";

export const ModalLost = () => {
  const { score, isModalLostVisible, restartQuiz, toggleLostModalVisible} =
    useContext(AppContext);

  const [value, setValue] = useState(isModalLostVisible);
  const navigate = useNavigate();

  const [internalValue, setInternalValue] = useControllableState({
    value,
    onChange: setValue,
  });

  useEffect(() => {
    setTimeout(() => {
      if (isModalLostVisible) {
        setInternalValue(!value);
      }
    }, 1000);

    console.log(isModalLostVisible)
  }, [isModalLostVisible]);
  
  const onRestart = () => {
    toggleLostModalVisible(false)
    navigate("/");
    restartQuiz()
    setInternalValue(false);
  };

  return (
    <>
      <Modal isCentered isOpen={internalValue} onClose={() => {}}>
        {
          <ModalOverlay
            bg="blackAlpha.300"
            backdropFilter="blur(10px) hue-rotate(90deg)"
          />
        }
        <ModalContent>
          <ModalHeader>You've lost!</ModalHeader>
          <ModalBody>
            <Text>Your current score: {score}</Text>
          </ModalBody>
          <ModalFooter>
            <Button
              backgroundColor={theme.colors.danger}
              color={theme.colors.white}
              onClick={onRestart}
            >
              Restart
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
