deploy:
	yarn build
	git add docs
	git commit -m "build"
	git push origin master
