ssh -i "jihwan-webpc.pem" ubuntu@ec2-18-224-2-101.us-east-2.compute.amazonaws.com

# ngnix install list
sudo apt-get install nginx + Y

# ngnix preferences
cd /etc/nginx

1. nginx.conf          설정 파일(text)
2. sites-available     설정 파일 저장소(폴더)
    ex) 변수 선언하여 내용 입력만 받은 상태 >> arr = [1,2,3,4,5,6,7,8,9]
3. sites-enabled       설정 파일 실행 파일(폴더)
    ex) arr[0] == 1
        arr[2] == 3
        arr[4] == 5
    윈도우로 치면 실행용 바로가기, symbolic link

sites-available > 설정 파일 생성
sites-enabled   > 바로가기 세팅
nginx 실행

mv == move  // 폴더 또는 파일 이동
cp == copy  // 폴더 또는 파일 복사

linux, unix, window,
무료   유료   유료
계정에 따른 설정이 잘 되어있음

             소유권 그룹
drwxr-xr-x  2 root root 4096 Jul 20 02:42 sites-available
drwxr-xr-x  2 root root 4096 Jul 20 02:42 sites-enabled
drwxr-xr-x  2 root root 4096 Jul 20 02:42 snippets
-rw-r--r--  1 root root  664 Feb  4  2019 uwsgi_params
-rw-r--r--  1 root root 3071 Feb  4  2019 win-utf\

cp -r [기존디렉토리] [변경할디렉토리]

sudo cp -r /etc/nginx/sites-available/ /etc/nginx/sites-available-backup

sudo cp -r /etc/nginx/sites-enabled/ /etc/nginx/sites-enabled-backup

/etc/nginx

cd sites-available
sudo rm default

cd..
/etc/nginx

cd sites-enabled
sudo rm default

cd ..
cd sites-available

sudo vi myapp.conf
//////////////////
server{
    listen 80;                          // 포트 실행 번호
    location / {                        // URI 주소 '/'
        root /home/ubuntu/www;          // 실행시킬 파일 경로
        index index.html index.htm;     // 실행시킬 파일 명
        try_files $uri /index.html;     // http://localhost:3000/about
    }
}
//////////////////

cp [기존디렉토리] [변경할디렉토리]
mv [기존디렉토리] [변경할디렉토리]
ln -s [기존디렉토리] [바로가기만들디렉토리]

/etc/nginx/sites-available
myapp.conf

./myapp.conf

sudo ln -s /etc/nginx/sites-available/myapp.conf /etc/nginx/sites-enabled/myapp.conf

/etc/nginx
cd /sites-enabled
ls -al
lrwxrwxrwx  1 root root   12 Jul 20 03:38 myapp.conf -> ./myapp.conf

sudo nginx -t // 확인

sudo systemctl start nginx  // 시작
sudo systemctl restart nginx  // 재시작
sudo systemctl stop ngnix   // 종료

cd ~
mkdir [폴더명] // 폴더 생성
cd www
vi index.html // 파일 생성, 내용 추가 후 닫기

sudo systemctl restart nginx
ps -ef | grep ngnix // 실행 확인, 윈도우 작업관리자

도메인 연결(구매)
가비아, 후이즈 등

front-local 터미널
npm install
npm run dev // https://localhost/8080 출력 확인
npm run build