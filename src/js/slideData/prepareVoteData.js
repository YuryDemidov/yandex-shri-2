import declOfNum from '../utils/declOfNum';

export default function prepareVoteData(sprint, users, usersComments) {
  const preparedUsers = users.map(user => {
    const likesQuantity = usersComments[user.id].reduce((likes, comment) => {
      if (sprint.startAt <= comment.createdAt && comment.createdAt < sprint.finishAt) {
        likes += comment.likes.length;
      }
      return likes;
    }, 0);

    return {
      id: user.id,
      name: user.name,
      avatar: user.avatar,
      valueText: `${likesQuantity} ${declOfNum(likesQuantity, [`голос`, `голоса`, `голосов`])}`
    }
  });

  preparedUsers.sort((a, b) => parseInt(b.valueText) - parseInt(a.valueText));

  return {
    alias: `vote`,
    data: {
      title: `Самый 🔎 внимательный разработчик`,
      subtitle: sprint.name,
      emoji: `🔎`,
      users: preparedUsers
    }
  };
}
