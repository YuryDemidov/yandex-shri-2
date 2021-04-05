import isCommitInSprint from '../partial/isCommitInSprint';

export default function prepareChartData(currentSprint, sprints, commits, preparedLeaders) {
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
      value: `${totalCommits}`
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
