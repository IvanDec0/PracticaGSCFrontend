export interface Evento {
  id: string,
  name: string,
  date: string,
  time: string,
  location: {
    address: string,
    city: string,
    country: string
  }

}
