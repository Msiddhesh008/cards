import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    Image,
    Text,
  } from '@chakra-ui/react'
  import levelone from '../assets/level1.png'
  import leveltwo from '../assets/level5.png'
  import levelthree from '../assets/level3.png'
  import levelfour from '../assets/level4.png'
  import levelfive from '../assets/level5.png'

  function LevelCompleteModal({ isOpen, onClose, level }) {
    
    // Determine background color based on the level
    const getBackgroundColor = () => {
      switch (level) {
        case 1:
          return '#3e0000'; // Lighter red for level 1
        case 2:
          return '#3e0000'; // Tomato color for level 2
        case 3:
          return '#3e0000'; // Red for level 3
        case 4:
          return '#3e0000'; // Darker red for level 4
        case 5:
          return '#000'; // Darkest red for level 5
        default:
          return '#000'; // Default dark color if level is undefined
      }
    };

    // Select the image based on the level
    const getImageForLevel = () => {
      switch (level) {
        case 1:
          return levelone;
        case 2:
          return leveltwo;
        case 3:
          return levelthree;
        case 4:
          return levelfour;
        case 5:
          return levelfive;
        default:
          return levelone; // Fallback to level 1 image if level is undefined
      }
    };

    // Add quotes specific to each level
    const getQuoteForLevel = () => {
      switch (level) {
        case 1:
          return "The journey begins. Brace yourself!";
        case 2:
          return "Keep up the momen!";
        case 3:
          return "Halfway there. No time to look back!";
        case 4:
          return "The end is near, but the challenge rises!";
        case 5:
          return "Victory is at hand. Go for glory!";
        default:
          return "Let the action begin"; // Default text
      }
    };

    return (
      <>
        <Modal size={'full'} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent 
              h="100vh" // Full height
              w="100vw" // Full width
              border={'2px solid #000'}
              outline={'none'}
              rounded={0}
              >
            <ModalBody 
              onDoubleClick={onClose} 
              display={'flex'} 
              gap={12} 
              justifyContent={'center'} 
              alignItems={'center'} 
              flexDirection={'column'} 
              bg={getBackgroundColor()} // Dynamic background color
              

            >
              <Image w={'80%'} src={getImageForLevel()} /> {/* Dynamic image */}
              <Text fontSize={'3xl'} color={level === 1 ? "#fff" : "#000"}> {/* Text color changes for level 1 */}
                {getQuoteForLevel()} {/* Dynamic quote */}
              </Text>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
  }

export default LevelCompleteModal;
