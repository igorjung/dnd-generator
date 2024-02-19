export interface IMonsterList {
  count: number
  results: {
    index: string
  }[]
}

export interface IMonsterAC {
  type: string
  value: number
}

export interface IMonsterSpeed {
  walk: string
  burrow: string
  climb: string
  fly: string
  swim: string
}

export interface IMonsterSense {
  blindsight?: string
  darkvision?: string
  passive_perception: string
}

export interface IMonsterAbilitie {
  name: string
  desc: string
}

export interface IMonsterAction {
  name: string
  desc: string
}

export interface IMonsterCondition {
  index: string
  name: string
}

export interface IMonsterProficiencie {
  proficiency: {
    name: string
  }
  value: number
}

export interface IMonster {
  index: string

  name: string
  desc: string
  size: string
  type: string
  alignment: string

  armor_class: IMonsterAC[]
  hit_points: number
  hit_points_roll: string
  speed: IMonsterSpeed

  charisma: number
  constitution: number
  dexterity: number
  intelligence: number
  strength: number
  wisdom: number

  proficiencies: IMonsterProficiencie[]
  damage_resistances: string[]
  condition_immunities: IMonsterCondition[]
  senses: IMonsterSense
  languages: string
  xp: string

  special_abilities: IMonsterAbilitie[]
  actions: IMonsterAction[]

  image: string
  subtype: string
  alignments: string

}
