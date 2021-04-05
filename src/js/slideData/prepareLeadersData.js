import isCommitInSprint from '../partial/isCommitInSprint';

export default function prepareLeadersData(sprint, users, usersCommits) {
  const preparedUsers = users.map(user => {
    const userCommitsNumber = usersCommits[user.id].reduce((quantity, commit) => {
      if (isCommitInSprint(sprint, commit)) {
        quantity++;
      }
      return quantity;
    }, 0);

    return {
      id: user.id,
      name: user.name,
      avatar: user.avatar,
      valueText: `${userCommitsNumber}`
    }
  });

  preparedUsers.sort((a, b) => {
    const difference = parseInt(b.valueText) - parseInt(a.valueText);
    if (difference) {
      return difference;
    } else {
      return parseInt(a.id) - parseInt(b.id);
    }
  });

  return {
    alias: `leaders`,
    data: {
      title: `Больше всего коммитов`,
      subtitle: sprint.name,
      emoji: `👑`,
      users: preparedUsers
    }
  };
}
