export interface IColis {
  itemId: string;
  typeEvenement: string;
  localisation: string;
  pays: string;
  date: string;
}

export class Colis implements IColis {
  constructor(
    public itemId: string,
    public typeEvenement: string,
    public localisation: string,
    public pays: string,
    public date: string
  ) {}
}
