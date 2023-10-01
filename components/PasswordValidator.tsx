import { Box, Flex, Heading, Input, Text } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

type FormInput = {
  input: string;
};

export type ValidationRules = Record<string, (value: string) => boolean>;

function CustomCheck({
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
const requirementsMap = {
  required: 'Required',
  digits: 'Has a number 0-9',
  specialChars: 'Has a special char !@#$%^&*',
  uppercaseLetter: 'Has uppercase letter',
  noConsecutiveLetters: 'Has no consecutive letters',
} as const;

export default function PasswordValidator({
  requirements = [],
}: {
  requirements?: (keyof typeof requirementsMap)[];
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
          <Box pl={4}>
            {requirements.map((requirement, index) => {
              const isValid = validationRules[requirement](inputValue);

              return (
                <Flex key={index} flexDir="row">
                  {!isValid || !inputValue ? (
                    <CustomCheck color={'red'}>X</CustomCheck>
                  ) : (
                    <CustomCheck color={'green'}>✔</CustomCheck>
                  )}
                  <Text pl={2}>{requirementsMap[requirement]}</Text>
                </Flex>
              );
            })}
          </Box>
        </Flex>
      </Flex>
    </form>
  );
}
