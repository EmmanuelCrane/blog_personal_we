"use client";
import { Box, SimpleGrid } from "@mantine/core";
import ArticleCardVertical from "../globals/CardVertical";
import TitleSection from "../globals/TitleSection";
import { IconSettings } from "@tabler/icons-react";

type dataCard = {
  category: string;
  title: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
  data: string
};
interface props {
  articles: Array<dataCard>;
}

function SectionArticleVertical({ articles }: props) {
  return (
    <Box pb={50}>
      <TitleSection icon={<IconSettings size="2rem" />} text="Texto" />
      <SimpleGrid
        cols={5}
        spacing="xl"
        breakpoints={[
          { maxWidth: "md", cols: 4, spacing: "md" },
          { maxWidth: "sm", cols: 2, spacing: "sm" },
          { maxWidth: "xs", cols: 1, spacing: "sm" },
        ]}
      >
        {articles.map((item, index) => (
          <ArticleCardVertical key={index} {...item} />
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default SectionArticleVertical;
