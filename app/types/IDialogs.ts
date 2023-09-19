export interface IDialogCategory {
  id: number
  title: string
  imageSource?: string
  description: string
  data: IDialogCard[]
}

export interface IDialogCard {
  id: number
  title: string
  description: string
  imageSource?: string
}


export type TSides = 'ME' | 'COMPANION' | 'THIRD_PERSON' | 'FOURTH_PERSON' | 'FIFTH_PERSON'

export interface DialogPart {
  name: string
  side: TSides
  levelOne: string[]
  levelTwo?: string[]
  levelThree?: string[]
}

export interface IDialog {
  id: string
  title: string
  description: string
  content: DialogPart[]
}

export interface Bookmark {
  userId: string // User who bookmarked the content
  contentId: string // ID of the bookmarked content
  createdAt: string
}
