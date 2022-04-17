export const getAndroidStyle = (color: string, textColor: string) => {
  return {
    borderRadius: 0,
    tabsContainerStyle: {height: 50, backgroundColor: color},
    tabStyle: {
      backgroundColor: color,
      borderWidth: 1,
      borderColor: color,
    },
    activeTabStyle: {
      backgroundColor: color,
      marginTop: 2,
      borderBottomWidth: 3,
      borderBottomColor: textColor,
    },
    tabTextStyle: {color: textColor, opacity: 0.6},
    activeTabTextStyle: {
      color: textColor,
      opacity: 1,
    },
  };
};

export const getIOSStyle = (color: string, textColor: string) => {
  return {
    tabsContainerStyle: {width: 250},
    tabStyle: {
      borderColor: color,
      borderWidth: 1,
    },
    activeTabStyle: {
      backgroundColor: color,
      borderColor: color,
      borderWidth: 1,
    },
    tabTextStyle: {color: color},
    activeTabTextStyle: {
      color: textColor,
    },
  };
};
