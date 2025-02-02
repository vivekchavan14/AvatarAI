import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import Pricing from "@/components/home/Pricing";
import Slider from "@/components/home/Slider";
import { Flex } from "@chakra-ui/react";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
     <Flex flexDirection="column" marginX="auto" flex="1">
        <Hero />
     </Flex>
     <Slider />
    <Features />
    <Flex px={4} py={10} maxWidth="container.lg" width="100%" marginX="auto">
        <Pricing />
      </Flex>
    </div>
  );
}
