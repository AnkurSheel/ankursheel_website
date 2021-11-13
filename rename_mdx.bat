REN usage :  rename_mdx.bat "content\posts\2013" "src\ankursheel_website\input\posts\2013\"

xcopy /s %1 %2
rd /s /q %1

pushd %2


for /r %%F in (*.mdx) do @for %%A in ("%%F\..") do ren "%%F" "%%~nxA.mdx"

@REM REM pushd posts
@REM for /r %%F in (*.mdx) do ren "%%F" "///////////*.md"
@REM popd

@REM pushd pages
for /r %%F in (*.mdx) do ren "%%F" "*.md"
popd

REM REM for /r %F in (*.md1) do ren "%F" "*.md"

popd
