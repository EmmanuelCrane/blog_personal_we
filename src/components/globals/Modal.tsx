"use client";
import Markdown from 'markdown-to-jsx';
import { useDisclosure } from "@mantine/hooks";
import {
  Modal,
  Image,
  ScrollArea,
  Box,
  Text,
  Title
} from "@mantine/core";
import { Prism } from '@mantine/prism';
import image from "/public/images/inicio.jpg";

interface Props {
  children: React.ReactNode;
  data: string;
}

function ModalPost({ children, data }: Props) {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Modal
        size="calc(100vw - 3rem)"
        opened={opened}
        onClose={close}
        title={<ModalTitle />}
        scrollAreaComponent={ScrollArea.Autosize}
      >
        <Content data={data} />
      </Modal>
      <a onClick={open}>{children}</a>
    </>
  );
}

export default ModalPost;

function ModalTitle() {
  return <p>Titulo del modal</p>;
}

function Content({data}:{data:string}) {
  return (
    <Box>
       <Markdown options={{
          overrides: {
            code: {
              component: Prism
            }
          }
        }} >{data}</Markdown>
    </Box>
  );
}
