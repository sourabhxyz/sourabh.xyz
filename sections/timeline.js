import {
  List,
  ListItem,
  Box,
  Flex,
  HStack,
  VStack,
  Heading,
  Text,
} from '@chakra-ui/react';

const achievements = [
  {
    title: 'First - Joined IIT PKD1',
    description: 'I am Osome!1',
  },
  {
    title: 'Joined IIT PKD2',
    description: 'I am Osome!2',
  },
  {
    title: 'Joined IIT PKD3',
    description: 'I am Osome!3',
  },
  {
    title: 'Joined IIT PKD1',
    description: 'I am Osome!1',
  },
  {
    title: 'Joined IIT PKD2',
    description: 'I am Osome!2',
  },
  {
    title: 'Joined IIT PKD3',
    description: 'I am Osome!3',
  },
  {
    title: 'Joined IIT PKD1',
    description: 'I am Osome!1',
  },
  {
    title: 'Joined IIT PKD2',
    description: 'I am Osome!2',
  },
  {
    title: 'Joined IIT PKD3',
    description: 'I am Osome!3',
  },
  {
    title: 'Joined IIT PKD1',
    description: 'I am Osome!1',
  },
  {
    title: 'Joined IIT PKD2',
    description: 'I am Osome!2',
  },
  {
    title: 'Joined IIT PKD3',
    description: 'I am Osome!3',
  },
  {
    title: 'Joined IIT PKD1',
    description: 'I am Osome!1',
  },
  {
    title: 'Joined IIT PKD2',
    description: 'I am Osome!2',
  },
  {
    title: 'Joined IIT PKD3',
    description: 'I am Osome!3',
  },
  {
    title: 'Joined IIT PKD1',
    description: 'I am Osome!1',
  },
  {
    title: 'Joined IIT PKD2',
    description: 'I am Osome!2',
  },
  {
    title: 'Joined IIT PKD3',
    description: 'I am Osome!3',
  },
  {
    title: 'Joined IIT PKD1',
    description: 'I am Osome!1',
  },
  {
    title: 'Joined IIT PKD2',
    description: 'I am Osome!2',
  },
  {
    title: 'Joined IIT PKD3',
    description: 'I am Osome!3',
  },
  {
    title: 'Joined IIT PKD1',
    description: 'I am Osome!1',
  },
  {
    title: 'Joined IIT PKD2',
    description: 'I am Osome!2',
  },
  {
    title: 'Joined IIT PKD3',
    description: 'I am Osome!3',
  },
  {
    title: 'Joined IIT PKD1',
    description: 'I am Osome!1',
  },
  {
    title: 'Joined IIT PKD2',
    description: 'I am Osome!2',
  },
  {
    title: 'Joined IIT PKD3',
    description: 'I am Osome!3',
  },
  {
    title: 'Joined IIT PKD1',
    description: 'I am Osome!1',
  },
  {
    title: 'Joined IIT PKD2',
    description: 'I am Osome!2',
  },
  {
    title: 'Joined IIT PKD3',
    description: 'I am Osome!3',
  },
  {
    title: 'Joined IIT PKD1',
    description: 'I am Osome!1',
  },
  {
    title: 'Joined IIT PKD2',
    description: 'I am Osome!2',
  },
  {
    title: 'Joined IIT PKD3',
    description: 'I am Osome!3',
  },
  {
    title: 'Joined IIT PKD1',
    description: 'I am Osome!1',
  },
  {
    title: 'Joined IIT PKD2',
    description: 'I am Osome!2',
  },
  {
    title: 'Joined IIT PKD3',
    description: 'I am Osome!3',
  },
  {
    title: 'Joined IIT PKD1',
    description: 'I am Osome!1',
  },
  {
    title: 'Joined IIT PKD2',
    description: 'I am Osome!2',
  },
  {
    title: 'Joined IIT PKD3',
    description: 'I am Osome!3',
  },
  {
    title: 'Joined IIT PKD1',
    description: 'I am Osome!1',
  },
  {
    title: 'Joined IIT PKD2',
    description: 'I am Osome!2',
  },
  {
    title: 'Joined IIT PKD3',
    description: 'I am Osome!3',
  },
  {
    title: 'Joined IIT PKD1',
    description: 'I am Osome!1',
  },
  {
    title: 'Joined IIT PKD2',
    description: 'I am Osome!2',
  },
  {
    title: 'Joined IIT PKD3',
    description: 'I am Osome!3',
  },
  {
    title: 'Joined IIT PKD1',
    description: 'I am Osome!1',
  },
  {
    title: 'Joined IIT PKD2',
    description: 'I am Osome!2',
  },
  {
    title: 'Joined IIT PKD3',
    description: 'I am Osome!3',
  },
  {
    title: 'Joined IIT PKD1',
    description: 'I am Osome!1',
  },
  {
    title: 'Joined IIT PKD2',
    description: 'I am Osome!2',
  },
  {
    title: 'Joined IIT PKD3',
    description: 'I am Osome!3',
  },
  {
    title: 'Joined IIT PKD1',
    description: 'I am Osome!1',
  },
  {
    title: 'Joined IIT PKD2',
    description: 'I am Osome!2',
  },
  {
    title: 'Joined IIT PKD3',
    description: 'I am Osome!3',
  },
  {
    title: 'Joined IIT PKD1',
    description: 'I am Osome!1',
  },
  {
    title: 'Joined IIT PKD2',
    description: 'I am Osome!2',
  },
  {
    title: 'Joined IIT PKD3',
    description: 'I am Osome!3',
  },
  {
    title: 'Joined IIT PKD1',
    description: 'I am Osome!1',
  },
  {
    title: 'Joined IIT PKD2',
    description: 'I am Osome!2',
  },
  {
    title: 'Joined IIT PKD3',
    description: 'I am Osome!3',
  },
  {
    title: 'Joined IIT PKD1',
    description: 'I am Osome!1',
  },
  {
    title: 'Joined IIT PKD2',
    description: 'I am Osome!2',
  },
  {
    title: 'Last - Joined IIT PKD3',
    description: 'I am Osome!3',
  },
];

export default function Timeline() {
  return (
    <List paddingBottom={4}>
      {achievements.map(({ title, description }, index) => {
        const isLastElement = index === achievements.length - 1;
        const isFirstElement = index === 0;

        return (
          <ListItem key={title} zIndex={1} paddingTop={4} position="relative">
            <Flex
              left="5px"
              top={isFirstElement ? 5 : 0}
              width="2.5px"
              bottom={0}
              height={isLastElement ? 5 : 'unset'}
              zIndex={-1}
              position="absolute"
              backgroundColor="gray.100"
            />

            <HStack
              // width="full"
              alignItems="flex-start"
              justifyContent="flex-start"
            >
              <Box
                minWidth="14px"
                height="14px"
                marginTop={1}
                borderRadius="full"
                bgGradient={'linear(to-r, red.500, blue.500)'}
              />

              <VStack
                // width="full"
                spacing={2}
                textAlign="left"
              >
                <Heading width="full" size="xs" textAlign="left">
                  {title}
                </Heading>
                <Text size="sm" width="full" textAlign={'left'}>
                  {description}
                </Text>
              </VStack>
            </HStack>
          </ListItem>
        );
      })}
    </List>
  );
}
