// "예시 불러오기" 버튼용 예시 입력. 예시/기사목록_예시.csv와 같은 내용이다.
// (index.html을 더블클릭해 열면 브라우저가 다른 파일을 읽지 못해서 이렇게 넣어 둔다.)

const SAMPLE_CSV = `date,title,url
2026-01-06,"창원시, 2026년 제조 AI 전환 원년으로 선언",https://www.newspim.com/news/view/20260106000875
2026-01-07,"'기계·방산 메카' 창원, 제조 AI 날개 단다",https://www.hankyung.com/article/2026010776011
2026-02-02,‘창원 제2국가산단’ 재심의 연내 통과 안간힘,https://v.daum.net/v/20260202213834327
2026-02-08,"국립창원대, 산업부와 손잡고 창원산단 제조 AI 전환 가속",https://m.seoul.co.kr/news/2026/02/08/20260208500088
2026-02-26,'제조 AX 혁신' 첫 무대는 창원국가산단,https://www.hankyung.com/article/2026022676251
2026-02-26,'산업단지 AX 분과' 출범…지역 주도 산단 AI 전환 본격 추진,https://www.korea.kr/news/policyNewsView.do?newsId=148960042
2026-02-26,"국립창원대, 경남 유일 ‘AI 인재양성 부트캠프’ 사업 선정",https://www.dhnews.co.kr/news/view/1065597688817640
2026-04-07,"국가AI전략위, 창원 제조현장 AX 현장 점검",https://www.ddaily.co.kr/page/view/2026040715180946823
2026-05-11,2026년 창원시 스타트업 액셀러레이팅 지원사업,https://startuprecipe.co.kr/announcement/5816477
2026-05-12,“AI가 이끄는 제조 혁신 현장 온다” KIMEX 2026...창원서 19일 개막,https://www.hellot.net/mobile/article.html?no=112532
2026-05-21,"경남도, 창원국가산단 ‘제조 인공지능 전환(AX) 글로벌 혁신거점’ 도약 가속화",https://www.gdtimes.kr/1126202
2026-05-27,창원국가산단 '미래형 첨단산단' 전환 구조고도화,https://www.gnnews.co.kr/news/articleView.html?idxno=637776
2026-05-28,AI 입는 산업단지… 제조업 AX 전초기지로 '탈바꿈',https://www.mt.co.kr/economy/2026/05/28/2026052719371751624
2026-06-22,"강기윤 당선인, 진해권 현안사업장 점검…“효용성 있는 개발방안 마련해야”",https://www.kukinews.com/article/view/kuk202606220189
2026-07-25,"국립창원대 앵커사업단, 경남 제조 M.AX 포럼 개최",https://www.metroseoul.co.kr/article/20260725500059
2026-08-05,"[창원 24시] 창원시, 제조AI 기반 구축으로 산업단지 혁신 본격화",https://www.sisajournal.com/news/articleView.html?idxno=382460
2026-08-05,"창원시, 제조AI·SMR 등 미래산업 육성 속도 낸다",https://www.sidae.com/article/2026080511392443178
2026-08-20,창원시 시내버스 준공영제 갱신,https://news.knn.co.kr/news/article/191460
2026-09-17,"제조업 메카 창원, 인공지능·방산·소형원전으로 성장판 넓힌다",https://www.hankyung.com/article/2026091703281
2026-10-01,"창원 국가산단, '방산 특화단지' 최초 지정…5조원대 항공엔진 사업 '탄력'",https://www.pointe.co.kr/news/articleView.html?idxno=85399
2026-10-18,창원을 SMR 특구로…미래 50년 향한 ‘원전산업 육성; 청사진 제시,https://www.asiatoday.co.kr/kn/view.php?key=20261018010005515
2026-10-21,"강기윤 창원시장 ""AI 팩토리 공모 선정…창원산단 자율제조 공장 구축""",https://www.newspim.com/news/view/20261021000024
`;
