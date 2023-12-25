export const handleDisplay = item => {
  console.log(item);
};

export const handleNavigation = (screen, navigation, payload) => {
  navigation.navigate(screen, payload);
};
