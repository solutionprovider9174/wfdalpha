import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
  Box, 
  HStack, 
  Icon, 
  Stack,
  useColorModeValue
} from '@chakra-ui/react'
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons'

import  Hero  from '../components/Hero'
import { Container } from '../components/Container'
import { Main } from '../components/Main'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import FooterCenter from '../components/Footer'
import WithSubnavigation from "../components/navbar"
import Aboutone from '../components/about'
import Emailsub from '../components/Email'
import Projectfeature from '../components/Featured'
import Industry from '../components/Industry'
import Roadmaps from '../components/Roadmap'

const Index = () => (
  <Container>
    <WithSubnavigation/>
    <Hero />
    <Aboutone />
    <Industry />
    <Roadmaps />
    <Emailsub/>
    <Projectfeature/>
    <FooterCenter />
  </Container>
)

export default Index
