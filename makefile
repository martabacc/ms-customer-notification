.PHONY: all
all: test

.PHONY: test
test:
	yarn test
	yarn lint
