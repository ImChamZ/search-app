const express = require('express');
const SearchFunc = require('../Common/Search');
const ticketData = require('../dummy/ticketData');
const organizationDataActions = require('../organizations/actions');
const userDataActions = require('../users/actions');
const router = express.Router();

router.get('/', (req, res) => {
  setTimeout(() => {
    res.send(ticketData);
  }, 1000);
});

router.get('/list', (req, res) => {
  setTimeout(() => {
    const searchResult = getFinalResultSet(ticketData);
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

function getFinalResultSet(ticketList) {
  const ticketResultList = ticketList.map((user) => {
    const { assignee_id, submitter_id, organization_id } = user;
    user.assignee_name = userDataActions.getNameByID(assignee_id);
    user.submitter_name = userDataActions.getNameByID(submitter_id);
    user.organization_name = organizationDataActions.getNameByUserID(
      organization_id
    );
    return user;
  });
  return ticketResultList;
}

function search(searchCriteria) {
  const { searchTerm, searchText = '' } = searchCriteria;
  if (!searchTerm && !searchText) {
    return ticketData;
  }
  if (!searchTerm && searchText) {
    return SearchFunc.searchViaText(searchText, ticketData);
  }
  if (searchTerm) {
    return SearchFunc.searchViaTerm(searchText, searchTerm, ticketData);
  }
}

module.exports = router;
