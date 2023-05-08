'use client'
import { createStyles, Text, Title, TextInput, Button, Image, rem, Box, Flex } from '@mantine/core';
import { tTitleBanner, tTextBanner, tTextButtonBanner } from "../../constantes/constantsText";
import image from '/public/images/imageBanner.svg';

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    padding: `calc(${theme.spacing.xl} * 2)`,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    border: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[3]
    }`,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column-reverse',
      padding: theme.spacing.xl,
    },
  },

  image: {
    maxWidth: '40%',

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
    },
  },

  body: {
    paddingRight: `calc(${theme.spacing.xl} * 4)`,

    [theme.fn.smallerThan('sm')]: {
      paddingRight: 0,
      marginTop: theme.spacing.xl,
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
    // marginBottom: theme.spacing.md,
  },
}));

function BannerHome() {
  const { classes } = useStyles();
  return (
    <Box mb={50} className={classes.wrapper}>
      <Flex
        className={classes.body}
        wrap={'wrap'}
        gap={'md'}
        justify={'center'}
      >
        <Title className={classes.title}>{tTitleBanner}</Title>

        <Text fz="lg" c="dimmed" align='center'>
          {tTextBanner}
        </Text>
        <Box w={'50%'}>
          <Button fullWidth variant='outline' color='grape'>{tTextButtonBanner}</Button>
        </Box>
      </Flex>
      <Image src={image.src} className={classes.image} alt=''/>
    </Box>
  );
}

export default BannerHome;