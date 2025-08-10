export interface Payment {
  id: string
  email: string
  location: string
  name: string
  phone: string
  position: 'defender' | 'midfielder' | 'goalkeeper' | 'forward'
}

export const payments: Payment[] = [
  {
    id: 'teslkjls',
    name: 'Jerome Bell',
    email: 'jeromebell@example.com',
    location: 'nepal',
    phone: '2055550100',
    position: 'defender',
  },
  {
    id: 'asfdffasdf',
    name: 'Cameron Williamson',
    email: 'cameronwilliamson@example.com',
    location: 'netherlands',
    phone: '6715550110',
    position: 'defender',
  },
  {
    id: 'klnvcmnmxckl',
    name: 'Brooklyn Simmons',
    email: 'brooklynsimmons@example.com',
    location: 'canada',
    phone: '3165550116',
    position: 'midfielder',
  },
  {
    id: 'kjlskdjfiwes',
    name: 'Savannah Nguyen',
    email: 'savannahnguyen@example.com',
    location: 'germany',
    phone: '6845550102',
    position: 'goalkeeper',
  },
  {
    id: 'taklsxmxzdfs',
    name: 'Ralph Edwards',
    email: 'ralphedwards@example.com',
    location: 'mongolia',
    phone: '2195550114',
    position: 'forward',
  },
  {
    id: 'xcvnskjfssdf',
    name: 'Theresa Webb',
    email: 'theresawebb@example.com',
    location: 'mongolia',
    phone: '5055550125',
    position: 'midfielder',
  },
]
