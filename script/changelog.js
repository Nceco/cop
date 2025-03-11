const {execSync} = require('child_process');
const fs = require('fs');
const path = require('path');

function execChangelog() {
  execSync('yarn run conventional-changelog -p custom-config -i CHANGELOG.md -o CHANGELOG.md  -s -r 0 -n ./option.js', {stdio: 'inherit'});
}

function change2LF() {
  // 读取原始文件内容并转换换行符格式为LF
  const logPath = path.resolve(__dirname, "../CHANGELOG.md");
  fs.readFile(logPath, {encoding: 'utf8'}, (err, data) => {
    if (err) throw err;

    const lfData = data.replace(/(\r\n|\r)/gm, '\n'); // 将CRLF或CR换成LF

    // 将转换后的数据写入到目标文件
    fs.writeFileSync(logPath, lfData);
  });
}

function main() {
  execChangelog();
  change2LF();
}

main();
