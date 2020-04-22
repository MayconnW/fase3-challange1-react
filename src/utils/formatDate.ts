const formatDate = (value: Date): string => {
  return value.toString().split('T')[0].split('-').reverse().join('/');
};

export default formatDate;
