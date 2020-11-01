const express = require('express');
const organizationData = require('../dummy/organizationData');
const ticketDataActions = require('../tickets/actions');
const userDataActions = require('../users/actions');
const SearchFunc = require('../Common/Search');
const router = express.Router();

router.get('/', (req, res) => {
  setTimeout(() => {
    res.send(organizationData);
  }, 1000);
});

router.get('/list', (req, res) => {
  setTimeout(() => {
    const searchResult = getFinalResultSet(organizationData);
    res.send(searchResult);
  }, 1000);
});

router.post('/search', function (req, res) {
  const searchResult = search(req.body);
  const searchResultData = getFinalResultSet(searchResult);
  setTimeout(() => {
    res.send(searchResultData);
  }, 1000);
});

function getFinalResultSet(organizationList) {
  const resultList = organizationList.map((organization) => {
    const { _id } = organization;
    organization.user_names = userDataActions.getOrganizationUserList(_id);
    organization.ticket_subject_list = ticketDataActions.getOrganizationSubjectList(
      _id
    );
    return organization;
  });
  return resultList;
}

function search(searchCriteria) {
  const { searchTerm, searchText = '' } = searchCriteria;
  if (!searchTerm && !searchText) {
    return organizationData;
  }
  if (!searchTerm && searchText) {
    return SearchFunc.searchViaText(searchText, organizationData);
  }
  if (searchTerm) {
    return SearchFunc.searchViaTerm(searchText, searchTerm, organizationData);
  }
}

module.exports = router;
