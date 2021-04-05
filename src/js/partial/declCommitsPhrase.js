import declOfNum from '../utils/declOfNum';

export default function declCommitsPhrase(number) {
  return `${number} ${declOfNum(number, [
    `коммит`, `коммита`, `коммитов`
  ])}`
}
