// to simplify svg: https://jakearchibald.github.io/svgomg/
// to convert svg to react component: https://react-svgr.com/playground/

import Logo from './logo';

import { useState } from 'react';

import NextLink from 'next/link';
import { useRouter } from 'next/router';

import {
  Button,
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  HStack,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';

import { HamburgerIcon, CloseIcon, ChevronDownIcon } from '@chakra-ui/icons';

import { FaGithub, FaTwitter, FaYoutube } from 'react-icons/fa';

const NAV_ITEMS = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Bio & Works',
    href: '#bio-works',
  },
  {
    label: 'Social',
    href: 'none',
    children: [
      // can delete children if no children is required
      {
        label: 'Github',
        icon: FaGithub,
        iconColor: 'black',
        subLabel: 'See all my projects',
        href: 'https://github.com/sourabhxyz',
      },
      {
        label: 'Twitter',
        icon: FaTwitter,
        iconColor: '#1DA1F2',
        subLabel: "What's in my 🧠",
        href: 'https://twitter.com/SourabhLight',
      },
      {
        label: 'Youtube',
        icon: FaYoutube,
        iconColor: '#FF0000',
        subLabel: 'For Osome tutorials!',
        href: 'https://www.youtube.com/channel/UCbAawWkpYwrxqpaFTIpNDtA',
      },
    ],
  },
];

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const [logoHover, setLogoHover] = useState(false);
  /*
  Logic.
    * FlexBegin
      * Logo
      * IconButton - disappear at md. 
      * DesktopNav - appear at md.
      * MobileNav - show only when menu is open and when at mobile screen (disappear at md - we must make it disappear at md as what if user dynamically changes size).
    * FlexEnd
  */

  return (
    <Flex
      position="sticky"
      top="0"
      bg="white"
      backdropFilter={'saturate(180%) blur(20px)'}
      borderBottom={1}
      borderStyle={'solid'}
      borderColor="gray.200"
      h={'60px'}
      px="4"
      align={'center'}
      justify={{ base: 'space-between', md: 'none' }}
    >
      {/* Logo */}
      <NextLink href="/" passHref>
        <Link
          onMouseEnter={() => setLogoHover(true)}
          onMouseLeave={() => setLogoHover(false)}
        >
          <Logo logoHover={logoHover} />
        </Link>
      </NextLink>
      <Flex display={{ base: 'none', md: 'flex' }}>
        <DesktopNav />
      </Flex>
      <Box display={{ md: 'none' }}>
        <MobileNav isOpen={isOpen} onToggle={onToggle} />
      </Box>
    </Flex>
  );
}

const DesktopNav = () => {
  const popoverContentBgColor = 'white';
  const router = useRouter();
  return (
    <HStack spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover
            trigger={'hover' /* either click or hover */}
            placement={'bottom-start'}
          >
            <PopoverTrigger>
              {navItem.href === 'none' ? (
                <Text
                  p={2}
                  color={'black'}
                  _hover={{
                    bgGradient: 'linear(to-r, red, blue)',
                    bgClip: 'text',
                  }}
                >
                  {navItem.label}
                </Text>
              ) : (
                <NextLink href={navItem.href ?? '#'} passHref>
                  <Link
                    p={2}
                    // fontSize={'sm'}
                    // fontWeight={500}
                    color={'black'}
                    _hover={{
                      bgGradient: 'linear(to-r, red, blue)',
                      bgClip: 'text',
                    }}
                  >
                    {navItem.label}
                  </Link>
                </NextLink>
              )}
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                borderRadius={'xl'}
                width={'148px'}
              >
                {navItem.children.map((child) => DesktopSubNav(child))}
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </HStack>
  );
};

function DesktopSubNav(child) {
  const [subNavHover, setSubNavHover] = useState(false);
  return (
    <NextLink href={child.href} passHref>
      <Link
        key={child.label}
        isExternal={true}
        onMouseEnter={() => setSubNavHover(true)}
        onMouseLeave={() => setSubNavHover(false)}
        _hover={{ textDecoratoin: 'none' }} // don't want that underline on links.
      >
        <Flex direction={'column'} alignItems={'center'} p={2}>
          <Icon as={child.icon} boxSize={'1.5em'} color={child.iconColor} />
          <Text
            fontSize={'sm'}
            bgGradient={subNavHover ? 'linear(to-r, red, blue)' : ''}
            bgClip={subNavHover ? 'text' : ''}
          >
            {child.subLabel}
          </Text>
        </Flex>
      </Link>
    </NextLink>
  );
}

function MobileNav({ isOpen, onToggle }) {
  return (
    <Popover
      trigger={'click'}
      placement={'bottom-start'}
      onOpen={onToggle}
      onClose={onToggle}
    >
      <PopoverTrigger>
        {/* For mobile screen, shrink nav button */}
        <IconButton
          icon={
            isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
          }
          variant={'ghost'} // https://chakra-ui.com/docs/form/icon-button
        />
      </PopoverTrigger>
      <PopoverContent
        border={0}
        boxShadow={'xl'}
        borderRadius={'xl'}
        w={'170px'}
      >
        {NAV_ITEMS.map((navItem) => MobileNavSub(navItem))}
      </PopoverContent>
    </Popover>
  );
}

function MobileNavSub(navItem) {
  const [collapseOpen, setCollapseOpen] = useState(false);
  return (
    <Box key={navItem.label}>
      {navItem.children ? (
        <Text
          onClick={() =>
            collapseOpen ? setCollapseOpen(false) : setCollapseOpen(true)
          }
        >
          {navItem.label}
        </Text>
      ) : (
        <Link href={navItem.href}>{navItem.label}</Link>
      )}
      {navItem.children && (
        // documentation here: https://chakra-ui.com/docs/components/other/transitions
        <Collapse in={collapseOpen} animateOpacity>
          <VStack
            ml={2}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={'gray.200'}
            align={'start'}
            pl={3}
          >
            {navItem.children.map((child) => (
              <Flex
                direction={'column'}
                alignItems={'center'}
                _hover={{ color: 'pink' }}
                key={'child.label'}
              >
                <Icon as={child.icon} boxSize={'1.5em'} />
                <Text>{child.subLabel}</Text>
              </Flex>
            ))}
          </VStack>
        </Collapse>
      )}
    </Box>
  );
}
