import { useDisclosure } from "@mantine/hooks";
import {
  Modal,
  Group,
  Button,
  TextInput,
  Textarea,
  Flex,
  ActionIcon,
  MediaQuery,
  rem,
} from "@mantine/core";
import { IconUserShare, IconAt, IconSend } from "@tabler/icons-react";

function ModalContact() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Contactanos" centered>
        <TextInput
          mb={10}
          placeholder="Escribe tu nombre"
          label="Nombre"
          error="Nombre de la persona interesada."
          withAsterisk
        />
        <TextInput mb={10} placeholder="Asunto a tratar" label="Asunto" />
        <TextInput
          pb={10}
          icon={<IconAt size="1rem" />}
          placeholder="Introduce tu correo"
          label="Correo electronico"
          error="Ingresa tu correo"
          withAsterisk
        />
        <Textarea
          mb={10}
          placeholder="Mensaje"
          label="Mensaje"
          error="El mensaje es importante ya que por medio de este te podremos brindar una asesoria mas enfocada en lo que tu necesitas"
          withAsterisk
        />
        <Flex justify="flex-end" align="center">
          <Button variant="outline" leftIcon={<IconSend size="0.9rem" />}>
            Enviar
          </Button>
        </Flex>
      </Modal>

      <Group position="center">
        <MediaQuery query="(min-width: 768px)" styles={{ display: "none" }}>
          <ActionIcon onClick={open} variant="outline" color="red" title="Contactanos">
            <IconUserShare size="1rem" />
          </ActionIcon>
        </MediaQuery>

        <MediaQuery query="(max-width: 767px)" styles={{ display: "none" }}>
          <Button
            onClick={open}
            color="red"
            variant="outline"
            leftIcon={<IconUserShare size="0.9rem" />}
          >
            Contacto
          </Button>
        </MediaQuery>
      </Group>
    </>
  );
}

export default ModalContact;
