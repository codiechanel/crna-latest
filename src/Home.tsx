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
    console.log("nice")

    return (
      <Container>
        <StatusBar hidden />
        <Content>
          <Button>
            <Text>this is nah great yo cool vv man </Text>
          </Button>
        </Content>
      </Container>
    )
  }
}
