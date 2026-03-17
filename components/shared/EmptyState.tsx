import { Colors } from '@/constants/colors'
import { Spacing } from '@/constants/spacing'
import { Typography } from '@/constants/typography'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from './Button'

interface EmptyStateProps {
  icon: string
  title: string
  subtitle: string
  actionLabel?: string
  onAction?: () => void
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon,
  title,
  subtitle,
  actionLabel,
  onAction,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>{icon}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      {actionLabel && onAction && (
        <Button
          title={actionLabel}
          onPress={onAction}
          style={styles.button}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Spacing.xl,
  },
  icon: {
    fontSize: 64,
    marginBottom: Spacing.lg,
  },
  title: {
    fontSize: Typography.xl,
    fontWeight: Typography.bold,
    color: Colors.textPrimary,
    textAlign: 'center',
    marginBottom: Spacing.sm,
  },
  subtitle: {
    fontSize: Typography.md,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: Spacing.xl,
  },
  button: {
    paddingHorizontal: Spacing.xxl,
  },
})