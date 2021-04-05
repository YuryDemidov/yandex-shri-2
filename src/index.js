import getData from './js/api/getData';
import prepareActivityData from './js/slideData/prepareActivityData';
import prepareDiagramData from './js/slideData/prepareDiagramData';
import prepareChartData from './js/slideData/prepareChartData';
import prepareLeadersData from './js/slideData/prepareLeadersData';
import prepareVoteData from './js/slideData/prepareVoteData';

const output = document.querySelector(`#output`);

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

function init() {
  getData()
    .then(data => {
      output.innerHTML = JSON.stringify(prepareData(data, { sprintId: 991 }), null, 4)
    });
}

init();
