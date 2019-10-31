call npm run build
xcopy build\* ..\react\ /O /Y /E /X /H /K
git add -A
git commit -am "%1"
git push origin master
