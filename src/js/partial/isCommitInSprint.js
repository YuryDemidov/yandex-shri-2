export default function isCommitInSprint(sprint, commit) {
  return sprint.startAt <= commit.timestamp && commit.timestamp < sprint.finishAt
}
