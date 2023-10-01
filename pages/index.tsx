import PasswordValidator from '@/components/PasswordValidator';
import { requirementKeys } from '@/utils/requirementsKeys';

export default function Home() {
  return (
    <>
      <PasswordValidator
        requirements={[
          requirementKeys.required,
          'digits',
          'specialChars',
          'uppercaseLetter',
          'noConsecutiveLetters',
        ]}
        fn={(data: Record<string, string>) => {
          console.log('outside function', data);
        }}
      />
    </>
  );
}
