const SearchFunc = {
  searchViaText(searchText, dataSet) {
    return dataSet.filter((data) => {
      const allValue = Object.values(data).map((property) =>
        Array.isArray(property) ? property.join(', ') : property
      );
      const str = allValue.join(', ');
      return str.includes(searchText.trim());
    });
  },

  searchViaTerm(searchText, searchTerm, dataSet) {
    return dataSet.filter((data) => {
      const searchData = data[searchTerm];
      if (searchData) {
        const allValue = Array.isArray(searchData)
          ? searchData.join(', ')
          : searchData;
        try {
          return allValue.includes(searchText.trim());
        } catch (err) {
          return allValue == searchText.trim();
        }
      }
    });
  },
};

module.exports = SearchFunc;
