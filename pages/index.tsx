import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import PasswordValidator from '@/components/PasswordValidator';

const inter = Inter({ subsets: ['latin'] });

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
