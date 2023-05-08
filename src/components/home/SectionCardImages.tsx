"use client";
import { Grid, Container, SimpleGrid, Box } from "@mantine/core";
import CardImage from "../globals/CardImage";
import TitleSection from "../globals/TitleSection";
import { IconSettings } from "@tabler/icons-react";

type dataCard = {
  image: string;
};

interface props {
  articles: Array<dataCard>;
}

function SectionCardImage({ articles }: props) {
  return (
    <Box pb={50}>
      <TitleSection icon={<IconSettings size="2rem" />} text={"Texto"} />
      <SimpleGrid
        cols={6}
        spacing="xl"
        breakpoints={[
          { maxWidth: "sm", cols: 2, spacing: "sm" },
          { maxWidth: "xs", cols: 1, spacing: "sm" },
        ]}
      >
        {articles.map((item, index) => (
          <CardImage {...item} key={index} />
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default SectionCardImage;
