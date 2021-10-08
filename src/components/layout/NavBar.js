import React from 'react';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MoviesScreen from "../screens/MoviesScreen";
import SearchResultScreen from "../screens/SearchResultScreen";
import TVShowsScreen from "../screens/TVShowsScreen";

const Tab = createMaterialTopTabNavigator();

const NavBar = () => {
    return (
        <Tab.Navigator screenOptions={{tabBarLabelStyle: {textTransform:'none'}}}>
            <Tab.Screen name="Movies" component={MoviesScreen} />
            <Tab.Screen name="Search Results" component={SearchResultScreen} />
            <Tab.Screen name="TV Shows" component={TVShowsScreen} />
        </Tab.Navigator>
    );
}

export default NavBar