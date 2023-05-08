import { Prism } from '@mantine/prism';

interface Props {
    children: string;
    language: any;
}

const CodeM = ( { children, language }: Props ) => {
  return (
    <>
        <Prism language={'tsx'}>{children}</Prism>
    </>
  )
}

export default CodeM