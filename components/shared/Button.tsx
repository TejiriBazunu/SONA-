import { Colors } from '@/constants/colors'
import { Spacing } from '@/constants/spacing'
import { Typography } from '@/constants/typography'
import React from 'react'
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native'

interface ButtonProps extends TouchableOpacityProps {
  title: string
  variant?: 'primary' | 'secondary' | 'white'
  loading?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  title,
  variant = 'primary',
  loading = false,
  style,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[styles.base, styles[variant], style]}
      disabled={loading}
      {...props}
    >
      {loading ? (
        <ActivityIndicator color={variant === 'white' ? Colors.black : Colors.white} />
      ) : (
        <Text style={[styles.text, styles[`${variant}Text`]]}>{title}</Text>
      )}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  base: {
    paddingVertical: 14,
    paddingHorizontal: Spacing.xl,
    borderRadius: Spacing.borderRadius,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primary: {
    backgroundColor: Colors.primary,
  },
  secondary: {
    backgroundColor: Colors.surfaceElevated,
  },
  white: {
    backgroundColor: Colors.white,
  },
  text: {
    fontSize: Typography.md,
    fontWeight: Typography.semibold,
  },
  primaryText: {
    color: Colors.white,
  },
  secondaryText: {
    color: Colors.textPrimary,
  },
  whiteText: {
    color: Colors.black,
  },
})