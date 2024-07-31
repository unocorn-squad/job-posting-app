export const theme = {
  colors: {
    white: 'var(--color-white)',
    black: 'var(--color-black)',
    darkGray: 'var(--color-gray-dark)',
    gray: 'var(--color-gray)',
    lightGray: 'var(--color-gray-light)',
    midnight: 'var(--color-midnight)',
    darkBlue: 'var(--color-blue-dark)',
    violet: 'var(--color-violet)',
    lightViolet: 'var(--color-violet-light)',
  },
  breakpoints: {
    mobile_small: '375px',
    mobile_medium: '515px',
    mobile_large: '650px',
    tablet_small: '768px',
    tablet_medium: '900px',
    tablet_large: '1024px',
    desktop_small: '1280px',
    desktop_large: '1440px',
  },
  layout: {
    bgColor: 'var(--color-gray-light)',
    maxWidth: '1024px',
    space50: 'var(--gutter-50)',
    space100: 'var(--gutter-100)',
    space200: 'var(--gutter-200)',
    space300: 'var(--gutter-300)',
    space400: 'var(--gutter-400)',
    space500: 'var(--gutter-500)',
    space600: 'var(--gutter-600)',
    space700: 'var(--gutter-700)',
    space800: 'var(--gutter-800)',
    space900: 'var(--gutter-900)',
    space1000: 'var(--gutter-1000)',
  },
  typography: {
    familyPrimary: 'var(--font-family-primary)',
    fs75: 'var(--font-size-75)',
    fs87: 'var(--font-size-87)',
    fs100: 'var(--font-size-100)',
    fs112: 'var(--font-size-112)',
    fs125: 'var(--font-size-125)',
    fs150: 'var(--font-size-150)',
    fs175: 'var(--font-size-175)',
    fwThin: 'var(--font-weight-thin)',
    fwExtraLight: 'var(--font-weight-extra-light)',
    fwLight: 'var(--font-weight-light)',
    fwRegular: 'var(--font-weight-regular)',
    fwMedium: 'var(--font-weight-medium)',
    fwSemiBold: 'var(--font-weight-semi-bold)',
    fwBold: 'var(--font-weight-bold)',
    fwExtraBold: 'var(--font-weight-extra-bold)',
    fwBlack: 'var(--font-weight-black)',
  },
  primaryButton: {
    bgColor: 'var(--color-violet)',
    hoverBgColor: 'var(--color-violet-light)',
    color: 'var(--color-white)',
  },
  secondaryButton: {
    bgColor: 'rgba(89, 100, 224, 0.1)',
    hoverBgColor: 'rgba(89, 100, 224, 0.35)',
    color: 'var(--color-violet)',
  },
  checkbox: {
    bgColor: 'var(--color-gray-light)',
    hoverBgColor: 'var(--color-gray)',
    checkedBgColor: 'var(--color-violet)',
    outlineColor: 'var(--color-violet)',
    label: {
      color: 'var(--color-blue-dark)',
    },
  },
  companyBioCard: {
    bgColor: 'var(--color-white)',
    linkColor: 'var(--color-gray-dark)',
    linkHoverColor: 'var(--color-violet)',
  },
  jobCard: {
    bgColor: 'var(--color-white)',
    title: 'var(--color-blue-dark)',
    secondaryText: {
      color: 'var(--color-gray-dark)',
    },
    logo: {
      bgColor: 'var(--color-gray-dark)',
    },
    locationText: {
      color: 'var(--color-violet)',
    },
  },
  jobDetailCard: {
    bgColor: 'var(--color-white)',
    header: {
      color: 'var(--color-gray-dark)',
    },
    title: {
      color: 'var(--color-blue-dark)',
    },
    location: {
      color: 'var(--color-violet)',
    },
    description: {
      color: 'var(--color-gray-dark)',
    },
  },
  searchBar: {
    border: {
      color: '#cccccc',
    },
  },
  stickyBanner: {
    bgColor: 'var(--color-white)',
    title: 'var(--color-black)',
    text: 'var(--color-gray-dark)',
  },
};
