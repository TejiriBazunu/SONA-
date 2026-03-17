import { Colors } from '@/constants/colors'
import { Spacing } from '@/constants/spacing'
import { Typography } from '@/constants/typography'
import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native'

interface InputProps extends TextInputProps {
  label?: string
  error?: string
  password?: boolean
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  password = false,
  style,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={[styles.inputWrapper, error ? styles.inputError : null]}>
        <TextInput
          style={[styles.input, style]}
          placeholderTextColor={Colors.textSecondary}
          secureTextEntry={password && !showPassword}
          autoCapitalize="none"
          {...props}
        />
        {password && (
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={styles.eyeButton}
          >
            <Text>{showPassword ? '👁️‍🗨️' : '👁️'}</Text>
          </TouchableOpacity>
        )}
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: Spacing.lg,
  },
  label: {
    fontSize: Typography.md,
    fontWeight: Typography.medium,
    color: Colors.textPrimary,
    marginBottom: Spacing.sm,
    marginLeft: Spacing.md,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.background,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: Spacing.borderRadius,
  },
  inputError: {
    borderColor: Colors.error,
  },
  input: {
    flex: 1,
    color: Colors.textPrimary,
    paddingVertical: 14,
    paddingHorizontal: Spacing.md,
    fontSize: Typography.md,
  },
  eyeButton: {
    padding: Spacing.sm,
  },
  errorText: {
    fontSize: Typography.xs,
    color: Colors.error,
    marginTop: Spacing.xs,
    marginLeft: Spacing.md,
  },
})