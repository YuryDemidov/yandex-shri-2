import declOfNum from '../utils/declOfNum';

export default function declCommitsPhrase(number, addSign) {
  return `${(number >= 0 && addSign) ? `+` : ``}${number} ${declOfNum(number, [
    `коммит`, `коммита`, `коммитов`
  ])}`
}
