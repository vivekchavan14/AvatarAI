import Hero from "@/components/home/Hero";
import { Flex } from "@chakra-ui/react";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
     <Flex flexDirection="column" marginX="auto" flex="1">
        <Hero />
     </Flex>
    </div>
  );
}
