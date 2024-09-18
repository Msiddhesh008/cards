import { useState } from 'react'
import { Box, Button, HStack, Image, Text } from '@chakra-ui/react'
import heart from '../assets/heart1.png'
import vector from '../assets/vector.png'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  const [count, setCount] = useState(0)

  return (
<Box
  h="100vh"
  w="100vw"
  pt={10}
  border="0px solid #fff"
  overflow="auto"
  background={`
  radial-gradient(hsl(0, 100%, 27%) 4%, hsl(0, 100%, 18%) 9%, hsla(0, 100%, 20%, 0) 9%) 0 0,
  radial-gradient(hsl(0, 100%, 27%) 4%, hsl(0, 100%, 18%) 8%, hsla(0, 100%, 20%, 0) 10%) 50px 50px,
  radial-gradient(hsla(0, 100%, 30%, 0.8) 20%, hsla(0, 100%, 20%, 0)) 50px 0,
  radial-gradient(hsla(0, 100%, 30%, 0.8) 20%, hsla(0, 100%, 20%, 0)) 0 50px,
  radial-gradient(hsla(0, 100%, 20%, 1) 35%, hsla(0, 100%, 20%, 0) 60%) 50px 0,
  radial-gradient(hsla(0, 100%, 20%, 1) 35%, hsla(0, 100%, 20%, 0) 60%) 100px 50px,
  radial-gradient(hsla(0, 100%, 15%, 0.7), hsla(0, 100%, 20%, 0)) 0 0,
  radial-gradient(hsla(0, 100%, 15%, 0.7), hsla(0, 100%, 20%, 0)) 50px 50px,
  linear-gradient(45deg, hsla(0, 100%, 20%, 0) 49%, hsla(0, 100%, 0%, 1) 50%, hsla(0, 100%, 20%, 0) 70%) 0 0,
  linear-gradient(-45deg, hsla(0, 100%, 20%, 0) 49%, hsla(0, 100%, 0%, 1) 50%, hsla(0, 100%, 20%, 0) 70%) 0 0
  `}
  backgroundColor="#300"
  backgroundSize="100px 100px"
>



{/* <HStack mt={20} justifyContent={'center'}  w={'100%'} >
{/* <Box 
onClick={()=>navigate("/cards/home")}
  outline={'none'}
  _hover={{
    bg: "#ff6a00", // Using a solid color to enable transition
    shadow: "xl",
    outline:'none'
  }} 
  transition={"background-color 1.5s ease, box-shadow 0.5s ease"} 
  shadow={'lg'} 
  bg={"linear-gradient(218deg, #faff00 0%, #ff1000 37%, #ff6a00 100%)"} 
  w={80} 
  h={80} 
  rounded={'full'} 
/> */}

{/* </HStack> */} 

<HStack onClick={()=>navigate("/cards/home")} justifyContent={'center'} bg={'#000'} >
  <Text justifyContent={'center'} as={'span'} fontSize={'5xl'} fontWeight={400} color={"#fff"} className='sofadi-one-regular '><span style={{color:"#900101", fontWeight:"700", fontFamily:"montserrat"}}>Ero</span>cards</Text>
</HStack>

<HStack mt={16} w={'100%'}>
<Image src={heart}  w={"90%"}  />
</HStack>

  <Box flexDirection={'column'} position={'absolute'} alignItems={'center'} display={'flex'} justifyContent={'center'}  bottom={0} left={0} w={"100%"} >
    {/* <Image w={48} src={vector} mb={6} /> */}

    <Text fontSize={'10px'} pb={0} mt={6} color={'#fff'} bg={'black'} w={'100%'} textAlign={'center'}>Powered by : Miss Bhagudi 💋</Text>
  </Box>

</Box>

  )
}

export default Home
