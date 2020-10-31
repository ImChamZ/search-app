const express = require("express");
const organizationData = require("../dummy/organizationData");
const ticketDataActions = require("../tickets/actions");
const userDataActions = require("../users/actions");
const router = express.Router();

router.get("/", (req, res) => {
    setTimeout(() => {
        res.send(organizationData);
    }, 1000);
});

router.get("/list", (req, res) => {
    setTimeout(() => {
        const searchResult = getFinalResultSet(organizationData);
        res.send(searchResult);
    }, 1000);
});

router.post("/search", function (req, res) {
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
    const { searchTerm, searchText = "" } = searchCriteria;
    console.log(searchTerm + " - " + searchText);
    if (!searchTerm && !searchText) {
        return organizationData;
    }
    if (!searchTerm && searchText) {
        return organizationData.filter((user) =>
            Object.values(user).includes(searchText.trim())
        );
    }
    if (searchTerm) {
        return organizationData.filter(
            (user) => user[searchTerm] === searchText.trim()
        );
    }
}

module.exports = router;
