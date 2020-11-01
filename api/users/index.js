const express = require('express');
const SearchFunc = require('../Common/Search');
const userData = require('../dummy/userData');
const organizationDataActions = require('../organizations/actions');
const ticketDataActions = require('../tickets/actions');
const router = express.Router();

router.get('/', (req, res) => {
  setTimeout(() => {
    res.send('user-api');
  }, 1000);
});

router.get('/list', (req, res) => {
  setTimeout(() => {
    const searchResult = getFinalResultSet(userData);
    res.send(searchResult);
  }, 500);
});

router.post('/search', function (req, res) {
  const searchResult = search(req.body);
  const searchResultData = getFinalResultSet(searchResult);
  setTimeout(() => {
    res.send(searchResultData);
  }, 1000);
});

function getFinalResultSet(userList) {
  const userResultList = userList.map((user) => {
    const { _id, organization_id } = user;
    user.assignee_tickets = ticketDataActions.getAssigneeTicketSubjectList(_id);
    user.submitted_tickets = ticketDataActions.getSubmittedTicketSubjectList(
      _id
    );
    user.organization_name = organizationDataActions.getNameByUserID(
      organization_id
    );
    return user;
  });
  return userResultList;
}

function search(searchCriteria) {
  const { searchTerm, searchText = '' } = searchCriteria;
  if (!searchTerm && !searchText) {
    return userData;
  }
  if (!searchTerm && searchText) {
    return SearchFunc.searchViaText(searchText, userData);
  }
  if (searchTerm) {
    return SearchFunc.searchViaTerm(searchText, searchTerm, userData);
  }
}

module.exports = router;
