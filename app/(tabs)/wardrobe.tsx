import { Colors } from '@/constants/colors'
import { Spacing } from '@/constants/spacing'
import { Typography } from '@/constants/typography'
import React, { useState } from 'react'
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
} from 'react-native'

const CATEGORIES = ['All', 'Tops', 'Bottoms', 'Shoes', 'Accessories', 'Outerwear']

const DUMMY_ITEMS = [
  { id: '1', name: 'White Shirt', category: 'Tops', image: null },
  { id: '2', name: 'Blue Jeans', category: 'Bottoms', image: null },
  { id: '3', name: 'Sneakers', category: 'Shoes', image: null },
  { id: '4', name: 'Black Jacket', category: 'Outerwear', image: null },
  { id: '5', name: 'Gold Watch', category: 'Accessories', image: null },
  { id: '6', name: 'Dress Shirt', category: 'Tops', image: null },
]

const CARD_WIDTH = (Dimensions.get('window').width - Spacing.screenPadding * 2 - Spacing.md) / 2

export default function WardrobeScreen() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredItems = selectedCategory === 'All'
    ? DUMMY_ITEMS
    : DUMMY_ITEMS.filter(item => item.category === selectedCategory)

  return (
    <SafeAreaView style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Wardrobe</Text>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Category Tabs */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.tabsContainer}
        contentContainerStyle={styles.tabsContent}
      >
        {CATEGORIES.map(category => (
          <TouchableOpacity
            key={category}
            style={[
              styles.tab,
              selectedCategory === category && styles.tabActive,
            ]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text
              style={[
                styles.tabText,
                selectedCategory === category && styles.tabTextActive,
              ]}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Item Count */}
      <Text style={styles.itemCount}>{filteredItems.length} items</Text>

      {/* Grid */}
      <FlatList
        data={filteredItems}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.grid}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            <View style={styles.cardImage}>
              <Text style={styles.cardPlaceholder}>👕</Text>
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardName}>{item.name}</Text>
              <Text style={styles.cardCategory}>{item.category}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.screenPadding,
    paddingTop: Spacing.lg,
    paddingBottom: Spacing.md,
  },
  headerTitle: {
    fontSize: Typography.xxl,
    fontWeight: Typography.bold,
    color: Colors.textPrimary,
  },
  addButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    fontSize: Typography.xl,
    color: Colors.white,
    fontWeight: Typography.bold,
    marginTop: -2,
  },
  tabsContainer: {
    paddingLeft: Spacing.screenPadding,
    marginBottom: Spacing.sm,
  },
  tabsContent: {
    gap: Spacing.sm,
    paddingRight: Spacing.screenPadding,
  },
  tab: {
    paddingVertical: Spacing.xs,
    paddingHorizontal: Spacing.md,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  tabActive: {
    backgroundColor: Colors.white,
    borderColor: Colors.white,
  },
  tabText: {
    fontSize: Typography.sm,
    color: Colors.textSecondary,
    fontWeight: Typography.medium,
  },
  tabTextActive: {
    color: Colors.black,
    fontWeight: Typography.semibold,
  },
  itemCount: {
    fontSize: Typography.sm,
    color: Colors.textSecondary,
    paddingHorizontal: Spacing.screenPadding,
    marginBottom: Spacing.md,
  },
  grid: {
    paddingHorizontal: Spacing.screenPadding,
    paddingBottom: Spacing.xl,
  },
  row: {
    gap: Spacing.md,
    marginBottom: Spacing.md,
  },
  card: {
    width: CARD_WIDTH,
    backgroundColor: Colors.surface,
    borderRadius: 16,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    aspectRatio: 3 / 4,
    backgroundColor: Colors.surfaceElevated,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardPlaceholder: {
    fontSize: 48,
  },
  cardInfo: {
    padding: Spacing.sm,
  },
  cardName: {
    fontSize: Typography.sm,
    fontWeight: Typography.semibold,
    color: Colors.textPrimary,
    marginBottom: 2,
  },
  cardCategory: {
    fontSize: Typography.xs,
    color: Colors.textSecondary,
  },
})