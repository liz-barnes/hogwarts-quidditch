import studentData from './../../data/studentData';

const createHouseButton = (house) => {
  const domString = `
    <button id="${house.id}" class="house-button house-button-${house.name.toLowerCase()}">
      <div>${house.name}</div>
      <img src="${house.picture}">
    </button>`;

  return domString;
};
