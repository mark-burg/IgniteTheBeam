import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { TextStyle, ViewStyle } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Icon } from "@/components/Icon"
import { HomeScreen } from "@/screens/HomeScreen"
import { GoodNewsScreen } from "@/screens/GoodNewsScreen"
import { BeamScreen } from "@/screens/BeamScreen"
import { MoreScreen } from "@/screens/MoreScreen"
import { useAppTheme } from "@/theme/context"
import type { MainTabParamList } from "./navigationTypes"

const Tab = createBottomTabNavigator<MainTabParamList>()

export const MainNavigator = () => {
  const { bottom } = useSafeAreaInsets()
  const {
    theme: { colors },
  } = useAppTheme()

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: [$tabBar, { height: bottom + 70, backgroundColor: colors.background }],
        tabBarActiveTintColor: colors.tint,
        tabBarInactiveTintColor: colors.textDim,
        tabBarLabelStyle: $tabBarLabel,
        tabBarItemStyle: $tabBarItem,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Icon icon="view" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="GoodNews"
        component={GoodNewsScreen}
        options={{
          tabBarLabel: "Good News",
          tabBarIcon: ({ color, focused }) => (
            <Icon icon="heart" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Beam"
        component={BeamScreen}
        options={{
          tabBarLabel: "Beam",
          tabBarIcon: ({ color, focused }) => (
            <Icon icon="components" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={MoreScreen}
        options={{
          tabBarLabel: "More",
          tabBarIcon: ({ color, focused }) => (
            <Icon icon="menu" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

const $tabBar: ViewStyle = {
  borderTopColor: "transparent",
  borderTopWidth: 0,
}

const $tabBarItem: ViewStyle = {
  paddingTop: 8,
}

const $tabBarLabel: TextStyle = {
  fontSize: 12,
  fontWeight: "500",
  lineHeight: 16,
}
