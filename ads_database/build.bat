call npm run build 2<&1 || exit /b 1
xcopy build\* ..\react\ /O /Y /E /X /H /K
git add -A
git commit -am "%1"
git push origin master
