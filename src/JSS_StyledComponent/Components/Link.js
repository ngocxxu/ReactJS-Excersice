import styled from "styled-components";
import React from 'react'

export const Link = ({className,children,...restProps}) => {
  return <a href='#' className={className} {...restProps}>
    {children}
  </a>
};

export const StyledLink = styled(Link)`
  color: purple;
  
`