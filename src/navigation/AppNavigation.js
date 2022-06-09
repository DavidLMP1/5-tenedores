import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RestaurantsScreen } from '../screens/RestaurantsScreen';
import { AccountScreen } from '../screens/AccountScreen';
import { FavoritesScreen } from '../screens/FavoritesScreen';
import { SearchScreen } from '../screens/SearchScreen';
import { RankingScreen } from '../screens/RankingScreen';
import { Icon } from 'react-native-elements'

const Tab = createBottomTabNavigator();

export function AppNavigation() {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarActiveTintColor: '#00a680',
            tabBarInactiveTintColor: '#646464',
            tabBarIcon: ({ color, size }) => tabNavigatorIcon(route, color, size)
        })}>
            <Tab.Screen name="Restaurant" component={RestaurantsScreen} />
            <Tab.Screen name="Account" component={AccountScreen} />
            <Tab.Screen name="Favorites" component={FavoritesScreen} />
            <Tab.Screen name="Search" component={SearchScreen} />
            <Tab.Screen name="Ranking" component={RankingScreen} />
        </Tab.Navigator>
    )
}

function tabNavigatorIcon(route, color, size) {
    let iconName;

    if (route.name === 'Account') {
        iconName = 'home-outline'
    }

    if (route.name === 'Restaurant') {
        iconName = 'compass-outline'
    }

    if (route.name === 'Favorites') {
        iconName = 'heart-outline'
    }

    if (route.name === 'Ranking') {
        iconName = 'star-outline'
    }

    if (route.name === 'Search') {
        iconName = 'magnify'
    }

    return (
        <Icon type='material-community' name={iconName} color={color} size={size} />
    )
}