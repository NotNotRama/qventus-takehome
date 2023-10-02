import { Box, Flex, Heading, Input, Text } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { requirementsMap } from '@/utils/requirementsMap';
import { FormInput, ValidationRules } from '@/types/formTypes';
import CustomCheck from './CustomCheck';

export default function PasswordValidator({
  requirements,
  fn,
}: {
  requirements: (keyof typeof requirementsMap)[];
  fn?: Function;
}) {
  // Initialize the form control using react-hook-form
  const { register, handleSubmit, watch } = useForm<FormInput>({
    criteriaMode: 'all',
    mode: 'onChange',
  });

  // Get the current value of the input field
  const inputValue = watch('input');

  // Define validation rules and functions for password requirements
  const validationRules: ValidationRules = {};

  const validationFunctions: Record<string, (value: string) => boolean> = {
    digits: (value) => !!(value && /\d/.test(value)),
    specialChars: (value) => !!(value && /[!@#$%^&*]/.test(value)),
    uppercaseLetter: (value) => !!(value && /[A-Z]/.test(value)),
    noConsecutiveLetters: (value) => !/([a-zA-Z])\1/i.test(value),
  };

  // Populate the validation rules based on specified requirements
  requirements.forEach((requirement) => {
    if (validationFunctions[requirement]) {
      validationRules[requirement] = validationFunctions[requirement];
    }
  });

  // Handle Enter key press for form submission
  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (requirements.length === 0) return;
      handleSubmit(onSubmit)();
    }
  }

  // Handle form submission, calling the provided callback function if available
  function onSubmit(data: FormInput) {
    fn ? fn(data) : console.log(data);
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
                validate: validationRules,
              })}
              size="sm"
              onKeyDown={handleKeyDown}
              border="1px solid black"
              type="password"
            />
          </Box>
          <Box pl={4}>
            {requirements.map((requirement, index) => {
              // Check if the input value meets the current requirement
              const isRequirementValid =
                validationRules[requirement](inputValue);

              return (
                <Flex key={index} flexDir="row">
                  {!isRequirementValid || !inputValue ? (
                    // Display a red "X" if the requirement is not met
                    <CustomCheck color={'red'}>X</CustomCheck>
                  ) : (
                    // Display a green checkmark if the requirement is met
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
