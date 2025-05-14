'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <footer className="bg-[rgba(245,246,247,0.75)]">
      {/* 섹션1 */}
      <div className="mx-auto max-w-[1120px] flex justify-between items-start py-[48px] max-md:hidden">
        {/* 알툴즈 다운로드 */}
        <div className="whitespace-nowrap">
          <h4 className="pb-[4px] leading-none">
            <Link
              href="/product/ALTOOLS"
              className="inline-block text-[15px] font-bold text-gray-600 rounded-[4px] py-[8px] px-[10px] hover:bg-[rgba(139,149,161,.1)] transition-all duration-200"
            >
              알툴즈 다운로드
            </Link>
          </h4>
          <div className="flex justify-start items-start gap-[60px]">
            <ul>
              <li className="mt-[4px] leading-none">
                <Link
                  href="/product/ALZIP"
                  className="inline-block text-[15px] text-[#8b95a1] rounded-[4px] py-[8px] px-[10px] hover:bg-[rgba(139,149,161,.1)] transition-all duration-200"
                >
                  알집
                </Link>
              </li>
              <li className="mt-[4px] leading-none">
                <Link
                  href="/product/ALZIP"
                  className="inline-block text-[15px] text-[#8b95a1] rounded-[4px] py-[8px] px-[10px] hover:bg-[rgba(139,149,161,.1)] transition-all duration-200"
                >
                  알씨
                </Link>
              </li>
              <li className="mt-[4px] leading-none">
                <Link
                  href="/product/ALZIP"
                  className="inline-block text-[15px] text-[#8b95a1] rounded-[4px] py-[8px] px-[10px] hover:bg-[rgba(139,149,161,.1)] transition-all duration-200"
                >
                  알캡처
                </Link>
              </li>
              <li className="mt-[4px] leading-none">
                <Link
                  href="/product/ALZIP"
                  className="inline-block text-[15px] text-[#8b95a1] rounded-[4px] py-[8px] px-[10px] hover:bg-[rgba(139,149,161,.1)] transition-all duration-200"
                >
                  알PDF
                </Link>
              </li>
              <li className="mt-[4px] leading-none">
                <Link
                  href="/product/ALZIP"
                  className="inline-block text-[15px] text-[#8b95a1] rounded-[4px] py-[8px] px-[10px] hover:bg-[rgba(139,149,161,.1)] transition-all duration-200"
                >
                  알툴즈 모바일
                </Link>
              </li>
            </ul>
            <ul>
              <li className="mt-[4px] leading-none">
                <Link
                  href="/product/ALZIP"
                  className="inline-block text-[15px] text-[#8b95a1] rounded-[4px] py-[8px] px-[10px] hover:bg-[rgba(139,149,161,.1)] transition-all duration-200"
                >
                  알드라이브
                </Link>
              </li>
              <li className="mt-[4px] leading-none">
                <Link
                  href="/product/ALZIP"
                  className="inline-block text-[15px] text-[#8b95a1] rounded-[4px] py-[8px] px-[10px] hover:bg-[rgba(139,149,161,.1)] transition-all duration-200"
                >
                  알송
                </Link>
              </li>
              <li className="mt-[4px] leading-none">
                <Link
                  href="/product/ALZIP"
                  className="inline-block text-[15px] text-[#8b95a1] rounded-[4px] py-[8px] px-[10px] hover:bg-[rgba(139,149,161,.1)] transition-all duration-200"
                >
                  알약
                </Link>
              </li>
              <li className="mt-[4px] leading-none">
                <Link
                  href="/product/ALZIP"
                  className="inline-block text-[15px] text-[#8b95a1] rounded-[4px] py-[8px] px-[10px] hover:bg-[rgba(139,149,161,.1)] transition-all duration-200"
                >
                  앨런
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* 알툴즈 AD-ZERO */}
        <div className="whitespace-nowrap">
          <h4 className="pb-[4px] leading-none">
            <Link
              href="/adzero/intro"
              className="inline-block text-[15px] font-bold text-gray-600 rounded-[4px] py-[8px] px-[10px] hover:bg-[rgba(139,149,161,.1)] transition-all duration-200"
            >
              알툴즈 AD-ZERO
            </Link>
          </h4>
        </div>
        {/* 비즈니스 구매 */}
        <div className="whitespace-nowrap">
          <h4 className="pb-[4px] leading-none">
            <Link
              href="/adzero/intro"
              className="inline-block text-[15px] font-bold text-gray-600 rounded-[4px] py-[8px] px-[10px] hover:bg-[rgba(139,149,161,.1)] transition-all duration-200"
            >
              비즈니스 구매
            </Link>
          </h4>
        </div>
        {/* 고객센터 */}
        <div className="whitespace-nowrap">
          <h4 className="pb-[4px] leading-none">
            <Link
              href="/adzero/intro"
              className="inline-block text-[15px] font-bold text-gray-600 rounded-[4px] py-[8px] px-[10px] hover:bg-[rgba(139,149,161,.1)] transition-all duration-200"
            >
              고객센터
            </Link>
          </h4>
          <div className="flex justify-start items-start gap-[60px]">
            <ul>
              <li className="mt-[4px] leading-none">
                <Link
                  href="/product/ALZIP"
                  className="inline-block text-[15px] text-[#8b95a1] rounded-[4px] py-[8px] px-[10px] hover:bg-[rgba(139,149,161,.1)] transition-all duration-200"
                >
                  자주하는 질문
                </Link>
              </li>
              <li className="mt-[4px] leading-none">
                <Link
                  href="/product/ALZIP"
                  className="inline-block text-[15px] text-[#8b95a1] rounded-[4px] py-[8px] px-[10px] hover:bg-[rgba(139,149,161,.1)] transition-all duration-200"
                >
                  1:1 문의하기
                </Link>
              </li>
              <li className="mt-[4px] leading-none">
                <Link
                  href="/product/ALZIP"
                  className="inline-block text-[15px] text-[#8b95a1] rounded-[4px] py-[8px] px-[10px] hover:bg-[rgba(139,149,161,.1)] transition-all duration-200"
                >
                  공지사항
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* 마이페이지 */}
        <div className="whitespace-nowrap">
          <h4 className="pb-[4px] leading-none">
            <Link
              href="/adzero/intro"
              className="inline-block text-[15px] font-bold text-gray-600 rounded-[4px] py-[8px] px-[10px]"
            >
              마이페이지
            </Link>
          </h4>
          <div className="flex justify-start items-start gap-[60px]">
            <ul>
              <li className="mt-[4px] leading-none">
                <Link
                  href="/product/ALZIP"
                  className="inline-block text-[15px] text-[#8b95a1] rounded-[4px] py-[8px] px-[10px] hover:bg-[rgba(139,149,161,.1)] transition-all duration-200"
                >
                  구독 관리
                </Link>
              </li>
              <li className="mt-[4px] leading-none">
                <Link
                  href="/product/ALZIP"
                  className="inline-block text-[15px] text-[#8b95a1] rounded-[4px] py-[8px] px-[10px] hover:bg-[rgba(139,149,161,.1)] transition-all duration-200"
                >
                  포인트 내역
                </Link>
              </li>
              <li className="mt-[4px] leading-none">
                <Link
                  href="/product/ALZIP"
                  className="inline-block text-[15px] text-[#8b95a1] rounded-[4px] py-[8px] px-[10px] hover:bg-[rgba(139,149,161,.1)] transition-all duration-200"
                >
                  1:1 문의 내역
                </Link>
              </li>
              <li className="mt-[4px] leading-none">
                <Link
                  href="/product/ALZIP"
                  className="inline-block text-[15px] text-[#8b95a1] rounded-[4px] py-[8px] px-[10px] hover:bg-[rgba(139,149,161,.1)] transition-all duration-200"
                >
                  보유 혜택 내역
                </Link>
              </li>
              <li className="mt-[4px] leading-none">
                <Link
                  href="/product/ALZIP"
                  className="inline-block text-[15px] text-[#8b95a1] rounded-[4px] py-[8px] px-[10px] hover:bg-[rgba(139,149,161,.1)] transition-all duration-200"
                >
                  계정 설정
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* 섹션2 */}
      <div className="bg-[#fff]">
        <div className=" px-[20px] relative max-w-[1120px] mx-auto">
          <div className="mx-auto max-w-[1120px] pt-[24px] pb-[36px]">
            <ul className="flex justify-start items-center gap-[12px] flex-wrap -ml-[10px]">
              <li>
                <Link
                  href="/introduce"
                  className="inline-block text-[13px] font-semibold text-[#8b95a1] rounded-[4px] pt-[10px] px-[10px] pb-[9px] leading-none hover:bg-[rgba(139,149,161,.1)] transition-all duration-200"
                >
                  회사소개
                </Link>
              </li>
              <li>
                <Link
                  href="/introduce"
                  className="inline-block text-[13px] font-semibold text-[#8b95a1] rounded-[4px] pt-[10px] px-[10px] pb-[9px] leading-none hover:bg-[rgba(139,149,161,.1)] transition-all duration-200"
                >
                  이용약관
                </Link>
              </li>
              <li>
                <Link
                  href="/introduce"
                  className="inline-block text-[13px] font-bold text-[#4e5968] rounded-[4px] pt-[10px] px-[10px] pb-[9px] leading-none hover:bg-[rgba(139,149,161,.1)] transition-all duration-200"
                >
                  개인정보처리방침
                </Link>
              </li>
              <li>
                <Link
                  href="/introduce"
                  className="inline-block text-[13px] font-semibold text-[#8b95a1] rounded-[4px] pt-[10px] px-[10px] pb-[9px] leading-none hover:bg-[rgba(139,149,161,.1)] transition-all duration-200"
                >
                  소프트웨어 사용권 계약서
                </Link>
              </li>
              <li>
                <Link
                  href="/introduce"
                  className="inline-block text-[13px] font-semibold text-[#8b95a1] rounded-[4px] pt-[10px] px-[10px] pb-[9px] leading-none hover:bg-[rgba(139,149,161,.1)] transition-all duration-200"
                >
                  제휴문의
                </Link>
              </li>
              <li>
                <Link
                  href="/introduce"
                  className="inline-block text-[13px] font-semibold text-[#8b95a1] rounded-[4px] pt-[10px] px-[10px] pb-[9px] leading-none hover:bg-[rgba(139,149,161,.1)] transition-all duration-200"
                >
                  이벤트
                </Link>
              </li>
            </ul>
            <div className="flex justify-start items-center mt-[36px]">
              <Link
                href="https://estsoft.ai/"
                className="w-[64px] h-[18px] bg-[url('/images/LogoEstsoft.png')] bg-no-repeat bg-[100%_auto] hover:bg-[0px_-18px]"
              ></Link>
              <ul className="flex justify-center items-center gap-[16px] ml-[32px]">
                <li>
                  <Link
                    href="https://estsoft.ai/"
                    className="w-[28px] h-[28px] block bg-[url('/images/footer.png')] bg-no-repeat bg-[84px_auto] hover:bg-[0px_-28px]"
                  ></Link>
                </li>
                <li>
                  <Link
                    href="https://estsoft.ai/"
                    className="w-[28px] h-[28px] block bg-[url('/images/footer.png')] bg-no-repeat bg-[84px_auto] bg-[-28px_0px] hover:bg-[-28px_-28px]"
                  ></Link>
                </li>
                <li>
                  <Link
                    href="https://estsoft.ai/"
                    className="w-[28px] h-[28px] block bg-[url('/images/footer.png')] bg-no-repeat bg-[84px_auto] bg-[-56px_0px] hover:bg-[-56px_-28px]"
                  ></Link>
                </li>
              </ul>
            </div>
            <div className="mt-[16px]">
              <address className="text-[13px] text-[#8b95a1]">
                (주)이스트소프트 서울시 서초구 반포대로 3 이스트빌딩 (우)06711
              </address>
              <div className="flex justify-start items-center gap-[10px] flex-wrap text-left text-[13px] text-[#8b95a1]">
                <dl className="flex justify-start items-center">
                  <dt>대표이사 :</dt>
                  <dd className="pl-[4px]">정상원</dd>
                </dl>
                <dl className="flex justify-start items-center">
                  <dt>사업자등록번호 :</dt>
                  <dd className="pl-[4px]">229-81-03214</dd>
                </dl>
                <dl className="flex justify-start items-center">
                  <dt>통신판매업신고번호 :</dt>
                  <dd className="pl-[4px]">2011-서울서초-1962</dd>
                </dl>
                <dl className="flex justify-start items-center">
                  <dt>TEL.</dt>
                  <dd className="pl-[4px]">1544-8209</dd>
                </dl>
                <dl className="flex justify-start items-center">
                  <dt>FAX.</dt>
                  <dd className="pl-[4px]">02-882-1155</dd>
                </dl>
                <dl className="flex justify-start items-center">
                  <dt>E-mail.</dt>
                  <dd className="pl-[4px]">
                    <Link href="/" className="text-[#08f]">
                      altools@estsoft.com
                    </Link>
                  </dd>
                </dl>
              </div>
            </div>
            <div className="absolute top-[24px] right-0 flex items-baseline max-md:static max-md:pt-[16px] max-md:ml-[-10px]">
              <div className="relative">
                <strong
                  className="inline-block text-[13px] font-semibold text-[#8b95a1] rounded-[4px] py-[8px] px-[10px] after:content-[''] after:inline-block after:w-[12px] after:h-[12px] after:bg-[url('/images/icons/plus.svg')] after:bg-no-repeat after:ml-[5px] hover:bg-[rgba(139,149,161,.1)] transition-all duration-200 cursor-pointer"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Family Site
                </strong>
                {/* 클릭메뉴 */}
                {isOpen && (
                  <ul
                    className="absolute right-0 bottom-[30px] rounded-[6px] whitespace-nowrap bg-[hsla(0,0%,100%,0.98)] p-[12px] shadow-[0_0_1px_rgba(0,0,0,0.25),0_8px_20px_rgba(0,0,0,0.15)]
                  "
                  >
                    <li>
                      <Link
                        href="https://estsoft.ai/"
                        className="block text-[13px] font-semibold text-[#4e5968] rounded-[4px] p-[8px] hover:bg-[rgba(139,149,161,.1)] transition-all duration-200 leading-none"
                      >
                        이스트소프트
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://estsoft.ai/"
                        className="block text-[13px] font-semibold text-[#4e5968] rounded-[4px] p-[8px] hover:bg-[rgba(139,149,161,.1)] transition-all duration-200 leading-none"
                      >
                        이스트시큐리티
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://estsoft.ai/"
                        className="block text-[13px] font-semibold text-[#4e5968] rounded-[4px] p-[8px] hover:bg-[rgba(139,149,161,.1)] transition-all duration-200 leading-none"
                      >
                        이스트게임즈
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://estsoft.ai/"
                        className="block text-[13px] font-semibold text-[#4e5968] rounded-[4px] p-[8px] hover:bg-[rgba(139,149,161,.1)] transition-all duration-200 leading-none"
                      >
                        이스트에이드
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://estsoft.ai/"
                        className="block text-[13px] font-semibold text-[#4e5968] rounded-[4px] p-[8px] hover:bg-[rgba(139,149,161,.1)] transition-all duration-200 leading-none"
                      >
                        ROUNZ
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://estsoft.ai/"
                        className="block text-[13px] font-semibold text-[#4e5968] rounded-[4px] p-[8px] hover:bg-[rgba(139,149,161,.1)] transition-all duration-200 leading-none"
                      >
                        Exponential
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
