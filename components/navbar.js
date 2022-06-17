// to simplify svg: https://jakearchibald.github.io/svgomg/
// to convert svg to react component: https://react-svgr.com/playground/
// since there is only one page, 'anchor links' are deployed.

import LotusLogo from './lotusLogo';

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

import { FaGithub, FaTwitter, FaYoutube, FaTelegram } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';

const baseStyle = {
  p: 2,
  color: 'black',
  fontWeight: 400,
  letterSpacing: 'wide',
};

const activeStyle = {
  bgGradient: 'linear(to-r, red, blue)',
  bgClip: 'text',
};

const NAV_ITEMS = [
  {
    label: 'Home',
    href: '',
  },
  {
    label: 'Timeline',
    href: '#timeline',
  },
  {
    label: 'Contact',
    href: 'none',
    children: [
      {
        label: 'Mail',
        icon: MdMail,
        iconColor: 'black',
        subLabel: 'Mail',
        href: 'mailto:swasti@sourabh.xyz',
      },
      {
        label: 'Telegram',
        icon: FaTelegram,
        iconColor: '#0088cc',
        subLabel: 'Telegram',
        href: 'https://telegram.me/xyzsourabh',
      },
    ],
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
        href: 'https://www.youtube.com/channel/UClsz9fNAI9ncCWEre2VlnVA',
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
      <NextLink href="" passHref>
        <Link
          onMouseEnter={() => setLogoHover(true)}
          onMouseLeave={() => setLogoHover(false)}
          paddingTop={'5px'}
        >
          <LotusLogo logoHover={logoHover} />
          {/* <Logo logoHover={logoHover} /> */}
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
                <Text sx={baseStyle} _hover={activeStyle}>
                  {navItem.label}
                </Text>
              ) : (
                <NextLink href={navItem.href} passHref>
                  <Link
                    sx={
                      router.asPath === navItem.href
                        ? { ...baseStyle, ...activeStyle }
                        : baseStyle
                    }
                    _hover={activeStyle}
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
          <Text fontSize={'sm'} sx={subNavHover ? activeStyle : {}}>
            {child.subLabel}
          </Text>
        </Flex>
      </Link>
    </NextLink>
  );
}

function MobileSubNav(navItem) {
  const router = useRouter();
  const [collapseOpen, setCollapseOpen] = useState(false);
  const [navHover, setNavHover] = useState(false);
  return (
    <Box key={navItem.label}>
      {navItem.children ? (
        <Flex
          onClick={() =>
            collapseOpen ? setCollapseOpen(false) : setCollapseOpen(true)
          }
          onMouseEnter={() => setNavHover(true)}
          onMouseLeave={() => setNavHover(false)}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Text sx={navHover ? activeStyle : {}}>{navItem.label}</Text>
          <Icon as={collapseOpen ? ChevronUpIcon : ChevronDownIcon} />
        </Flex>
      ) : (
        <NextLink href={navItem.href} passHref>
          <Link
            sx={router.asPath === navItem.href ? activeStyle : {}}
            _hover={activeStyle}
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
  );
}

function MobileNav() {
  const { isOpen, onToggle } = useDisclosure();
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
        {NAV_ITEMS.map((navItem) => MobileSubNav(navItem))}
      </PopoverContent>
    </Popover>
  );
}
