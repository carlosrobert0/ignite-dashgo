import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Carlos Roberto</Text>
          <Text color="gray.300" fontSize="small">
            Carlosroberto15755@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Carlos Roberto" src="https://github.com/carlosrobert0.png" />
    </Flex>
  )
}