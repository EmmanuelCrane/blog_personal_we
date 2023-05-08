'use client'
import { createStyles, Card, Image, Avatar, Text, Group } from '@mantine/core';
import ModalPost from './Modal';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  title: {
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1.2,
  },

  body: {
    padding: theme.spacing.md,
  },
}));

interface ArticleCardVerticalProps {
  category: string;
  title: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
  data: string
}

function ArticleCardVertical({
  category,
  title,
  date,
  author,
  data
}: ArticleCardVerticalProps) {
  const { classes } = useStyles();
  return (
    <ModalPost data={data}>
      <Card withBorder radius="md" p={0} className={classes.card}>
        <Group noWrap spacing={0}>
          <div className={classes.body}>
            <Text transform="uppercase" color="dimmed" weight={700} size="xs">
              {category}
            </Text>
            <Text className={classes.title} mt="xs" mb="md">
              {title}
            </Text>
            <Group noWrap spacing="xs">
              <Group spacing="xs" noWrap>
                <Avatar size={20} src={author.avatar} />
                <Text size="xs">{author.name}</Text>
              </Group>
              <Text size="xs" color="dimmed">
                •
              </Text>
              <Text size="xs" color="dimmed">
                {date}
              </Text>
            </Group>
          </div>
        </Group>
      </Card>
    </ModalPost>
  );
}

export default ArticleCardVertical;