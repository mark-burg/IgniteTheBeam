import React from "react"
import { TextStyle, View, ViewStyle } from "react-native"
import { Screen } from "@/components/Screen"
import { Text } from "@/components/Text"
import { useAppTheme } from "@/theme/context"

export const HomeScreen = () => {
  const {
    theme: { colors, spacing },
  } = useAppTheme()

  return (
    <Screen
      preset="fixed"
      safeAreaEdges={["top"]}
      contentContainerStyle={[$container, { backgroundColor: colors.background }]}
    >
      <View style={$content}>
        <Text preset="heading" style={[$heading, { color: colors.text }]}>
          Home
        </Text>
        <Text style={[$description, { color: colors.textDim }]}>
          Welcome to Ignite The Beam! This is your home screen.
        </Text>
      </View>
    </Screen>
  )
}

const $container: ViewStyle = {
  flex: 1,
}

const $content: ViewStyle = {
  flex: 1,
  paddingHorizontal: 20,
  paddingTop: 40,
}

const $heading: TextStyle = {
  marginBottom: 16,
}

const $description: TextStyle = {
  fontSize: 16,
  lineHeight: 24,
}
