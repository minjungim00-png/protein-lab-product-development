/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { TopBar } from './components/TopBar';
import { StatusChip } from './components/StatusChip';
import { HeroMedia } from './components/HeroMedia';
import { CardMedia } from './components/CardMedia';
import { VideoMedia } from './components/VideoMedia';
import { FadeInView } from './components/FadeInView';
import { ArrowRight } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF7F0] text-[#111E2E] flex flex-col font-sans selection:bg-[#287A4C]/15 selection:text-[#111E2E]">
      {/* 맨 위 띠 (화면 위에 붙음 · 바탕색 반투명 + 뒤 흐림) */}
      <TopBar />

      <main className="flex-1 flex flex-col w-full">
        {/* ① 히어로 — 첫 화면을 채운다(높이 100svh · 최소 720px) */}
        <section
          id="section-hero"
          className="relative w-full min-h-[100svh] lg:min-h-[720px] flex items-center pt-20 pb-12 sm:pb-16 border-b border-[#111E2E]/10"
        >
          <div className="max-w-[1240px] w-full mx-auto px-5 sm:px-8 lg:px-16 flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* 휴대폰: 그림 자리가 위 띠 바로 아래에서 시작, 데스크톱: 오른쪽 6열 (order-1 on mobile, order-2 on desktop) */}
            <div className="w-full lg:col-span-6 lg:order-2 flex justify-center lg:justify-end">
              <FadeInView delay={150} className="w-full max-w-[500px] lg:max-w-none">
                <HeroMedia initialSrc="/assets/aistudio/_____4_848a8764.jpg" />
              </FadeInView>
            </div>

            {/* 데스크톱: 글 6열, 휴대폰: 그림 아래 (order-2 on mobile, order-1 on desktop) */}
            <div className="w-full lg:col-span-6 lg:order-1 flex flex-col justify-center">
              <FadeInView delay={50} className="w-full title-container">
                {/* 작은 머리글 */}
                <p className="text-[14px] sm:text-[15px] font-semibold text-[#287A4C] tracking-wide mb-3 sm:mb-4">
                  팡마니 편의점 신제품 제안
                </p>

                {/* 큰 제목 = 기획안 0번 «제품 이름(가안)»에 적힌 이름 전체 */}
                <h1 className="hero-dynamic-title font-heading text-[#111E2E] mb-6 sm:mb-8">
                  팡마니 1500 미니 두부 프로틴 랩
                </h1>

                {/* 0번의 나머지 문장들 (표시 칩과 함께) */}
                <div className="flex flex-col gap-5 sm:gap-6 text-[16px] sm:text-[18px] leading-[1.75] text-[#111E2E] max-w-[560px]">
                  {/* 문장 1 */}
                  <div className="flex flex-col gap-2">
                    <p className="leading-relaxed">
                      10~20분 공강 시간, 삼각김밥 가격(1,500원)으로 강의실에서 냄새 없이 한 손으로 5분 만에 먹는 초가성비 고단백 또띠아 랩
                    </p>
                    <div className="self-start">
                      <StatusChip status="학생 판단" />
                    </div>
                  </div>

                  {/* 문장 2 */}
                  <div className="flex flex-col gap-2">
                    <p className="leading-relaxed text-[#111E2E]/90">
                      식빵 테두리 가공 로스율(15~20%)을 없앤 밀 또띠아에 구운 두부 스테이크 1조각, 에상스팜 신선 상추 1장, 논-스멜 참깨두유마요 겔 소스를 적용한 1,500원 초가성비 식사 대용 랩. 2단 이지필 푸시업 슬리브 포장으로 손에 묻지 않고 5분 내 완식 가능.
                    </p>
                    <div className="self-start">
                      <StatusChip status="학생 판단" />
                    </div>
                  </div>
                </div>
              </FadeInView>
            </div>

          </div>
        </section>

        {/* ② 개발 히스토리 — 기획안 1~6번을 기록처럼 */}
        <section
          id="section-history"
          className="w-full py-24 sm:py-32 lg:py-40 border-b border-[#111E2E]/10"
        >
          <div className="max-w-[1240px] w-full mx-auto px-5 sm:px-8 lg:px-16 flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* 데스크톱: 왼쪽 4열 = 화면에 붙어 따라오는 제목 영역 */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-28 flex flex-col">
                <FadeInView delay={50}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-heading text-[20px] text-[#287A4C]">②</span>
                    <h2 className="font-heading text-[32px] sm:text-[40px] lg:text-[56px] leading-[1.1] text-[#111E2E]">
                      개발 히스토리
                    </h2>
                  </div>
                  <p className="text-[15px] sm:text-[16px] text-[#536479] mb-8 font-medium">
                    무엇을 조사해서, 어떻게 정했나
                  </p>

                  {/* 표시 읽는 법 다섯 줄 */}
                  <div className="p-4 sm:p-5 bg-[#F3EFE6] rounded-[4px] border border-[#111E2E]/10 flex flex-col gap-2.5">
                    <p className="text-[12px] font-semibold tracking-wider text-[#111E2E]/70 uppercase mb-1">
                      표시 읽는 법
                    </p>
                    <div className="flex items-center gap-2 text-[13px] text-[#111E2E]">
                      <StatusChip status="사실" />
                      <span>= 출처를 직접 확인한 것</span>
                    </div>
                    <div className="flex items-center gap-2 text-[13px] text-[#111E2E]">
                      <StatusChip status="가설" />
                      <span>= 아직 확인하지 않은 생각</span>
                    </div>
                    <div className="flex items-center gap-2 text-[13px] text-[#111E2E]">
                      <StatusChip status="미확인" />
                      <span>= 확인하지 못한 것</span>
                    </div>
                    <div className="flex items-center gap-2 text-[13px] text-[#111E2E]">
                      <StatusChip status="가정" />
                      <span>= 계산하려고 정한 값</span>
                    </div>
                    <div className="flex items-center gap-2 text-[13px] text-[#111E2E]">
                      <StatusChip status="학생 판단" />
                      <span>= 내가 정한 것</span>
                    </div>
                  </div>
                </FadeInView>
              </div>
            </div>

            {/* 오른쪽 8열 = 1~6번 묶음이 위에서 아래로 · 왼쪽에 세로 가는 선 · 묶음마다 큰 번호 01~06 */}
            <div className="lg:col-span-8 relative flex flex-col gap-16 sm:gap-20">
              {/* 왼쪽 세로 가는 선 (데스크톱 및 태블릿) */}
              <div
                className="absolute left-[23px] sm:left-[27px] top-4 bottom-4 w-[1px] bg-[#111E2E]/15 hidden sm:block"
                aria-hidden="true"
              />

              {/* 01. 팡마니는 지금 */}
              <FadeInView delay={50} className="relative sm:pl-16 flex flex-col">
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="font-heading text-[28px] sm:text-[34px] text-[#287A4C] shrink-0 tabular-nums">
                    01
                  </span>
                  <h3 className="font-heading text-[20px] sm:text-[24px] text-[#111E2E]">
                    팡마니는 지금
                  </h3>
                </div>
                <p className="text-[13px] text-[#536479] mb-4">
                  가진 제품 · 납품처 · 만들 수 있는 것(팡마니 브리프 기준)
                </p>
                <div className="flex flex-col gap-4 text-[16px] sm:text-[18px] leading-[1.75] max-w-[64ch]">
                  <div className="flex flex-col gap-1.5">
                    <p>
                      밀 또띠아 및 에상스팜 신선 상추 1장 (팡마니-에상스팜 스마트팜 협약 자원) 협약 자원을 보유하고 있음
                    </p>
                    <div className="self-start">
                      <StatusChip status="사실" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <p>
                      팡마니 내부 제조 원가율(목표 원가 400~500원선), 실제 공장 또띠아 포켓 실링 설비 적용 가능 여부, 소비기한(72~96시간) 검증은 공장 및 원가 데이터 확인 전까지 판단 보류
                    </p>
                    <div className="self-start">
                      <StatusChip status="학생 판단" />
                    </div>
                  </div>
                </div>
              </FadeInView>

              {/* 02. 사람들의 바람 */}
              <FadeInView delay={70} className="relative sm:pl-16 flex flex-col">
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="font-heading text-[28px] sm:text-[34px] text-[#287A4C] shrink-0 tabular-nums">
                    02
                  </span>
                  <h3 className="font-heading text-[20px] sm:text-[24px] text-[#111E2E]">
                    사람들의 바람
                  </h3>
                </div>
                <p className="text-[13px] text-[#536479] mb-4">
                  누가, 언제, 지금 무엇으로 대신하고, 무엇을 바라는가
                </p>
                <div className="flex flex-col gap-4 text-[16px] sm:text-[18px] leading-[1.75] max-w-[64ch]">
                  <div className="flex flex-col gap-1.5">
                    <p>
                      대학생 간편식 이용의 핵심 이유는 '시간 부족'이며, 한 손 섭취·개봉성·소스 누수 방지·강의실 냄새 차단 등 간편성이 구매의 필수 요건임 / 출처: 3. 챗쥐피티 답 (대학생 대상 식품 구매 및 간편식 이용 조사 연구)
                    </p>
                    <div className="self-start">
                      <StatusChip status="사실" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <p>
                      학식 및 외식 가격 상승으로 대학생들의 편의점 식사 이용이 증가함에 따라 업계가 가성비 간편식 경쟁을 강화하고 있음 / 출처: 3. 챗쥐피티 답 (2026년 신학기 편의점 3사 할인 및 가성비 간편식 개편 기사)
                    </p>
                    <div className="self-start">
                      <StatusChip status="사실" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <p>
                      대학생이 수업 사이 10~20분의 짧은 시간 동안 식비를 아끼기 위해 삼각김밥, 단백질 쉐이크, 컵라면 등으로 대신하는데, 기존 편의점 샌드위치는 3,200~4,500원대로 비싸고 바스락거리는 소음, 자극적인 냄새, 소스 흐름, 탄수화물 위주 구성이 아쉽다 → 삼각김밥 가격(1,500원)에 5분 내 강의실에서 냄새 없이 한 손으로 깔끔하게 먹을 수 있는 고단백 또띠아 랩(구운 두부 + 에상스팜 상추 1장 + 저취성 겔 소스)이면 시간과 식비를 모두 아끼면서 안심하고 든든하게 끼니를 해결할 수 있게 달라진다.
                    </p>
                    <div className="self-start">
                      <StatusChip status="학생 판단" />
                    </div>
                  </div>
                </div>
              </FadeInView>

              {/* 03. 이미 나와 있는 제품 */}
              <FadeInView delay={90} className="relative sm:pl-16 flex flex-col">
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="font-heading text-[28px] sm:text-[34px] text-[#287A4C] shrink-0 tabular-nums">
                    03
                  </span>
                  <h3 className="font-heading text-[20px] sm:text-[24px] text-[#111E2E]">
                    이미 나와 있는 제품
                  </h3>
                </div>
                <p className="text-[13px] text-[#536479] mb-4">
                  소스에 있는 제품만 표로(이름 · 가격 · 중량 · 출처). 소스에 없으면 «확인 필요»
                </p>

                {/* 3번 표 (데스크톱: 가로 가는 선만, 휴대폰: 줄마다 카드) */}
                <div className="hidden sm:block w-full overflow-x-auto mb-5 border-y border-[#111E2E]/15">
                  <table className="w-full text-left text-[15px]">
                    <thead>
                      <tr className="border-b border-[#111E2E]/15 text-[13px] text-[#536479]">
                        <th className="py-2.5 pr-4 font-medium">이름</th>
                        <th className="py-2.5 px-4 font-medium tabular-nums">가격</th>
                        <th className="py-2.5 px-4 font-medium tabular-nums">중량</th>
                        <th className="py-2.5 px-4 font-medium">출처</th>
                        <th className="py-2.5 pl-4 font-medium text-right">상태</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#111E2E]/10">
                      <tr>
                        <td className="py-3 pr-4 font-medium text-[#111E2E]">삼각김밥 및 1,000원대 간편식</td>
                        <td className="py-3 px-4 tabular-nums text-[#111E2E]">1,300~1,500원</td>
                        <td className="py-3 px-4 tabular-nums text-[#111E2E]">100~110g</td>
                        <td className="py-3 px-4 text-[#536479]">편의점 3사 벤치마킹 데이터</td>
                        <td className="py-3 pl-4 text-right">
                          <StatusChip status="사실" />
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-[#111E2E]">기존 편의점 샌드위치</td>
                        <td className="py-3 px-4 tabular-nums text-[#111E2E]">3,200~4,500원</td>
                        <td className="py-3 px-4 tabular-nums text-[#111E2E]">126~164g</td>
                        <td className="py-3 px-4 text-[#536479]">편의점 3사 기사 및 시장 조사</td>
                        <td className="py-3 pl-4 text-right">
                          <StatusChip status="사실" />
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-[#111E2E]">반달형 또띠아 랩 규격</td>
                        <td className="py-3 px-4 tabular-nums text-[#111E2E]">1,500원</td>
                        <td className="py-3 px-4 tabular-nums text-[#111E2E]">약 75~85g</td>
                        <td className="py-3 px-4 text-[#536479]">1-팡마니-브리프.txt, 3. 챗쥐피티 답 (수업용 가정 및 예측)</td>
                        <td className="py-3 pl-4 text-right">
                          <StatusChip status="미확인" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* 휴대폰용 줄마다 카드 */}
                <div className="sm:hidden flex flex-col gap-3 mb-5">
                  <div className="p-4 bg-[#F3EFE6] rounded-[4px] border border-[#111E2E]/10 flex flex-col gap-2">
                    <div className="flex justify-between items-start gap-2">
                      <span className="font-semibold text-[#111E2E]">삼각김밥 및 1,000원대 간편식</span>
                      <StatusChip status="사실" />
                    </div>
                    <div className="text-[14px] text-[#536479] flex flex-col gap-1 tabular-nums">
                      <span>가격: 1,300~1,500원</span>
                      <span>중량: 100~110g</span>
                      <span>출처: 편의점 3사 벤치마킹 데이터</span>
                    </div>
                  </div>
                  <div className="p-4 bg-[#F3EFE6] rounded-[4px] border border-[#111E2E]/10 flex flex-col gap-2">
                    <div className="flex justify-between items-start gap-2">
                      <span className="font-semibold text-[#111E2E]">기존 편의점 샌드위치</span>
                      <StatusChip status="사실" />
                    </div>
                    <div className="text-[14px] text-[#536479] flex flex-col gap-1 tabular-nums">
                      <span>가격: 3,200~4,500원</span>
                      <span>중량: 126~164g</span>
                      <span>출처: 편의점 3사 기사 및 시장 조사</span>
                    </div>
                  </div>
                  <div className="p-4 bg-[#F3EFE6] rounded-[4px] border border-[#111E2E]/10 flex flex-col gap-2">
                    <div className="flex justify-between items-start gap-2">
                      <span className="font-semibold text-[#111E2E]">반달형 또띠아 랩 규격</span>
                      <StatusChip status="미확인" />
                    </div>
                    <div className="text-[14px] text-[#536479] flex flex-col gap-1 tabular-nums">
                      <span>가격: 1,500원</span>
                      <span>중량: 약 75~85g</span>
                      <span>출처: 1-팡마니-브리프.txt, 3. 챗쥐피티 답 (수업용 가정 및 예측)</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5 text-[16px] sm:text-[18px] leading-[1.75] max-w-[64ch]">
                  <p>
                    3,000~4,500원대 일반 샌드위치 비교 대신 삼각김밥(1,300~1,500원) 및 1,000원대 가성비 간편식 라인과의 직접 경쟁 스펙 벤치마킹 데이터로 근거 교체
                  </p>
                  <div className="self-start">
                    <StatusChip status="학생 판단" />
                  </div>
                </div>
              </FadeInView>

              {/* 04. 값과 원가 */}
              <FadeInView delay={110} className="relative sm:pl-16 flex flex-col">
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="font-heading text-[28px] sm:text-[34px] text-[#287A4C] shrink-0 tabular-nums">
                    04
                  </span>
                  <h3 className="font-heading text-[20px] sm:text-[24px] text-[#111E2E]">
                    값과 원가
                  </h3>
                </div>
                <p className="text-[13px] text-[#536479] mb-4">
                  이미 나와 있는 제품의 값에서 본 우리 판매가와 원가 예상
                </p>
                <div className="flex flex-col gap-4 text-[16px] sm:text-[18px] leading-[1.75] max-w-[64ch]">
                  <div className="flex flex-col gap-1.5">
                    <p className="tabular-nums">
                      삼각김밥 가격대(1,500원) 판매가 포지셔닝
                    </p>
                    <div className="self-start">
                      <StatusChip status="가정" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <p className="tabular-nums">
                      삼각김밥 가격대(1,500원)와 약 75~85g 반달형 또띠아 랩 규격이 대학생 소비자에게 최적의 초가성비 대안이라는 주장은 수업용 가설과 추정에 기반함 / 출처: 1-팡마니-브리프.txt, 3. 챗쥐피티 답 (수업용 가정 및 예측)
                    </p>
                    <div className="self-start">
                      <StatusChip status="미확인" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <p>
                      팡마니 내부 제조 원가율(목표 원가 400~500원선), 실제 공장 또띠아 포켓 실링 설비 적용 가능 여부, 소비기한(72~96시간) 검증은 공장 및 원가 데이터 확인 전까지 판단 보류
                    </p>
                    <div className="self-start">
                      <StatusChip status="확인 필요" />
                    </div>
                  </div>
                </div>
              </FadeInView>

              {/* 05. 그래서 이렇게 정했다 */}
              <FadeInView delay={130} className="relative sm:pl-16 flex flex-col">
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="font-heading text-[28px] sm:text-[34px] text-[#287A4C] shrink-0 tabular-nums">
                    05
                  </span>
                  <h3 className="font-heading text-[20px] sm:text-[24px] text-[#111E2E]">
                    그래서 이렇게 정했다
                  </h3>
                </div>
                <p className="text-[13px] text-[#536479] mb-4">
                  차별점과 가격 전략
                </p>
                <div className="flex flex-col gap-4 text-[16px] sm:text-[18px] leading-[1.75] max-w-[64ch]">
                  <div className="flex flex-col gap-1.5">
                    <p>
                      '수업 사이 10~20분' 섭취 상황 타깃 및 삼각김밥 가격대(1,500원) 초가성비 포지셔닝 유지
                    </p>
                    <div className="self-start">
                      <StatusChip status="학생 판단" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <p>
                      식빵 샌드위치 구조에서 벗어나 가공 로스율(15~20%)이 없는 밀 또띠아 + 구운 두부 스테이크 + 에상스팜 상추 1장 + 논-스멜(Non-Smell) 참깨두유마요 겔 소스 + 2단 이지필 푸시업 슬리브 포장으로 전면 개편
                    </p>
                    <div className="self-start">
                      <StatusChip status="학생 판단" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <p>
                      삼각김밥 가격(1,500원)에 5분 내 강의실에서 냄새 없이 한 손으로 깔끔하게 먹을 수 있는 고단백 또띠아 랩(구운 두부 + 에상스팜 상추 1장 + 저취성 겔 소스)이면 시간과 식비를 모두 아끼면서 안심하고 든든하게 끼니를 해결할 수 있게 달라진다.
                    </p>
                    <div className="self-start">
                      <StatusChip status="학생 판단" />
                    </div>
                  </div>
                </div>
              </FadeInView>

              {/* 06. 이 사람에게 이렇게 판다 */}
              <FadeInView delay={150} className="relative sm:pl-16 flex flex-col">
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="font-heading text-[28px] sm:text-[34px] text-[#287A4C] shrink-0 tabular-nums">
                    06
                  </span>
                  <h3 className="font-heading text-[20px] sm:text-[24px] text-[#111E2E]">
                    이 사람에게 이렇게 판다
                  </h3>
                </div>
                <p className="text-[13px] text-[#536479] mb-4">
                  누구에게, 어느 편의점에서, 언제
                </p>
                <div className="flex flex-col gap-4 text-[16px] sm:text-[18px] leading-[1.75] max-w-[64ch]">
                  <div className="flex flex-col gap-1.5">
                    <p>
                      누구에게: 대학생 (수업 사이 10~20분 공강 시간, 강의실 내 취식이 필요한 학생)
                    </p>
                    <div className="self-start">
                      <StatusChip status="학생 판단" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <p>
                      어느 편의점에서: 대학가 편의점 3사 매장
                    </p>
                    <div className="self-start">
                      <StatusChip status="가설" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <p>
                      언제: 학기 중 수업 사이 10~20분 짧은 공강 시간 (5분 내 완식)
                    </p>
                    <div className="self-start">
                      <StatusChip status="학생 판단" />
                    </div>
                  </div>
                </div>
              </FadeInView>

            </div>

          </div>
        </section>

        {/* ③ 마케팅 — 안내 «누구에게, 어떤 순서로 알리나» */}
        <section
          id="section-marketing"
          className="w-full py-24 sm:py-32 lg:py-40 border-b border-[#111E2E]/10"
        >
          <div className="max-w-[1240px] w-full mx-auto px-5 sm:px-8 lg:px-16 flex flex-col">
            
            {/* 구역 제목 */}
            <FadeInView delay={50} className="mb-10 sm:mb-12">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-heading text-[20px] text-[#287A4C]">③</span>
                <h2 className="font-heading text-[32px] sm:text-[40px] lg:text-[56px] leading-[1.1] text-[#111E2E]">
                  마케팅
                </h2>
              </div>
              <p className="text-[15px] sm:text-[16px] text-[#536479] font-medium">
                누구에게, 어떤 순서로 알리나
              </p>
            </FadeInView>

            {/* 카드 자리 3개 (4:5) + 단계 연결 화살표 선 */}
            <FadeInView delay={100} className="w-full mb-16 sm:mb-20">
              {/* 단계 이름 «관심 → 관계 → 전환» 가로 연결선 */}
              <div className="hidden sm:flex items-center justify-between mb-4 px-4 text-[15px] font-semibold text-[#111E2E]">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#287A4C]"></span>
                  관심
                </span>
                <div className="flex-1 mx-6 flex items-center justify-center">
                  <div className="h-[1px] w-full bg-[#111E2E]/20 relative">
                    <ArrowRight className="w-4 h-4 text-[#111E2E]/40 absolute right-0 top-1/2 -translate-y-1/2" />
                  </div>
                </div>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#287A4C]"></span>
                  관계
                </span>
                <div className="flex-1 mx-6 flex items-center justify-center">
                  <div className="h-[1px] w-full bg-[#111E2E]/20 relative">
                    <ArrowRight className="w-4 h-4 text-[#111E2E]/40 absolute right-0 top-1/2 -translate-y-1/2" />
                  </div>
                </div>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#287A4C]"></span>
                  전환
                </span>
              </div>

              {/* 카드 자리 3개 (데스크톱: 3열 격자, 휴대폰: 옆으로 넘기는 한 줄 · 한 장씩 멈춤) */}
              <div className="flex sm:grid sm:grid-cols-3 gap-6 overflow-x-auto sm:overflow-visible no-scrollbar snap-x snap-mandatory py-2 -mx-5 px-5 sm:mx-0 sm:px-0">
                <div className="w-[82vw] sm:w-auto shrink-0 snap-center">
                  <div className="sm:hidden text-[13px] font-semibold text-[#287A4C] mb-2">
                    01. 관심
                  </div>
                  <CardMedia
                    cardIndex={1}
                    stepName="관심"
                    initialSrc="/assets/aistudio/_____1_273d577a.jpg"
                    altText="마케팅 01. 관심 - 카드뉴스 1"
                  />
                </div>
                <div className="w-[82vw] sm:w-auto shrink-0 snap-center">
                  <div className="sm:hidden text-[13px] font-semibold text-[#287A4C] mb-2">
                    02. 관계
                  </div>
                  <CardMedia
                    cardIndex={2}
                    stepName="관계"
                    initialSrc="/assets/aistudio/_____3_9aba4387.jpg"
                    altText="마케팅 02. 관계 - 삼각김밥 옆, 새로운 선택지"
                  />
                </div>
                <div className="w-[82vw] sm:w-auto shrink-0 snap-center">
                  <div className="sm:hidden text-[13px] font-semibold text-[#287A4C] mb-2">
                    03. 전환
                  </div>
                  <CardMedia
                    cardIndex={3}
                    stepName="전환"
                    initialSrc="/assets/aistudio/_____4_848a8764.jpg"
                    altText="마케팅 03. 전환 - 영상사진 4"
                  />
                </div>
              </div>
            </FadeInView>

            {/* 그 아래 넓은 영상 자리 (16:9) 하나에 video1 */}
            <FadeInView delay={150} className="w-full max-w-[960px] mx-auto flex flex-col items-center">
              <VideoMedia src="/assets/aistudio/______________7790e524.mp4" />

              {/* 카드 · 영상 아래 작은 글 */}
              <p className="mt-8 text-center text-[13px] text-[#536479]">
                카드 문장과 그림 · 영상은 다음 주에 넣습니다
              </p>
            </FadeInView>

          </div>
        </section>

        {/* ④ 제품 개발 제안서 — 안내 «무엇을, 어떻게 만드나» */}
        <section
          id="section-proposal"
          className="w-full py-24 sm:py-32 lg:py-40 border-b border-[#111E2E]/10"
        >
          <div className="max-w-[1240px] w-full mx-auto px-5 sm:px-8 lg:px-16 flex flex-col">
            
            {/* 구역 제목 */}
            <FadeInView delay={50} className="mb-10 sm:mb-12">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-heading text-[20px] text-[#287A4C]">④</span>
                <h2 className="font-heading text-[32px] sm:text-[40px] lg:text-[56px] leading-[1.1] text-[#111E2E]">
                  제품 개발 제안서
                </h2>
              </div>
              <p className="text-[15px] sm:text-[16px] text-[#536479] font-medium">
                무엇을, 어떻게 만드나
              </p>
            </FadeInView>

            {/* 8줄 표 (데스크톱: 표 형태, 가로 가는 선만, 마우스 올린 줄 옅게 칠함 / 휴대폰: 카드 형태) */}
            <FadeInView delay={100} className="w-full mb-12">
              {/* 데스크톱 및 태블릿 표 */}
              <div className="hidden md:block w-full overflow-x-auto border-t border-[#111E2E]/20">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-[#111E2E]/15 text-[14px] text-[#536479]">
                      <th className="py-3 px-3 w-[70px] font-medium tabular-nums">번호</th>
                      <th className="py-3 px-4 w-[160px] font-medium">항목</th>
                      <th className="py-3 px-6 font-medium">내용</th>
                      <th className="py-3 px-4 w-[110px] text-right font-medium">상태</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#111E2E]/10 text-[16px] leading-relaxed">
                    {/* Row 1 */}
                    <tr className="transition-colors hover:bg-[#111E2E]/[0.025]">
                      <td className="py-4 px-3 align-top tabular-nums font-semibold text-[#111E2E]">1</td>
                      <td className="py-4 px-4 align-top font-semibold text-[#111E2E]">한 줄 콘셉트</td>
                      <td className="py-4 px-6 align-top text-[#111E2E]">
                        10~20분 공강 시간, 삼각김밥 가격(1,500원)으로 강의실에서 냄새 없이 한 손으로 5분 만에 먹는 초가성비 고단백 또띠아 랩
                      </td>
                      <td className="py-4 px-4 align-top text-right">
                        <StatusChip status="학생 판단" />
                      </td>
                    </tr>

                    {/* Row 2 */}
                    <tr className="transition-colors hover:bg-[#111E2E]/[0.025]">
                      <td className="py-4 px-3 align-top tabular-nums font-semibold text-[#111E2E]">2</td>
                      <td className="py-4 px-4 align-top font-semibold text-[#111E2E]">제품 콘셉트</td>
                      <td className="py-4 px-6 align-top text-[#111E2E]">
                        식빵 테두리 가공 로스율(15~20%)을 없앤 밀 또띠아에 구운 두부 스테이크 1조각, 에상스팜 신선 상추 1장, 논-스멜 참깨두유마요 겔 소스를 적용한 1,500원 초가성비 식사 대용 랩. 2단 이지필 푸시업 슬리브 포장으로 손에 묻지 않고 5분 내 완식 가능.
                      </td>
                      <td className="py-4 px-4 align-top text-right">
                        <StatusChip status="학생 판단" />
                      </td>
                    </tr>

                    {/* Row 3 */}
                    <tr className="transition-colors hover:bg-[#111E2E]/[0.025]">
                      <td className="py-4 px-3 align-top tabular-nums font-semibold text-[#111E2E]">3</td>
                      <td className="py-4 px-4 align-top font-semibold text-[#111E2E]">판매가 · 원가율</td>
                      <td className="py-4 px-6 align-top text-[#111E2E]">
                        1,500원 (판매가) · 팡마니 내부 제조 원가율(목표 원가 400~500원선), 실제 공장 또띠아 포켓 실링 설비 적용 가능 여부, 소비기한(72~96시간) 검증은 공장 및 원가 데이터 확인 전까지 판단 보류
                      </td>
                      <td className="py-4 px-4 align-top text-right flex flex-col items-end gap-1">
                        <StatusChip status="가정" />
                        <StatusChip status="확인 필요" />
                      </td>
                    </tr>

                    {/* Row 4 */}
                    <tr className="transition-colors hover:bg-[#111E2E]/[0.025]">
                      <td className="py-4 px-3 align-top tabular-nums font-semibold text-[#111E2E]">4</td>
                      <td className="py-4 px-4 align-top font-semibold text-[#111E2E]">중량 · 크기</td>
                      <td className="py-4 px-6 align-top text-[#111E2E]">
                        <ul className="list-none space-y-1">
                          <li>- 중량: 약 75~85g [수업용 가정] (반달형 또띠아 1개 단품 규격)</li>
                          <li>- 크기: 이동 중이나 강의실에서 한 손으로 잡고 5분 내 깔끔하게 먹을 수 있는 한 손 규격</li>
                        </ul>
                      </td>
                      <td className="py-4 px-4 align-top text-right">
                        <StatusChip status="가정" />
                      </td>
                    </tr>

                    {/* Row 5 */}
                    <tr className="transition-colors hover:bg-[#111E2E]/[0.025]">
                      <td className="py-4 px-3 align-top tabular-nums font-semibold text-[#111E2E]">5</td>
                      <td className="py-4 px-4 align-top font-semibold text-[#111E2E]">주재료 3~5개</td>
                      <td className="py-4 px-6 align-top text-[#111E2E]">
                        <ol className="list-none space-y-1">
                          <li>1. 밀 또띠아 (식빵 테두리 로스율 0% 및 부스러기/소음 차단)</li>
                          <li>2. 구운 단백질 두부 스테이크 1조각 (저렴한 원재료비 및 냉장 수분감 유지)</li>
                          <li>3. 에상스팜 신선 상추 1장 (팡마니-에상스팜 스마트팜 협약 자원)</li>
                          <li>4. 논-스멜(Non-Smell) 참깨두유마요 겔 소스 (강의실 냄새 차단 및 무누수 고점도 겔)</li>
                        </ol>
                      </td>
                      <td className="py-4 px-4 align-top text-right">
                        <StatusChip status="사실" />
                      </td>
                    </tr>

                    {/* Row 6 */}
                    <tr className="transition-colors hover:bg-[#111E2E]/[0.025]">
                      <td className="py-4 px-3 align-top tabular-nums font-semibold text-[#111E2E]">6</td>
                      <td className="py-4 px-4 align-top font-semibold text-[#111E2E]">가장 중요한 맛·식감</td>
                      <td className="py-4 px-6 align-top text-[#111E2E]">
                        <ul className="list-none space-y-1">
                          <li>- 맛: 마늘·양파·식초의 자극적인 냄새 없이 은은하고 고소한 참깨두유마요와 담백한 구운 두부, 신선한 상추의 깔끔한 조합</li>
                          <li>- 식감: 또띠아의 쫄깃함, 구운 두부의 촉촉하고 탄력 있는 식감, 상추의 아삭함이 어우러지며 흘러내리지 않는 점성 식감</li>
                        </ul>
                      </td>
                      <td className="py-4 px-4 align-top text-right">
                        <StatusChip status="학생 판단" />
                      </td>
                    </tr>

                    {/* Row 7 */}
                    <tr className="transition-colors hover:bg-[#111E2E]/[0.025]">
                      <td className="py-4 px-3 align-top tabular-nums font-semibold text-[#111E2E]">7</td>
                      <td className="py-4 px-4 align-top font-semibold text-[#111E2E]">포장 모양</td>
                      <td className="py-4 px-6 align-top text-[#111E2E]">
                        소스나 내용물이 흐르지 않도록 하단을 감싸주며, 2단 절취선(Tear Line)으로 손에 묻히지 않고 밀어 올려 5분 내 완식 가능한 '2단 이지필 푸시업 종이 지함 슬리브' 포장
                      </td>
                      <td className="py-4 px-4 align-top text-right">
                        <StatusChip status="학생 판단" />
                      </td>
                    </tr>

                    {/* Row 8 */}
                    <tr className="transition-colors hover:bg-[#111E2E]/[0.025]">
                      <td className="py-4 px-3 align-top tabular-nums font-semibold text-[#111E2E]">8</td>
                      <td className="py-4 px-4 align-top font-semibold text-[#111E2E]">과제에서 확인할 것</td>
                      <td className="py-4 px-6 align-top text-[#111E2E]">
                        팡마니 내부 제조 원가율(목표 원가 400~500원선), 실제 공장 또띠아 포켓 실링 설비 적용 가능 여부, 소비기한(72~96시간) 검증은 공장 및 원가 데이터 확인 전까지 판단 보류
                      </td>
                      <td className="py-4 px-4 align-top text-right">
                        <StatusChip status="확인 필요" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* 휴대폰 화면: 줄마다 카드 하나 */}
              <div className="md:hidden flex flex-col gap-4">
                {/* Mobile Card 1 */}
                <div className="p-4 bg-[#F3EFE6] rounded-[4px] border border-[#111E2E]/10 flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-[13px] text-[#536479]">01 · 한 줄 콘셉트</span>
                    <StatusChip status="학생 판단" />
                  </div>
                  <p className="text-[15px] leading-relaxed text-[#111E2E]">
                    10~20분 공강 시간, 삼각김밥 가격(1,500원)으로 강의실에서 냄새 없이 한 손으로 5분 만에 먹는 초가성비 고단백 또띠아 랩
                  </p>
                </div>

                {/* Mobile Card 2 */}
                <div className="p-4 bg-[#F3EFE6] rounded-[4px] border border-[#111E2E]/10 flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-[13px] text-[#536479]">02 · 제품 콘셉트</span>
                    <StatusChip status="학생 판단" />
                  </div>
                  <p className="text-[15px] leading-relaxed text-[#111E2E]">
                    식빵 테두리 가공 로스율(15~20%)을 없앤 밀 또띠아에 구운 두부 스테이크 1조각, 에상스팜 신선 상추 1장, 논-스멜 참깨두유마요 겔 소스를 적용한 1,500원 초가성비 식사 대용 랩. 2단 이지필 푸시업 슬리브 포장으로 손에 묻지 않고 5분 내 완식 가능.
                  </p>
                </div>

                {/* Mobile Card 3 */}
                <div className="p-4 bg-[#F3EFE6] rounded-[4px] border border-[#111E2E]/10 flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-[13px] text-[#536479]">03 · 판매가 · 원가율</span>
                    <div className="flex gap-1">
                      <StatusChip status="가정" />
                      <StatusChip status="확인 필요" />
                    </div>
                  </div>
                  <p className="text-[15px] leading-relaxed text-[#111E2E]">
                    1,500원 (판매가) · 팡마니 내부 제조 원가율(목표 원가 400~500원선), 실제 공장 또띠아 포켓 실링 설비 적용 가능 여부, 소비기한(72~96시간) 검증은 공장 및 원가 데이터 확인 전까지 판단 보류
                  </p>
                </div>

                {/* Mobile Card 4 */}
                <div className="p-4 bg-[#F3EFE6] rounded-[4px] border border-[#111E2E]/10 flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-[13px] text-[#536479]">04 · 중량 · 크기</span>
                    <StatusChip status="가정" />
                  </div>
                  <div className="text-[15px] leading-relaxed text-[#111E2E] flex flex-col gap-1">
                    <p>- 중량: 약 75~85g [수업용 가정] (반달형 또띠아 1개 단품 규격)</p>
                    <p>- 크기: 이동 중이나 강의실에서 한 손으로 잡고 5분 내 깔끔하게 먹을 수 있는 한 손 규격</p>
                  </div>
                </div>

                {/* Mobile Card 5 */}
                <div className="p-4 bg-[#F3EFE6] rounded-[4px] border border-[#111E2E]/10 flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-[13px] text-[#536479]">05 · 주재료 3~5개</span>
                    <StatusChip status="사실" />
                  </div>
                  <div className="text-[15px] leading-relaxed text-[#111E2E] flex flex-col gap-1">
                    <p>1. 밀 또띠아 (식빵 테두리 로스율 0% 및 부스러기/소음 차단)</p>
                    <p>2. 구운 단백질 두부 스테이크 1조각 (저렴한 원재료비 및 냉장 수분감 유지)</p>
                    <p>3. 에상스팜 신선 상추 1장 (팡마니-에상스팜 스마트팜 협약 자원)</p>
                    <p>4. 논-스멜(Non-Smell) 참깨두유마요 겔 소스 (강의실 냄새 차단 및 무누수 고점도 겔)</p>
                  </div>
                </div>

                {/* Mobile Card 6 */}
                <div className="p-4 bg-[#F3EFE6] rounded-[4px] border border-[#111E2E]/10 flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-[13px] text-[#536479]">06 · 가장 중요한 맛·식감</span>
                    <StatusChip status="학생 판단" />
                  </div>
                  <div className="text-[15px] leading-relaxed text-[#111E2E] flex flex-col gap-1">
                    <p>- 맛: 마늘·양파·식초의 자극적인 냄새 없이 은은하고 고소한 참깨두유마요와 담백한 구운 두부, 신선한 상추의 깔끔한 조합</p>
                    <p>- 식감: 또띠아의 쫄깃함, 구운 두부의 촉촉하고 탄력 있는 식감, 상추의 아삭함이 어우러지며 흘러내리지 않는 점성 식감</p>
                  </div>
                </div>

                {/* Mobile Card 7 */}
                <div className="p-4 bg-[#F3EFE6] rounded-[4px] border border-[#111E2E]/10 flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-[13px] text-[#536479]">07 · 포장 모양</span>
                    <StatusChip status="학생 판단" />
                  </div>
                  <p className="text-[15px] leading-relaxed text-[#111E2E]">
                    소스나 내용물이 흐르지 않도록 하단을 감싸주며, 2단 절취선(Tear Line)으로 손에 묻히지 않고 밀어 올려 5분 내 완식 가능한 '2단 이지필 푸시업 종이 지함 슬리브' 포장
                  </p>
                </div>

                {/* Mobile Card 8 */}
                <div className="p-4 bg-[#F3EFE6] rounded-[4px] border border-[#111E2E]/10 flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-[13px] text-[#536479]">08 · 과제에서 확인할 것</span>
                    <StatusChip status="확인 필요" />
                  </div>
                  <p className="text-[15px] leading-relaxed text-[#111E2E]">
                    팡마니 내부 제조 원가율(목표 원가 400~500원선), 실제 공장 또띠아 포켓 실링 설비 적용 가능 여부, 소비기한(72~96시간) 검증은 공장 및 원가 데이터 확인 전까지 판단 보류
                  </p>
                </div>
              </div>
            </FadeInView>

            {/* 과제에서 확인할 숫자 목록 (표 아래 나란한 작은 상자로) */}
            <FadeInView delay={120} className="w-full flex flex-col gap-3">
              <p className="text-[13px] font-semibold text-[#536479] tracking-wide">
                과제에서 확인할 숫자 및 보류 항목
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-[#F3EFE6] rounded-[4px] border border-[#111E2E]/10 flex flex-col justify-between gap-3">
                  <p className="text-[14px] text-[#111E2E] leading-relaxed">
                    삼각김밥 가격대(1,500원)와 약 75~85g 반달형 또띠아 랩 규격이 대학생 소비자에게 최적의 초가성비 대안이라는 주장은 수업용 가설과 추정에 기반함 / 출처: 1-팡마니-브리프.txt, 3. 챗쥐피티 답 (수업용 가정 및 예측)
                  </p>
                  <div className="self-start">
                    <StatusChip status="미확인" />
                  </div>
                </div>

                <div className="p-4 bg-[#F3EFE6] rounded-[4px] border border-[#111E2E]/10 flex flex-col justify-between gap-3">
                  <p className="text-[14px] text-[#111E2E] leading-relaxed">
                    팡마니 내부 제조 원가율(목표 원가 400~500원선), 실제 공장 또띠아 포켓 실링 설비 적용 가능 여부, 소비기한(72~96시간) 검증은 공장 및 원가 데이터 확인 전까지 판단 보류
                  </p>
                  <div className="self-start">
                    <StatusChip status="확인 필요" />
                  </div>
                </div>

                <div className="p-4 bg-[#F3EFE6] rounded-[4px] border border-[#111E2E]/10 flex flex-col justify-between gap-3">
                  <p className="text-[14px] text-[#111E2E] leading-relaxed">
                    식빵 테두리 가공 로스율(15~20%) 절감 및 또띠아 포켓 실링 설비 적용 검증
                  </p>
                  <div className="self-start">
                    <StatusChip status="학생 판단" />
                  </div>
                </div>
              </div>
            </FadeInView>

          </div>
        </section>

        {/* 맺음 — 제목 «이 기획에서 AI와 내가 한 일» */}
        <section className="w-full py-24 sm:py-32 lg:py-36 bg-[#F3EFE6]/60">
          <div className="max-w-[1240px] w-full mx-auto px-5 sm:px-8 lg:px-16 flex flex-col">
            
            <FadeInView delay={50} className="mb-10 sm:mb-12 text-center">
              <h2 className="font-heading text-[28px] sm:text-[36px] lg:text-[44px] text-[#111E2E]">
                이 기획에서 AI와 내가 한 일
              </h2>
            </FadeInView>

            {/* 상자 3개 «AI에게 맡긴 일» · «내가 의심하고 확인한 것» · «내가 정한 것» (세 번째만 글색 바탕 · 바탕색 글로 뒤집음) */}
            <FadeInView delay={100} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 sm:mb-24">
              
              {/* 상자 1 */}
              <div className="p-6 sm:p-8 bg-[#FAF7F0] rounded-[4px] border border-[#111E2E]/12 flex flex-col justify-start">
                <h3 className="font-heading text-[20px] text-[#111E2E] mb-4 pb-2 border-b border-[#111E2E]/10">
                  AI에게 맡긴 일
                </h3>
                <ul className="space-y-3 text-[15px] leading-relaxed text-[#536479]">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#287A4C] mt-2 shrink-0" aria-hidden="true"></span>
                    <span className="break-keep">편의점 샌드위치 시장 데이터 및 경쟁사 제품 스펙(가격·중량·원가율) 벤치마킹 분석</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#287A4C] mt-2 shrink-0" aria-hidden="true"></span>
                    <span className="break-keep">대학생 라이프스타일 맞춤형 신제품 콘셉트 아이디어 및 차별화 소스 기획안 도출</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#287A4C] mt-2 shrink-0" aria-hidden="true"></span>
                    <span className="break-keep">랜딩페이지 4:5 히어로 제품 연출 컷 및 세로 9:16 숏폼 광고 영상 생성 프롬프트 작성</span>
                  </li>
                </ul>
              </div>

              {/* 상자 2 */}
              <div className="p-6 sm:p-8 bg-[#FAF7F0] rounded-[4px] border border-[#111E2E]/12 flex flex-col justify-start">
                <h3 className="font-heading text-[20px] text-[#111E2E] mb-4 pb-2 border-b border-[#111E2E]/10">
                  내가 의심하고 확인한 것
                </h3>
                <ul className="space-y-3 text-[15px] leading-relaxed text-[#536479]">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#287A4C] mt-2 shrink-0" aria-hidden="true"></span>
                    <span className="break-keep">AI가 제안한 '통 닭가슴살 1,500원' 구성의 제조 원가 초과(적자 구조) 모순 확인 및 반려</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#287A4C] mt-2 shrink-0" aria-hidden="true"></span>
                    <span className="break-keep">편의점 신선 샌드위치의 냉장 유통 시 빵 퍼석함과 소스 누수 문제 검증</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#287A4C] mt-2 shrink-0" aria-hidden="true"></span>
                    <span className="break-keep">10~20분 공강 시간 강의실 취식 시 발생하는 음식 냄새, 포장지 바스락 소음, 취식 잔여 쓰레기 문제 확인</span>
                  </li>
                </ul>
              </div>

              {/* 상자 3 (세 번째만 글색 바탕 · 바탕색 글로 뒤집음) */}
              <div className="p-6 sm:p-8 bg-[#111E2E] text-[#FAF7F0] rounded-[4px] border border-[#111E2E] flex flex-col justify-start shadow-sm">
                <h3 className="font-heading text-[20px] text-[#FAF7F0] mb-4 pb-2 border-b border-[#FAF7F0]/15">
                  내가 정한 것
                </h3>
                <ul className="space-y-3 text-[15px] leading-relaxed text-[#FAF7F0]/90">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FAF7F0] mt-2 shrink-0" aria-hidden="true"></span>
                    <span className="break-keep">삼각김밥 가격(1,500원)과 직접 경쟁하는 '초가성비 단백질 또띠아 랩' 최종 피벗</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FAF7F0] mt-2 shrink-0" aria-hidden="true"></span>
                    <span className="break-keep">원가 방어와 영양을 고려한 3대 핵심 원료 확정 (밀 또띠아 + 구운 두부 스테이크 + 에상스팜 스마트팜 상추)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FAF7F0] mt-2 shrink-0" aria-hidden="true"></span>
                    <span className="break-keep">강의실 특화 '논-스멜(Non-Smell) 참깨두유마요 겔 소스' 및 '한 손 2단 이지필 푸시업 슬리브' 패키지 채택</span>
                  </li>
                </ul>
              </div>

            </FadeInView>

            {/* 맨 아래 작은 글 두 줄(가운데) */}
            <FadeInView delay={150} className="text-center flex flex-col gap-1.5 text-[13px] text-[#536479]">
              <p>을지대학교 EMF 학교기업 × 팡마니 · AI 활용 제품개발 실무</p>
              <p>수업용 가정 포함 · 팡마니의 공식 입장이 아닙니다</p>
            </FadeInView>

          </div>
        </section>
      </main>
    </div>
  );
}
