import { Icon, Text, useColorMode } from '@chakra-ui/react'
import { RiMoonClearFill, RiSunCloudyFill } from 'react-icons/ri'

export function Logo() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Text
      fontSize={["2xl", "3xl"]}
      fontWeight="bold"
      letterSpacing="tight"
      w="64"
    >
      dashgo
      <Text as="span" ml="1" color="pink.500">.</Text>
      <Icon ml="6" as={ colorMode === 'light' ? RiMoonClearFill : RiSunCloudyFill } fontSize="30" onClick={toggleColorMode}/>
    </Text>
  )
}