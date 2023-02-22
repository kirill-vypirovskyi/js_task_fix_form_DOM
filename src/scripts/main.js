'use strict';

const inputs = document.querySelectorAll('.field-text');

const capitalize = (title) => {
  return title.charAt(0).toUpperCase() + title.slice(1);
};

const normalize = (title) => {
  return title.replace('Name', ' name');
};

inputs.forEach(input => {
  const label = document.createElement('label');
  const normalizedName = normalize(capitalize(input.name));

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = normalizedName;

  input.before(label);
  input.placeholder = normalizedName;
});
