export class StoreModel {
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: number;
  phone: string;

  constructor(id: number, name: string, address: string, city: string, state: string, zip: number, phone: string) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.phone = phone;
  }
}
