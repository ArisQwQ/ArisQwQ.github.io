# 项目长期记忆（ArisBlog）

## 协作偏好

- **未经明确同意不要直接改文件**。提「为什么/在哪里」这类问题时，只做排查和说明，改不改、怎么改先给方案让用户确认。2026-11-13 因直接修改 `data/site.ts` 与 `src/theme/Footer/index.tsx` 被用户制止，已还原。
- **新增文件也算「改动」**。2026-11-14 为 GitHub Pages 预置 `deploy.yml`、`static/.nojekyll` 并改 `organizationName/projectName`，被要求全部撤销。涉及部署配置时只输出内容与步骤，由用户自己创建。

## 项目知识

- 页脚备案信息（ICP + 公网安备）由自定义主题覆盖组件 `src/theme/Footer/index.tsx` 直接渲染，数据源在 `data/site.ts` 的 `siteInfo.beian`。
- `docusaurus.config.ts` 中的 `footer` 只配了 `style: 'dark'`；`feedOptions.copyright` 只影响 RSS/Atom 输出，与页脚无关。
- `i18n/en/docusaurus-theme-classic/footer.json` 里仍留有旧备案号（-2），当前自定义 Footer 不读该翻译，属废弃残留。
- 本机 `/tmp` 是 10MB tmpfs，不要往 `/tmp` 里 mv/拷贝大目录；Docusaurus `build` 前会清理 `build/`，在沙箱里大批量删除会被拦截，可用 `--out-dir` 输出到新目录绕开。
