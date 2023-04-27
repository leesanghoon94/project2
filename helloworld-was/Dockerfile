# Node.js 18 버전을 기반으로 하는 Alpine Linux 이미지를 사용
FROM node:18-alpine


# 도커 컨테이너 내부에서 작업 디렉토리
WORKDIR /usr/src/app

# 현재 디렉토리에서 "package.json"과 "package-lock.json" 파일을 도커 컨테이너 내부의 "/app" 디렉토리로 복사
COPY package*.json ./

# 컨테이너 내부에서 Node.js 애플리케이션의 의존성 패키지를 설치
RUN npm install --production

# /app 디렉토리로 모든 파일 복사
COPY . .

EXPOSE 3000
# 도커 내부 실행 기본 명령어
CMD ["npm", "run", "start"]