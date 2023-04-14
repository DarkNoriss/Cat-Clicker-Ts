export type CatsType = {
  amount: number;
  perSecond: number;
  perClick: number;
};

export type BuildingsType = {
  name: string;
  desc: string;
  icon: string;
  priceDef: number;
  perSecondDef: number;
  amount?: number;
  perSecond?: number;
  bonus?: number;
  unlocked?: boolean;
  discovered?: boolean;
};

export type CatDataType = {
  cats: CatsType[];
  upgrades: string[];
  buildings: string[];
};

export const emptyData = () => {
  return {
    cats: {
      amount: 0,
      perSecond: 0,
      perClick: 1,
    },
    upgrades: {},
    buildings: {
      catPaw: {
        name: 'Paw',
        desc: 'meow meow',
        icon: 'catPaw.png',
        priceDef: 15,
        perSecondDef: 0.2,
      },
      catBakery: {
        name: 'Bakery',
        desc: 'meow meow',
        icon: 'catBakery.png',
        priceDef: 100,
        perSecondDef: 1,
      },
      catFarmer: {
        name: 'Farmer',
        desc: 'meow meow',
        icon: 'catFarmer.png',
        priceDef: 1100,
        perSecondDef: 8,
      },
      catMiner: {
        name: 'Miner',
        desc: 'meow meow',
        icon: 'catMiner.png',
        priceDef: 12000,
        perSecondDef: 47,
      },
    },
  };
};
