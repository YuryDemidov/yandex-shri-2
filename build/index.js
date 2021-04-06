function declOfNum(number, words) {
  number = Math.abs(number);
  return words[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? number % 10 : 5]];
}

function declCommitsPhrase(number) {
  return `${number > 0 ? `+` : ``}${number} ${declOfNum(number, [
    `коммит`, `коммита`, `коммитов`
  ])}`
}

function isCommitInSprint(sprint, commit) {
  return sprint.startAt <= commit.timestamp && commit.timestamp < sprint.finishAt
}

function updateSprintCommitsInfo(sprint, sprintCommitsInfo, summarySizes, commit) {
  let commitSize = 0;

  for (let i = 0; i < commit.summaries.length; i++) {
    const summaryId = commit.summaries[i].id || commit.summaries[i];
    commitSize += summarySizes[summaryId];
  }

  if (commitSize > 1000) {
    sprintCommitsInfo['>1000']++;
  } else if (commitSize > 500) {
    sprintCommitsInfo['501-1000']++;
  } else if (commitSize > 100) {
    sprintCommitsInfo['101-500']++;
  } else {
    sprintCommitsInfo['1-100']++;
  }

  sprintCommitsInfo.total++;
}

function prepareVoteData(sprint, users, usersComments) {
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

function prepareLeadersData(sprint, users, usersCommits) {
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

  preparedUsers.sort((user1, user2) => {
    return parseInt(user2.valueText) - parseInt(user1.valueText) || parseInt(user1.id) - parseInt(user2.id);
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

function prepareChartData(currentSprint, sprints, commits, preparedLeaders) {
  const sprintsCommits = sprints.map(sprint => {
    const totalCommits = commits.reduce((quantity, commit) => {
      if (isCommitInSprint(sprint, commit)) {
        quantity++;
      }
      return quantity;
    }, 0);

    const sprintData = {
      title: `${sprint.id}`,
      hint: sprint.name,
      value: totalCommits
    }

    if (sprint === currentSprint) {
      sprintData.active = true;
    }

    return sprintData;
  });

  sprintsCommits.sort((a, b) => a.title - b.title);

  return {
    alias: `chart`,
    data: {
      title: `Коммиты`,
      subtitle: currentSprint.name,
      users: preparedLeaders,
      values: sprintsCommits
    }
  };
}

function prepareDiagramData(currentSprint, previousSprint, commits, summarySizes) {
  const currentSprintCommitsInfo = {
    'total': 0,
    '>1000': 0,
    '501-1000': 0,
    '101-500': 0,
    '1-100': 0
  };
  const previousSprintCommitsInfo = {
    'total': 0,
    '>1000': 0,
    '501-1000': 0,
    '101-500': 0,
    '1-100': 0
  };

  for (let i = 0; i < commits.length; i++) {
    const commit = commits[i];

    if (isCommitInSprint(currentSprint, commit)) {
      updateSprintCommitsInfo(currentSprint, currentSprintCommitsInfo, summarySizes, commit);
    } else if (previousSprint && isCommitInSprint(previousSprint, commit)) {
      updateSprintCommitsInfo(previousSprint, previousSprintCommitsInfo, summarySizes, commit);
    }
  }

  const difference = currentSprintCommitsInfo.total - previousSprintCommitsInfo.total;

  return {
    alias: `diagram`,
    data: {
      title: `Размер коммитов`,
      subtitle: currentSprint.name,
      totalText: `${currentSprintCommitsInfo.total} ${declOfNum(currentSprintCommitsInfo.total, [
        `коммит`, `коммита`, `коммитов`
      ])}`,
      differenceText: `${difference >= 0 ? `+${difference}` : difference} с прошлого спринта`,
      categories: [
        {
          title: `> 1001 строки`,
          valueText: declCommitsPhrase(currentSprintCommitsInfo[`>1000`]),
          differenceText: declCommitsPhrase(currentSprintCommitsInfo[`>1000`] - previousSprintCommitsInfo[`>1000`], true)
        },
        {
          title: `501 — 1000 строк`,
          valueText: declCommitsPhrase(currentSprintCommitsInfo[`501-1000`]),
          differenceText: declCommitsPhrase(currentSprintCommitsInfo[`501-1000`] - previousSprintCommitsInfo[`501-1000`], true)
        },
        {
          title: `101 — 500 строк`,
          valueText: declCommitsPhrase(currentSprintCommitsInfo[`101-500`]),
          differenceText: declCommitsPhrase(currentSprintCommitsInfo[`101-500`] - previousSprintCommitsInfo[`101-500`], true)
        },
        {
          title: `1 — 100 строк`,
          valueText: declCommitsPhrase(currentSprintCommitsInfo[`1-100`]),
          differenceText: declCommitsPhrase(currentSprintCommitsInfo[`1-100`] - previousSprintCommitsInfo[`1-100`], true)
        }
      ]
    }
  };
}

function prepareActivityData(sprint, commits) {
  const dataMatrix = {
    sun: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    mon: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    tue: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    wed: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    thu: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    fri: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    sat: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  }

  for (let i = 0; i < commits.length; i++) {
    const commit = commits[i];

    if (isCommitInSprint(sprint, commit)) {
      const commitDate = new Date(commit.timestamp);
      const day = commitDate.toString().split(` `)[0].toLowerCase();
      const hour = commitDate.getHours();

      dataMatrix[day][hour]++;
    }
  }

  return {
    alias: `activity`,
    data: {
      title: `Коммиты`,
      subtitle: sprint.name,
      data: dataMatrix
    }
  };
}

function prepareData(data, { sprintId }) {
  const users = [];
  const usersComments = {};
  const usersCommits = {};
  const sprints = [];
  const commits = [];
  const summarySizes = {};
  let currentSprint;
  let previousSprint;

  for (let i = 0; i < data.length; i++) {
    const entity = data[i];

    if (entity.type === `Sprint`) {
      sprints.push(entity);

      if (entity.id === sprintId - 1) {
        previousSprint = entity;
      }
      if (entity.id === sprintId) {
        currentSprint = entity;
      }
    }

    if (entity.type === `User`) {
      users.push(entity);
    }

    if (entity.type === `Comment`) {
      const comment = entity;
      const commentAuthorId = comment.author.id || comment.author;

      usersComments[commentAuthorId] = usersComments[commentAuthorId] || [];
      usersComments[commentAuthorId].push(comment);
    }

    if (entity.type === `Commit`) {
      const commit = entity;
      const commitAuthorId = commit.author.id || commit.author;

      usersCommits[commitAuthorId] = usersCommits[commitAuthorId] || [];
      usersCommits[commitAuthorId].push(commit);
      commits.push(commit);
    }

    if (entity.type === `Summary`) {
      const summary = entity;
      summarySizes[summary.id] = summary.added + summary.removed;
    }
  }

  const preparedLeaders = prepareLeadersData(currentSprint, users, usersCommits);

  return [
    prepareVoteData(currentSprint, users, usersComments),
    preparedLeaders,
    prepareChartData(currentSprint, sprints, commits, preparedLeaders.data.users),
    prepareDiagramData(currentSprint, previousSprint, commits, summarySizes),
    prepareActivityData(currentSprint, commits)
  ];
}

module.exports = { prepareData };
