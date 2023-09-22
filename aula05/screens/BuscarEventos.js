import { View, Text, Button } from 'react-native';

const BuscarEventos = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Tela Buscar Eventos</Text>
      <Button
        title="Meus Eventos"
        onPress={() => navigation.navigate('Meus Eventos')}
      />
    </View>
  );
};

export default BuscarEventos;
