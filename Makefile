install: #определение зависимостей
	npm ci
lint: #запуск eslint
	npx eslint .
test:
	npm test
