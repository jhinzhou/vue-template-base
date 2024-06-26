const msgPath = process.env.GIT_PARAMS
const msg = require('node:fs').readFileSync(msgPath, 'utf-8').trim()
const chalk = require('chalk')

const commitRE = /^(v\d+\.\d+\.\d+(-(alpha|beta|rc.\d+))?$)|((revert: )?(feat|fix|docs|style|refactor|perf|test|workflow|ci|chore|types|build)(\(.+\))?: .{1,50})/

if (!commitRE.test(msg)) {
  console.error(
    `  ${chalk.bgRed.white(' ERROR ')} ${chalk.red(`invalid commit message format.`)}\n\n${
    chalk.red(`  Proper commit message format is required for automated changelog generation. Examples:\n\n`)
    }    ${chalk.green(`feat(compiler): add 'comments' option`)}\n`
    + `    ${chalk.green(`fix(v-model): handle events on blur (close #28)`)}\n\n${
    chalk.red(`  See .github/COMMIT_CONVENTION.md for more details.\n`)
    }${chalk.red(`  You can also use ${chalk.cyan(`npm run commit`)} to interactively generate a commit message.\n`)}`,
  )
  process.exit(1)
}
