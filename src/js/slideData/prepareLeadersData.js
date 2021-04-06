import isCommitInSprint from '../partial/isCommitInSprint';

export default function prepareLeadersData(sprint, users, usersCommits) {
  let preparedUsers = users.map(user => {
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

  preparedUsers = preparedUsers
    .sort((user1, user2) => {
      return parseInt(user2.valueText) - parseInt(user1.valueText) || parseInt(user1.id) - parseInt(user2.id);
    })
    .filter(user => user.valueText !== `0`);

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
