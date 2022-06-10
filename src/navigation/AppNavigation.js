import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RestaurantStack } from "./RestaurantStack";
import { AccountStack } from "./AccountStack";
import { FavoritesStack } from "./FavoritesStack";
import { SearchStack } from "./SearchStack";
import { RankingStack } from "./RankingStack";
import { Icon } from "react-native-elements";
import { screen } from "../utils";

const Tab = createBottomTabNavigator();

export function AppNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#00a680",
        tabBarInactiveTintColor: "#646464",
        tabBarIcon: ({ color, size }) => tabNavigatorIcon(route, color, size),
      })}
    >
      <Tab.Screen
        name={screen.restaurant.tab}
        component={RestaurantStack}
        options={{ title: "Restaurants" }}
      />
      <Tab.Screen
        name={screen.account.tab}
        component={AccountStack}
        options={{ title: "Account" }}
      />
      <Tab.Screen
        name={screen.favorites.tab}
        component={FavoritesStack}
        options={{ title: "Favorites" }}
      />
      <Tab.Screen
        name={screen.search.tab}
        component={SearchStack}
        options={{ title: "Search" }}
      />
      <Tab.Screen
        name={screen.ranking.tab}
        component={RankingStack}
        options={{ title: "Ranking" }}
      />
    </Tab.Navigator>
  );
}

function tabNavigatorIcon(route, color, size) {
  let iconName;

  if (route.name === screen.account.tab) {
    iconName = "home-outline";
  }

  if (route.name === screen.restaurant.tab) {
    iconName = "compass-outline";
  }

  if (route.name === screen.favorites.tab) {
    iconName = "heart-outline";
  }

  if (route.name === screen.ranking.tab) {
    iconName = "star-outline";
  }

  if (route.name === screen.search.tab) {
    iconName = "magnify";
  }

  return (
    <Icon type="material-community" name={iconName} color={color} size={size} />
  );
}
