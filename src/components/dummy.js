import {
    Container,
    SimpleGrid,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    HStack,
    Divider
  } from "@chakra-ui/react";
  
  import SkillsArray from "./SkillsArray";
  import { useColorModeValue } from "@chakra-ui/react";
  
  const useColorModeBg = (lightColor, darkColor) => {
    return useColorModeValue(lightColor, darkColor);
  };
  
  const Feature = ({ text }) => {
    return (
      <Stack direction={"row"} align={"center"}>
        <Flex
          w={8}
          h={8}
          align={"center"}
          justify={"center"}
          rounded={"full"}
          
        >
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
    );
  };
  
  const Skills = ({color}) => {
    const skills = SkillsArray();
    const borderColor = useColorModeBg("gray.100", "gray.700");
    
  
    if (!Object.keys(skills).length) {
      return null;
    }
  
    return (
      <Container maxW={"5xl"} py={12} id="skills">
        <SimpleGrid >
          <Stack spacing={4}>
          <Stack align="center" direction="row" p={4}>
              <HStack mx={4}>
                <Text color={`${color}.400`} fontWeight={800}>
                  03
                </Text>
                <Text fontWeight={800}>Skills</Text>
              </HStack>
              <Divider orientation="horizontal" />
            </Stack>
          <Stack width={"45%"}>
          
            <Heading mb={8}>Here is my technical skills</Heading>
            
            </Stack>
            <Flex >
              {Object.entries(skills).map(([section, sectionSkills]) => (
                <Stack
                  key={section}
                  spacing={4}
                  divider={<StackDivider borderColor={borderColor} />}
                  width={"100%"}
                >
                  <Heading as="h2" size="md">
                    {section}
                  </Heading>
                  {sectionSkills.map((skill) => {
                    return (
                      <Feature
                        key={skill}
                        text={skill}
                      />
                    );
                  })}
                </Stack>
              ))}
            </Flex>
          </Stack>
        </SimpleGrid>
      </Container>
    );
  };
  
  export default Skills;
  