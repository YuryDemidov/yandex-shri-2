import declOfNum from '../utils/declOfNum';

export default function declCommitsPhrase(number) {
  return `${number >= 0 ? `+` : ``}${number} ${declOfNum(number, [
    `коммит`, `коммита`, `коммитов`
  ])}`
}
