import { Box, Button, Container, Flex, Heading, IconButton, Input, List, ListItem, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTask = () => {
    if (inputValue.trim() !== "") {
      setTasks([...tasks, inputValue]);
      setInputValue("");
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const bgColor = useColorModeValue("gray.50", "gray.800");
  const textColor = useColorModeValue("gray.800", "white");
  const inputBgColor = useColorModeValue("white", "gray.700");
  const buttonColor = "blue.500";

  return (
    <Container maxW="container.md" py={8}>
      <VStack spacing={8}>
        <Heading as="h1" size="xl" color={textColor}>
          Todo List
        </Heading>
        <Flex as="form" onSubmit={(e) => e.preventDefault()} width="full">
          <Input placeholder="Add a new task" value={inputValue} onChange={(e) => setInputValue(e.target.value)} bg={inputBgColor} borderColor="gray.300" color={textColor} />
          <IconButton aria-label="Add task" icon={<FaPlus />} ml={2} colorScheme="blue" onClick={handleAddTask} />
        </Flex>
        <List spacing={3} width="full">
          {tasks.map((task, index) => (
            <ListItem key={index} bg={bgColor} p={4} borderRadius="md" display="flex" justifyContent="space-between" alignItems="center">
              <Text color={textColor}>{task}</Text>
              <IconButton aria-label="Delete task" icon={<FaTrash />} colorScheme="red" onClick={() => handleDeleteTask(index)} />
            </ListItem>
          ))}
        </List>
        <Button colorScheme="blue" px={8} onClick={handleAddTask} isDisabled={!inputValue.trim()}>
          Add Task
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
