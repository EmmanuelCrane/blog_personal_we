import { ActionIcon, Flex, Title } from '@mantine/core'

interface Props {
    icon: React.ReactNode;
    text: string;
}

const TitleSection = ( { icon, text }: Props ) => {
  return (
        <Flex
        justify="flex-start"
        align="center"
        direction="row"
        pl={15}
        pb={10}
      >
        <ActionIcon variant="transparent">{ icon }</ActionIcon>
        <Title ml={5} order={2}>{ text }</Title>
      </Flex>
  )
}

export default TitleSection