export type ClothingType = 
  | 'top' 
  | 'bottom' 
  | 'shoes' 
  | 'accessory' 
  | 'outerwear'
  | 'dress'

export type Season = 
  | 'spring' 
  | 'summer' 
  | 'autumn' 
  | 'winter' 
  | 'all'

export type Occasion = 
  | 'casual' 
  | 'formal' 
  | 'sport' 
  | 'evening'
  | 'work'

export interface WardrobeItem {
  id: string
  user_id: string
  image_url: string
  type: ClothingType
  color: string
  season: Season
  occasion: Occasion
  brand: string | null
  notes: string | null
  created_at: string
}