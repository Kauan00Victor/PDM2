import { View, Text, Button } from 'react-native';

const MeusEventos = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Tela Meus Eventos</Text>
      <Button
        title="Buscar Eventos"
        onPress={() => navigation.navigate('Buscar Eventos')}
      />
    </View>
  );
};

export default MeusEventos;
