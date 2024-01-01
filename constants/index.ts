export const headerLinks = [
    {
      label: 'Admissions 101',
      route: '/',
    },
    {
      label: 'Extracircular Hub',
      route: '/events/create',
    },
    {
      label: 'Grade Pathways',
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