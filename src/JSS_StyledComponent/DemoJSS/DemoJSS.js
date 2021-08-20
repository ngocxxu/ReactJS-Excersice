import React, { Component } from 'react'
import { Button, SmallButton } from '../Components/Button'
import {StyledLink, Link} from '../Components/Link'
import { TextField } from '../Components/TextField'

export default class DemoJSS extends Component {
  render() {
    return (
      <div>
          <Button className='button_style' bgPrimary fontSize2x>Hello</Button>
          <SmallButton>Bono</SmallButton>
          <StyledLink id='abc' name='bin'>Ahihi</StyledLink>
          <TextField inputColor='green'></TextField>
      </div>
    )
  }
}
