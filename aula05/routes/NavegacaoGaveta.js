import { createDrawerNavigator } from '@react-navigation/drawer';

import BuscarEventos from '../screens/BuscarEventos';
import MeusEventos from '../screens/MeusEventos';

const Drawer = createDrawerNavigator();

const NavegacaoGaveta = () => {
  return (
    <Drawer.Navigator initialRouteName="Meus Eventos">
      <Drawer.Screen name="Buscar Eventos" component={BuscarEventos} />
      <Drawer.Screen name="Meus Eventos" component={MeusEventos} />
    </Drawer.Navigator>
  );
};

export default NavegacaoGaveta;
