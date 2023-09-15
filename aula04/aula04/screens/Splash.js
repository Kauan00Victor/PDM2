import { View, Text } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import Titulo from '../components/Titulo'

const Splash = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6638e2',
      }}>
      <Titulo>
        Meu App
      </Titulo>
      <ActivityIndicator size={'large'} color={'white'} />
    </View>
  );
};

export default Splash;
