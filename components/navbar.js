// to simplify svg: https://jakearchibald.github.io/svgomg/
// to convert svg to react component: https://react-svgr.com/playground/
// since there is only one page, 'anchor links' are deployed.

import Logo from './logo';

import { useState } from 'react';

import NextLink from 'next/link';
import { useRouter } from 'next/router';

import { navHeight } from '../globalVars';

import {
  Box,
  Flex,
  Text,
  IconButton,
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

import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@chakra-ui/icons';

import { FaGithub, FaTwitter, FaYoutube } from 'react-icons/fa';

const NAV_ITEMS = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Bio & Works',
    href: '/#bio-works',
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
  const [logoHover, setLogoHover] = useState(false);
  /*
  Logic.
    * FlexBegin
      * Logo
      * IconButton - disappear at sm. 
      * DesktopNav - appear at sm.
      * MobileNav - show only when menu is open and when at mobile screen (disappear at sm - we must make it disappear at sm as what if user dynamically changes size).
    * FlexEnd
  */

  return (
    <Flex
      position="sticky"
      top="0"
      zIndex={'docked'}
      bg="white"
      // backdropFilter={'auto'}
      // backdropBlur={'20px'}
      borderBottom={1}
      borderStyle={'solid'}
      borderColor="gray.200"
      h={navHeight}
      px="4"
      align={'center'}
      justify={{ base: 'space-between', sm: 'none' }}
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
      <Flex display={{ base: 'none', sm: 'flex' }}>
        <DesktopNav />
      </Flex>
      <Box display={{ sm: 'none' }}>
        <MobileNav />
      </Box>
    </Flex>
  );
}

const DesktopNav = () => {
  const popoverContentBgColor = 'white';
  const router = useRouter();
  const activeStyle = {
    bgGradient: 'linear(to-r, red, blue)',
    bgClip: 'text',
  };
  console.log(router.asPath);
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
                <NextLink href={navItem.href} passHref>
                  <Link
                    p={2}
                    // fontSize={'sm'}
                    // fontWeight={500}
                    color={'black'}
                    bgGradient={
                      router.asPath === navItem.href
                        ? 'linear(to-r, red, blue)'
                        : ''
                    }
                    bgClip={router.asPath === navItem.href ? 'text' : ''}
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
                {navItem.children.map((child) => SubNav(child))}
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </HStack>
  );
};

function SubNav(child) {
  const [subNavHover, setSubNavHover] = useState(false);
  return (
    <NextLink href={child.href} passHref key={child.label}>
      <Link
        isExternal={true}
        onMouseEnter={() => setSubNavHover(true)}
        onMouseLeave={() => setSubNavHover(false)}
        _hover={{ textDecoration: 'none' }} // don't want that underline on links.
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

function MobileNav() {
  const { isOpen, onToggle } = useDisclosure();
  const router = useRouter();
  const [collapseOpen, setCollapseOpen] = useState(false);
  const [navHover, setNavHover] = useState(false);
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
        w={'185px'}
        p={2}
      >
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            {navItem.children ? (
              <Flex
                onClick={() =>
                  collapseOpen ? setCollapseOpen(false) : setCollapseOpen(true)
                }
                onMouseEnter={() => setNavHover(true)}
                onMouseLeave={() => setNavHover(false)}
                justifyContent={'space-between'}
              >
                <Text
                  bgGradient={navHover ? 'linear(to-r, red, blue)' : ''}
                  bgClip={navHover ? 'text' : ''}
                >
                  {navItem.label}
                </Text>
                <Icon as={collapseOpen ? ChevronUpIcon : ChevronDownIcon} />
              </Flex>
            ) : (
              <NextLink href={navItem.href} passHref>
                <Link
                  bgGradient={
                    router.asPath === navItem.href
                      ? 'linear(to-r, red, blue)'
                      : ''
                  }
                  bgClip={router.asPath === navItem.href ? 'text' : ''}
                  _hover={{
                    bgGradient: 'linear(to-r, red, blue)',
                    bgClip: 'text',
                  }}
                >
                  {navItem.label}
                </Link>
              </NextLink>
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
                  spacing={0}
                >
                  {navItem.children.map((child) => SubNav(child))}
                </VStack>
              </Collapse>
            )}
          </Box>
        ))}
      </PopoverContent>
    </Popover>
  );
}
