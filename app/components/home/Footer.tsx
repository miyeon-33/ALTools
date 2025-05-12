import Link from 'next/link';

export default function Footer() {
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
          <div className="flex justify-start items-center mt-[36px] border">
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
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
