"use client";
import { Box, SimpleGrid } from "@mantine/core";
import ArticleCardFooter from "../globals/Card";
import TitleSection from "../globals/TitleSection";
import { IconSettings } from "@tabler/icons-react";
import ModalPost from "../globals/Modal";



type dataCard = {
    image: string,
    category: string,
    title: string,
    footer: string,
    author: {
      name: string,
      description: string,
      image: string,
    }
}
interface props {
  articles: Array<dataCard>,
}

function SectionCards({ articles }: props) {
  return (
    <Box pb={50}>
    <TitleSection icon={<IconSettings size="2rem" />} text={"Texto"} />
    <SimpleGrid
      cols={4}
      spacing="xl"
      breakpoints={[
        { maxWidth: "lg", cols: 4, spacing: "md" },
        { maxWidth: "md", cols: 3, spacing: "md" },
        { maxWidth: "sm", cols: 2, spacing: "sm" },
        { maxWidth: "xs", cols: 1, spacing: "sm" },
      ]}
    >
      {articles.map((item, index) => (
        <ModalPost key={index}>
          {<ArticleCardFooter {...item} />}
        </ModalPost>
      ))}
    </SimpleGrid>
  </Box>
  );
}

export default SectionCards;
