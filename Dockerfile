# 공식 Node.js 이미지 사용
FROM node:16

# 컨테이너의 작업 디렉토리 설정
WORKDIR /app

# package.json 및 package-lock.json 복사
COPY package*.json ./

# 종속성 설치
RUN npm install

# 애플리케이션 코드 복사
COPY . .

# 애플리케이션 포트 노출 (예: 3000번 포트)
EXPOSE 3000

# 앱 시작 명령어
CMD ["npm", "start"]
