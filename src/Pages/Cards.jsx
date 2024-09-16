import { Box, Button, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import floral from '../assets/floral.png'
import { GiImperialCrown, GiQueenCrown } from "react-icons/gi";

const Cards = () => {
    const cardsLevelOne = [
        {
          id: 1,
          task: "Complete the monthly financial report",
          elseTask: "Review last month's budget allocations",
        },
        {
          id: 2,
          task: "Prepare presentation for client meeting",
          elseTask: "Email the final draft to the marketing team",
        },
        {
          id: 3,
          task: "Fix UI bug on the user profile page",
          elseTask: "Cross-test on different browsers for compatibility",
        },
        {
          id: 4,
          task: "Respond to customer feedback on support tickets",
          elseTask: "Follow up on unresolved high-priority issues",
        },
        {
          id: 5,
          task: "Organize team building event for next month",
          elseTask: "Book a venue and send out invitations",
        },
        {
          id: 6,
          task: "Update product documentation with new features",
          elseTask: "Review technical changes with the dev team",
        },
        {
          id: 7,
          task: "Analyze social media engagement metrics",
          elseTask: "Draft report on insights and growth strategies",
        },
        {
          id: 8,
          task: "Backup database and archive old data",
          elseTask: "Verify that backups were successfully completed",
        },
        {
          id: 9,
          task: "Schedule a one-on-one with team members",
          elseTask: "Discuss project progress and individual goals",
        },
        {
          id: 10,
          task: "Research industry trends for quarterly newsletter",
          elseTask: "Draft the outline for the next publication",
        },
      ];

  const [availableTasks, setAvailableTasks] = useState([...cardsLevelOne]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [rotation, setRotation] = useState(0); // State for rotation angle

  const getRandomTask = (pusher) => {
    if (availableTasks.length === 0) {
    //   alert('No more tasks available!');
      setAvailableTasks([...cardsLevelOne])
      return;
    }

    // Choose a random task
    const randomIndex = Math.floor(Math.random() * availableTasks.length);
    const task = availableTasks[randomIndex];

    // Update rotation based on pusher (king or queen)
    const rotationAngle = pusher === "king" ? -185 : 185; // Rotate up for king, down for queen
    setRotation(rotation + rotationAngle); // Accumulate rotation

    // Remove the selected task from the available tasks list
    const newAvailableTasks = availableTasks.filter((_, index) => index !== randomIndex);
    
    // Update state
    setSelectedTask(task);
    setAvailableTasks(newAvailableTasks);
  };

  return (
    <Box
      overflow={"auto"}
      bg={"#1e272e"}
      flexDirection={"column"}
      gap={8}
      py={4}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      h={"100vh"}
      w={"100vw"}
    >
      {/* Queen Button */}
      <Box
        onClick={() => getRandomTask("queen")}
        transition={"all 0.5s"}
        transform={"rotate(180deg)"}
        _focus={{ bg: "#000", outline: "none", border: "none" }}
        _hover={{ bg: "#000", outline: "none", border: "none" }}
        shadow={"md"}
        className="sofadi-one-regular"
        size={"lg"}
        py={8}
        px={8}
        rounded={"full"}
        color={"#fff"}
        bg="#7c0000"

        id="btn"
      >
        <GiQueenCrown fontSize={47} />
      </Box>

      {/* Card with dynamic rotation */}
      <Box
        transition={"all 0.5s ease"} // Smooth transition for the rotation
        transform={`rotate(${rotation}deg)`} // Apply rotation state
        position={"relative"}
        p={4}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"start"}
        bg={"#000"}
        color={'#fff'}
        boxShadow={"lg"}
        rounded={"xl"}
        w={280}
        h={400}
      >
        <Text
          as={"span"}
          textTransform={"capitalize"}
          className="sofadi-one-regular"
          fontWeight={600}
          fontSize={"3xl"}
        >
          {selectedTask?.task}
        </Text>
        <Text
          as={"span"}
          textTransform={"capitalize"}
          className="sofadi-one-regular"
          fontSize={"2xl"}
          color={"#b71540"}
        >
          LAST TASK TWICE
        </Text>
        <Image
          transform={"rotate(150deg)"}
          position={"absolute"}
          bottom={-42}
          right={0}
          width={40}
          src={floral}
        />
      </Box>

      {/* King Button */}
      <Box
    //   as="button"
        onClick={() => getRandomTask("king")}
        transition={"all 0.5s"}
        _focus={{ bg: "#000", outline: "none", border: "none" }}
        _hover={{ bg: "#000", outline: "none", border: "none" }}
        shadow={"md"}
        className="sofadi-one-regular"
        size={"lg"}
        py={8}
        px={8}
        rounded={"full"}
        color={"#fff"}
        bg="#7c0000"
        id="btn"
      >
        <GiImperialCrown fontSize={47} />
      </Box>
    </Box>
  );
};

export default Cards;
