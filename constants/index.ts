export const headerLinks = [
    {
      label: 'Home',
      route: '/',
    },
    {
      label: 'Activity Hub',
      route: '/events/create',
    },
    {
      label: 'Pathways',
      route: '/profile',
    },
  ]
  
  export const eventDefaultValues = {
    title: '',
    description: '',
    location: '',
    imageUrl: '',
    startDateTime: new Date(),
    endDateTime: new Date(),
    categoryId: '',
    price: '',
    isFree: false,
    url: '',
  }