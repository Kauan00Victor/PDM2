import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BuscarEventos from '../screens/BuscarEventos';
import MeusEventos from '../screens/MeusEventos';

const Stack = createNativeStackNavigator();

const NavegacaoPilha = () => {
  return (
    <Stack.Navigator initialRouteName="Buscar Eventos">
      <Stack.Screen name="Meus Eventos" component={MeusEventos} />
      <Stack.Screen name="Buscar Eventos" component={BuscarEventos} />
    </Stack.Navigator>
  );
};

export default NavegacaoPilha;
