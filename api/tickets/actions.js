const ticketData = require("../dummy/ticketData");

const ticketDataActions = {
    getAssigneeTicketSubjectList(userId) {
        const result = [];
        ticketData.forEach(({ assignee_id, subject }) => {
            if (assignee_id === userId) {
                result.push(subject);
            }
        });
        return result;
    },

    getSubmittedTicketSubjectList(userId) {
        const result = [];
        ticketData.forEach(({ submitter_id, subject }) => {
            if (submitter_id === userId) {
                result.push(subject);
            }
        });
        return result;
    },

    getOrganizationSubjectList(organizationId) {
        const result = [];
        ticketData.forEach(({ organization_id, subject }) => {
            if (organization_id === organizationId) {
                result.push(subject);
            }
        });
        return result;
    },
};

module.exports = ticketDataActions;
