import * as React from "react"
import {
  Container,
  Icon,
  Content,
  Button,
  List,
  ListItem,
  Text
} from "native-base"
// import style from "../styles";
import { StatusBar, View } from "react-native"

export default class Home extends React.Component<any, any> {
  render() {
    return (
      <Container>
        <StatusBar hidden />
        <Content>
          <Button>
            <Text>cool</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}
