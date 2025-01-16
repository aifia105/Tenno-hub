export interface PatchLog {
  name: string;
  date: string;
  url: string;
  additions: string;
  changes: string;
  fixes: string;
}

export interface Component {
  name: string;
  uniqueName: string;
  description: string;
  type: string;
  tradable: boolean;
  category: string;
  productCategory: string;
}

export interface Introduction {
  name: string;
  url: string;
  aliases: string[];
  parent: string;
  date: string;
}

export interface Warframe {
  name: string;
  uniqueName: string;
  description: string;
  type: string;
  tradable: boolean;
  category: string;
  productCategory: string;
  patchlogs: PatchLog[];
  components: Component[];
  introduced: Introduction;
  estimatedVaultDate: string;
  shield: number;
  polarities: string[];
  prime_power: string;
  prime_mr: string;
  color: number;
  prime_polarities: string[];
  conclave: boolean;
  prime_armor: number;
  speed: string;
  aura: string;
  imageName: string;
}
