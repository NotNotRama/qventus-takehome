import { Box, Text } from '@chakra-ui/react';

export default function CustomCheck({
  children,
  color,
}: {
  children: React.ReactNode;
  color: string;
}) {
  return (
    <Box
      w="23px"
      h="23px"
      borderRadius="50%"
      bgColor={color}
      color="white"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Text fontSize="xs">{children}</Text>
    </Box>
  );
}
