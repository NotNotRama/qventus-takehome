import { Box, Flex, Heading, Input } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

export type FormInput = {
  input: string;
};

export default function PasswordValidator({
  requirements,
}: {
  requirements?: string[];
}) {
  const { register, handleSubmit, watch } = useForm<FormInput>({
    criteriaMode: 'all',
    mode: 'onChange',
  });
  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      e.preventDefault();
      console.log('Enter pressed');
    }
  }
  return (
    <form>
      <Flex flexDirection="column">
        <Box textAlign="center">
          <Heading>Password Component</Heading>
        </Box>

        <Flex pt={4} alignItems="center" justifyContent="center">
          <Box pr={4}>
            <Input
              {...register('input', {
                validate: {
                  required: (value) => !!value,
                },
              })}
              size="sm"
              onKeyDown={handleKeyDown}
              border="1px solid black"
            />
          </Box>
        </Flex>
      </Flex>
    </form>
  );
}
