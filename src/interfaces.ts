export interface BioInterface {
  name: string
  tagline: string
  email: string
  website: string
  linkedin: string
}
export interface PositionInterface {
  id: string
  title: string
  company: string
  location: string
  startDate: string
  endDate?: string
  achievments: string[]
}
