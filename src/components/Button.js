import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider, css } from 'styled-components';
import theme from 'styled-theming';

const buttonThemes = theme('type', {
  default: css`
    background-color: #66ccff;
  `,
  primary: css`
    background-color: #cc00cc;
  `,
});

export const Button = styled.button`
  ${buttonThemes}
  ${props => props.customStyle}
`;

Button.displayName = 'Button';

const SuperButton = props => (
  <ThemeProvider theme={{ type: props.type }} >
    <Button onClick={props.onClick} customStyle={css`${props.customStyle}`}>
      {props.children || props.label}
    </Button>
  </ThemeProvider>
);


SuperButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string,
  type: PropTypes.string,
  customStyle: PropTypes.oneOfType([
    PropTypes.objectOf(PropTypes.string),
    PropTypes.arrayOf(PropTypes.string),
  ]),
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]),
};

SuperButton.defaultProps = {
  type: 'default',
  label: 'Button',
  customStyle: null,
  children: null,
};

export default SuperButton;
