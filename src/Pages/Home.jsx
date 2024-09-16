import { useState } from 'react'
import { Box, Button, HStack, Image, Text } from '@chakra-ui/react'
// import frame from './assets/frametwo.png'
import vector from '../assets/vector.png'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  const [count, setCount] = useState(0)

  return (
    <Box
  h="100vh"
  w="100vw"
  bg="linear-gradient(360deg, #7c0000 0%, #3e0000 74%)"
  pt={10}
  border={"0px solid #fff"}
  
>
  {/* <Image position={'absolute'} src={frame} left={0} top={0} w={'100%'} h={'100%'} /> */}
  <HStack justifyContent={'center'} bg={'#000'} >
  <Text justifyContent={'center'} as={'span'} fontSize={'5xl'} fontWeight={400} color={"#fff"} className='sofadi-one-regular '><span style={{color:"red", fontWeight:"700", fontFamily:"montserrat"}}>Ero</span>cards</Text>
</HStack>

<HStack mt={20} justifyContent={'center'}  w={'100%'} >
<Box 
onClick={()=>navigate("/cards")}
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
>
</Box>

</HStack>

  <Box flexDirection={'column'} position={'absolute'} alignItems={'center'} display={'flex'} justifyContent={'center'}  bottom={0} left={0} w={"100%"} >
    <Image w={48} src={vector} mb={6} />

    {/* <Text fontSize={'10px'} pb={0} mt={6} color={'#fff'} bg={'black'} w={'100%'} textAlign={'center'}>Powered by : Miss Bhagudi 💋</Text> */}
  </Box>

</Box>

  )
}

export default Home
