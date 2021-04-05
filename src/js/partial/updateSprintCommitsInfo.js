export default function updateSprintCommitsInfo(sprint, sprintCommitsInfo, summarySizes, commit) {
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
