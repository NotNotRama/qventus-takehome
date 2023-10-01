import { Box, Flex, Heading, Input } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

type FormInput = {
  input: string;
};

export type ValidationRules = Record<string, (value: string) => boolean>;

export default function PasswordValidator({
  requirements = [],
}: {
  requirements?: string[];
}) {
  const { register, handleSubmit, watch } = useForm<FormInput>({
    criteriaMode: 'all',
    mode: 'onChange',
  });
  const inputValue = watch('input');

  const validationRules: ValidationRules = {};

  const validationFunctions: Record<string, (value: string) => boolean> = {
    required: (value) => !!value,
    digits: (value) => !!(value && /\d/.test(value)),
    specialChars: (value) => !!(value && /[!@#$%^&*]/.test(value)),
    uppercaseLetter: (value) => !!(value && /[A-Z]/.test(value)),
    noConsecutiveLetters: (value) => !/([a-zA-Z])\1/i.test(value),
  };

  requirements.forEach((requirement) => {
    if (validationFunctions[requirement]) {
      validationRules[requirement] = validationFunctions[requirement];
    }
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
