const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
const prettierConfig = require('eslint-config-prettier'); // 1. Prettier 설정 가져오기

module.exports = defineConfig([
  ...expoConfig,

  // 2. Prettier와의 충돌 방지 설정을 **배열의 맨 마지막에** 추가합니다.
  //    이렇게 해야 expoConfig의 규칙을 덮어쓸 수 있습니다.
  prettierConfig,

  {
    rules: {
      // 예: 사용하지 않는 변수가 있을 경우 에러 대신 경고를 표시합니다.
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' },
      ],
      // 기타 필요한 규칙을 여기에 추가하세요.
    },
  },

  // 4. 무시할 파일이나 폴더를 설정합니다.
  {
    ignores: ['dist/*', '.expo/*', 'node_modules/*'],
  },
]);
