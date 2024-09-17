import { Box, Button, Image, Text, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import floral from "../assets/floral.png";
import { GiImperialCrown, GiQueenCrown } from "react-icons/gi";
import LevelCompleteModal from "./LevelCompleteModal";
import Arrow from "../Components/Arrow";


// Function to save tasks and the selected task to localStorage
const saveToLocalStorage = (tasks, selectedTask) => {
  localStorage.setItem("availableTasks", JSON.stringify(tasks));
  localStorage.setItem("selectedTask", JSON.stringify(selectedTask));
};

// Function to load tasks and the selected task from localStorage
const loadFromLocalStorage = () => {
  const savedTasks = localStorage.getItem("availableTasks");
  const savedSelectedTask = localStorage.getItem("selectedTask");
  
  return {
    tasks: Array.isArray(JSON.parse(savedTasks)) ? JSON.parse(savedTasks) : [], // Ensure tasks is an array
    selectedTask: savedSelectedTask ? JSON.parse(savedSelectedTask) : null,
  };
};

const Cards = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [availableTasks, setAvailableTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState({ level: 1 });
  const [rotation, setRotation] = useState(0); // State for rotation angle









  const cardsLevelOne = [
    {
      id: 1,
      level: 1,
      task: "Complete the monthly financial report",
      elseTask: "Review last month's budget allocations",
    },
    {
      id: 2,
      level: 1,
      task: "Prepare presentation for client meeting",
      elseTask: "Email the final draft to the marketing team",
    },
    {
      id: 3,
      level: 1,
      task: "Fix UI bug on the user profile page",
      elseTask: "Cross-test on different browsers for compatibility",
    },
    {
      id: 4,
      level: 1,
      task: "Respond to customer feedback on support tickets",
      elseTask: "Follow up on unresolved high-priority issues",
    },
    {
      id: 5,
      level: 1,
      task: "Organize team building event for next month",
      elseTask: "Book a venue and send out invitations",
    },
    {
      id: 6,
      level: 1,
      task: "Update product documentation with new features",
      elseTask: "Review technical changes with the dev team",
    },
    {
      id: 7,
      level: 1,
      task: "Analyze social media engagement metrics",
      elseTask: "Draft report on insights and growth strategies",
    },
    {
      id: 8,
      level: 1,
      task: "Backup database and archive old data",
      elseTask: "Verify that backups were successfully completed",
    },
    {
      id: 9,
      level: 1,
      task: "Schedule a one-on-one with team members",
      elseTask: "Discuss project progress and individual goals",
    },
    {
      id: 10,
      level: 1,
      task: "Research industry trends for quarterly newsletter",
      elseTask: "Draft the outline for the next publication",
    },
  ];

  const cardsLevelTwo = [
    {
      id: 1,

      level: 2,
      task: "Complete the monthly financial report",
      elseTask: "Review last month's budget allocations",
    },
    {
      id: 2,
      level: 2,
      task: "Prepare presentation for client meeting",
      elseTask: "Email the final draft to the marketing team",
    },
    {
      id: 3,
      level: 2,
      task: "Fix UI bug on the user profile page",
      elseTask: "Cross-test on different browsers for compatibility",
    },
    {
      id: 4,
      level: 2,
      task: "Respond to customer feedback on support tickets",
      elseTask: "Follow up on unresolved high-priority issues",
    },
    {
      id: 5,
      level: 2,
      task: "Organize team building event for next month",
      elseTask: "Book a venue and send out invitations",
    },
    {
      id: 6,
      level: 2,
      task: "Update product documentation with new features",
      elseTask: "Review technical changes with the dev team",
    },
    {
      id: 7,
      level: 2,
      task: "Analyze social media engagement metrics",
      elseTask: "Draft report on insights and growth strategies",
    },
    {
      id: 8,
      level: 2,
      task: "Backup database and archive old data",
      elseTask: "Verify that backups were successfully completed",
    },
    {
      id: 9,
      level: 2,
      task: "Schedule a one-on-one with team members",
      elseTask: "Discuss project progress and individual goals",
    },
    {
      id: 10,
      level: 2,
      task: "Research industry trends for quarterly newsletter",
      elseTask: "Draft the outline for the next publication",
    },
  ];




  const cardsLevelThree = [
    {
      id: 1,

      level: 3,
      task: "Complete the monthly financial report",
      elseTask: "Review last month's budget allocations",
    },
    {
      id: 2,
      level: 3,
      task: "Prepare presentation for client meeting",
      elseTask: "Email the final draft to the marketing team",
    },
    {
      id: 3,
      level: 3,
      task: "Fix UI bug on the user profile page",
      elseTask: "Cross-test on different browsers for compatibility",
    },
    {
      id: 4,
      level: 3,
      task: "Respond to customer feedback on support tickets",
      elseTask: "Follow up on unresolved high-priority issues",
    },
    {
      id: 5,
      level: 3,
      task: "Organize team building event for next month",
      elseTask: "Book a venue and send out invitations",
    },
    {
      id: 6,
      level: 3,
      task: "Update product documentation with new features",
      elseTask: "Review technical changes with the dev team",
    },
    {
      id: 7,
      level: 3,
      task: "Analyze social media engagement metrics",
      elseTask: "Draft report on insights and growth strategies",
    },
    {
      id: 8,
      level: 3,
      task: "Backup database and archive old data",
      elseTask: "Verify that backups were successfully completed",
    },
    {
      id: 9,
      level: 3,
      task: "Schedule a one-on-one with team members",
      elseTask: "Discuss project progress and individual goals",
    },
    {
      id: 10,
      level: 3,
      task: "Research industry trends for quarterly newsletter",
      elseTask: "Draft the outline for the next publication",
    },
  ];




  const cardsLevelFour = [
    {
      id: 1,

      level: 4,
      task: "Complete the monthly financial report",
      elseTask: "Review last month's budget allocations",
    },
    {
      id: 2,
      level: 4,
      task: "Prepare presentation for client meeting",
      elseTask: "Email the final draft to the marketing team",
    },
    {
      id: 3,
      level: 4,
      task: "Fix UI bug on the user profile page",
      elseTask: "Cross-test on different browsers for compatibility",
    },
    {
      id: 4,
      level: 4,
      task: "Respond to customer feedback on support tickets",
      elseTask: "Follow up on unresolved high-priority issues",
    },
    {
      id: 5,
      level: 4,
      task: "Organize team building event for next month",
      elseTask: "Book a venue and send out invitations",
    },
    {
      id: 6,
      level: 4,
      task: "Update product documentation with new features",
      elseTask: "Review technical changes with the dev team",
    },
    {
      id: 7,
      level: 4,
      task: "Analyze social media engagement metrics",
      elseTask: "Draft report on insights and growth strategies",
    },
    {
      id: 8,
      level: 4,
      task: "Backup database and archive old data",
      elseTask: "Verify that backups were successfully completed",
    },
    {
      id: 9,
      level: 4,
      task: "Schedule a one-on-one with team members",
      elseTask: "Discuss project progress and individual goals",
    },
    {
      id: 10,
      level: 4,
      task: "Research industry trends for quarterly newsletter",
      elseTask: "Draft the outline for the next publication",
    },
  ];



  const cardsLevelFive = [
    {
      id: 1,

      level: 5,
      task: "Complete the monthly financial report",
      elseTask: "Review last month's budget allocations",
    },
    {
      id: 2,
      level: 5,
      task: "Prepare presentation for client meeting",
      elseTask: "Email the final draft to the marketing team",
    },
    {
      id: 3,
      level: 5,
      task: "Fix UI bug on the user profile page",
      elseTask: "Cross-test on different browsers for compatibility",
    },
    {
      id: 4,
      level: 5,
      task: "Respond to customer feedback on support tickets",
      elseTask: "Follow up on unresolved high-priority issues",
    },
    {
      id: 5,
      level: 5,
      task: "Organize team building event for next month",
      elseTask: "Book a venue and send out invitations",
    },
    {
      id: 6,
      level: 5,
      task: "Update product documentation with new features",
      elseTask: "Review technical changes with the dev team",
    },
    {
      id: 7,
      level: 5,
      task: "Analyze social media engagement metrics",
      elseTask: "Draft report on insights and growth strategies",
    },
    {
      id: 8,
      level: 5,
      task: "Backup database and archive old data",
      elseTask: "Verify that backups were successfully completed",
    },
    {
      id: 9,
      level: 5,
      task: "Schedule a one-on-one with team members",
      elseTask: "Discuss project progress and individual goals",
    },
    {
      id: 10,
      level: 5,
      task: "Research industry trends for quarterly newsletter",
      elseTask: "Draft the outline for the next publication",
    },
  ];



  const levelMap = {
    1: cardsLevelOne,
    2: cardsLevelTwo,
    3: cardsLevelThree,
    4: cardsLevelFour,
    5: cardsLevelFive,
  };




  // Load tasks and the selected task from localStorage on component mount
useEffect(() => {
  const { tasks, selectedTask } = loadFromLocalStorage();
  if (Array.isArray(tasks)) {
    setAvailableTasks(tasks.length > 0 ? tasks : cardsLevelOne);
  } else {
    setAvailableTasks(cardsLevelOne);
  }
  setSelectedTask(selectedTask || { level: 1 });
}, []);


const getRandomTask = (pusher) => {
  if (!Array.isArray(availableTasks) || availableTasks.length === 0) {
    onOpen();
    return;
  }

  // Choose a random task
  const randomIndex = Math.floor(Math.random() * availableTasks.length);
  const task = availableTasks[randomIndex];

  // Update rotation based on pusher (king or queen)
  const rotationAngle = pusher === "king" ? -4380 : 4380;
  setRotation(rotation + rotationAngle);

  // Remove the selected task from the available tasks list
  const newAvailableTasks = availableTasks.filter(
    (_, index) => index !== randomIndex
  );

  setSelectedTask(task);
  setAvailableTasks(newAvailableTasks);

  saveToLocalStorage(newAvailableTasks, task);
};

  // const getRandomTask = (pusher) => {
  //   if (availableTasks.length === 0) {
  //     //   alert('No more tasks available!');
  //     //   setAvailableTasks([...cardsLevelOne]);
  //     onOpen();
  //     return;
  //   }

  //   // Choose a random task
  //   const randomIndex = Math.floor(Math.random() * availableTasks.length);
  //   const task = availableTasks[randomIndex];

  //   // Update rotation based on pusher (king or queen)
  //   const rotationAngle = pusher === "king" ? -4380 : 4380; // Rotate up for king, down for queen
  //   setRotation(rotation + rotationAngle); // Accumulate rotation

  //   // Remove the selected task from the available tasks list
  //   const newAvailableTasks = availableTasks.filter(
  //     (_, index) => index !== randomIndex
  //   );

  //   // Update state
  //   setSelectedTask(task);
  //   setAvailableTasks(newAvailableTasks);
  // };

  // const handleOnClose = () => {
  //   if (selectedTask?.level === 1) {
  //     setAvailableTasks(cardsLevelTwo);
  //   }else if(selectedTask?.level === 2){
  //     setAvailableTasks(cardsLevelThree);
  //   }else if(selectedTask?.level === 3){
  //     setAvailableTasks(cardsLevelFour);
  //   }else if(selectedTask?.level === 4){
  //     setAvailableTasks(cardsLevelFive);
  //   }
  //   onClose();
  // };

  const handleOnClose = () => {
    const nextLevel = selectedTask?.level + 1;
  
    // Retrieve tasks for the next level from the levelMap
    const nextLevelTasks = levelMap[nextLevel] || [];
  
    if (nextLevelTasks.length > 0) {
      setAvailableTasks(nextLevelTasks);
      setSelectedTask({ level: nextLevel }); // Reset selectedTask for the next level
    } else {
      console.error("No tasks available for the next level");
    }
  
    // Close the modal
    onClose();
  };
  

  
  return (
    <Box
      overflow={"auto"}
      bg={selectedTask?.level === 2 ? "#121212" : "#121212"}
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
        transition={"all 5.5s ease"} // Smooth transition for the rotation
        transform={`rotate(${rotation}deg)`} // Apply rotation state
        position={"relative"}
        p={2}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"start"}
        // bg={selectedTask?.level === 2  ? "#fff" :"#000" }
        // color={selectedTask?.level === 2  ? "#000":"#fff"}
        boxShadow={"lg"}
        rounded={"xl"}
        w={250}
        h={350}
        
       
        bg={
          selectedTask?.level === 1
            ? "#fff" // Background color for level 1
            : selectedTask?.level === 2
            ? "#F79F1F" // Background color for level 2
            : selectedTask?.level === 3
            ? "#000" // Background color for level 3
            : selectedTask?.level === 4
            ? "#880808" // Background color for level 4
            : "#000" // Background color for level 5 or higher
        }

        className={selectedTask?.level === 2 ? "gold":null}

        // bg={" linear-gradient(316deg, #310e68 0%, #5f0f40 74%)"}

        //         background-color: #310e68;
        // background-image: linear-gradient(316deg, #310e68 0%, #5f0f40 74%);
      >
        <Box
          p={2.5}
          w={"100%"}
          h={"100%"}
          border={
            selectedTask?.level === 1
              ? "1.5px solid #b71540" // Background color for level 1
              : selectedTask?.level === 2
              ? "1.5px solid #000" // Background color for level 2
              : selectedTask?.level === 3
              ? "1.5px solid #b71540" // Background color for level 3
              : selectedTask?.level === 4
              ? "1.5px solid #fff" // Background color for level 4
              : "2px solid #880808" // Background color for level 5 or higher
          }
          rounded={"lg"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"start"}
        >
          <Text
            as={"span"}
            textTransform={"uppercase"}
            className="sofadi-one-regular"
            fontWeight={600}
            fontSize={"2xl"}
            zIndex={2}
            backgroundImage={selectedTask?.level === 5 ?"repeating-linear-gradient(to right, #a2682a 0%, #be8c3c 8%, #be8c3c 18%, #d3b15f 27%, #faf0a0 35%, #ffffc2 40%, #faf0a0 50%, #d3b15f 58%, #be8c3c 67%, #b17b32 77%, #bb8332 83%, #d4a245 88%, #e1b453 93%, #a4692a 100%)":""}
            bgClip="text"

            color={
              selectedTask?.level === 1
                ? "#000" // Background color for level 1
                : selectedTask?.level === 2
                ? "#000" // Background color for level 2
                : selectedTask?.level === 3
                ? "#fff" // Background color for level 3
                : selectedTask?.level === 4
                ? "#fff" // Background color for level 4
                : null // Background color for level 5 or higher
            }
          >
            {selectedTask?.task}
          </Text>
          <Text
            as={"span"}
            textTransform={"capitalize"}
            className="sofadi-one-regular"
            fontSize={"xl"}
            zIndex={2}
            fontWeight={600}
            color={
              selectedTask?.level === 1
                ? "#b71540" // Background color for level 1
                : selectedTask?.level === 2
                ? "#fff" // Background color for level 2
                : selectedTask?.level === 3
                ? "#b71540" // Background color for level 3
                : selectedTask?.level === 4
                ? "#f5b7b1" // Background color for level 4
                : "#880808" // Background color for level 5 or higher
            }
          >
            LAST TASK TWICE
          </Text>

<Arrow/>
        </Box>
        <Image
          transform={"rotate(150deg)"}
          position={"absolute"}
          bottom={-42}
          right={0}
          width={36}
          src={floral}
          opacity={1.5}
        />

      </Box>
      

      {/* King Button */}
      <Box
        //   as="button"
        onClick={() => getRandomTask("king")}
        transition={"all 1.5s"}
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

      
      <LevelCompleteModal
        level={selectedTask?.level}
        onClose={handleOnClose}
        isOpen={isOpen}
        onOpen={onOpen}
      />
    </Box>
  );
};

export default Cards;
