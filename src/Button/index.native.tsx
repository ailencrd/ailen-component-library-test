import React, { ReactNode } from 'react';
import { TouchableOpacity, Text, NativeSyntheticEvent, NativeTouchEvent } from 'react-native';
import getStyles from '../styles/components/Button';

export type ButtonType = {
    variant: 'primary' | 'secondary' | 'link' | 'btn_popover' | 'borderless';
    size?: 'normal' | 'small';
    activeOpacity?: number;
    disabled?: boolean;
    children: ReactNode;
    onPress: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
    containerStyle?: Object;
    textStyle?: Object;
  };  

const Button = ({
  children,
  onPress,
  variant,
  size = 'normal',
  disabled,
  containerStyle = {},
  textStyle = {},
  activeOpacity = 0.8,
}: ButtonType) => {
  const styles = getStyles('base');

  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.container[variant],
        styles.container[size],
        disabled ? styles.disabled.container[variant] : '',
        containerStyle,
      ]}
    >
      <Text
        style={[
          styles.text[variant],
          styles.text[size],
          disabled ? styles.disabled.text[variant] : '',
          textStyle,
        ]}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
