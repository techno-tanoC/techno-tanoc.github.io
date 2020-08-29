publish:
	yarn build
	git add docs
	git commit -m "build"
	git subtree push --prefix docs origin build
