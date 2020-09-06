publish:
	yarn build:production
	git add docs
	git commit -m "build"
	git subtree push --prefix docs origin build
