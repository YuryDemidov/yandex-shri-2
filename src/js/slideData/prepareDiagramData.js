import updateSprintCommitsInfo from '../partial/updateSprintCommitsInfo';
import declOfNum from '../utils/declOfNum';
import declCommitsPhrase from '../partial/declCommitsPhrase';
import isCommitInSprint from '../partial/isCommitInSprint';

export default function prepareDiagramData(currentSprint, previousSprint, commits, summarySizes) {
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
