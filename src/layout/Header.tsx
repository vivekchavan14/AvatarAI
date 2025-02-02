import {
    Button,
    Flex,
    HStack,
    Icon,
    IconButton,
    Text,
    Tooltip,
  } from "@chakra-ui/react";
  import { signOut, useSession } from "next-auth/react";
  import Link from "next/link";
  import { HiLogout } from "react-icons/hi";
  import { IoIosFlash } from "react-icons/io";
  
  const Header = () => {
    const { data: session, status } = useSession();
    return (
      <Flex
        width="100%"
        flexDirection="column"
        marginX="auto"
        maxWidth="container.lg"
        px="2"
      >
        <Flex justifyContent="space-between" py={4} as="footer">
          <Flex
            role="group"
            as={Link}
            href="/"
            alignItems="center"
            fontWeight="bold"
            fontSize="2xl"
          >
            <Icon
              transition="200ms all"
              _groupHover={{ color: "brand.500" }}
              as={IoIosFlash}
            />
            <Text display={{ base: "none", sm: "inherit" }}>AIAvatar.</Text>
          </Flex>
          <HStack spacing={1}>
            <Button
              as={Link}
              href="/prompts"
              colorScheme="beige"
              variant="ghost"
              size="sm"
            >
              Prompts
            </Button>
            {session ? (
              <>
                <Tooltip hasArrow label="Public Gallery">
                  <Button
                    href={`/gallery/${session.user}`}
                    as={Link}
                    colorScheme="beige"
                    variant="ghost"
                    size="sm"
                  >
                    My Gallery
                  </Button>
                </Tooltip>
                <Button href="/dashboard" as={Link} variant="brand" size="sm">
                  Dashboard
                </Button>
                <Tooltip hasArrow label="Logout">
                  <IconButton
                    aria-label="logout"
                    icon={<HiLogout />}
                    size="sm"
                    colorScheme="biege"
                    variant="ghost"
                    onClick={() => {
                      signOut({ callbackUrl: "/" });
                    }}
                  />
                </Tooltip>
              </>
            ) : (
              <Button href="/login" as={Link} variant="brand" size="sm">
                Login
              </Button>
            )}
          </HStack>
        </Flex>
      </Flex>
    );
  };
  
  export default Header;