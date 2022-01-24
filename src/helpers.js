
export const getOffsetDate = (offset) => {
  const timestamp = new Date();
  timestamp.setDate(timestamp.getDate() - offset);
  var [month, date, year] = timestamp.toLocaleDateString('en-US',
    { timeZone: 'America/New_York' }
  ).split('/');
  return [year, month, date].join('-');
}

export const isValidDate = (dateString) => {
  var regEx = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateString.match(regEx)) return false;  // Invalid format
  var d = new Date(dateString);
  var dNum = d.getTime();
  if (!dNum && dNum !== 0) return false; // NaN value, Invalid date
  return d.toISOString().slice(0, 10) === dateString;
}

export const correctDate = (dateString) => {
  if (dateString.length === 4) {
    dateString += '-01-01';
  }
  if (dateString.length === 7) {
    dateString += '-01';
  }
  return dateString
}

export const getDayDiff = (startDate) => {
  const date1 = new Date(startDate);
  const date2 = new Date();
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}


export const toggleFav = (date, favourite, setFavourite, setShowFavMessage) => {
  if (favourite.includes(date)) {
    const newFavourite = favourite.filter((val) => val !== date);
    setFavourite(newFavourite);
    setShowFavMessage('Add to favourites');
  } else {
    const newFavourite = [date, ...favourite]
    setFavourite(newFavourite);
    setShowFavMessage('Remove from favourites');
  }
}

export const getFavMessage = (date, favourite) => {
  return favourite.includes(date) ?
    'Remove from favourites' : 'Add to favourites';
}