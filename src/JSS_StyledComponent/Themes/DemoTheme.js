import React, { Component } from 'react'
import styled, {ThemeProvider } from 'styled-components'

const configDarkTheme = {
  backgroundColor: '#000',
  color: '#3333cc',
  padding: '2rem'
}

const configLightTheme={
  color: '#eee',
  backgroundColor: '#6633ff',
}

export default class DemoTheme extends Component {
  state={
    currentTheme: configDarkTheme
  }

  handleChangeTheme = (event) => {
    this.setState({currentTheme: event.target.value == '1' ? configDarkTheme : configLightTheme
  })
  }

  render() {
  
    const DivStyle = styled.div`
      color: ${props => props.theme.color};
      padding: ${props => props.theme.padding};
      background-color: ${props => props.theme.backgroundColor};
    `
    return (
      <ThemeProvider theme={this.state.currentTheme}>
        <DivStyle>
          I'm goood
        </DivStyle>
        <select onChange={this.handleChangeTheme}>
          <option value='1'>Dark Theme</option>
          <option value='2'>Light Theme</option>
        </select>
      </ThemeProvider>
    )
    }
}
