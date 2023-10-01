import PasswordValidator from '@/components/PasswordValidator';

export default function Home() {
  return (
    <>
      <PasswordValidator
        requirements={[
          'required',
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
