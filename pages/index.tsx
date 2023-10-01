import PasswordValidator from '@/components/PasswordValidator';
import { requirementKeys } from '@/utils/requirementsKeys';

export default function Home() {
  return (
    <>
      <PasswordValidator
        // Pass an array of password requirements using requirementKeys for readability
        requirements={[
          requirementKeys.required,
          'digits',
          'specialChars',
          'uppercaseLetter',
          'noConsecutiveLetters',
        ]}
        // Optional callback function to handle validated password data
        fn={(data: Record<string, string>) => {
          console.log('outside function', data);
        }}
      />
    </>
  );
}
