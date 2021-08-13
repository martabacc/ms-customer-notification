.PHONY: all
all: testNotification

.PHONY: testNotification
testNotification:
	yarn testNotification
	yarn lint
