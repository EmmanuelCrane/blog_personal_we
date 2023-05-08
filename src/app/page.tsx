import HeroImageRight from "@/components/home/HeroHome";
import lobo from "/public/images/inicio.jpg";
import SectionCards from "@/components/home/SectionCards";
import BannerHome from "@/components/home/BannerHome";

import imagen from "/public/images/imageBanner.svg";
import SectionCardImage from "@/components/home/SectionCardImages";
import SectionCardImageFuture from "@/components/futures/SectionCardImageFuture";


const page = () => {
  return (
    <>
      <HeroImageRight />
      <SectionCards
        articles={[
          {
            image: lobo.src,
            category: "decorations",
            title: "Top 50 underrated plants for house decoration",
            footer: "733 people liked this",
            author: {
              name: "Elsa Gardenowl",
              description: "posted 34 minutes ago",
              image:
                "https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
            },
          },
          {
            image: lobo.src,
            category: "decorations",
            title: "Top 50 underrated plants for house decoration",
            footer: "733 people liked this",
            author: {
              name: "Elsa Gardenowl",
              description: "posted 34 minutes ago",
              image:
                "https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
            },
          },
          {
            image: lobo.src,
            category: "decorations",
            title: "Top 50 underrated plants for house decoration",
            footer: "733 people liked this",
            author: {
              name: "Elsa Gardenowl",
              description: "posted 34 minutes ago",
              image:
                "https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
            },
          },
          {
            image: lobo.src,
            category: "decorations",
            title: "Top 50 underrated plants for house decoration",
            footer: "733 people liked this",
            author: {
              name: "Elsa Gardenowl",
              description: "posted 34 minutes ago",
              image:
                "https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
            },
          },
          {
            image: lobo.src,
            category: "decorations",
            title: "Top 50 underrated plants for house decoration",
            footer: "733 people liked this",
            author: {
              name: "Elsa Gardenowl",
              description: "posted 34 minutes ago",
              image:
                "https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
            },
          },
          {
            image: lobo.src,
            category: "decorations",
            title: "Top 50 underrated plants for house decoration",
            footer: "733 people liked this",
            author: {
              name: "Elsa Gardenowl",
              description: "posted 34 minutes ago",
              image:
                "https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
            },
          },
          {
            image: lobo.src,
            category: "decorations",
            title: "Top 50 underrated plants for house decoration",
            footer: "733 people liked this",
            author: {
              name: "Elsa Gardenowl",
              description: "posted 34 minutes ago",
              image:
                "https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
            },
          },
          {
            image: lobo.src,
            category: "decorations",
            title: "Top 50 underrated plants for house decoration",
            footer: "733 people liked this",
            author: {
              name: "Elsa Gardenowl",
              description: "posted 34 minutes ago",
              image:
                "https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
            },
          },
        ]}
      />
      <BannerHome />
      <SectionCardImage
        articles={[
          {
            image: imagen.src,
          },
          {
            image: imagen.src,
          },
          {
            image: imagen.src,
          },
          {
            image: imagen.src,
          },
          {
            image: imagen.src,
          },
          {
            image: imagen.src,
          },
        ]}
      />
      <SectionCardImageFuture />

    </>
  );
};

export default page;
