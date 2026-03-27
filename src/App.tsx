import { Flex, Box } from '@chakra-ui/react';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import EmailCampaign from './pages/EmailCampaign/EmailCampaign';

function App() {
  return (
    <Flex minH="100vh">
      <Sidebar />
      <Flex direction="column" flex={1} ml="66px">
        <Header />
        <Box flex={1}>
          <EmailCampaign />
        </Box>
      </Flex>
    </Flex>
  );
}

export default App;
