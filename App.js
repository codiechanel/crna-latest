import React from "react"
import { StyleSheet, View } from "react-native"
import {
  Container,
  Icon,
  Content,
  Button,
  List,
  ListItem,
  Text
} from "native-base"
import Home from "./src/Home"

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { loading: true }
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    })
    this.setState({ loading: false })
  }

  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />
    }
    return <Home />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
})
