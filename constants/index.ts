export const headerLinks = [
    {
      label: 'Admissions 101',
      route: '/admissions',
    },
    {
      label: 'Grade Pathways',
      route: '/pathway',
    },
    {
      label: 'Activities Catalog',
      route: '/catalog',
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