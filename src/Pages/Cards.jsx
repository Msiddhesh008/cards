import {
  Box,
  Button,
  HStack,
  Image,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import floral from "../assets/floral.png";
import { GiImperialCrown, GiQueenCrown } from "react-icons/gi";
import LevelCompleteModal from "./LevelCompleteModal";
import Arrow from "../Components/Arrow";
import { OPACITY_ON_LOAD } from "../Components/animations";
import { TbWaveSawTool } from "react-icons/tb";
import { MdOutlineSwapCalls } from "react-icons/md";

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

  const [kingLifeLine, setKingLifeLine] = useState(2);
  const [queenLifeLine, setQueenLifeLine] = useState(2);

  const [queenSwap, setQueenSwap] = useState(2);
  const [kingSwap, setKingSwap] = useState(2);

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
      task: "Roleplay 👨🏻‍🎤 a fantasy of partners choice",
      elseTask: "Review last month's budget allocations",
    },
    {
      id: 2,
      level: 5,
      task: "Remove an item of clothing 🧥 for the rest of the game",
      elseTask: "Email the final draft to the marketing team",
    },
    {
      id: 3,
      level: 5,
      task: "Blindfold 🎗️ yourself and guess which part of your partner’s body you’re touching. 👉",
      elseTask: "Cross-test on different browsers for compatibility",
    },
    {
      id: 4,
      level: 5,
      task: "Kiss 💋 your partner passionately, like the climax of a movie. 🎬",
      elseTask: "Follow up on unresolved high-priority issues",
    },
    {
      id: 5,
      level: 5,
      task: "Play the rest of the game naked🦵",
      elseTask: "Book a venue and send out invitations",
    },
    {
      id: 6,
      level: 5,
      task: "Use 👅 each other as a human plate — whipped ice cream 🍧 , chocolate sauce 🍫, whatever takes your fancy!",
      elseTask: "Let ur partner lick👅 ice cream from any part of ur body as he/she wants💖",
    },
    {
      id: 7,
      level: 5,
      task: "Allow ur partner to  Blind fold and make love 💖 as he/she want💏",
      elseTask: "Draft report on insights and growth strategies",
    },
    {
      id: 8,
      level: 5,
      task: "Allow ur partner to role ice cube on ur body for 10 min ⏰",
      elseTask: "Verify that backups were successfully completed",
    },
    {
      id: 9,
      level: 5,
      task: "Dedicate 15 minutes ⏰ to browsing Fikfap with disciplined focus, ensuring purposeful and controlled engagement throughout.🧘",
      elseTask: "Discuss project progress and individual goals",
    },
    {
      id: 10,
      level: 5,
      task: "Give pleasure to your partner untill he/she moans💞",
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
    const rotationAngle = pusher === "king" ? 4380 : -4380;
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
    let nextLevel = selectedTask?.level + 1;

      // If the level is 5, reset back to level 1
  if (selectedTask?.level === 5) {
    nextLevel = 1;
  }

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

  const decreaseKingLifeLine = () => {
    setKingLifeLine((prev) => (prev > 0 ? prev - 1 : 0)); // Preventing the life line from going negative
    console.log(kingLifeLine);
  };


  const swapKingtask = () => {
    setKingSwap((prev) => (prev > 0 ? prev - 1 : 0)); // Preventing the life line from going negative
   
  };



  const decreaseQueenLifeLine = () => {
    setQueenLifeLine((prev) => (prev > 0 ? prev - 1 : 0)); // Preventing the life line from going negative
    console.log(kingLifeLine);
  };


  const swapQueentask = () => {
    setQueenSwap((prev) => (prev > 0 ? prev - 1 : 0)); // Preventing the life line from going negative
   
  };



  return (
    <Box
      {...OPACITY_ON_LOAD}
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
      <HStack w={"100%"} justifyContent={"space-around"}>
        <VStack position={"relative"}>
          <Button
            position={"absolute"}
            bottom={-8}
            p={2}
            pt={0.5}
            pb={0.5}
            fontSize={"sm"}
            rounded={"full"}
            bg={"white"}
            fontWeight={600}
            as={"span"}
            color={'#7c0000'}
          >
            {queenLifeLine}
          </Button>
          <Box
            //   as="button"
            onClick={decreaseQueenLifeLine}
            transition={"all 1.5s"}
            _focus={{ bg: "#000", outline: "none", border: "none" }}
            _hover={{ bg: "#000", outline: "none", border: "none" }}
            shadow={"md"}
            className="sofadi-one-regular"
            size={"lg"}
            py={4}
            px={4}
            rounded={"full"}
            color={"#fff"}
            bg="#7c0000"
            id="btn"
          >
            <TbWaveSawTool fontSize={28} />
          </Box>
        </VStack>
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

        <VStack position={"relative"}>
          <Button
            position={"absolute"}
            bottom={-8}
            p={2}
            pt={0.5}
            pb={0.5}
            fontSize={"sm"}
            rounded={"full"}
            bg={"white"}
            fontWeight={600}
            as={"span"}
            color={'#7c0000'}
          >
            {queenSwap}
          </Button>
          <Box
            //   as="button"
            onClick={swapQueentask}
            transition={"all 1.5s"}
            _focus={{ bg: "#000", outline: "none", border: "none" }}
            _hover={{ bg: "#000", outline: "none", border: "none" }}
            shadow={"md"}
            className="sofadi-one-regular"
            size={"lg"}
            py={4}
            px={4}
            rounded={"full"}
            color={"#fff"}
            bg="#7c0000"
            id="btn"
          >
            <MdOutlineSwapCalls fontSize={28} />
          </Box>
        </VStack>
      </HStack>

      {/* Card with dynamic rotation */}
      <Box
        // animation="smoothRotate 8s ease-in-out "
        willChange="transform"
        transition={"transform 5.5s ease-in-out"} // Longer duration for smoother effect
        transform={`rotate(${rotation}deg)`}
        backfacevisibility="hidden"
        transformstyle="preserve-3d"
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
        className={selectedTask?.level === 2 ? "gold" : null}

        // bg={" linear-gradient(316deg, #310e68 0%, #5f0f40 74%)"}

        //         background-color: #310e68;
        // background-image: linear-gradient(316deg, #310e68 0%, #5f0f40 74%);
      >
        <Box
          p={2.5}
          w={"100%"}
          h={"100%"}
          overflowX={'scroll'}
          pb={24}
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
            fontSize={"xl"}
            zIndex={2}
            backgroundImage={
              selectedTask?.level === 5
                ? "repeating-linear-gradient(to right, #a2682a 0%, #be8c3c 8%, #be8c3c 18%, #d3b15f 27%, #faf0a0 35%, #ffffc2 40%, #faf0a0 50%, #d3b15f 58%, #be8c3c 67%, #b17b32 77%, #bb8332 83%, #d4a245 88%, #e1b453 93%, #a4692a 100%)"
                : ""
            }
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
            fontSize={"lg"}
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
            {selectedTask?.task && "LAST TASK TWICE"}
          </Text>

          {/* <Arrow /> */}
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

      <HStack w={"100%"} justifyContent={"space-around"}>
        <VStack position={"relative"}>
          <Button
            position={"absolute"}
            top={-8}
            p={2}
            pt={0.5}
            pb={0.5}
            fontSize={"sm"}
            rounded={"full"}
            bg={"white"}
            fontWeight={600}
            as={"span"}
            color={'#7c0000'}
          >
            {kingSwap}
          </Button>
          <Box
            //   as="button"
            onClick={swapKingtask}
            transition={"all 1.5s"}
            _focus={{ bg: "#000", outline: "none", border: "none" }}
            _hover={{ bg: "#000", outline: "none", border: "none" }}
            shadow={"md"}
            className="sofadi-one-regular"
            size={"lg"}
            py={4}
            px={4}
            rounded={"full"}
            color={"#fff"}
            bg="#7c0000"
            id="btn"
          >
            <MdOutlineSwapCalls fontSize={28} />
          </Box>
        </VStack>

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

        <VStack position={"relative"}>
          <Button
            position={"absolute"}
            top={-8}
            p={2}
            pt={0.5}
            pb={0.5}
            fontSize={"sm"}
            rounded={"full"}
            bg={"white"}
            fontWeight={600}
            as={"span"}
            color={'#7c0000'}
          >
            {kingLifeLine}
          </Button>
          <Box
            //   as="button"
            onClick={decreaseKingLifeLine}
            transition={"all 1.5s"}
            _focus={{ bg: "#000", outline: "none", border: "none" }}
            _hover={{ bg: "#000", outline: "none", border: "none" }}
            shadow={"md"}
            className="sofadi-one-regular"
            size={"lg"}
            py={4}
            px={4}
            rounded={"full"}
            color={"#fff"}
            bg="#7c0000"
            id="btn"
          >
            <TbWaveSawTool fontSize={28} />
          </Box>
        </VStack>
      </HStack>

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
