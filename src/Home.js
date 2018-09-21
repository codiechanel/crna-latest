import * as React from "react";
import { Container, Content, Button, Text } from "native-base";
// import style from "../styles";
import { StatusBar } from "react-native";
export default class Home extends React.Component {
    render() {
        return (React.createElement(Container, null,
            React.createElement(StatusBar, { hidden: true }),
            React.createElement(Content, null,
                React.createElement(Button, null,
                    React.createElement(Text, null, "cool")))));
    }
}
