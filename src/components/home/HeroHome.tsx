"use client";
import { tBrand, tTitleHero } from "../../constantes/constantsText";
import {
  createStyles,
  Container,
  Title,
  Text,
  rem,
  MediaQuery,
  Flex,
} from "@mantine/core";
const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "center",
    // paddingTop: `calc(${theme.spacing.xl} * 4)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
  },

  content: {
    maxWidth: rem(600),
    marginRight: `calc(${theme.spacing.xl} * 3)`,
    display: 'flex',
    alignContent: 'center',
    flexWrap: "wrap",

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(44),
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan("xs")]: {
      fontSize: rem(28),
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  highlight: {
    position: "relative",
    backgroundColor: theme.fn.variant({
      variant: "light",
      color: theme.primaryColor,
    }).background,
    borderRadius: theme.radius.sm,
    padding: `${rem(4)} ${rem(12)}`,
  },
}));

function HeroBullets() {
  const { classes } = useStyles();
  return (
    <Container size={"xl"}>
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            <span className={classes.highlight}>{tBrand}</span>
          </Title>
          <Text color="dimmed" fz="xl" mt="xl">
            {tTitleHero}
          </Text>
        </div>
        <MediaQuery query="(max-width: 768px)" styles={{ display: "none" }}>
          <Flex>
            <iframe
              src="https://www.youtube.com/embed/uXWycyeTeCs"
              width={"500px"}
              height={"300px"}
            />
          </Flex>
        </MediaQuery>
      </div>
    </Container>
  );
}

export default HeroBullets;
